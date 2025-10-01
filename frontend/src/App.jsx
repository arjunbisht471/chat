"use client"

import { useState, useEffect, useRef } from "react"
import {
  FaPaperPlane,
  FaRandom,
  FaMoon,
  FaSun,
  FaComments,
  FaVideo,
  FaBars,
  FaTimes,
  FaHome,
  FaCog,
} from "react-icons/fa"
import VideoChat from "./Components/VideoChat"
import BlogPage from "./Components/BlogPage"
import ReCAPTCHA from "react-google-recaptcha"
import "./App.css"

function App() {
  const [username, setUsername] = useState("")
  const [partnerName, setPartnerName] = useState(null)
  const [messages, setMessages] = useState([])
  const [ws, setWs] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [showTextChat, setShowTextChat] = useState(false)
  const [showVideoChat, setShowVideoChat] = useState(false)
  const [showBlogPage, setShowBlogPage] = useState(false)
  const [currentBlogId, setCurrentBlogId] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  const [isMatching, setIsMatching] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [connectionError, setConnectionError] = useState("")
  const [recaptchaVerified, setRecaptchaVerified] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const pingIntervalRef = useRef(null)
  const typingTimeoutRef = useRef(null)
  const recaptchaRef = useRef(null)

  useEffect(() => {
    checkForBlogRoute()

    window.addEventListener("popstate", checkForBlogRoute)

    return () => {
      window.removeEventListener("popstate", checkForBlogRoute)
    }
  }, [])

  const checkForBlogRoute = () => {
    const path = window.location.pathname
    if (path.startsWith("/blog/")) {
      const blogId = path.split("/blog/")[1]
      if (blogId) {
        setCurrentBlogId(blogId)
        setShowBlogPage(true)
        setShowTextChat(false)
        setShowVideoChat(false)
      }
    } else {
      setShowBlogPage(false)
    }
  }

  const navigateToBlog = (blogId) => {
    setCurrentBlogId(blogId)
    setShowBlogPage(true)
    setShowTextChat(false)
    setShowVideoChat(false)

    window.history.pushState({}, "", `/blog/${blogId}`)
  }

  useEffect(() => {
    if (!ws) return

    const handleOpen = () => {
      console.log("WebSocket connection established")

      ws.send(
        JSON.stringify({
          type: "setUsername",
          username,
          chatType: "text", // Explicitly set chat type for text chat
        }),
      )

      pingIntervalRef.current = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "ping" }))
        }
      }, 30000)
    }

    const handleMessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log("Received message:", data)

        switch (data.type) {
          case "usernameSet":
            console.log("Username set:", data.username)
            // Auto-find partner for text chat
            setTimeout(() => {
              if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ type: "findPartner" }))
              }
            }, 500)
            break

          case "matched":
            setPartnerName(data.partnerName)
            setMessages([])
            setIsMatching(false)
            console.log("Matched with:", data.partnerName)
            break

          case "textMessage":
            setMessages((prev) => [
              ...prev,
              {
                sender: data.username === username ? "You" : "Stranger",
                content: data.content,
                type: "text",
              },
            ])
            setIsTyping(false)
            break

          case "waiting":
            console.log("Waiting for partner:", data.message)
            setIsMatching(true)
            break

          case "error":
            console.error("Server error:", data.message)
            setConnectionError(data.message)
            break

          case "partnerDisconnected":
            setPartnerName(null)
            setIsMatching(true)
            setMessages((prev) => [
              ...prev,
              {
                sender: "System",
                content: "Your chat partner has disconnected.",
                type: "system",
              },
            ])
            // Auto-find new partner
            setTimeout(() => {
              if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ type: "findPartner" }))
              }
            }, 1000)
            break

          case "skip":
            setPartnerName(null)
            setIsMatching(true)
            setMessages((prev) => [
              ...prev,
              {
                sender: "System",
                content: "Looking for a new chat partner...",
                type: "system",
              },
            ])
            break

          case "typing":
            if (data.from !== username) {
              setIsTyping(data.isTyping)
              if (data.isTyping) {
                if (typingTimeoutRef.current) {
                  clearTimeout(typingTimeoutRef.current)
                }
                typingTimeoutRef.current = setTimeout(() => {
                  setIsTyping(false)
                }, 3000)
              }
            }
            break

          case "pong":
            console.log("Received pong from server")
            break

          default:
            console.warn("Unknown message type:", data.type)
        }
      } catch (error) {
        console.error("Error parsing message:", error)
      }
    }

    const handleClose = (event) => {
      console.log("WebSocket connection closed:", event.code, event.reason)
      clearInterval(pingIntervalRef.current)

      if (event.code !== 1000) {
        setConnectionError("Connection lost. Please try reconnecting.")
      }
    }

    const handleError = (error) => {
      console.error("WebSocket error:", error)
      setConnectionError("Connection error. Please try again later.")
    }

    ws.addEventListener("open", handleOpen)
    ws.addEventListener("message", handleMessage)
    ws.addEventListener("close", handleClose)
    ws.addEventListener("error", handleError)

    return () => {
      ws.removeEventListener("open", handleOpen)
      ws.removeEventListener("message", handleMessage)
      ws.removeEventListener("close", handleClose)
      ws.removeEventListener("error", handleError)

      if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        ws.close()
      }

      clearInterval(pingIntervalRef.current)
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [ws, username])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark-theme")
    } else {
      document.documentElement.classList.remove("dark-theme")
    }
  }

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value)
  }

  const blogs = [
    {
      id: "privacy-matters",
      title: "Why Privacy Matters in Online Chats",
      content:
        "Online communication should be private and secure. Learn why encryption and anonymity are important in modern chat applications.",
    },
    {
      id: "mental-health-benefits",
      title: "How Anonymous Chatting Can Help Mental Health",
      content:
        "Anonymous chat platforms provide a safe space to express thoughts without judgment. Discover how these platforms support mental wellness.",
    },
    {
      id: "online-safety-tips",
      title: "Online Safety Tips for Anonymous Chatting",
      content:
        "Even when chatting anonymously, it's important to follow safety practices that protect your digital wellbeing.",
    },
    {
      id: "ultimate-platform",
      title: "PerfectChat: The Ultimate Anonymous Chat Platform",
      content:
        " It is famous because it is a fun activity for all kinds of people. Chatting with peers is something that both girls and boys love.",
    },
    {
      id: "talk-to-strangers-at-live-chats-rooms",
      title: "Talk to Strangers at Live Chat Rooms Online",
      content:
        " It is famous because it is a fun activity for all kinds of people. Chatting with peers is something that both girls and boys love.",
    },
    {
      id: "talk-to-strangers-at-live-chats-rooms-2",
      title: "Talk to Strangers at Live Chat Rooms Online",
      content:
        " It is famous because it is a fun activity for all kinds of people. Chatting with peers is something that both girls and boys love.",
    },
    {
      id: "how-perfect-chat-helps-you-build-social-confidence",
      title: "How PerfectChat Helps You Build Social Confidence",
      content:
        " Discover how PerfectChat's anonymous, real-time chatting features empower users to overcome social anxiety, practice communication skills, and build real social confidence in a safe environment.",
    },
    {
      id: "breaking-the-ice-daily",
      title: "Breaking The Ice Daily",
      content:
        "Breaking the Ice Daily: How PerfectChat Makes Socializing Effortless",
    },
  ]

  const startChat = () => {
    if (username.trim() && recaptchaVerified) {
      try {
        setConnectionError("")
        console.log("Attempting to connect to WebSocket server...")

        const socket = new WebSocket("wss://perfactchat.com:5002")

        socket.onopen = () => {
          console.log("WebSocket connection opened")

          socket.send(
            JSON.stringify({
              type: "setUsername",
              username: username.trim(),
              chatType: "text", // Explicitly set chat type for text chat
            }),
          )

          setWs(socket)
          setIsMatching(true)
          setShowTextChat(true)
        }

        socket.onerror = (error) => {
          console.error("WebSocket error:", error)
          setConnectionError("Connection failed. Please try again.")
        }

        socket.onclose = (event) => {
          console.log("WebSocket connection closed:", event)
          if (event.code !== 1000) {
            setConnectionError("Connection lost. Please reconnect.")
          }
        }
      } catch (error) {
        console.error("Failed to create WebSocket:", error)
        setConnectionError("Failed to connect. Please try again later.")
      }
    } else if (!recaptchaVerified) {
      setConnectionError("Please complete the reCAPTCHA verification.")
    } else {
      setConnectionError("Please enter a username.")
    }
  }

  const findPartner = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      setIsMatching(true)
      ws.send(JSON.stringify({ type: "findPartner" }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = e.target.message.value.trim()
    if (message && ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "textMessage", content: message }))
      setMessages((prev) => [...prev, { sender: "You", content: message, type: "text" }])
      e.target.message.value = ""
      inputRef.current.focus()
    }
  }

  const handleTyping = () => {
    if (ws && ws.readyState === WebSocket.OPEN && partnerName) {
      ws.send(JSON.stringify({ type: "typing", isTyping: true }))

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }

      typingTimeoutRef.current = setTimeout(() => {
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "typing", isTyping: false }))
        }
      }, 1000)
    }
  }

  const handleSkip = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "skip" }))
      setPartnerName(null)
      setIsMatching(true)
    }
  }

  const goToHome = () => {
    setShowTextChat(false)
    setShowVideoChat(false)
    setShowBlogPage(false)
    if (ws) {
      ws.close()
      setWs(null)
    }
    setPartnerName(null)
    setMessages([])
    setIsMatching(false)
    setMobileMenuOpen(false)
    setRecaptchaVerified(false)
    setConnectionError("")

    window.history.pushState({}, "", "/")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      {/* Blog Page */}
      {showBlogPage && <BlogPage blogId={currentBlogId} />}

      {/* Video Chat */}
      {showVideoChat && (
        <div className="video-chat-wrapper">
          <VideoChat initialUsername={username} onBack={goToHome} />
        </div>
      )}

      {/* Full Screen Chat Interface */}
      {showTextChat ? (
        <>
          {/* Full Screen Top Bar */}
          <div className="fullscreen-chat-header">
            <div className="fullscreen-header-left">
              <button className="fullscreen-home-button" onClick={goToHome} title="Go to Home">
                <FaHome />
              </button>
              <div className="fullscreen-status">
                <div className={`status-indicator ${partnerName ? "connected" : "searching"}`}></div>
                <span className="fullscreen-status-text">
                  {partnerName ? `Connected to ${partnerName}` : isMatching ? "Finding partner..." : "Disconnected"}
                </span>
              </div>
            </div>

            <div className="fullscreen-header-right">
              <button className="fullscreen-action-button" onClick={handleSkip} title="Find someone new">
                <FaRandom />
              </button>
              <button className="fullscreen-action-button" onClick={toggleDarkMode} title="Toggle theme">
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button className="fullscreen-action-button" title="Settings">
                <FaCog />
              </button>
            </div>
          </div>

          {/* Full Screen Messages Area */}
          <div className="fullscreen-messages-area">
            <div className="fullscreen-messages-container">
              {!ws && (
                <div className="fullscreen-login-container">
                  <div className="fullscreen-login-content">
                    <img
                      src="https://github.com/arjunbisht471/chat/blob/master/frontend/src/assets/chat.png?raw=true"
                      alt="Logo"
                      className="fullscreen-login-logo"
                    />
                    <h2 className="fullscreen-login-title">Start Text Chat</h2>
                    <div className="fullscreen-login-form">
                      <input
                        type="text"
                        placeholder="Enter your nickname"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="fullscreen-username-input"
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && username.trim() && recaptchaVerified) {
                            startChat()
                          }
                        }}
                      />

                      <div className="fullscreen-recaptcha-container">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="6LeV0QcrAAAAAHzIehPTpa-oMOZEYGTKvqxFnL-Y"
                          onChange={handleRecaptchaChange}
                        />
                      </div>

                      <button
                        onClick={startChat}
                        disabled={!username.trim() || !recaptchaVerified}
                        className={`fullscreen-start-button ${!username.trim() || !recaptchaVerified ? "disabled" : ""}`}
                      >
                        Start Anonymous Chat
                      </button>

                      {connectionError && <div className="error-message">{connectionError}</div>}
                    </div>
                  </div>
                </div>
              )}

              {ws && messages.length === 0 && partnerName && (
                <div className="fullscreen-empty-state">
                  <div className="fullscreen-empty-icon">
                    <FaComments />
                  </div>
                  <h3 className="fullscreen-empty-title">Connected!</h3>
                  <p className="fullscreen-empty-subtitle">Start your anonymous conversation with {partnerName}</p>
                </div>
              )}

              {ws && messages.length === 0 && !partnerName && isMatching && (
                <div className="fullscreen-empty-state">
                  <div className="fullscreen-empty-icon">
                    <FaComments />
                  </div>
                  <h3 className="fullscreen-empty-title">Finding Partner...</h3>
                  <p className="fullscreen-empty-subtitle">Please wait while we connect you with someone</p>
                  <button onClick={findPartner} className="find-partner-button">
                    Find Partner
                  </button>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div key={idx} className="fullscreen-message-wrapper">
                  <div className="fullscreen-message-row">
                    {msg.sender !== "You" && msg.sender !== "System" && (
                      <div className="fullscreen-avatar fullscreen-avatar-stranger">S</div>
                    )}
                    <div
                      className={`message ${
                        msg.sender === "You"
                          ? "outgoing fullscreen-message-you"
                          : msg.sender === "System"
                            ? "system fullscreen-message-system"
                            : "incoming fullscreen-message-stranger"
                      }`}
                    >
                      {msg.type === "image" ? (
                        <img src={msg.content || "/placeholder.svg"} alt="sent" className="message-image" />
                      ) : (
                        <p>{msg.content}</p>
                      )}
                    </div>
                    {msg.sender === "You" && <div className="fullscreen-avatar fullscreen-avatar-you">Y</div>}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="fullscreen-typing-wrapper">
                  <div className="fullscreen-typing-row">
                    <div className="fullscreen-avatar fullscreen-avatar-stranger">S</div>
                    <div className="typing-indicator fullscreen-typing-indicator">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>
          </div>

          {/* Full Screen Message Input */}
          {ws && (
            <div className="fullscreen-message-input-area">
              <div className="fullscreen-message-input-container">
                <form className="message-form fullscreen-message-form" onSubmit={handleSubmit}>
                  <input
                    ref={inputRef}
                    type="text"
                    name="message"
                    placeholder={partnerName ? "Type your message..." : "Waiting for connection..."}
                    disabled={!partnerName}
                    className="message-input fullscreen-message-input"
                    onKeyDown={handleTyping}
                  />
                  <button type="submit" className="send-button fullscreen-send-button" disabled={!partnerName}>
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Welcome Screen */
        <>
          <header className="app-header">
            <div className="logo-container">
              <img
                src="https://github.com/arjunbisht471/chat/blob/master/frontend/src/assets/chat.png?raw=true"
                alt="Logo"
                className="app-logo"
                onClick={goToHome}
                style={{ cursor: "pointer" }}
              />
              <h1 className="app-title">PerfectChat</h1>
            </div>

            <div className={`header-actions ${mobileMenuOpen ? "show" : ""}`}>
              {!ws && !showVideoChat && !showBlogPage && (
                <>
                  <button
                    className="nav-button text-button"
                    onClick={() => {
                      setShowTextChat(true)
                      setShowVideoChat(false)
                      setShowBlogPage(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <FaComments />
                    <span>Text Chat</span>
                  </button>
                  <button
                    className="nav-button video-button"
                    onClick={() => {
                      setShowVideoChat(true)
                      setShowTextChat(false)
                      setShowBlogPage(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <FaVideo />
                    <span>Video Chat</span>
                  </button>
                </>
              )}
              <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </header>

          <main className="app-main">
            <div className="welcome-container">
              <div className="welcome-content">
                <img
                  src="https://github.com/arjunbisht471/chat/blob/master/frontend/src/assets/chat.png?raw=true"
                  alt="Logo"
                  className="welcome-logo"
                />
                <h1 className="welcome-title">Welcome to PerfectChat</h1>
                <p className="welcome-subtitle">Connect with strangers anonymously</p>
                <div className="welcome-buttons">
                  <button onClick={() => setShowTextChat(true)} className="welcome-button text-button">
                    <FaComments />
                    <span>Text Chat</span>
                  </button>
                  <button onClick={() => setShowVideoChat(true)} className="welcome-button video-button">
                    <FaVideo />
                    <span>Video Chat</span>
                  </button>
                </div>
              </div>

              <div className="blog-section">
                <h2 className="blog-title">Latest Blogs</h2>
                <div className="blog-grid">
                  {blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                      <h3 className="blog-card-title">{blog.title}</h3>
                      <p className="blog-card-content">{blog.content}</p>
                      <button className="blog-read-more" onClick={() => navigateToBlog(blog.id)}>
                        Read More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  )
}

export default App
