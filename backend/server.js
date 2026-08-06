const WebSocket = require("ws")
const http = require("http")
const https = require("https")
const fs = require("fs")
const path = require("path")

function createRequestHandler() {
  const frontendDistDir = path.resolve(__dirname, "frontend/dist")
  const fallbackIndex = path.join(frontendDistDir, "index.html")

  

  return (req, res) => {
    const requestPath = (req.url || "/").split("?")[0]

    if (requestPath === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(
        JSON.stringify({
          ok: true,
          service: "chat-backend",
        }),
      )
      return
    }

    if (fs.existsSync(frontendDistDir) && fs.existsSync(fallbackIndex)) {
      const cleanedPath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "")
      const candidatePath = path.resolve(frontendDistDir, cleanedPath)

      if (candidatePath.startsWith(frontendDistDir) && fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
        const extension = path.extname(candidatePath)
        const contentTypes = {
          ".css": "text/css; charset=utf-8",
          ".html": "text/html; charset=utf-8",
          ".ico": "image/x-icon",
          ".jpeg": "image/jpeg",
          ".js": "text/javascript; charset=utf-8",
          ".jpg": "image/jpeg",
          ".json": "application/json; charset=utf-8",
          ".png": "image/png",
          ".svg": "image/svg+xml",
          ".txt": "text/plain; charset=utf-8",
          ".webp": "image/webp",
        }

        res.writeHead(200, { "Content-Type": contentTypes[extension] || "application/octet-stream" })
        fs.createReadStream(candidatePath).pipe(res)
        return
      }

      if (!path.extname(requestPath)) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        fs.createReadStream(fallbackIndex).pipe(res)
        return
      }

      res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" })
      res.end(
        JSON.stringify({
          ok: false,
          error: "Not found",
          path: requestPath,
        }),
      )
      return
    }

    res.writeHead(503, { "Content-Type": "application/json; charset=utf-8" })
    res.end(
      JSON.stringify({
        ok: false,
        error: "Frontend build not found",
        expectedPath: frontendDistDir,
      }),
    )
  }
}

function createBaseServer() {
  const keyPath = process.env.SSL_KEY_PATH
  const certPath = process.env.SSL_CERT_PATH
  const requestHandler = createRequestHandler()

  if (keyPath && certPath) {
    try {
      return {
        secure: true,
        server: https.createServer(
          {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
          },
          requestHandler,
        ),
      }
    } catch (error) {
      console.warn("Failed to load SSL certificates, falling back to HTTP:", error.message)
    }
  }

  return {
    secure: false,
    server: http.createServer(requestHandler),
  }
}

const { secure, server } = createBaseServer()

const wss = new WebSocket.Server({
  server,
  perMessageDeflate: false, // Disable compression for better iOS compatibility
  maxPayload: 1024 * 1024, // 1MB max payload
})

// Separate queues for video and text chat
const videoUsers = new Map() // Changed to Map for better performance
const textUsers = new Map()
const videoWaitingUsers = []
const textWaitingUsers = []

// Connection health tracking
const connectionHealth = new Map()
const pendingRematchTimers = new Map()

function getUsersList(chatType) {
  return chatType === "video" ? videoUsers : textUsers
}

function getWaitingList(chatType) {
  return chatType === "video" ? videoWaitingUsers : textWaitingUsers
}

function getUserBySocket(ws, chatType) {
  const usersList = getUsersList(chatType)
  return Array.from(usersList.values()).find((user) => user.ws === ws) || null
}

function cancelPendingRematch(ws) {
  const timer = pendingRematchTimers.get(ws)
  if (timer) {
    clearTimeout(timer)
    pendingRematchTimers.delete(ws)
  }
}

function scheduleRematch(ws, chatType, delay = 500) {
  if (!ws || !chatType) {
    return
  }

  cancelPendingRematch(ws)

  const timer = setTimeout(() => {
    pendingRematchTimers.delete(ws)

    if (ws.readyState !== WebSocket.OPEN) {
      return
    }

    const user = getUserBySocket(ws, chatType)
    if (!user || user.partner) {
      return
    }

    findPartner(ws, chatType)
  }, delay)

  pendingRematchTimers.set(ws, timer)
}

function sendToClient(client, message) {
  try {
    if (client && client.readyState === WebSocket.OPEN) {
      console.log(`📤 Sending ${message.type} to client`)

      // Add message ID for tracking
      const messageWithId = {
        ...message,
        messageId: Date.now() + Math.random(),
      }

      client.send(JSON.stringify(messageWithId))

      // Update connection health
      const health = connectionHealth.get(client) || { lastSent: 0, failures: 0 }
      health.lastSent = Date.now()
      health.failures = 0
      connectionHealth.set(client, health)

      return true
    } else {
      console.log("❌ Client is not open or already disconnected")
      markConnectionUnhealthy(client)
      return false
    }
  } catch (error) {
    console.error("❌ Failed to send message:", error.message)
    markConnectionUnhealthy(client)
    return false
  }
}

function markConnectionUnhealthy(client) {
  const health = connectionHealth.get(client) || { lastSent: 0, failures: 0 }
  health.failures++
  connectionHealth.set(client, health)

  // If too many failures, clean up the connection
  if (health.failures > 3) {
    cleanupConnection(client)
  }
}

function handleError(client, errorMessage) {
  console.error("❌ Error:", errorMessage)
  sendToClient(client, { type: "error", message: errorMessage })
}

function removeUserFromWaiting(ws, chatType) {
  const waitingList = getWaitingList(chatType)
  const index = waitingList.findIndex((user) => user.ws === ws)
  if (index !== -1) {
    waitingList.splice(index, 1)
    console.log(`🗑️ Removed ${chatType} user from waiting list. Remaining: ${waitingList.length}`)
  }
}

function createMatchId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function findPartner(client, chatType, isRetry = false) {
  if (!client || client.readyState !== WebSocket.OPEN) {
    return
  }

  cancelPendingRematch(client)

  const waitingList = getWaitingList(chatType)
  const user = getUserBySocket(client, chatType)
  if (!user) {
    console.log("❌ User not found in users list")
    return
  }

  // Check if user already has a partner
  if (user.partner && !isRetry) {
    console.log(`User ${user.username} already has a partner, skipping match`)
    return
  }

  console.log(`🔍 Finding ${chatType} partner for ${user.username}. Waiting users: ${waitingList.length}`)

  // Remove user from waiting list if they're there
  removeUserFromWaiting(client, chatType)

  // Find available partner from waiting users - improved filtering
  const availablePartners = waitingList.filter(
    (u) =>
      u.ws !== client &&
      !u.partner &&
      u.ws.readyState === WebSocket.OPEN &&
      (connectionHealth.get(u.ws)?.failures ?? 0) <= 2, // Avoid unhealthy connections
  )

  if (availablePartners.length > 0) {
    const partner = availablePartners[0] // Take first available partner
    const matchId = createMatchId()

    console.log(`🤝 Matching ${chatType} ${user.username} with ${partner.username}`)
    cancelPendingRematch(partner.ws)

    // Set partners
    user.partner = partner.ws
    partner.partner = user.ws
    user.partnerId = partner.username
    partner.partnerId = user.username
    user.matchId = matchId
    partner.matchId = matchId

    // Remove partner from waiting list
    removeUserFromWaiting(partner.ws, chatType)

    // Send match notifications with retry logic
    const userSuccess = sendToClient(client, {
      type: "matched",
      partnerName: partner.username,
      matchId,
      initiator: true,
    })

    const partnerSuccess = sendToClient(partner.ws, {
      type: "matched",
      partnerName: user.username,
      matchId,
      initiator: false,
    })

    if (!userSuccess || !partnerSuccess) {
      console.log("Failed to notify one or both users about match, retrying...")

      // Reset partnership
      user.partner = null
      partner.partner = null
      user.partnerId = null
      partner.partnerId = null
      user.matchId = null
      partner.matchId = null

      // Add back to waiting list with delay
      setTimeout(() => {
        if (userSuccess && !waitingList.find((u) => u.ws === client)) {
          waitingList.push(user)
        }
        if (partnerSuccess && !waitingList.find((u) => u.ws === partner.ws)) {
          waitingList.push(partner)
        }

        // Retry matching after a short delay
        scheduleRematch(client, chatType, 1000)
      }, 500)
    } else {
      // Successful match - send additional connection setup info
      setTimeout(() => {
        sendToClient(client, { type: "connectionReady", partnerId: partner.username, matchId })
        sendToClient(partner.ws, { type: "connectionReady", partnerId: user.username, matchId })
      }, 200)
    }
  } else {
    console.log(`No ${chatType} partners available. Adding ${user.username} to waiting list`)

    if (!waitingList.find((u) => u.ws === client)) {
      waitingList.push(user)
    }

    sendToClient(client, {
      type: "waiting",
      message: `Waiting for a ${chatType} partner... (${waitingList.length} users waiting)`,
      waitingCount: waitingList.length,
    })
  }
}

function disconnectPartnership(ws, chatType, reason = "disconnect") {
  const usersList = getUsersList(chatType)
  const user = getUserBySocket(ws, chatType)

  if (user && user.partner) {
    console.log(`💔 Disconnecting ${chatType} partnership for ${user.username}, reason: ${reason}`)
    const partnerSocket = user.partner

    // Find partner user object
    const partnerUser = Array.from(usersList.values()).find((u) => u.ws === partnerSocket)

    if (partnerUser) {
      // Notify partner with specific reason
      sendToClient(partnerSocket, {
        type: "partnerDisconnected",
        reason: reason,
        shouldFindNew: reason === "skip", // Auto-find new partner if skipped
      })

      // Reset partner's partnership
      partnerUser.partner = null
      partnerUser.partnerId = null
      partnerUser.matchId = null

      // If partner was skipped, automatically find them a new partner
      if (reason === "skip" && partnerSocket.readyState === WebSocket.OPEN) {
        console.log(`🔄 Auto-finding new partner for ${partnerUser.username} after skip`)
        scheduleRematch(partnerSocket, chatType, 1000)
      }

      console.log(`Reset partner for ${partnerUser.username}`)
    }

    // Reset user's partnership
    user.partner = null
    user.partnerId = null
    user.matchId = null
  }
}

function cleanupConnection(ws) {
  console.log("🧹 Cleaning up connection")
  cancelPendingRematch(ws)

  // Remove from both user lists
  for (const [key, user] of videoUsers.entries()) {
    if (user.ws === ws) {
      disconnectPartnership(ws, "video", "connection_lost")
      removeUserFromWaiting(ws, "video")
      videoUsers.delete(key)
      break
    }
  }

  for (const [key, user] of textUsers.entries()) {
    if (user.ws === ws) {
      disconnectPartnership(ws, "text", "connection_lost")
      removeUserFromWaiting(ws, "text")
      textUsers.delete(key)
      break
    }
  }

  // Remove connection health tracking
  connectionHealth.delete(ws)
}

wss.on("connection", (ws) => {
  ws.isAlive = true
  ws.chatType = null
  ws.connectionId = Date.now() + Math.random() // Unique connection ID

  // Initialize connection health
  connectionHealth.set(ws, { lastSent: Date.now(), failures: 0, connected: Date.now() })

  console.log(`New WebSocket connection established: ${ws.connectionId}`)

  // Send connection confirmation
  sendToClient(ws, {
    type: "connectionEstablished",
    connectionId: ws.connectionId,
    serverTime: Date.now(),
  })

  ws.on("message", async (message) => {
    try {
      const data = JSON.parse(message)
      console.log(`📨 Received ${data.type} message from ${ws.connectionId}`)

      // Update connection health on any message
      const health = connectionHealth.get(ws) || { lastSent: 0, failures: 0 }
      health.lastReceived = Date.now()
      connectionHealth.set(ws, health)

      switch (data.type) {
        case "setUsername":
          const username = data.username?.trim()
          const chatType = data.chatType || "video"

          if (!username) {
            handleError(ws, "Username is required")
            return
          }

          ws.chatType = chatType
          const usersList = getUsersList(chatType)

          // Check if this WebSocket already has a user
          const existingUser = Array.from(usersList.values()).find((u) => u.ws === ws)
          if (existingUser) {
            console.log(`User already exists for this connection: ${existingUser.username}`)
            sendToClient(ws, { type: "usernameSet", username: existingUser.username })
            return
          }

          // Generate unique username if taken
          let finalUsername = username
          let counter = 1
          while (Array.from(usersList.values()).find((u) => u.username === finalUsername)) {
            finalUsername = `${username}${counter}`
            counter++
          }

          const newUser = {
            ws,
            username: finalUsername,
            partner: null,
            partnerId: null,
            matchId: null,
            chatType,
            connectionId: ws.connectionId,
            joinedAt: Date.now(),
          }

          usersList.set(ws.connectionId, newUser)

          console.log(`✅ ${chatType} user ${finalUsername} connected. Total ${chatType} users: ${usersList.size}`)
          sendToClient(ws, {
            type: "usernameSet",
            username: finalUsername,
            userId: ws.connectionId,
          })
          break

        case "findPartner":
          if (!ws.chatType) {
            handleError(ws, "Chat type not set")
            return
          }
          scheduleRematch(ws, ws.chatType, 0)
          break

        case "skip":
        case "skipPartner":
          if (!ws.chatType) return

          const usersList2 = ws.chatType === "video" ? videoUsers : textUsers
          const skippingUser = Array.from(usersList2.values()).find((u) => u.ws === ws)

          if (skippingUser) {
            console.log(`⏭️ User ${skippingUser.username} is skipping partner`)
            cancelPendingRematch(ws)

            // Disconnect partnership with skip reason
            disconnectPartnership(ws, ws.chatType, "skip")

            // Find new partner for the skipping user immediately
            scheduleRematch(ws, ws.chatType, 500)
          }
          break

        // WebRTC signaling messages (video chat only) - Enhanced with better error handling
        case "videoOffer":
          if (ws.chatType !== "video") return

          const offerUser = Array.from(videoUsers.values()).find((u) => u.ws === ws)
          if (offerUser && offerUser.partner && offerUser.partner.readyState === WebSocket.OPEN) {
            console.log(`📞 Forwarding video offer from ${offerUser.username}`)
            const success = sendToClient(offerUser.partner, {
              type: "videoOffer",
              offer: data.offer,
              from: offerUser.username,
              offerId: data.offerId || Date.now(),
              matchId: offerUser.matchId || null,
            })

            if (!success) {
              console.log("Failed to forward video offer, partner may be disconnected")
              disconnectPartnership(ws, "video", "connection_lost")
            }
          } else {
            console.log("No valid partner to forward video offer")
            handleError(ws, "No partner available for video call")
          }
          break

        case "videoAnswer":
          if (ws.chatType !== "video") return

          const answerUser = Array.from(videoUsers.values()).find((u) => u.ws === ws)
          if (answerUser && answerUser.partner && answerUser.partner.readyState === WebSocket.OPEN) {
            console.log(`✅ Forwarding video answer from ${answerUser.username}`)
            const success = sendToClient(answerUser.partner, {
              type: "videoAnswer",
              answer: data.answer,
              from: answerUser.username,
              answerId: data.answerId || Date.now(),
              matchId: answerUser.matchId || null,
            })

            if (!success) {
              console.log("Failed to forward video answer")
              disconnectPartnership(ws, "video", "connection_lost")
            }
          }
          break

        case "iceCandidate":
          if (ws.chatType !== "video") return

          const candidateUser = Array.from(videoUsers.values()).find((u) => u.ws === ws)
          if (candidateUser && candidateUser.partner && candidateUser.partner.readyState === WebSocket.OPEN) {
            console.log(`🧊 Forwarding ICE candidate from ${candidateUser.username}`)
            const success = sendToClient(candidateUser.partner, {
              type: "iceCandidate",
              candidate: data.candidate,
              from: candidateUser.username,
              candidateId: data.candidateId || Date.now(),
              matchId: candidateUser.matchId || null,
            })

            if (!success) {
              console.log("Failed to forward ICE candidate")
              // Don't disconnect for ICE candidate failures as they're common
            }
          }
          break

        case "connectionTest":
          // New message type for testing connection quality
          sendToClient(ws, {
            type: "connectionTestResponse",
            timestamp: Date.now(),
            originalTimestamp: data.timestamp,
          })
          break

        case "ping":
          console.log("🏓 Received ping, sending pong")
          sendToClient(ws, { type: "pong", timestamp: Date.now() })
          break

        // Text chat messages
        case "textMessage":
          if (ws.chatType !== "text") return

          const messageUser = Array.from(textUsers.values()).find((u) => u.ws === ws)
          if (!messageUser) {
            handleError(ws, "User not found")
            return
          }

          if (!messageUser.partner || messageUser.partner.readyState !== WebSocket.OPEN) {
            handleError(ws, "No partner connected")
            return
          }

          const messageContent = data.content?.trim()
          if (!messageContent) {
            handleError(ws, "Message cannot be empty")
            return
          }

          console.log(`💬 Forwarding message from ${messageUser.username} to partner`)
          sendToClient(messageUser.partner, {
            type: "textMessage",
            content: messageContent,
            username: messageUser.username,
            timestamp: new Date().toISOString(),
          })
          break

        case "typing":
          if (ws.chatType !== "text") return

          const typingUser = Array.from(textUsers.values()).find((u) => u.ws === ws)
          if (typingUser && typingUser.partner && typingUser.partner.readyState === WebSocket.OPEN) {
            sendToClient(typingUser.partner, {
              type: "typing",
              isTyping: data.isTyping,
              from: typingUser.username,
            })
          }
          break

        case "disconnect":
          if (!ws.chatType) return

          const usersList3 = ws.chatType === "video" ? videoUsers : textUsers
          const disconnectingUser = Array.from(usersList3.values()).find((u) => u.ws === ws)

          if (disconnectingUser) {
            console.log(`👋 User ${disconnectingUser.username} manually disconnected`)
            disconnectPartnership(ws, ws.chatType, "manual_disconnect")
          }
          break

        default:
          console.log(`❓ Unknown message type: ${data.type}`)
      }
    } catch (error) {
      console.error("❌ Error processing message:", error)
      handleError(ws, "Invalid message format")
    }
  })

  ws.on("pong", () => {
    ws.isAlive = true
    const health = connectionHealth.get(ws) || { lastSent: 0, failures: 0 }
    health.lastPong = Date.now()
    connectionHealth.set(ws, health)
    console.log(`🏓 Received pong from client ${ws.connectionId}`)
  })

  ws.on("close", (code, reason) => {
    console.log(`🔌 WebSocket closed with code ${code}, reason: ${reason}, connectionId: ${ws.connectionId}`)
    cleanupConnection(ws)
  })

  ws.on("error", (error) => {
    console.error(`❌ WebSocket error for ${ws.connectionId}:`, error)
    cleanupConnection(ws)
  })
})

const heartbeat = setInterval(() => {
  const activeConnections = Array.from(wss.clients).filter((ws) => ws.readyState === WebSocket.OPEN)
  console.log(`💓 Heartbeat check - Active connections: ${activeConnections.length}`)

  wss.clients.forEach((ws) => {
    const health = connectionHealth.get(ws)

    if (ws.isAlive === false || (health && health.failures > 3)) {
      console.log(`💀 Terminating unhealthy connection ${ws.connectionId}`)
      cleanupConnection(ws)
      return ws.terminate()
    }

    if (health && Date.now() - health.lastReceived > 120000) {
      console.log(`⚠️ Stale connection detected ${ws.connectionId}`)
      cleanupConnection(ws)
      return ws.terminate()
    }

    ws.isAlive = false
    ws.ping()
  })
}, 25000)

// Enhanced cleanup function
function gracefulShutdown(signal) {
  console.log(`🛑 Received ${signal}, starting graceful shutdown...`)

  clearInterval(heartbeat)

  wss.clients.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      sendToClient(ws, { type: "serverShutdown", message: "Server is restarting, please reconnect" })
    }
  })

  setTimeout(() => {
    wss.clients.forEach((ws) => {
      ws.close(1001, "Server shutting down")
    })

    server.close(() => {
      console.log("✅ Server closed gracefully")
      process.exit(0)
    })
  }, 2000)
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"))
process.on("SIGINT", () => gracefulShutdown("SIGINT"))
process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error)
  gracefulShutdown("UNCAUGHT_EXCEPTION")
})

const PORT = process.env.PORT || 5002
server.listen(PORT, () => {
  console.log(`🚀 Secure WebSocket server running on port ${PORT}`)
  console.log(`📊 Server stats: Video users: ${videoUsers.size}, Text users: ${textUsers.size}`)
})

setInterval(() => {
  const healthyConnections = Array.from(connectionHealth.values()).filter((h) => h.failures < 2).length
  console.log(
    `📊 Server stats: Video users: ${videoUsers.size}, Text users: ${textUsers.size}, Video waiting: ${videoWaitingUsers.length}, Text waiting: ${textWaitingUsers.length}, Active connections: ${wss.clients.size}, Healthy connections: ${healthyConnections}`,
  )
}, 300000)
