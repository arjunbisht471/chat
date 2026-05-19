import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react"
import {
  FaArrowLeft,
  FaBars,
  FaBolt,
  FaChevronDown,
  FaChevronUp,
  FaComments,
  FaCommentDots,
  FaClock,
  FaHeart,
  FaHome,
  FaLock,
  FaMusic,
  FaMoon,
  FaPaperPlane,
  FaPaperclip,
  FaRandom,
  FaRocket,
  FaShieldAlt,
  FaSmile,
  FaSun,
  FaVideo,
} from "react-icons/fa"
import chatLogo from "./assets/chat.png"
import { getWebSocketUrl } from "./config"
import "./App.css"

void React

const VideoChat = lazy(() => import("./Components/VideoChat"))

const BLOGS = [
  {
    id: "confidence",
    category: "Conversation Confidence",
    readTime: "4 min read",
    title: "Why anonymous chat makes starting conversations easier",
    excerpt:
      "PerfectChat removes the pressure of profiles and expectations, making it easier to talk naturally from the very first message.",
    body: [
      "Anonymous chat works best when it feels easy to enter and easy to leave. You are not trying to impress a profile or manage a long history. You are simply talking to someone new in the moment.",
      "That makes PerfectChat a natural space for building confidence. You learn how to open a conversation, keep it moving, and recover when a chat feels awkward. Those are real communication skills, even in a casual setting.",
      "The strongest experience comes from simple actions, fast replies, and a layout that keeps your attention on the conversation instead of unnecessary distractions.",
    ],
  },
  {
    id: "safety",
    category: "Safer Conversations",
    readTime: "3 min read",
    title: "What makes anonymous chat feel safe and comfortable",
    excerpt:
      "People stay longer when chat feels clear, calm, and easy to control from the first second to the last.",
    body: [
      "People feel more comfortable in anonymous chat when the product keeps them in control. That means clear connection status, a visible skip action, and no confusing steps between opening the app and starting a conversation.",
      "A safe experience is not only about moderation. It is also about clarity. Users should always know whether they are waiting, connected, typing, or disconnected.",
      "Small details matter here: smooth message delivery, helpful system feedback, and simple actions that never make the interface feel stressful.",
    ],
  },
  {
    id: "matching",
    category: "Instant Matching",
    readTime: "5 min read",
    title: "Why fast matching matters more than flashy extras",
    excerpt:
      "In random chat, momentum matters. The sooner people connect, the more likely they are to stay engaged.",
    body: [
      "Long waits break the mood of random chat. When matching is quick, the product feels alive and people are more willing to start the next conversation with energy.",
      "PerfectChat works best when the transition from one chat to another feels immediate. A clear status, a dependable next action, and minimal friction all help keep that rhythm intact.",
      "Fast matching also supports healthier behavior. If a conversation is not working, people should be able to move on without frustration and try again right away.",
    ],
  },
  {
    id: "conversation",
    category: "Conversation Flow",
    readTime: "4 min read",
    title: "How to keep a random conversation going after hello",
    excerpt:
      "Simple, specific questions create momentum much faster than generic small talk.",
    body: [
      "The best random chat questions are light, specific, and easy to build on. Ask about music, current mood, favorite food, travel plans, or the funniest thing that happened today.",
      "The goal is not to sound clever. The goal is to create momentum. Once both people are replying comfortably, the rest of the conversation usually becomes easier on its own.",
      "PerfectChat supports that flow best when the conversation stays front and center, with clean message history and simple actions that never interrupt the exchange.",
    ],
  },
]

const CHAT_TAGS = [
  { icon: FaLock, label: "Anonymous", tone: "purple" },
  { icon: FaShieldAlt, label: "Safe Chat", tone: "green" },
  { icon: FaCommentDots, label: "Text Chat", tone: "blue" },
  { icon: FaMusic, label: "Interests: Music", tone: "pink" },
]

const SAFETY_POINTS = [
  "Be friendly and open-minded",
  "No harassment or hate speech",
  "Keep personal info private",
]

const HOME_HIGHLIGHTS = [
  { icon: FaLock, label: "Anonymous" },
  { icon: FaBolt, label: "Instant Match" },
  { icon: FaShieldAlt, label: "Easy Exit" },
]

const TRUST_FEATURES = [
  {
    icon: FaLock,
    title: "100% Anonymous",
    description: "No personal info required",
  },
  {
    icon: FaBolt,
    title: "Instant Connections",
    description: "Matched in seconds",
  },
  {
    icon: FaShieldAlt,
    title: "Safe & Respectful",
    description: "Our community guidelines",
  },
  {
    icon: FaArrowLeft,
    title: "Leave Anytime",
    description: "No strings attached",
  },
]

const formatMessageTime = (timestamp) => {
  if (!timestamp) {
    return ""
  }

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(timestamp)
}

const formatElapsedTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return [hours, minutes, remainingSeconds].map((value) => String(value).padStart(2, "0")).join(":")
}

const createMessage = (sender, content, type = "text") => ({
  sender,
  content,
  type,
  createdAt: Date.now(),
})

function App() {
  const [view, setView] = useState("home")
  const [activeBlogId, setActiveBlogId] = useState(null)
  const [username, setUsername] = useState("")
  const [selectedMode, setSelectedMode] = useState("")
  const [draftMessage, setDraftMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [partnerName, setPartnerName] = useState("")
  const [isMatching, setIsMatching] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [connectionError, setConnectionError] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [ws, setWs] = useState(null)
  const [matchedAt, setMatchedAt] = useState(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [showChatDetails, setShowChatDetails] = useState(true)
  const [showChatMenu, setShowChatMenu] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight : 0,
  )
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

  const wsRef = useRef(null)
  const pingIntervalRef = useRef(null)
  const typingTimeoutRef = useRef(null)
  const manualCloseRef = useRef(false)
  const messagesEndRef = useRef(null)
  const messageInputRef = useRef(null)
  const messagesAreaRef = useRef(null)

  const activeBlog = BLOGS.find((blog) => blog.id === activeBlogId) || null
  const isConnected = Boolean(partnerName)
  const connectionLabel = isConnected
    ? `Connected to ${partnerName}`
    : isMatching
      ? "Looking for a new match"
      : "Disconnected"
  const connectionCardTitle = isConnected
    ? "Connected to a random user"
    : isMatching
      ? "Finding your next conversation"
      : "Start a new anonymous chat"
  const clearConnectionTimers = useCallback(() => {
    if (pingIntervalRef.current) {
      clearInterval(pingIntervalRef.current)
      pingIntervalRef.current = null
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
  }, [])

  const cleanupSocket = useCallback(() => {
    clearConnectionTimers()

    const currentSocket = wsRef.current
    if (currentSocket) {
      manualCloseRef.current = true
      if (currentSocket.readyState === WebSocket.OPEN || currentSocket.readyState === WebSocket.CONNECTING) {
        currentSocket.close(1000, "Client reset")
      }
    }

    wsRef.current = null
    setWs(null)
  }, [clearConnectionTimers])

  const addSystemMessage = (content) => {
    setMessages((current) => [...current, createMessage("System", content, "system")])
  }

  const sendSocketMessage = (payload) => {
    const currentSocket = wsRef.current
    if (!currentSocket || currentSocket.readyState !== WebSocket.OPEN) {
      return false
    }

    currentSocket.send(JSON.stringify(payload))
    return true
  }

  const requestPartner = () => {
    const sent = sendSocketMessage({ type: "findPartner" })
    if (sent) {
      setIsMatching(true)
      setPartnerName("")
      setIsTyping(false)
      setMatchedAt(null)
    }
  }

  const handleIncomingMessage = (event) => {
    try {
      const data = JSON.parse(event.data)

      switch (data.type) {
        case "usernameSet":
          requestPartner()
          break

        case "matched":
          setPartnerName(data.partnerName || "Stranger")
          setMessages([])
          setIsMatching(false)
          setIsTyping(false)
          setConnectionError("")
          setMatchedAt(Date.now())
          setTimeout(() => {
            messageInputRef.current?.focus()
          }, 50)
          break

        case "waiting":
          setIsMatching(true)
          setMatchedAt(null)
          break

        case "textMessage":
          setMessages((current) => [
            ...current,
            createMessage("Stranger", data.content),
          ])
          setIsTyping(false)
          break

        case "typing":
          setIsTyping(Boolean(data.isTyping))
          break

        case "partnerDisconnected":
          setPartnerName("")
          setIsTyping(false)
          setIsMatching(true)
          setMatchedAt(null)
          addSystemMessage("Your chat partner disconnected. Finding someone new...")
          setTimeout(() => {
            requestPartner()
          }, 600)
          break

        case "error":
          setConnectionError(data.message || "Something went wrong.")
          addSystemMessage(data.message || "Something went wrong.")
          break

        case "connectionEstablished":
        case "connectionReady":
        case "pong":
          break

        default:
          break
      }
    } catch (error) {
      console.error("Failed to parse websocket message", error)
    }
  }

  const startTextChat = () => {
    const trimmedUsername = username.trim()
    if (!trimmedUsername) {
      setConnectionError("Please enter your nickname before starting.")
      return
    }

    cleanupSocket()
    setConnectionError("")
    setMessages([])
    setPartnerName("")
    setIsTyping(false)
    setIsMatching(true)
    setDraftMessage("")
    setMatchedAt(null)
    setShowChatMenu(false)
    setView("text")

    const socket = new WebSocket(getWebSocketUrl())
    wsRef.current = socket
    setWs(socket)

    socket.onopen = () => {
      manualCloseRef.current = false
      sendSocketMessage({
        type: "setUsername",
        username: trimmedUsername,
        chatType: "text",
      })

      pingIntervalRef.current = setInterval(() => {
        sendSocketMessage({ type: "ping" })
      }, 25000)
    }

    
    socket.onmessage = handleIncomingMessage

    socket.onerror = () => {
      setConnectionError("Could not connect to chat server. Please try again.")
    }

    socket.onclose = (event) => {
      clearConnectionTimers()
      wsRef.current = null
      setWs(null)

      const wasManualClose = manualCloseRef.current
      manualCloseRef.current = false

      if (wasManualClose) {
        return
      }

      setPartnerName("")
      setIsTyping(false)
      setIsMatching(false)
      setMatchedAt(null)

      if (event.code !== 1000) {
        setConnectionError("Connection closed. Please reconnect.")
      }
    }
  }

  const handleStartChat = () => {
    if (!selectedMode) {
      setConnectionError("Please choose text chat or video chat first.")
      return
    }

    if (!username.trim()) {
      setConnectionError("Please enter your nickname before starting.")
      return
    }

    if (selectedMode === "video") {
      setConnectionError("")
      setView("video")
      return
    }

    startTextChat()
  }

  const sendTypingSignal = () => {
    if (!partnerName) {
      return
    }

    sendSocketMessage({ type: "typing", isTyping: true })

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      sendSocketMessage({ type: "typing", isTyping: false })
    }, 950)
  }

  const handleDraftChange = (event) => {
    setDraftMessage(event.target.value)
    sendTypingSignal()
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const content = draftMessage.trim()
    if (!content || !partnerName) {
      return
    }

    const sent = sendSocketMessage({ type: "textMessage", content })
    if (!sent) {
      setConnectionError("Message could not be sent because the connection is closed.")
      return
    }

    setMessages((current) => [...current, createMessage("You", content)])
    setDraftMessage("")
    sendSocketMessage({ type: "typing", isTyping: false })
    messageInputRef.current?.focus()
  }

  const handleSkip = () => {
    if (!sendSocketMessage({ type: "skip" })) {
      return
    }

    setPartnerName("")
    setIsTyping(false)
    setIsMatching(true)
    setMatchedAt(null)
    addSystemMessage("Looking for a new conversation...")
  }

  const goHome = () => {
    cleanupSocket()
    setView("home")
    setActiveBlogId(null)
    setMessages([])
    setPartnerName("")
    setIsTyping(false)
    setIsMatching(false)
    setDraftMessage("")
    setConnectionError("")
    setMatchedAt(null)
    setShowChatMenu(false)
  }

  const toggleDarkMode = () => {
    setDarkMode((current) => !current)
  }

  const openBlog = (blogId) => {
    setActiveBlogId(blogId)
    setView("blog")
  }

  const goToBlogList = () => {
    setView("home")
  }

  const handleComposerFocus = () => {
    setTimeout(() => {
      const messagesArea = messagesAreaRef.current
      if (messagesArea) {
        messagesArea.scrollTo({
          top: messagesArea.scrollHeight,
          behavior: "smooth",
        })
      }
    }, 250)
  }

  useEffect(() => {
    return () => {
      cleanupSocket()
    }
  }, [cleanupSocket])

  useEffect(() => {
    const messagesArea = messagesAreaRef.current
    if (messagesArea) {
      messagesArea.scrollTo({
        top: messagesArea.scrollHeight,
        behavior: messages.length > 0 ? "smooth" : "auto",
      })
    }
  }, [messages, isTyping])

  useEffect(() => {
    if (!matchedAt) {
      setElapsedSeconds(0)
      return undefined
    }

    const updateElapsedTime = () => {
      setElapsedSeconds(Math.max(0, Math.floor((Date.now() - matchedAt) / 1000)))
    }

    updateElapsedTime()
    const timer = window.setInterval(updateElapsedTime, 1000)
    return () => window.clearInterval(timer)
  }, [matchedAt])

  useEffect(() => {
    const updateViewportState = () => {
      const currentViewportHeight = Math.round(window.visualViewport?.height || window.innerHeight)
      const keyboardOffset = window.innerHeight - currentViewportHeight

      setViewportHeight(currentViewportHeight)
      setIsKeyboardOpen(window.innerWidth <= 768 && keyboardOffset > 160)
    }

    updateViewportState()

    window.addEventListener("resize", updateViewportState)
    window.visualViewport?.addEventListener("resize", updateViewportState)
    window.visualViewport?.addEventListener("scroll", updateViewportState)

    return () => {
      window.removeEventListener("resize", updateViewportState)
      window.visualViewport?.removeEventListener("resize", updateViewportState)
      window.visualViewport?.removeEventListener("scroll", updateViewportState)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [view])

  if (view === "video") {
    return (
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        <div className="video-chat-shell">
          <Suspense fallback={<div className="loading-screen">Loading video chat...</div>}>
            <VideoChat initialUsername={username.trim()} onBack={goHome} />
          </Suspense>
        </div>
      </div>
    )
  }

  if (view === "text") {
    return (
      <div className={`app-container chat-app ${darkMode ? "dark" : "light"}`}>
        <div
          className={`fullscreen-chat-layout chat-redesign ${isKeyboardOpen ? "keyboard-open" : ""}`}
          style={{
            height:
              typeof window !== "undefined" && window.innerWidth <= 768 && viewportHeight
                ? `${viewportHeight}px`
                : undefined,
          }}
        >
          <div className="chat-ambient chat-ambient-left"></div>
          <div className="chat-ambient chat-ambient-right"></div>

          <div className="chat-shell">
            <div className="fullscreen-chat-header chat-header-redesign">
              <div className="chat-brand-cluster">
                <img src={chatLogo} alt="PerfectChat logo" className="chat-header-logo" />
                <div className="chat-brand-copy">
                  <span className="fullscreen-brand-name chat-brand-name">PerfectChat</span>
                  <span className="chat-brand-subtitle">Anonymous text chat that stays clean and easy.</span>
                </div>
              </div>

              <div className="chat-header-actions">
                <button
                  className="chat-primary-action"
                  onClick={handleSkip}
                  title="Find someone new"
                  type="button"
                  disabled={!ws}
                >
                  <FaRandom />
                  <span>Next Match</span>
                </button>

                <div className="chat-menu-wrap">
                  <button
                    className="chat-icon-button"
                    onClick={() => setShowChatMenu((current) => !current)}
                    title="Open chat menu"
                    type="button"
                  >
                    <FaBars />
                  </button>

                  {showChatMenu && (
                    <div className="chat-menu-popover">
                      <button
                        className="chat-menu-item"
                        onClick={() => {
                          setShowChatMenu(false)
                          goHome()
                        }}
                        type="button"
                      >
                        <FaHome />
                        <span>Home</span>
                      </button>
                      <button
                        className="chat-menu-item"
                        onClick={() => {
                          toggleDarkMode()
                          setShowChatMenu(false)
                        }}
                        type="button"
                      >
                        {darkMode ? <FaSun /> : <FaMoon />}
                        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="chat-content-grid">
              <section className="chat-main-column">
                <button
                  className={`chat-connection-card chat-fixed-strip ${isConnected ? "connected" : "searching"}`}
                  onClick={() => setShowChatDetails((current) => !current)}
                  type="button"
                >
                  <div className="chat-connection-presence">
                    <span className="chat-presence-orb"></span>
                  </div>
                  <div className="chat-connection-copy">
                    <span className="chat-connection-title">{connectionCardTitle}</span>
                    <span className="chat-connection-meta">
                      <FaClock />
                      {isConnected
                        ? formatElapsedTime(elapsedSeconds)
                        : isMatching
                          ? "Searching for someone new"
                          : "Start or reconnect your chat"}
                    </span>
                    <span className="chat-connection-subtext">
                      {isConnected ? connectionLabel : "Anonymous, random, and ready when you are."}
                    </span>
                  </div>
                  <span className="chat-connection-arrow">{showChatDetails ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>

                {showChatDetails && (
                  <div className="chat-tag-row chat-fixed-strip">
                    {CHAT_TAGS.map(({ icon: Icon, label, tone }) => (
                      <span key={label} className={`chat-tag chat-tag-${tone}`}>
                        <Icon />
                        <span>{label}</span>
                      </span>
                    ))}
                  </div>
                )}

                <div className="chat-conversation-panel">
                  <div ref={messagesAreaRef} className="fullscreen-messages-area chat-messages-area">
                    <div className="fullscreen-messages-container chat-messages-container">
                      {!ws && (
                        <div className="fullscreen-login-container">
                          <div className="fullscreen-login-content chat-login-card">
                            <img src={chatLogo} alt="PerfectChat logo" className="fullscreen-login-logo" />
                            <p className="eyebrow">Random Text Chat</p>
                            <h2 className="fullscreen-login-title">Start chatting instantly</h2>
                            <p className="fullscreen-login-copy">
                              Enter a nickname, get matched quickly, and jump into a clean, distraction-free
                              conversation.
                            </p>
                            <div className="fullscreen-login-form">
                              <input
                                type="text"
                                placeholder="Enter your nickname"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                className="fullscreen-username-input"
                                onKeyDown={(event) => {
                                  if (event.key === "Enter") {
                                    startTextChat()
                                  }
                                }}
                              />

                              <button
                                onClick={startTextChat}
                                disabled={!username.trim()}
                                className={`fullscreen-start-button ${!username.trim() ? "disabled" : ""}`}
                                type="button"
                              >
                                Start Anonymous Chat
                              </button>

                              {connectionError && <div className="error-message">{connectionError}</div>}
                            </div>
                          </div>
                        </div>
                      )}

                      {ws && messages.length === 0 && isConnected && (
                        <div className="fullscreen-empty-state chat-empty-state">
                          <div className="fullscreen-empty-icon">
                            <FaComments />
                          </div>
                          <h3 className="fullscreen-empty-title">Connected!</h3>
                          <p className="fullscreen-empty-subtitle">
                            Start your anonymous conversation with {partnerName}.
                          </p>
                        </div>
                      )}

                      {ws && messages.length === 0 && !isConnected && isMatching && (
                        <div className="fullscreen-empty-state chat-empty-state">
                          <div className="fullscreen-empty-icon">
                            <FaComments />
                          </div>
                          <h3 className="fullscreen-empty-title">Finding Partner...</h3>
                          <p className="fullscreen-empty-subtitle">Please wait while we match you with someone new.</p>
                          <button onClick={requestPartner} className="find-partner-button" disabled={!ws} type="button">
                            Retry Match
                          </button>
                        </div>
                      )}

                      {messages.map((message, index) => {
                        const isOutgoing = message.sender === "You"
                        const isSystem = message.sender === "System"
                        const authorLabel = isOutgoing ? "You" : partnerName || "Stranger"

                        return (
                          <div
                            key={`${message.sender}-${index}`}
                            className={`fullscreen-message-wrapper chat-message-wrapper ${
                              isOutgoing ? "is-outgoing" : isSystem ? "is-system" : "is-incoming"
                            }`}
                          >
                            {!isOutgoing && !isSystem && (
                              <div className="fullscreen-avatar fullscreen-avatar-stranger">S</div>
                            )}

                            <div className="chat-message-stack">
                              {!isSystem && <span className="chat-message-author">{authorLabel}</span>}
                              <div
                                className={`message ${
                                  isOutgoing
                                    ? "outgoing fullscreen-message-you"
                                    : isSystem
                                      ? "system fullscreen-message-system"
                                      : "incoming fullscreen-message-stranger"
                                }`}
                              >
                                <p>{message.content}</p>
                                {message.createdAt && (
                                  <div className="chat-message-meta">
                                    <span>{formatMessageTime(message.createdAt)}</span>
                                    {isOutgoing && <span className="chat-double-check">✓✓</span>}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}

                      {isTyping && isConnected && (
                        <div className="fullscreen-typing-wrapper chat-message-wrapper is-incoming">
                          <div className="fullscreen-avatar fullscreen-avatar-stranger">S</div>
                          <div className="chat-message-stack">
                            <span className="chat-message-author">{partnerName || "Stranger"}</span>
                            <div className="typing-indicator fullscreen-typing-indicator keyboard-typing">
                              <div className="keyboard-typing-keys">
                                <span className="keyboard-key"></span>
                                <span className="keyboard-key"></span>
                                <span className="keyboard-key"></span>
                                <span className="keyboard-key wide"></span>
                              </div>
                              <span className="keyboard-typing-text">typing...</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef}></div>
                    </div>
                  </div>

                  {ws && (
                    <div className="fullscreen-message-input-area chat-composer-shell">
                      <div className="fullscreen-message-input-container">
                        <form className="message-form fullscreen-message-form chat-composer-form" onSubmit={handleSubmit}>
                          <button className="chat-tool-button" type="button" title="Emoji picker coming soon">
                            <FaSmile />
                          </button>
                          <button className="chat-tool-button" type="button" title="Attachment support coming soon">
                            <FaPaperclip />
                          </button>
                          <input
                            ref={messageInputRef}
                            type="text"
                            value={draftMessage}
                            onChange={handleDraftChange}
                            onFocus={handleComposerFocus}
                            placeholder={isConnected ? "Type a message..." : "Waiting for connection..."}
                            disabled={!isConnected}
                            className="message-input fullscreen-message-input chat-composer-input"
                          />
                          <button
                            type="submit"
                            className="send-button fullscreen-send-button chat-send-button"
                            disabled={!isConnected || !draftMessage.trim()}
                          >
                            <FaPaperPlane />
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <aside className="chat-sidebar">
                <article className="chat-side-card">
                  <div className="chat-side-icon pink">
                    <FaHeart />
                  </div>
                  <h3>Stay kind & respectful</h3>
                  <p>
                    We&apos;re all here to have meaningful conversations. Please be kind and respectful to each other.
                  </p>
                  <div className="chat-side-points">
                    {SAFETY_POINTS.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                    <span className="warning">Report inappropriate behavior</span>
                  </div>
                  <button className="chat-side-secondary-button" type="button">
                    Learn more
                  </button>
                </article>

                <article className="chat-side-card">
                  <div className="chat-side-icon violet">
                    <FaRandom />
                  </div>
                  <h3>Looking for a new chat?</h3>
                  <p>Click below to instantly connect with someone new.</p>
                  <button className="chat-side-primary-button" onClick={handleSkip} disabled={!ws} type="button">
                    <FaRandom />
                    <span>Next Match</span>
                  </button>
                  <div className="chat-side-note">
                    <FaShieldAlt />
                    <span>Connections are random and completely anonymous.</span>
                  </div>
                </article>
              </aside>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (view === "blog" && activeBlog) {
    return (
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        <header className="app-header">
          <div className="logo-container">
            <img src={chatLogo} alt="PerfectChat logo" className="app-logo" />
            <div className="brand-copy">
              <h1 className="app-title">PerfectChat</h1>
              <p className="brand-subtitle">Anonymous random conversations, designed to feel easy.</p>
            </div>
          </div>

          <div className="header-actions">
            <button className="blog-back-button" onClick={goToBlogList} type="button">
              <FaArrowLeft />
              <span>Back to Home</span>
            </button>
            <button className="theme-toggle" onClick={toggleDarkMode} type="button">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </header>

        <main className="app-main blog-article-page">
          <article className="blog-article-shell">
            <div className="blog-article-topbar">
              <span className="eyebrow">PerfectChat Journal</span>
              <span className="blog-category">{activeBlog.category}</span>
            </div>
            <p className="blog-readtime">{activeBlog.readTime}</p>
            <h2 className="blog-article-title">{activeBlog.title}</h2>
            <p className="blog-article-excerpt">{activeBlog.excerpt}</p>
            <div className="blog-article-body">
              {activeBlog.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="blog-article-actions">
              <button className="blog-read-more" onClick={goToBlogList} type="button">
                Read More Articles
              </button>
            </div>
          </article>
        </main>
      </div>
    )
  }

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <header className="app-header">
        <div className="logo-container">
          <img src={chatLogo} alt="PerfectChat logo" className="app-logo" />
          <div className="brand-copy">
            <h1 className="app-title">PerfectChat</h1>
            <p className="brand-subtitle">Anonymous random conversations, designed to feel easy.</p>
          </div>
        </div>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleDarkMode} type="button">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <main className="app-main">
        <section className="hero-panel">
          <div className="hero-copy-panel home-story-card">
            <span className="eyebrow">PerfectChat</span>
            <h2 className="hero-title">Start real conversations with strangers in seconds.</h2>
            <p className="hero-description">
              PerfectChat connects you anonymously with new people for meaningful conversations. No sign-ups. No
              pressure. Just real chats, whenever you want.
            </p>

            <div className="hero-points">
              {HOME_HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <span key={label}>
                  <Icon />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-action-card home-mode-panel">
            <img src={chatLogo} alt="PerfectChat logo" className="welcome-logo" />
            <h3 className="hero-card-title">Choose how you want to chat</h3>
            <p className="hero-card-copy">
              Pick your preferred chat mode. You can switch anytime during the conversation.
            </p>

            <div className="mode-selector">
              <button
                className={`mode-option ${selectedMode === "text" ? "active" : ""}`}
                onClick={() => {
                  setSelectedMode("text")
                  setConnectionError("")
                }}
                type="button"
              >
                <span className="mode-option-check"></span>
                <div className="mode-option-icon pink">
                  <FaComments />
                </div>
                <h4>Text Chat</h4>
                <p>Chat with strangers using text.</p>
              </button>

              <button
                className={`mode-option ${selectedMode === "video" ? "active" : ""}`}
                onClick={() => {
                  setSelectedMode("video")
                  setConnectionError("")
                }}
                type="button"
              >
                <span className="mode-option-check"></span>
                <div className="mode-option-icon violet">
                  <FaVideo />
                </div>
                <h4>Video Chat</h4>
                <p>Face-to-face conversations in real time.</p>
              </button>
            </div>

            {selectedMode && (
              <div className="mode-name-panel">
                <label className="mode-name-label" htmlFor="nickname-input">
                  Enter your nickname to start {selectedMode === "video" ? "video" : "text"} chat
                </label>
                <input
                  id="nickname-input"
                  className="welcome-name-input"
                  type="text"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value)
                    setConnectionError("")
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleStartChat()
                    }
                  }}
                  placeholder="Choose your nickname"
                />
              </div>
            )}

            <p className="mode-helper-copy">
              {selectedMode
                ? "Your nickname stays visible only inside the current chat session."
                : "Select a mode first, then your nickname field will appear here."}
            </p>

            <button
              onClick={handleStartChat}
              className="welcome-button start-chat-button"
              type="button"
              disabled={!selectedMode || !username.trim()}
            >
              <FaRocket />
              <span>Start Chat</span>
            </button>
            {connectionError && <div className="error-banner home-error">{connectionError}</div>}
          </div>
        </section>

        <section className="blog-showcase journal-showcase">
          <div className="blog-showcase-head">
            <div>
              <span className="eyebrow">PerfectChat Journal</span>
              <h2 className="blog-showcase-title">Short reads for better anonymous conversations</h2>
            </div>
            <p className="blog-showcase-copy">
              These articles cover conversation confidence, safety, fast matching, and the small details that make
              PerfectChat feel better to use.
            </p>
          </div>

          <div className="blog-grid">
            {BLOGS.map((blog) => (
              <article key={blog.id} className="blog-card">
                <div className="blog-meta-row">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-readtime">{blog.readTime}</span>
                </div>
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-content">{blog.excerpt}</p>
                <button className="blog-read-more journal-read-more" onClick={() => openBlog(blog.id)} type="button">
                  <span>Read Article</span>
                  <span aria-hidden="true">{"->"}</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-strip" aria-label="PerfectChat highlights">
          {TRUST_FEATURES.map(({ icon: Icon, title, description }) => (
            <article key={title} className="trust-item">
              <div className="trust-item-icon">
                <Icon />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
