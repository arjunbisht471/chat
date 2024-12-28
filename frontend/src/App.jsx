import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Videochat from "./Components/Videochat.jsx";
import { FaPaperPlane, FaImage, FaComments, FaVideo, FaRedoAlt } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [username, setUsername] = useState("");
  const [partnerName, setPartnerName] = useState(null);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const [theme, setTheme] = useState("light");
  const [showTextChat, setShowTextChat] = useState(false);
  const [showVideoChat, setShowVideoChat] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMatching, setIsMatching] = useState(false);
  const messagesEndRef = useRef(null);
  const pingIntervalRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", theme === "dark" ? "#333" : "#fff");
  }, [theme]);

  useEffect(() => {
    if (!ws) return;

    const handleOpen = () => {
      console.log("WebSocket connection established");
      ws.send(JSON.stringify({ type: "setUsername", username }));

      pingIntervalRef.current = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "ping" }));
        }
      }, 30000);
    };




    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "matched") {
        setPartnerName(data.partnerName);
        setMessages([]);
        setIsMatching(false);
      } else if (data.type === "message") {
        const decodedContent =
          data.messageType === "image" ? `data:image/jpeg;base64,${data.content}` : data.content;
        setMessages((prev) => [
          ...prev,
          { sender: data.sender, content: decodedContent, type: data.messageType },
        ]);
        setIsTyping(false);
      } else if (data.type === "typing") {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 3000);
      } else if (data.type === "error") {
        alert(data.message);
      }
    };

    const handleClose = () => {
      console.log("WebSocket connection closed");
      clearInterval(pingIntervalRef.current);
    };

    ws.addEventListener("open", handleOpen);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", handleClose);

    return () => {
      ws.close();
      clearInterval(pingIntervalRef.current);
    };
  }, [ws, username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startChat = () => {
    if (username.trim() && isHuman) {
      const socket = new WebSocket("wss://perfactchat.com/socket/");
      setWs(socket);
      setIsMatching(true);
    } else {
      alert("Please enter a username and confirm you're not a robot.");
    }
  };

  const sendMessage = (message, type = "text") => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "message", content: message, messageType: type }));
      setMessages((prev) => [...prev, { sender: "You", content: message, type }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value.trim();
    if (message) {
      sendMessage(message);
      e.target.message.value = "";
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result.split(",")[1];
        sendMessage(base64Image, "image");
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleSkip = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "skip" }));
      setPartnerName(null);
      setMessages([]);
      setIsMatching(true);
    }
  };

  return (
    <div
      className="chat-app flex flex-col items-center justify-center min-h-screen px-4"
      style={{
        background: "linear-gradient(45deg, lavender, hotpink)",
        color: theme === "dark" ? "white" : "black",
        height:"100%",
        width:"100%"
      }}
    >
    <header className="chat-header fixed top-0 left-0 right-0 bg-gradient-to-r from-lavender to-hotpink z-10 p-6 flex items-center justify-between w-full">
  <div className="chat-logo-container p-4">
    <img
      src="https://github.com/arjunbisht471/chat/blob/master/frontend/src/assets/chat.png?raw=true"
      alt="Logo"
      className="chat-logo w-20 h-20 object-contain" 
    />
  </div>
  <div className="chat-icons flex items-center space-x-6 pr-4">
    <button
      onClick={() => setShowTextChat(true)}
      className="text-chat-icon text-white hover:text-pink-200"
    >
      <FaComments size={30} />
    </button>
    <button
      onClick={() => setShowVideoChat(true)}
      className="video-chat-icon text-white hover:text-pink-200"
    >
      <FaVideo size={30} />
    </button>
  </div>
</header>


      {showVideoChat && ws && (
        <Videochat
          ws={ws}
          setShowVideoChat={setShowVideoChat}
          setMessages={setMessages}
          setPartnerName={setPartnerName}
        />
      )}

{!ws && showTextChat && (
  <div className="username-container flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="font-semibold text-lg mb-6 text-center text-pink-600">Enter Your Name</h2>
    <input
      type="text"
      placeholder="Your name"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="username-input w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-pink-600"
    />
    <div className="recaptcha-container">
      <ReCAPTCHA
        sitekey="6LdnYJwqAAAAAEJjF07tNdSdy2H-mgCw5n3ooSuN"
        onChange={() => setIsHuman(true)}
      />
    </div>
    <button
      onClick={startChat}
      disabled={!isHuman || !username.trim()}
      className="start-chat-btn"
    >
      Start Chat
    </button>
  </div>
)}



{/* import { useEffect, useRef } from "react"; */}
{ws && !showVideoChat && (
          <div
            className="chat-layout"
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "1fr 3fr" : "1fr", 
              gridTemplateRows: "auto 1fr", 
              height: "80vh",
              width: "100%", 
              alignItems: "stretch",
            }}
          >
            {/* Sidebar */}
            {window.innerWidth > 768 && (
              <div
                className="sidebar"
                style={{
                  background: "linear-gradient(to bottom, #9c27b0, #e91e63)",
                  overflowY: "auto",
                  padding: 0,
                }}
              >
                <h3
                  className="text-lg font-semibold text-white mb-0 p-4"
                  style={{
                    backgroundColor: "#6a1b9a",
                    margin: 0,
                  }}
                >
                  About Chatting App
                </h3>
                <div className="p-4">
                  <p className="text-sm text-white mb-4">
                    Welcome to PerfectChat! Connect instantly and chat with random users. Keep your conversations fun and interactive.
                  </p>
                  <h4
                    className="text-md font-semibold text-pink-200 mb-2"
                    style={{ marginTop: 0 }}
                  >
                    Features:
                  </h4>
                  <ul
                    className="list-disc list-inside text-sm text-white mb-4"
                    style={{ paddingLeft: "20px" }}
                  >
                    <li>Instant messaging</li>
                    <li>Image sharing</li>
                    <li>Video calls</li>
                  </ul>
                  <p className="text-sm text-white">
                    Stay connected and enjoy seamless chatting anytime, anywhere!
                  </p>
                </div>
              </div>
            )}
        
            {/* Chat Panel */}
            <div
              className="chat-panel"
              style={{
                background: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                width: "100%", 
                height:"80vh"
              }}
            >
              {/* Chat Header */}
              <h2
                className="text-lg font-semibold mb-2 text-center text-pink-700 p-4"
                style={{
                  margin: 0,
                  padding: "10px 0",
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #ddd",
                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                  height: "50px",
                }}
              >
                Chatting with {partnerName || "Searching..."}
              </h2>
        
              <div
                className="chat-messages flex-grow overflow-y-auto"
                style={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  gap: "10px",
                  backgroundColor: "#e6e6fa",
                  padding: "16px",
                }}
              >
                <div>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`message max-w-xs mb-3 px-4 py-2 ${
                        msg.sender === "You"
                          ? "ml-auto bg-pink-200 text-left rounded-tr-lg rounded-br-lg rounded-tl-lg"
                          : "mr-auto bg-purple-200 text-right rounded-tl-lg rounded-bl-lg rounded-tr-lg"
                      }`}
                      style={{
                        wordWrap: "break-word",
                        padding: "8px 14px",
                      }}
                    >
                      <p className="text-xs font-medium text-gray-700 mb-1">{msg.sender}</p>
                      {msg.type === "image" ? (
                        <img
                          src={msg.content}
                          alt="sent"
                          className="w-40 h-40 object-cover rounded-md"
                        />
                      ) : (
                        <p className="text-sm m-0">{msg.content}</p>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="text-pink-600 text-sm italic animate-pulse">
                      Typing...
                    </div>
                  )}
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
        
              {/* Chat Input */}
              {!isMatching && (
                <form
                  onSubmit={handleSubmit}
                  className="message-input-form flex items-center gap-2 flex-wrap mt-4"
                  style={{
                    padding: "10px",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <button
                    type="button"
                    onClick={handleSkip}
                    title="Skip"
                    className="p-2 rounded"
                    style={{
                      backgroundColor: "#8a2be2",
                      color: "white",
                    }}
                  >
                    <FaRedoAlt size={20} />
                  </button>
        
                  <input
                    type="text"
                    name="message"
                    placeholder={partnerName ? "Type your message..." : "Searching..."}
                    disabled={!partnerName}
                    className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
        
                  <button
                    type="submit"
                    title="Send"
                    disabled={!partnerName}
                    className="p-2 rounded"
                    style={{
                      backgroundColor: "#8a2be2",
                      color: "white",
                    }}
                  >
                    <FaPaperPlane size={20} />
                  </button>
                </form>
              )}
              {isMatching && (
                <div className="text-center text-pink-700 font-semibold mt-4">
                  Searching...
                </div>
              )}
            </div>
          </div>
        )}
        
{!showTextChat && !ws && !showVideoChat && (
    <div className="welcome-container text-center p-4">
    <div className="logo-container mb-4">
      <img
        src="https://github.com/arjunbisht471/chat/blob/master/frontend/src/assets/chat.png?raw=true"
        alt="Logo"
        className="w-20 h-20 mx-auto object-contain"
      />
    </div>
    <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome to PerfectChat App</h1>
    <p className="text-sm font-medium mb-6 text-white">Your privacy matters to us.</p>
  
    <div className="chat-buttons-container flex justify-center gap-8">
      <button
        onClick={() => setShowTextChat(true)}
        className="bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-pink-700"
      >
        Text Chat
      </button>
      <button
        onClick={() => setShowVideoChat(true)}
        className="bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700"
      >
        Video Chat
      </button>
    </div>
  
    <div className="article-container mt-8">
      <h2 className="article-title">Privacy & Security</h2>
      <p className="article-text">
        At PerfectChat, your privacy is our top priority. We ensure that your personal data and conversations are encrypted and secure.
      </p>
      <p className="article-text">
        We do not store any chat history or user data that could compromise your privacy. All communications are peer-to-peer, ensuring only you and your partner have access to the conversation.
      </p>
    </div>
  </div>
  
    )}
  </div>
);
}

export default App;
