/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react"
import {
  FaEllipsisH,
  FaFlag,
  FaForward,
  FaHome,
  FaMicrophone,
  FaMicrophoneSlash,
  FaPhoneSlash,
  FaShieldAlt,
  FaVideo,
  FaVideoSlash,
  FaWifi,
} from "react-icons/fa"
import chatLogo from "../assets/chat.png"
import { getRtcConfiguration, getWebSocketUrl } from "../config"
import "./VideoChat.css"

const MEDIA_CONSTRAINTS = {
  video: {
    width: { ideal: 1280, max: 1920 },
    height: { ideal: 720, max: 1080 },
    frameRate: { ideal: 24, max: 30 },
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
  },
}

function VideoChat({ initialUsername = "", onBack = () => {} }) {
  const [username, setUsername] = useState(initialUsername)
  const [ws, setWs] = useState(null)
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [partnerName, setPartnerName] = useState("")
  const [connectionState, setConnectionState] = useState("idle")
  const [localStreamReady, setLocalStreamReady] = useState(false)
  const [remoteStreamReady, setRemoteStreamReady] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const localVideoRef = useRef(null)
  const partnerVideoRef = useRef(null)
  const peerConnectionRef = useRef(null)
  const localStreamRef = useRef(null)
  const wsRef = useRef(null)
  const queuedCandidatesRef = useRef([])
  const hasRemoteDescriptionRef = useRef(false)
  const currentMatchIdRef = useRef(null)
  const shouldCreateOfferRef = useRef(false)
  const manualSocketCloseRef = useRef(false)
  const requestPartnerTimerRef = useRef(null)
  const toastTimerRef = useRef(null)
  const hasAutoStartedRef = useRef(false)

  useEffect(() => {
    if (initialUsername) {
      setUsername(initialUsername)
    }
  }, [initialUsername])

  const showToast = (message) => {
    if (!message) {
      return
    }

    setToastMessage(message)

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current)
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage("")
    }, 3200)
  }

  const clearPartnerSearchTimer = () => {
    if (requestPartnerTimerRef.current) {
      window.clearTimeout(requestPartnerTimerRef.current)
      requestPartnerTimerRef.current = null
    }
  }

  const attachStreamToVideo = (videoElement, stream, { muted = false } = {}) => {
    if (!videoElement) {
      return
    }

    if (videoElement.srcObject !== stream) {
      videoElement.srcObject = stream
    }

    videoElement.muted = muted
    videoElement.play().catch(() => {})
  }

  const attachLocalStream = (stream) => {
    attachStreamToVideo(localVideoRef.current, stream, { muted: true })
    setLocalStreamReady(true)
  }

  const stopLocalStream = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop())
      localStreamRef.current = null
    }

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null
    }

    setLocalStreamReady(false)
    setIsMuted(false)
    setIsVideoOff(false)
  }

  const clearRemoteStream = () => {
    if (partnerVideoRef.current) {
      partnerVideoRef.current.srcObject = null
    }

    setRemoteStreamReady(false)
  }

  const resetPeerSession = ({ preserveLocalStream = true } = {}) => {
    clearPartnerSearchTimer()
    queuedCandidatesRef.current = []
    hasRemoteDescriptionRef.current = false

    if (peerConnectionRef.current) {
      peerConnectionRef.current.onicecandidate = null
      peerConnectionRef.current.ontrack = null
      peerConnectionRef.current.onconnectionstatechange = null
      peerConnectionRef.current.oniceconnectionstatechange = null
      peerConnectionRef.current.close()
      peerConnectionRef.current = null
    }

    clearRemoteStream()

    if (!preserveLocalStream) {
      stopLocalStream()
    }
  }

  const resetMatchState = ({ preserveLocalStream = true } = {}) => {
    resetPeerSession({ preserveLocalStream })
    shouldCreateOfferRef.current = false
    currentMatchIdRef.current = null
    setPartnerName("")
  }

  const sendMessage = (message) => {
    const currentSocket = wsRef.current || ws
    if (!currentSocket || currentSocket.readyState !== WebSocket.OPEN) {
      return false
    }

    currentSocket.send(JSON.stringify(message))
    return true
  }

  const requestPartner = (delay = 0) => {
    clearPartnerSearchTimer()

    requestPartnerTimerRef.current = window.setTimeout(() => {
      if (!sendMessage({ type: "findPartner" })) {
        showToast("Unable to reach the server right now.")
      }
    }, delay)
  }

  const getLocalStream = async () => {
    if (localStreamRef.current) {
      attachLocalStream(localStreamRef.current)
      return localStreamRef.current
    }

    const stream = await navigator.mediaDevices.getUserMedia(MEDIA_CONSTRAINTS)
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !isMuted
    })
    stream.getVideoTracks().forEach((track) => {
      track.enabled = !isVideoOff
    })

    localStreamRef.current = stream
    attachLocalStream(stream)
    return stream
  }

  const moveToWaitingState = (message, serverWillRematch = false) => {
    const hadActiveMatch = Boolean(currentMatchIdRef.current)

    if (message) {
      showToast(message)
    }

    resetMatchState({ preserveLocalStream: true })
    setIsSearching(true)
    setConnectionState("searching")

    if (!serverWillRematch && hadActiveMatch && wsRef.current?.readyState === WebSocket.OPEN) {
      sendMessage({ type: "skip" })
      return
    }

    if (!serverWillRematch && wsRef.current?.readyState === WebSocket.OPEN) {
      requestPartner(350)
    }
  }

  const handleUnexpectedSocketClose = () => {
    resetMatchState({ preserveLocalStream: false })
    setWs(null)
    setIsConnecting(false)
    setIsSearching(false)
    setIsSessionActive(false)
    setConnectionState("idle")
    showToast("Connection lost. Please start the video chat again.")
  }

  const createPeerConnection = (matchId) => {
    const peerConnection = new RTCPeerConnection(getRtcConfiguration())

    peerConnection.onicecandidate = (event) => {
      if (!event.candidate || currentMatchIdRef.current !== matchId) {
        return
      }

      sendMessage({
        type: "iceCandidate",
        candidate: event.candidate,
        matchId,
      })
    }

    peerConnection.oniceconnectionstatechange = () => {
      if (currentMatchIdRef.current !== matchId) {
        return
      }

      if (peerConnection.iceConnectionState === "checking") {
        setConnectionState("connecting")
      }

      if (peerConnection.iceConnectionState === "connected" || peerConnection.iceConnectionState === "completed") {
        setConnectionState("connected")
      }

      if (peerConnection.iceConnectionState === "failed") {
        if (typeof peerConnection.restartIce === "function") {
          peerConnection.restartIce()
        }
        moveToWaitingState("The video connection failed. Finding someone new...")
      }
    }

    peerConnection.onconnectionstatechange = () => {
      if (currentMatchIdRef.current !== matchId) {
        return
      }

      if (peerConnection.connectionState === "connected") {
        setConnectionState("connected")
      }

      if (peerConnection.connectionState === "connecting") {
        setConnectionState("connecting")
      }

      if (peerConnection.connectionState === "failed") {
        moveToWaitingState("The call dropped. Finding someone new...")
      }
    }

    peerConnection.ontrack = (event) => {
      const remoteStream = event.streams[0]
      if (!remoteStream || !partnerVideoRef.current) {
        return
      }

      if (partnerVideoRef.current.srcObject !== remoteStream) {
        partnerVideoRef.current.srcObject = remoteStream
      }

      partnerVideoRef.current.muted = false
      partnerVideoRef.current.volume = 1
      partnerVideoRef.current.play().catch(() => {})
      setRemoteStreamReady(true)
      setConnectionState("connected")
    }

    return peerConnection
  }

  const processQueuedCandidates = async (matchId) => {
    if (currentMatchIdRef.current !== matchId || queuedCandidatesRef.current.length === 0) {
      return
    }

    const pendingCandidates = [...queuedCandidatesRef.current]
    queuedCandidatesRef.current = []

    for (const candidate of pendingCandidates) {
      if (!peerConnectionRef.current || !peerConnectionRef.current.remoteDescription) {
        queuedCandidatesRef.current.push(candidate)
        continue
      }

      try {
        await peerConnectionRef.current.addIceCandidate(candidate)
      } catch {
        continue
      }
    }
  }

  const initializeVideoSession = async (matchId, shouldCreateOffer) => {
    const stream = await getLocalStream()

    if (currentMatchIdRef.current !== matchId) {
      return
    }

    let peerConnection = peerConnectionRef.current

    if (!peerConnection) {
      peerConnection = createPeerConnection(matchId)
      peerConnectionRef.current = peerConnection

      stream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, stream)
      })
    }

    if (!shouldCreateOffer || peerConnection.signalingState !== "stable") {
      return
    }

    const offer = await peerConnection.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    })

    if (currentMatchIdRef.current !== matchId || peerConnection.signalingState === "closed") {
      return
    }

    await peerConnection.setLocalDescription(offer)
    setConnectionState("connecting")

    if (!sendMessage({ type: "videoOffer", offer, matchId })) {
      moveToWaitingState("Could not start the call. Trying a new match...")
    }
  }

  const handleOffer = async (offer, matchId) => {
    if (!matchId || currentMatchIdRef.current !== matchId) {
      return
    }

    const stream = await getLocalStream()

    if (currentMatchIdRef.current !== matchId) {
      return
    }

    let peerConnection = peerConnectionRef.current
    if (!peerConnection) {
      peerConnection = createPeerConnection(matchId)
      peerConnectionRef.current = peerConnection
      stream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, stream)
      })
    }

    if (shouldCreateOfferRef.current && peerConnection.signalingState !== "stable") {
      return
    }

    await peerConnection.setRemoteDescription(offer)
    hasRemoteDescriptionRef.current = true
    await processQueuedCandidates(matchId)

    const answer = await peerConnection.createAnswer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    })

    await peerConnection.setLocalDescription(answer)
    setConnectionState("connecting")
    sendMessage({ type: "videoAnswer", answer, matchId })
  }

  const handleAnswer = async (answer, matchId) => {
    if (!matchId || currentMatchIdRef.current !== matchId) {
      return
    }

    if (!peerConnectionRef.current || peerConnectionRef.current.signalingState === "closed") {
      return
    }

    await peerConnectionRef.current.setRemoteDescription(answer)
    hasRemoteDescriptionRef.current = true
    await processQueuedCandidates(matchId)
  }

  const handleIceCandidate = async (candidate, matchId) => {
    if (!matchId || currentMatchIdRef.current !== matchId || !candidate) {
      return
    }

    if (
      peerConnectionRef.current &&
      hasRemoteDescriptionRef.current &&
      peerConnectionRef.current.signalingState !== "closed"
    ) {
      await peerConnectionRef.current.addIceCandidate(candidate)
      return
    }

    queuedCandidatesRef.current.push(candidate)
  }

  const ensureUsername = () => {
    const trimmed = username.trim()
    if (trimmed) {
      return trimmed
    }

    const generatedUsername = `Guest${Math.floor(1000 + Math.random() * 9000)}`
    setUsername(generatedUsername)
    return generatedUsername
  }

  const connectWebSocket = (activeUsername) => {
    manualSocketCloseRef.current = false

    const socket = new WebSocket(getWebSocketUrl())
    wsRef.current = socket

    socket.onopen = () => {
      setWs(socket)
      setIsConnecting(false)
      setConnectionState("searching")
      socket.send(
        JSON.stringify({
          type: "setUsername",
          username: activeUsername,
          chatType: "video",
        }),
      )
    }

    socket.onmessage = async (event) => {
      try {
        const data = JSON.parse(event.data)

        switch (data.type) {
          case "usernameSet":
            if (data.username) {
              setUsername(data.username)
            }
            setIsSearching(true)
            requestPartner()
            break

          case "waiting":
            setIsSearching(true)
            setConnectionState("searching")
            break

          case "matched":
            resetPeerSession({ preserveLocalStream: true })
            currentMatchIdRef.current = data.matchId || null
            shouldCreateOfferRef.current = Boolean(data.initiator)
            setPartnerName(data.partnerName || "Stranger")
            setIsSearching(false)
            setConnectionState(data.initiator ? "negotiating" : "awaiting-offer")

            try {
              await initializeVideoSession(data.matchId, Boolean(data.initiator))
            } catch {
              showToast("Allow camera and microphone access to start video chat.")
              endCall()
            }
            break

          case "videoOffer":
            await handleOffer(data.offer, data.matchId)
            break

          case "videoAnswer":
            await handleAnswer(data.answer, data.matchId)
            break

          case "iceCandidate":
            await handleIceCandidate(data.candidate, data.matchId)
            break

          case "partnerDisconnected":
            moveToWaitingState(
              data.reason === "skip" ? "Your partner skipped. Finding someone new..." : "Your partner left the call.",
              Boolean(data.shouldFindNew),
            )
            break

          case "error":
            showToast(data.message || "Something went wrong.")
            if (!currentMatchIdRef.current && wsRef.current?.readyState === WebSocket.OPEN) {
              requestPartner(400)
            }
            break

          case "connectionReady":
          case "connectionEstablished":
          case "pong":
          default:
            break
        }
      } catch {
        showToast("We hit a connection issue. Trying again...")
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          requestPartner(400)
        }
      }
    }

    socket.onclose = () => {
      setWs(null)
      wsRef.current = null

      if (manualSocketCloseRef.current) {
        manualSocketCloseRef.current = false
        return
      }

      handleUnexpectedSocketClose()
    }

    socket.onerror = () => {
      setIsConnecting(false)
    }
  }

  const startChat = () => {
    const activeUsername = ensureUsername()

    resetMatchState({ preserveLocalStream: false })
    setIsSessionActive(true)
    setIsConnecting(true)
    setIsSearching(true)
    setConnectionState("connecting")
    connectWebSocket(activeUsername)
  }

  const closeSocketConnection = () => {
    clearPartnerSearchTimer()

    const currentSocket = wsRef.current
    if (currentSocket) {
      manualSocketCloseRef.current = true
      if (currentSocket.readyState === WebSocket.OPEN || currentSocket.readyState === WebSocket.CONNECTING) {
        currentSocket.close(1000, "Client reset")
      }
    }

    wsRef.current = null
    setWs(null)
  }

  const endCall = () => {
    sendMessage({ type: "disconnect" })
    closeSocketConnection()
    resetMatchState({ preserveLocalStream: false })
    setIsSessionActive(false)
    setIsConnecting(false)
    setIsSearching(false)
    setConnectionState("idle")
  }

  const goBackHome = () => {
    endCall()
    onBack()
  }

  const skipCall = () => {
    sendMessage({ type: "skip" })
    moveToWaitingState("Finding someone new...", true)
  }

  const toggleMute = () => {
    if (!localStreamRef.current) {
      return
    }

    const nextMutedState = !isMuted
    localStreamRef.current.getAudioTracks().forEach((track) => {
      track.enabled = !nextMutedState
    })
    setIsMuted(nextMutedState)
  }

  const toggleVideo = () => {
    if (!localStreamRef.current) {
      return
    }

    const nextVideoOffState = !isVideoOff
    localStreamRef.current.getVideoTracks().forEach((track) => {
      track.enabled = !nextVideoOffState
    })
    setIsVideoOff(nextVideoOffState)
  }

  useEffect(() => {
    let heartbeatId

    if (ws && ws.readyState === WebSocket.OPEN) {
      heartbeatId = window.setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "ping" }))
        }
      }, 25000)
    }

    return () => {
      if (heartbeatId) {
        window.clearInterval(heartbeatId)
      }
    }
  }, [ws])

  useEffect(() => {
    if (hasAutoStartedRef.current) {
      return
    }

    hasAutoStartedRef.current = true
    startChat()
  }, [])

  useEffect(() => {
    return () => {
      clearPartnerSearchTimer()

      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current)
      }

      if (peerConnectionRef.current) {
        peerConnectionRef.current.close()
      }

      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop())
      }

      if (wsRef.current) {
        wsRef.current.close()
      }
    }
  }, [])

  const isConnected = remoteStreamReady || connectionState === "connected"
  const stageStateLabel = isConnected ? "Connected" : isSearching ? "Searching" : partnerName ? "Joining" : "Ready"
  const safetyStatusLabel = isConnected ? "Protected" : "Protected"
  const networkStatusLabel = ws ? "Good" : "Offline"
  const partnerStatusLine = isConnected ? "Connected" : isSearching ? "Connecting..." : isConnecting ? "Joining..." : "Ready"

  return (
    <div className="video-chat-app">
      <div className="video-chat-ambient video-chat-ambient-left"></div>
      <div className="video-chat-ambient video-chat-ambient-right"></div>

      <div className="video-chat-container">
        <header className="video-topbar">
          <div className="video-brand">
            <img src={chatLogo} alt="PerfectChat logo" className="video-brand-logo" />
            <div className="video-brand-copy">
              <span className="video-brand-title">PerfectChat</span>
              <span className="video-brand-subtitle">Random video chat</span>
            </div>
          </div>

          <div className="video-topbar-actions">
            <div className="video-topbar-chip status">
              <span className={`video-mini-dot ${isConnected ? "connected" : "searching"}`}></span>
              <span>{stageStateLabel}</span>
            </div>
            <button className="video-topbar-chip report" type="button" aria-label="Report partner">
              <FaFlag />
              <span>Report</span>
            </button>
            <div className="video-topbar-chip signal">
              <FaWifi />
              <span>{networkStatusLabel}</span>
            </div>
            <button className="video-home-button" onClick={goBackHome} type="button" aria-label="Go home">
              <FaHome />
              <span>Home</span>
            </button>
            <button className="video-menu-button" type="button" aria-label="More options">
              <FaEllipsisH />
            </button>
          </div>
        </header>

        <main className={`video-room-shell ${isSessionActive ? "session-live" : "session-starting"}`}>
          <section className="video-status-strip fixed-strip" aria-label="Call status">
            <div className="video-status-pill compact safe">
              <FaShieldAlt />
              <span>{safetyStatusLabel}</span>
            </div>
            <div className="video-status-pill compact network">
              <FaWifi />
              <span>{networkStatusLabel}</span>
            </div>
            <div className={`video-status-pill compact state ${isConnected ? "connected" : "searching"}`}>
              <span className={`video-mini-dot ${isConnected ? "connected" : "searching"}`}></span>
              <span>{partnerStatusLine}</span>
            </div>
          </section>

          <section className="video-stage-showcase">
            <article className="video-stage-card video-stage-card-partner">
              <div className="video-stage-topbar">
                <div className="video-partner-badge">
                  <span className="video-live-orb"></span>
                  <span>Partner</span>
                </div>

                <div className={`video-floating-state ${isConnected ? "connected" : "searching"}`}>
                  <span className={`video-mini-dot ${isConnected ? "connected" : "searching"}`}></span>
                  <span>{stageStateLabel}</span>
                </div>
              </div>

              {!remoteStreamReady && (
                <div className="video-placeholder">
                  <div className="video-connecting-ring" aria-hidden="true"></div>
                  <p>{partnerName ? "Connecting..." : "Finding someone..."}</p>
                </div>
              )}

              <video ref={partnerVideoRef} autoPlay playsInline className={`video-element ${remoteStreamReady ? "ready" : ""}`} />

              <div className="video-search-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </article>

            <article className="video-stage-card video-stage-card-self">
              <div className="video-stage-topbar">
                <div className="video-partner-badge self-card-label">
                  <span className="video-live-orb self"></span>
                  <span>You</span>
                </div>
              </div>

              {!localStreamReady && (
                <div className="video-placeholder subtle preview">
                  <div className="video-connecting-ring" aria-hidden="true"></div>
                  <p>Connecting...</p>
                </div>
              )}

              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                muted
                className={`video-element mirror ${localStreamReady ? "ready" : ""}`}
              />

              {isVideoOff && (
                <div className="video-off-overlay">
                  <FaVideoSlash />
                  <p>Camera off</p>
                </div>
              )}
            </article>
          </section>

          <section className="video-bottom-dock">
            <div className="video-control-dock">
              <button
                onClick={toggleMute}
                className={`video-control-button soft ${isMuted ? "danger" : ""}`}
                disabled={!localStreamReady}
                type="button"
              >
                {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
                <span>{isMuted ? "Unmute" : "Mute"}</span>
              </button>

              <button
                onClick={toggleVideo}
                className={`video-control-button soft ${isVideoOff ? "danger" : ""}`}
                disabled={!localStreamReady}
                type="button"
              >
                {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
                <span>Cam</span>
              </button>

              <button onClick={skipCall} className="video-control-button accent" disabled={isSearching} type="button">
                <FaForward />
                <span>Skip</span>
              </button>

              <button onClick={endCall} className="video-control-button end" type="button">
                <FaPhoneSlash />
                <span>End</span>
              </button>
            </div>
          </section>
        </main>
      </div>

      <div className={`video-toast ${toastMessage ? "visible" : ""}`}>{toastMessage}</div>
    </div>
  )
}

export default VideoChat
