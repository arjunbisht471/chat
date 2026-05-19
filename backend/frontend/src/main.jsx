import React, { Component, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            background: "#0b1220",
            color: "#f8fafc",
            padding: "24px",
            fontFamily: "Segoe UI, sans-serif",
          }}
        >
          <div
            style={{
              maxWidth: "720px",
              width: "100%",
              background: "#111827",
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <h1 style={{ marginTop: 0 }}>Frontend error</h1>
            <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{String(this.state.error)}</pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
