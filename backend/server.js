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
          connections: typeof wss === "undefined" ? 0 : wss.clients.size,
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

server.keepAliveTimeout = Number(process.env.HTTP_KEEP_ALIVE_TIMEOUT_MS || 65000)
server.headersTimeout = Number(process.env.HTTP_HEADERS_TIMEOUT_MS || 66000)
server.requestTimeout = Number(process.env.HTTP_REQUEST_TIMEOUT_MS || 30000)

const wss = new WebSocket.Server({
  server,
  perMessageDeflate: false, // Disable compression for better iOS compatibility
  maxPayload: Number(process.env.MAX_WS_PAYLOAD_BYTES || 256 * 1024),
})

// Separate queues for video and text chat
const videoUsers = new Map() // Changed to Map for better performance
const textUsers = new Map()
const usersBySocket = new Map()
const videoWaitingUsers = []
const textWaitingUsers = []

const MAX_MESSAGES_PER_WINDOW = Number(process.env.MAX_MESSAGES_PER_WINDOW || 80)
const MAX_ICE_CANDIDATES_PER_WINDOW = Number(process.env.MAX_ICE_CANDIDATES_PER_WINDOW || 500)
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 10000)
const MAX_TEXT_LENGTH = Number(process.env.MAX_TEXT_LENGTH || 2000)
const MAX_BUFFERED_BYTES = Number(process.env.MAX_BUFFERED_BYTES || 1024 * 1024)
const MAX_CONNECTIONS = Number(process.env.MAX_CONNECTIONS || 10000)
const RECENT_PARTNER_COOLDOWN_MS = Number(process.env.RECENT_PARTNER_COOLDOWN_MS || 15 * 1000)
const DEBUG_CONNECTIONS = process.env.DEBUG_CONNECTIONS === "true"

function debugLog(...args) {
  if (DEBUG_CONNECTIONS) console.log(...args)
}

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
  const user = usersBySocket.get(ws)
  return user && user.chatType === chatType ? user : null
}

function isRateLimited(ws, messageType) {
  if (messageType === "ping") return false

  const now = Date.now()
  if (messageType === "iceCandidate") {
    if (!ws.iceRateLimit || now - ws.iceRateLimit.startedAt >= RATE_LIMIT_WINDOW_MS) {
      ws.iceRateLimit = { startedAt: now, count: 1 }
      return false
    }

    ws.iceRateLimit.count += 1
    return ws.iceRateLimit.count > MAX_ICE_CANDIDATES_PER_WINDOW
  }

  if (!ws.rateLimit || now - ws.rateLimit.startedAt >= RATE_LIMIT_WINDOW_MS) {
    ws.rateLimit = { startedAt: now, count: 1 }
    return false
  }

  ws.rateLimit.count += 1
  return ws.rateLimit.count > MAX_MESSAGES_PER_WINDOW
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
      if (client.bufferedAmount > MAX_BUFFERED_BYTES) {
        console.warn(`Skipping send to slow client ${client.connectionId}; buffered=${client.bufferedAmount}`)
        return false
      }
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

function rememberRecentPartner(user, partnerUser) {
  if (!user || !partnerUser) return
  if (!user.recentPartners) user.recentPartners = new Map()
  user.recentPartners.set(partnerUser.connectionId, Date.now() + RECENT_PARTNER_COOLDOWN_MS)
}

function wasRecentlyMatched(user, candidate) {
  if (!user?.recentPartners || !candidate) return false
  const expiresAt = user.recentPartners.get(candidate.connectionId)
  if (!expiresAt) return false
  if (expiresAt <= Date.now()) {
    user.recentPartners.delete(candidate.connectionId)
    return false
  }
  return true
}

function recentPairBlockedUntil(user, candidate) {
  const userExpiry = user?.recentPartners?.get(candidate?.connectionId) || 0
  const candidateExpiry = candidate?.recentPartners?.get(user?.connectionId) || 0
  return Math.max(userExpiry, candidateExpiry)
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
      !wasRecentlyMatched(user, u) &&
      !wasRecentlyMatched(u, user) &&
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

    // If the only available sockets are recent partners, retry automatically
    // when the shortest cooldown expires. This prevents small user pools from
    // getting stuck forever while still giving a different user first priority.
    const blockedUntil = waitingList
      .filter((candidate) => candidate.ws !== client && !candidate.partner && candidate.ws.readyState === WebSocket.OPEN)
      .map((candidate) => recentPairBlockedUntil(user, candidate))
      .filter((expiresAt) => expiresAt > Date.now())
      .sort((a, b) => a - b)[0]

    if (blockedUntil) {
      scheduleRematch(client, chatType, Math.max(250, blockedUntil - Date.now() + 100))
    }
  }
}

function disconnectPartnership(ws, chatType, reason = "disconnect") {
  const user = getUserBySocket(ws, chatType)

  if (user && user.partner) {
    console.log(`💔 Disconnecting ${chatType} partnership for ${user.username}, reason: ${reason}`)
    const partnerSocket = user.partner

    // Find partner user object
    const partnerUser = getUserBySocket(partnerSocket, chatType)

    if (partnerUser) {
      if (reason === "skip") {
        rememberRecentPartner(user, partnerUser)
        rememberRecentPartner(partnerUser, user)
      }

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

  const user = usersBySocket.get(ws)
  if (user) {
    disconnectPartnership(ws, user.chatType, "connection_lost")
    removeUserFromWaiting(ws, user.chatType)
    getUsersList(user.chatType).delete(user.connectionId)
  }

  // Remove connection health tracking
  connectionHealth.delete(ws)
  usersBySocket.delete(ws)
}

wss.on("connection", (ws) => {
  if (wss.clients.size > MAX_CONNECTIONS) {
    ws.close(1013, "Server is busy. Please retry shortly.")
    return
  }

  ws.isAlive = true
  ws.chatType = null
  ws.rateLimit = { startedAt: Date.now(), count: 0 }
  ws.connectionId = Date.now() + Math.random() // Unique connection ID

  // Initialize connection health
  connectionHealth.set(ws, {
    lastSent: Date.now(),
    lastReceived: Date.now(),
    lastPong: Date.now(),
    failures: 0,
    missedHeartbeats: 0,
    connected: Date.now(),
  })

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

      if (isRateLimited(ws, data.type)) {
        sendToClient(ws, { type: "error", message: "Too many requests. Please slow down." })
        return
      }
      console.log(`📨 Received ${data.type} message from ${ws.connectionId}`)

      // Update connection health on any message
      const health = connectionHealth.get(ws) || { lastSent: 0, failures: 0 }
      health.lastReceived = Date.now()
      health.missedHeartbeats = 0
      ws.isAlive = true
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
            recentPartners: new Map(),
          }

          usersList.set(ws.connectionId, newUser)
          usersBySocket.set(ws, newUser)

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

          const skippingUser = getUserBySocket(ws, ws.chatType)

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

          const offerUser = getUserBySocket(ws, "video")
          if (!offerUser || !data.matchId || data.matchId !== offerUser.matchId || !data.offer?.type || !data.offer?.sdp) {
            handleError(ws, "Stale or invalid video offer")
            return
          }
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
              disconnectPartnership(ws, ws.chatType, "connection_lost")
            }
          } else {
            console.log("No valid partner to forward video offer")
            handleError(ws, "No partner available for video call")
          }
          break

        case "videoAnswer":
          if (ws.chatType !== "video") return

          const answerUser = getUserBySocket(ws, "video")
          if (!answerUser || !data.matchId || data.matchId !== answerUser.matchId || !data.answer?.type || !data.answer?.sdp) {
            handleError(ws, "Stale or invalid video answer")
            return
          }
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
              disconnectPartnership(ws, ws.chatType, "connection_lost")
            }
          }
          break

        case "iceCandidate":
          if (ws.chatType !== "video") return

          const candidateUser = getUserBySocket(ws, "video")
          if (!candidateUser || !data.matchId || data.matchId !== candidateUser.matchId || !data.candidate?.candidate) {
            return
          }
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

          const messageUser = getUserBySocket(ws, "text")
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

          if (messageContent.length > MAX_TEXT_LENGTH) {
            handleError(ws, `Message is too long. Maximum ${MAX_TEXT_LENGTH} characters.`)
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

          const typingUser = getUserBySocket(ws, "text")
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

          const disconnectingUser = getUserBySocket(ws, ws.chatType)

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
    health.missedHeartbeats = 0
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
    const health = connectionHealth.get(ws) || {
      lastSent: Date.now(),
      lastReceived: Date.now(),
      lastPong: Date.now(),
      failures: 0,
      missedHeartbeats: 0,
    }

    if (ws.isAlive === false) {
      health.missedHeartbeats = (health.missedHeartbeats || 0) + 1
    } else {
      health.missedHeartbeats = 0
    }
    connectionHealth.set(ws, health)

    if (health.missedHeartbeats >= 6 || health.failures > 3) {
      console.log(`💀 Terminating unhealthy connection ${ws.connectionId}`)
      cleanupConnection(ws)
      return ws.terminate()
    }

    // A matched user may legitimately be silent for a long time. WebSocket
    // ping/pong above is the source of truth; chat-message inactivity is not.
    if (false && health && Date.now() - health.lastReceived > 120000) {
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
