"use client"

import { useState, useEffect, useRef } from "react"
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaPhoneSlash,
  FaForward,
  FaGlobe,
  FaUserFriends,
  FaGamepad,
} from "react-icons/fa"

const VideoChat = ({ initialUsername = "" }) => {
  const [username, setUsername] = useState(initialUsername)
  const [ws, setWs] = useState(null)
  const [isMatching, setIsMatching] = useState(false)
  const [partnerName, setPartnerName] = useState(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionState, setConnectionState] = useState("new")
  const [localStreamReady, setLocalStreamReady] = useState(false)
  const [remoteStreamReady, setRemoteStreamReady] = useState(false)
  const [isOfferer, setIsOfferer] = useState(false)

  const localVideoRef = useRef(null)
  const partnerVideoRef = useRef(null)
  const peerConnection = useRef(null)
  const localStreamRef = useRef(null)
  const queuedCandidates = useRef([])
  const hasSetRemoteDescription = useRef(false)
  const wsRef = useRef(null)

  // Use the passed username if available
  useEffect(() => {
    if (initialUsername) {
      setUsername(initialUsername)
    }
  }, [initialUsername])

  // Updated sendMessage function with better error handling and stale closure fix
  const sendMessage = (message) => {
    const currentWs = wsRef.current || ws
    if (currentWs && currentWs.readyState === WebSocket.OPEN) {
      console.log("📤 Sending message:", message.type, message)
      try {
        currentWs.send(JSON.stringify(message))
        return true
      } catch (error) {
        console.error("❌ Failed to send message:", error)
        handlePartnerDisconnect("Connection error")
        return false
      }
    } else {
      console.error("❌ WebSocket not connected, state:", currentWs?.readyState)
      if (partnerName && message.type !== "ping") {
        handlePartnerDisconnect("Connection lost")
      }
      return false
    }
  }

  const connectWebSocket = () => {
    setIsConnecting(true)
    const socket = new WebSocket("wss://perfactchat.com:5002")
    wsRef.current = socket

    socket.onopen = () => {
      console.log("🔗 WebSocket connected")
      setWs(socket)
      wsRef.current = socket
      setIsConnecting(false)

      const sendUsername = () => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(
            JSON.stringify({
              type: "setUsername",
              username,
              chatType: "video",
            }),
          )
          setTimeout(() => {
            if (socket.readyState === WebSocket.OPEN) {
              socket.send(
                JSON.stringify({
                  type: "findPartner",
                }),
              )
            }
          }, 1000)
        } else {
          setTimeout(sendUsername, 100)
        }
      }
      sendUsername()
    }

    socket.onmessage = async (message) => {
      const data = JSON.parse(message.data)
      console.log("📨 WebSocket message received:", data.type, data)

      switch (data.type) {
        case "usernameSet":
          console.log("✅ Username set successfully")
          break
        case "matched":
          console.log("🤝 Matched with partner:", data.partnerName)
          setPartnerName(data.partnerName)
          setIsMatching(true)
          hasSetRemoteDescription.current = false
          queuedCandidates.current = []
          setRemoteStreamReady(false)
          if (peerConnection.current) {
            peerConnection.current.close()
            peerConnection.current = null
          }
          setTimeout(async () => {
            const currentSocket = wsRef.current
            if (currentSocket && currentSocket.readyState === WebSocket.OPEN) {
              await initializeVideoCall()
            } else {
              console.error("❌ WebSocket not ready for video call")
              handlePartnerDisconnect("Connection lost during video setup")
            }
          }, 500)
          break
        case "videoOffer":
          console.log("📞 Received video offer")
          setIsOfferer(false)
          await handleOffer(data.offer)
          break
        case "videoAnswer":
          console.log("✅ Received video answer")
          await handleAnswer(data.answer)
          break
        case "iceCandidate":
          console.log("🧊 Received ICE candidate")
          await handleIceCandidate(data.candidate)
          break
        case "partnerDisconnected":
          console.warn("👋 Partner disconnected")
          handlePartnerDisconnect("Your partner disconnected.")
          break
        case "skip":
          console.warn("⏭️ Partner skipped")
          handleSkipReceived()
          break
        case "waiting":
          console.log("⏳ Waiting for partner:", data.message)
          break
        case "error":
          console.error("❌ Server error:", data.message)
          handlePartnerDisconnect(data.message)
          break
        case "pong":
          console.log("🏓 Received pong from server")
          break
        default:
          console.error("❓ Unknown message type:", data.type)
      }
    }

    socket.onclose = (event) => {
      console.warn("🔌 WebSocket disconnected", { code: event.code, reason: event.reason })
      setWs(null)
      wsRef.current = null
      setIsMatching(false)
      setIsConnecting(false)
      if (partnerName) {
        handlePartnerDisconnect("Connection lost")
      }
    }

    socket.onerror = (error) => {
      console.error("❌ WebSocket error:", error)
      setIsConnecting(false)
      setWs(null)
      wsRef.current = null
    }
  }

  const handlePartnerDisconnect = (message) => {
    showToast(message)
    endCall()
  }

  const handleSkipReceived = () => {
    showToast("Partner skipped. Finding new partner...")
    if (peerConnection.current) {
      peerConnection.current.close()
      peerConnection.current = null
    }
    setLocalStreamReady(true)
    setRemoteStreamReady(false)
    setIsOfferer(false)
    hasSetRemoteDescription.current = false
    queuedCandidates.current = []
    if (partnerVideoRef.current) partnerVideoRef.current.srcObject = null
    setPartnerName(null)
    setConnectionState("new")
    setIsMatching(true)
    setTimeout(() => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        sendMessage({ type: "findPartner" })
      }
    }, 500)
  }

  const showToast = (message) => {
    const toast = document.createElement("div")
    toast.className = "toast-notification"
    toast.innerText = message
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.classList.add("show")
      setTimeout(() => {
        toast.classList.remove("show")
        setTimeout(() => {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast)
          }
        }, 300)
      }, 3000)
    }, 100)
  }

  const startChat = () => {
    if (!username.trim()) {
      showToast("Please enter a username.")
      return
    }
    connectWebSocket()
    setIsMatching(true)
  }

  const createPeerConnection = () => {
    console.log("🔧 Creating peer connection")
    const pc = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" },
        { urls: "stun:stun2.l.google.com:19302" },
        { urls: "stun:stun3.l.google.com:19302" },
        { urls: "stun:stun4.l.google.com:19302" },
      ],
      iceCandidatePoolSize: 10,
    })

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("🧊 Sending ICE candidate:", event.candidate.type)
        sendMessage({ type: "iceCandidate", candidate: event.candidate })
      } else {
        console.log("✅ ICE gathering completed")
      }
    }

    pc.oniceconnectionstatechange = () => {
      console.log("🔗 ICE connection state:", pc.iceConnectionState)
      setConnectionState(pc.iceConnectionState)
      if (pc.iceConnectionState === "failed") {
        console.log("❌ ICE connection failed, restarting...")
        pc.restartIce()
      } else if (pc.iceConnectionState === "connected") {
        console.log("✅ ICE connection established")
      }
    }

    pc.ontrack = (event) => {
      console.log("🎥 Remote track received:", {
        kind: event.track.kind,
        enabled: event.track.enabled,
        readyState: event.track.readyState,
        streamId: event.streams[0]?.id,
      })
      if (event.streams && event.streams[0]) {
        console.log("📺 Setting partner video stream")
        if (partnerVideoRef.current) {
          partnerVideoRef.current.srcObject = event.streams[0]
          setRemoteStreamReady(true)
          const stream = event.streams[0]
          const audioTracks = stream.getAudioTracks()
          const videoTracks = stream.getVideoTracks()
          console.log("🔊 Remote stream tracks:", {
            audio: audioTracks.length,
            video: videoTracks.length,
          })
          audioTracks.forEach((track, index) => {
            console.log(`🔊 Remote audio track ${index}:`, {
              enabled: track.enabled,
              muted: track.muted,
              readyState: track.readyState,
              label: track.label,
            })
          })
          partnerVideoRef.current.muted = false
          partnerVideoRef.current.volume = 1.0
          partnerVideoRef.current.controls = false
          const playPromise = partnerVideoRef.current.play()
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("✅ Partner video playing with audio")
                if (partnerVideoRef.current.muted) {
                  partnerVideoRef.current.muted = false
                  console.log("🔊 Unmuted partner video for audio")
                }
              })
              .catch((error) => {
                console.error("❌ Partner video play error:", error)
                partnerVideoRef.current.muted = true
                partnerVideoRef.current
                  .play()
                  .then(() => {
                    setTimeout(() => {
                      partnerVideoRef.current.muted = false
                      console.log("🔊 Unmuted partner video after autoplay")
                    }, 1000)
                  })
                  .catch((e) => console.error("❌ Still failed to play:", e))
              })
          }
        }
      }
    }

    pc.onconnectionstatechange = () => {
      console.log("🔗 Connection state:", pc.connectionState)
      if (pc.connectionState === "connected") {
        console.log("🎉 WebRTC connection fully established")
      }
    }

    pc.onsignalingstatechange = () => {
      console.log("📡 Signaling state:", pc.signalingState)
    }

    return pc
  }

  const getLocalStream = async () => {
    try {
      console.log("🎥 Requesting local media stream")
      const constraints = {
        video: {
          width: { min: 640, ideal: 1280, max: 1920 },
          height: { min: 480, ideal: 720, max: 1080 },
          frameRate: { ideal: 30, max: 60 },
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 44100,
          channelCount: 2,
          latency: 0.01,
        },
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      console.log("✅ Local stream obtained:", {
        videoTracks: stream.getVideoTracks().length,
        audioTracks: stream.getAudioTracks().length,
        id: stream.id,
      })

      stream.getTracks().forEach((track) => {
        console.log(`Track ${track.kind}:`, {
          enabled: track.enabled,
          muted: track.muted,
          readyState: track.readyState,
          label: track.label,
        })
        if (track.kind === "audio") {
          track.enabled = !isMuted
          console.log("🔊 Audio track enabled:", track.enabled)
        }
        if (track.kind === "video") {
          track.enabled = !isVideoOff
          console.log("📹 Video track enabled:", track.enabled)
        }
      })

      return stream
    } catch (error) {
      console.error("❌ Error getting local stream:", error)
      throw error
    }
  }

  const initializeVideoCall = async () => {
    try {
      console.log("🚀 Initializing video call")
      if (!localStreamRef.current) {
        const localStream = await getLocalStream()
        localStreamRef.current = localStream
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStream
          setLocalStreamReady(true)
        }
      } else {
        console.log("🔄 Reusing existing local stream")
        if (localVideoRef.current && !localVideoRef.current.srcObject) {
          localVideoRef.current.srcObject = localStreamRef.current
          setLocalStreamReady(true)
        }
      }

      peerConnection.current = createPeerConnection()
      localStreamRef.current.getTracks().forEach((track) => {
        console.log(`➕ Adding ${track.kind} track to peer connection`)
        peerConnection.current.addTrack(track, localStreamRef.current)
      })

      await new Promise((resolve) => setTimeout(resolve, 200))
      console.log("📞 Creating offer")
      setIsOfferer(true)
      const offer = await peerConnection.current.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      })
      console.log("✅ Offer created")
      await peerConnection.current.setLocalDescription(offer)
      console.log("✅ Local description set")
      const success = sendMessage({ type: "videoOffer", offer })
      if (!success) {
        console.error("❌ Failed to send video offer")
        handlePartnerDisconnect("Connection lost during video setup")
      }
    } catch (error) {
      console.error("❌ Error initializing video call:", error)
      handlePartnerDisconnect("Unable to access camera or microphone. Please check your permissions.")
    }
  }

  const handleOffer = async (offer) => {
    try {
      console.log("📞 Handling received offer")
      if (!localStreamRef.current) {
        try {
          const localStream = await getLocalStream()
          localStreamRef.current = localStream
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = localStream
            setLocalStreamReady(true)
          }
        } catch (error) {
          console.error("❌ Error getting local stream:", error)
          handlePartnerDisconnect("Unable to access camera or microphone. Please check your permissions.")
          return
        }
      }

      if (!peerConnection.current) {
        peerConnection.current = createPeerConnection()
        if (localStreamRef.current) {
          localStreamRef.current.getTracks().forEach((track) => {
            console.log(`➕ Adding ${track.kind} track to peer connection`)
            peerConnection.current.addTrack(track, localStreamRef.current)
          })
        } else {
          console.error("❌ No local stream available to add tracks")
          handlePartnerDisconnect("Video setup failed - no local stream")
          return
        }
      }

      console.log("📡 Setting remote description (offer)")
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer))
      hasSetRemoteDescription.current = true
      console.log("✅ Remote description set")
      await processQueuedCandidates()
      console.log("📞 Creating answer")
      const answer = await peerConnection.current.createAnswer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      })
      console.log("✅ Answer created")
      await peerConnection.current.setLocalDescription(answer)
      console.log("✅ Local description set (answer)")
      sendMessage({ type: "videoAnswer", answer })
    } catch (error) {
      console.error("❌ Error handling offer:", error)
      handlePartnerDisconnect("Error setting up video connection.")
    }
  }

  const handleAnswer = async (answer) => {
    try {
      console.log("✅ Handling received answer")
      if (peerConnection.current && peerConnection.current.signalingState !== "closed") {
        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer))
        hasSetRemoteDescription.current = true
        console.log("✅ Remote description set (answer)")
        await processQueuedCandidates()
      }
    } catch (error) {
      console.error("❌ Error handling answer:", error)
    }
  }

  const handleIceCandidate = async (candidate) => {
    try {
      if (
        peerConnection.current &&
        hasSetRemoteDescription.current &&
        peerConnection.current.signalingState !== "closed"
      ) {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate))
        console.log("✅ ICE candidate added")
      } else {
        console.log("⏳ Queueing ICE candidate (remote description not set)")
        queuedCandidates.current.push(candidate)
      }
    } catch (error) {
      console.error("❌ Error adding ICE candidate:", error)
    }
  }

  const processQueuedCandidates = async () => {
    if (queuedCandidates.current.length > 0) {
      console.log(`🔄 Processing ${queuedCandidates.current.length} queued ICE candidates`)
      for (const candidate of queuedCandidates.current) {
        try {
          if (peerConnection.current && peerConnection.current.remoteDescription) {
            await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate))
            console.log("✅ Queued ICE candidate added")
          }
        } catch (error) {
          console.error("❌ Error adding queued ICE candidate:", error)
        }
      }
      queuedCandidates.current = []
    }
  }

  const toggleMute = () => {
    if (localStreamRef.current) {
      const audioTracks = localStreamRef.current.getAudioTracks()
      const newMutedState = !isMuted
      audioTracks.forEach((track) => {
        track.enabled = !newMutedState
        console.log(`🔊 Audio track ${track.enabled ? "enabled" : "disabled"}`)
      })
      setIsMuted(newMutedState)
      console.log(`🔇 Audio ${newMutedState ? "muted" : "unmuted"}`)
      if (peerConnection.current) {
        const sender = peerConnection.current.getSenders().find((s) => s.track && s.track.kind === "audio")
        if (sender && sender.track) {
          sender.track.enabled = !newMutedState
          console.log(`🔊 Updated sender audio track: ${sender.track.enabled}`)
        }
      }
    }
  }

  const toggleVideo = () => {
    if (localStreamRef.current) {
      const videoTracks = localStreamRef.current.getVideoTracks()
      const newVideoOffState = !isVideoOff
      videoTracks.forEach((track) => {
        track.enabled = !newVideoOffState
      })
      setIsVideoOff(newVideoOffState)
      console.log(`📹 Video ${newVideoOffState ? "disabled" : "enabled"}`)
      if (peerConnection.current) {
        const sender = peerConnection.current.getSenders().find((s) => s.track && s.track.kind === "video")
        if (sender && sender.track) {
          sender.track.enabled = !newVideoOffState
          console.log(`📹 Updated sender video track: ${sender.track.enabled}`)
        }
      }
    }
  }

  const endCall = () => {
    console.log("☎️ Ending call")
    setLocalStreamReady(false)
    setRemoteStreamReady(false)
    setIsOfferer(false)
    hasSetRemoteDescription.current = false
    queuedCandidates.current = []
    if (peerConnection.current) {
      peerConnection.current.close()
      peerConnection.current = null
    }
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => {
        track.stop()
        console.log(`🛑 Stopped ${track.kind} track`)
      })
      localStreamRef.current = null
    }
    if (localVideoRef.current) localVideoRef.current.srcObject = null
    if (partnerVideoRef.current) partnerVideoRef.current.srcObject = null
    setPartnerName(null)
    setConnectionState("new")
    setIsMatching(false)
    setIsMuted(false)
    setIsVideoOff(false)
    if (wsRef.current) {
      wsRef.current.close()
      wsRef.current = null
    }
    if (ws) {
      ws.close()
      setWs(null)
    }
  }

  const skipCall = () => {
    console.log("⏭️ Skipping call")
    sendMessage({ type: "skip" })
    if (peerConnection.current) {
      peerConnection.current.close()
      peerConnection.current = null
    }
    setLocalStreamReady(false)
    setRemoteStreamReady(false)
    setIsOfferer(false)
    hasSetRemoteDescription.current = false
    queuedCandidates.current = []
    if (partnerVideoRef.current) partnerVideoRef.current.srcObject = null
    setPartnerName(null)
    setConnectionState("new")
    setIsMatching(true)
    setTimeout(() => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        sendMessage({ type: "findPartner" })
      }
    }, 1000)
  }

  // Heartbeat effect
  useEffect(() => {
    let heartbeat
    const currentWs = wsRef.current || ws
    if (currentWs && currentWs.readyState === WebSocket.OPEN) {
      heartbeat = setInterval(() => {
        const wsToCheck = wsRef.current || ws
        if (wsToCheck && wsToCheck.readyState === WebSocket.OPEN) {
          sendMessage({ type: "ping" })
        } else {
          console.log("⚠️ Clearing heartbeat - WebSocket not connected")
          clearInterval(heartbeat)
        }
      }, 25000)
    }
    return () => {
      if (heartbeat) {
        clearInterval(heartbeat)
      }
    }
  }, [ws])

  useEffect(() => {
    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (peerConnection.current) {
        peerConnection.current.close()
      }
      if (wsRef.current) {
        wsRef.current.close()
      }
      if (ws) {
        ws.close()
      }
    }
  }, [])

  return (
    <div className="video-chat-app">
      <div className="video-chat-container">
        {!isMatching ? (
          <div className="welcome-container">
            <div className="welcome-card">
              <h1 className="app-title">Random Video Chat</h1>
              <p className="app-description">Connect with random people around the world!</p>
              <div className="username-section">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="username-input"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      startChat()
                    }
                  }}
                />
                <button onClick={startChat} className="start-chat-button" disabled={isConnecting}>
                  {isConnecting ? <div className="loading-spinner"></div> : <>Start Chatting</>}
                </button>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">
                    <FaUserFriends />
                  </div>
                  <div className="feature-text">Meet new people</div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <FaGlobe />
                  </div>
                  <div className="feature-text">Global connections</div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <FaGamepad />
                  </div>
                  <div className="feature-text">Fun interactions</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="chat-section">
            {/* Split Screen Video Container */}
            <div className="split-screen-container">
              {/* Partner Video - Left Side */}
              <div className="video-panel partner-panel">
                <div className="video-overlay">
                  <div className="user-info">
                    {partnerName ? (
                      <>
                        <h3 className="user-name">{partnerName}</h3>
                        <div className="connection-status">
                          <span
                            className={`status-dot ${connectionState === "connected" ? "connected" : "connecting"}`}
                          ></span>
                          {connectionState === "connected" ? "Connected" : "Connecting..."}
                        </div>
                      </>
                    ) : (
                      <div className="finding-partner">
                        <div className="loading-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <p>Finding someone to chat with...</p>
                      </div>
                    )}
                  </div>
                </div>
                <video
                  ref={partnerVideoRef}
                  autoPlay
                  playsInline
                  className="video partner-video"
                  onLoadedMetadata={() => {
                    console.log("Partner video metadata loaded")
                    if (partnerVideoRef.current) {
                      partnerVideoRef.current.muted = false
                      partnerVideoRef.current.volume = 1.0
                      const playPromise = partnerVideoRef.current.play()
                      if (playPromise !== undefined) {
                        playPromise.catch((error) => {
                          console.error("❌ Partner video autoplay error:", error)
                        })
                      }
                      if (partnerVideoRef.current.srcObject) {
                        const stream = partnerVideoRef.current.srcObject
                        const audioTracks = stream.getAudioTracks()
                        console.log("🔊 Partner audio tracks on metadata:", audioTracks.length)
                        audioTracks.forEach((track) => {
                          track.enabled = true
                        })
                      }
                    }
                  }}
                  onPlay={() => {
                    console.log("▶️ Partner video started playing")
                    if (partnerVideoRef.current) {
                      partnerVideoRef.current.muted = false
                      partnerVideoRef.current.volume = 1.0
                      console.log("🔊 Partner video unmuted on play")
                    }
                  }}
                  onError={(e) => console.error("❌ Partner video error:", e)}
                />
              </div>

              {/* Divider Line */}
              <div className="split-divider"></div>

              {/* Your Video - Right Side */}
              <div className="video-panel local-panel">
                <div className="video-overlay">
                  <div className="user-info">
                    <h3 className="user-name">You ({username})</h3>
                    <div className="connection-status">
                      <span className={`status-dot ${localStreamReady ? "connected" : "connecting"}`}></span>
                      {localStreamReady ? "Ready" : "Setting up..."}
                    </div>
                  </div>
                </div>
                <video
                  ref={localVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className="video local-video"
                  onLoadedMetadata={() => console.log("📺 Local video metadata loaded")}
                  onPlay={() => console.log("▶️ Local video started playing")}
                />
                {isVideoOff && (
                  <div className="video-off-overlay">
                    <div className="video-off-content">
                      <FaVideoSlash className="video-off-icon" />
                      <p>Camera is off</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Control Bar */}
            <div className="control-bar">
              <button
                onClick={toggleMute}
                className={`control-btn ${isMuted ? "active" : ""}`}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
                <span className="control-label">Mic</span>
              </button>

              <button
                onClick={toggleVideo}
                className={`control-btn ${isVideoOff ? "active" : ""}`}
                title={isVideoOff ? "Turn video on" : "Turn video off"}
              >
                {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
                <span className="control-label">Video</span>
              </button>

              <button onClick={skipCall} className="control-btn skip-btn" title="Skip to next person">
                <FaForward />
                <span className="control-label">Skip</span>
              </button>

              <button onClick={endCall} className="control-btn end-btn" title="End call">
                <FaPhoneSlash />
                <span className="control-label">End</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .video-chat-app {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .video-chat-container {
          flex: 1;
          display: flex;
          padding: 20px;
        }

        /* Welcome Screen */
        .welcome-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .welcome-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          border-radius: 25px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          max-width: 500px;
          width: 100%;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .app-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #2d3748;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .app-description {
          font-size: 1.2rem;
          color: #4a5568;
          margin-bottom: 35px;
          font-weight: 500;
        }

        .username-section {
          margin-bottom: 35px;
        }

        .username-input {
          width: 100%;
          padding: 18px 25px;
          font-size: 1.1rem;
          border: 3px solid #667eea;
          border-radius: 15px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.9);
          color: #2d3748;
          font-weight: 500;
        }

        .username-input:focus {
          outline: none;
          border-color: #764ba2;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
        }

        .start-chat-button {
          width: 100%;
          padding: 18px 35px;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .start-chat-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.5);
        }

        .loading-spinner {
          width: 22px;
          height: 22px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .features {
          display: flex;
          justify-content: space-around;
          gap: 25px;
        }

        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .feature-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.3rem;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .feature-text {
          font-size: 0.95rem;
          color: #4a5568;
          font-weight: 600;
        }

        /* Chat Section */
        .chat-section {
          display: flex;
          width: 100%;
          position: relative;
        }

        /* Split Screen Container */
        .split-screen-container {
          flex: 1;
          display: flex;
          height: calc(100vh - 160px);
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          margin-bottom: 100px;
        }

        .video-panel {
          flex: 1;
          position: relative;
          background: #000;
          overflow: hidden;
        }

        .partner-panel {
          border-right: 2px solid rgba(255, 255, 255, 0.1);
        }

        .split-divider {
          width: 4px;
          background: linear-gradient(to bottom, #667eea, #764ba2);
          position: relative;
          z-index: 10;
        }

        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #000;
        }

        .local-video {
          transform: scaleX(-1);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
          padding: 20px;
          z-index: 5;
        }

        .user-info {
          color: white;
        }

        .user-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .connection-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fbbf24;
        }

        .status-dot.connected {
          background: #10b981;
        }

        .finding-partner {
          text-align: center;
          color: white;
        }

        .finding-partner p {
          margin-top: 15px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 15px;
        }

        .loading-dots span {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite both;
        }

        .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loading-dots span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .video-off-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .video-off-content {
          text-align: center;
          color: white;
        }

        .video-off-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          opacity: 0.8;
        }

        .video-off-content p {
          font-size: 1.2rem;
          font-weight: 600;
        }

        /* Control Bar */
        .control-bar {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 15px 25px;
          display: flex;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        .control-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 12px 16px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 70px;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .control-btn.active {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          border-color: #ef4444;
        }

        .control-btn svg {
          font-size: 1.3rem;
        }

        .control-label {
          font-size: 0.85rem;
          font-weight: 600;
        }

        .skip-btn:hover {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border-color: #f59e0b;
        }

        .end-btn:hover {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          border-color: #dc2626;
        }

        /* Toast Notifications */
        .toast-notification {
          position: fixed;
          top: 25px;
          right: 25px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 18px 25px;
          border-radius: 15px;
          font-weight: 600;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 10000;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .toast-notification.show {
          transform: translateX(0);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .video-chat-container {
            padding: 0; /* Full screen on mobile */
            flex-direction: column;
          }

          /* Mobile Header */
          .video-chat-app::before {
            content: '';
            display: block;
            height: 60px;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
          }

          .video-chat-app::after {
            content: 'Random Video Chat';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 1.2rem;
            z-index: 101;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .welcome-card {
            padding: 30px 25px;
            margin: 70px 15px 15px 15px; /* Add top margin for header */
          }

          .app-title {
            font-size: 2.2rem;
          }

          .features {
            flex-direction: column;
            gap: 20px;
          }

          .feature {
            flex-direction: row;
            justify-content: center;
            gap: 15px;
          }

          /* Mobile Split Screen - Vertical (Top-Bottom) 50-50% */
          .split-screen-container {
            flex-direction: column; /* Change to vertical */
            grid-template-rows: 1fr 1fr; /* 50% 50% height */
            height: calc(100vh - 140px); /* Account for header + controls */
            margin-top: 60px; /* Space for header */
            margin-bottom: 80px;
            border-radius: 0; /* No border radius on mobile for full width */
          }

          .partner-panel {
            border-right: none;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          }

          .split-divider {
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, #667eea, #764ba2);
          }

          .video-overlay {
            padding: 15px;
          }

          .user-name {
            font-size: 1.1rem;
          }

          .connection-status {
            font-size: 0.8rem;
          }

          .control-bar {
            bottom: 10px;
            left: 10px;
            right: 10px;
            transform: none;
            padding: 12px 20px;
            gap: 15px;
            justify-content: space-around;
          }

          .control-btn {
            min-width: 60px;
            padding: 10px 12px;
          }

          .control-btn svg {
            font-size: 1.1rem;
          }

          .control-label {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .split-screen-container {
            height: calc(100vh - 130px);
            margin-bottom: 70px;
          }

          .control-bar {
            padding: 10px 15px;
            gap: 12px;
          }

          .control-btn {
            min-width: 50px;
            padding: 8px 10px;
          }

          .control-label {
            font-size: 0.7rem;
          }
        }

        /* Landscape Mobile - Keep horizontal */
        @media (max-width: 768px) and (orientation: landscape) {
          .split-screen-container {
            flex-direction: row; /* Horizontal in landscape */
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            height: calc(100vh - 120px);
            margin-top: 60px;
            padding-bottom: 80px;
          }

          .partner-panel {
            border-right: 2px solid rgba(255, 255, 255, 0.1);
            border-bottom: none;
          }

          .split-divider {
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, #667eea, #764ba2);
          }

          .control-bar {
            bottom: 10px;
            padding: 10px 20px;
          }

          .control-btn {
            padding: 8px 12px;
            min-width: 50px;
          }

          .control-label {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default VideoChat
