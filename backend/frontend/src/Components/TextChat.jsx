/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { FaCheck, FaHome, FaLock, FaMoon, FaPaperPlane, FaPowerOff, FaShieldAlt, FaSun, FaTimes, FaUser } from "react-icons/fa"
import chatLogo from "../assets/chat.png"
import "./TextChat.css"

void React

function NextMatchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/></svg>
}

export default function TextChat({ darkMode, onToggleTheme, ws, isReconnecting, username, setUsername, partnerName, isConnected, isMatching, isTyping, connectionError, messages, draftMessage, onDraftChange, onSubmit, onSkip, onEnd, onStart, onRetry, messageInputRef, messagesAreaRef, messagesEndRef, onComposerFocus, formatTime }) {
  const [showPrivacy, setShowPrivacy] = useState(true)
  const [showMatchModal, setShowMatchModal] = useState(false)

  const confirmNextMatch = () => {
    setShowMatchModal(false)
    onSkip()
  }

  return <div className={`tc-app ${darkMode ? "dark" : ""}`}>
    <header className="tc-header">
      <div className="tc-brand"><img src={chatLogo} alt="PerfectChat logo"/><div><h1>PerfectChat</h1><p>Anonymous conversations</p></div></div>
      <div className="tc-header-actions"><button className="tc-theme" onClick={onToggleTheme} title={darkMode ? "Light mode" : "Dark mode"} type="button">{darkMode ? <FaSun/> : <FaMoon/>}</button><button className="tc-home" onClick={onEnd} type="button"><FaHome/><span>Home</span></button><button className="tc-end" onClick={onEnd} type="button"><FaPowerOff/><span>End Chat</span></button></div>
    </header>

    <main className="tc-main"><section className="tc-container">
      <div className="tc-chat-head"><div className="tc-stranger"><div className="tc-avatar"><FaUser/><i className={isConnected ? "online" : ""}/></div><div><h2>{partnerName || (isMatching ? "Finding Partner..." : "Stranger")}</h2><span className={isConnected ? "online" : "waiting"}><i/>{isConnected ? "Online" : isMatching ? "Searching" : "Offline"}</span></div></div><div className="tc-chat-tools"><button title="Safety" type="button"><FaShieldAlt/></button><img src={chatLogo} alt="PerfectChat"/></div></div>

      {showPrivacy && <div className="tc-privacy"><FaLock/><p>You&apos;re chatting anonymously. Never share passwords, addresses, payment details, or other private information.</p><button onClick={() => setShowPrivacy(false)} type="button"><FaTimes/></button></div>}

      <div className="tc-messages" ref={messagesAreaRef}>
        <div className="tc-day">Today</div>
        {!ws && isReconnecting && <div className="tc-empty tc-status-empty"><img src={chatLogo} alt="PerfectChat logo"/><h3>Reconnecting...</h3><p>Your connection dropped. We&apos;re getting you back into the queue.</p></div>}
        {!ws && !isReconnecting && <div className="tc-empty"><img src={chatLogo} alt="PerfectChat logo"/><h3>Start chatting instantly</h3><p>Enter a nickname and connect with someone new.</p><input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter your nickname" onKeyDown={(event) => event.key === "Enter" && onStart()}/><button onClick={onStart} disabled={!username.trim()} type="button">Start Anonymous Chat</button>{connectionError && <span>{connectionError}</span>}</div>}
        {ws && messages.every((message) => message.sender === "System") && <div className="tc-empty tc-status-empty"><img src={chatLogo} alt="PerfectChat logo"/><h3>{isConnected ? "Connected!" : "Finding Partner..."}</h3><p>{isConnected ? `Start your anonymous conversation with ${partnerName}.` : "Please wait while we match you with someone new."}</p>{!isConnected && <button onClick={onRetry} type="button">Retry Match</button>}</div>}
        {messages.map((message, index) => {
          const outgoing = message.sender === "You"
          const system = message.sender === "System"
          if (system) return <div className="tc-system" key={`${message.sender}-${index}`}>{message.content}</div>
          return <div className={`tc-message ${outgoing ? "out" : "in"}`} key={`${message.sender}-${index}`}>{!outgoing && <div className="tc-small-avatar"><FaUser/></div>}<div className="tc-bubble">{message.content}<span>{formatTime(message.createdAt)}{outgoing && <FaCheck/>}</span></div></div>
        })}
        {isTyping && isConnected && <div className="tc-message in"><div className="tc-small-avatar"><FaUser/></div><div className="tc-typing"><i/><i/><i/></div></div>}
        <div ref={messagesEndRef}/>
      </div>

      <div className="tc-composer-wrap"><form className="tc-composer" onSubmit={onSubmit}><button className="tc-next" onClick={(event) => { event.preventDefault(); setShowMatchModal(true) }} disabled={!ws} type="button"><NextMatchIcon/><span>Next Match</span></button><input ref={messageInputRef} value={draftMessage} onChange={onDraftChange} onFocus={onComposerFocus} disabled={!isConnected} placeholder={isConnected ? "Type a message..." : "Waiting for connection..."}/><button className="tc-send" disabled={!isConnected || !draftMessage.trim()} type="submit"><FaPaperPlane/></button></form></div>
    </section></main>

    <footer className="tc-footer"><span>© {new Date().getFullYear()} PerfectChat</span><i/> <a href="#privacy">Privacy Policy</a><i/> <a href="#terms">Terms</a><i/> <a href="#guidelines">Community Guidelines</a></footer>

    {showMatchModal && <div className="tc-modal-backdrop" onClick={(event) => event.target === event.currentTarget && setShowMatchModal(false)}><div className="tc-modal"><div className="tc-modal-icon"><NextMatchIcon/></div><h3>Find a new match?</h3><p>This will end your current conversation and connect you with someone new.</p><div><button onClick={() => setShowMatchModal(false)} type="button">Cancel</button><button onClick={confirmNextMatch} type="button">Find Match</button></div></div></div>}
  </div>
}
