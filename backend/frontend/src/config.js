export function getWebSocketUrl() {
  const customUrl = import.meta.env.VITE_WS_URL
  if (customUrl) {
    return customUrl
  }

  const protocol = import.meta.env.VITE_WS_PROTOCOL || (window.location.protocol === "https:" ? "wss" : "ws")
  const configuredHost = import.meta.env.VITE_WS_HOST
  const configuredPort = import.meta.env.VITE_WS_PORT

  if (configuredHost) {
    return `${protocol}://${configuredHost}${configuredPort ? `:${configuredPort}` : ""}`
  }

  if (!import.meta.env.DEV && window.location.host) {
    return `${protocol}://${window.location.host}`
  }

  const host = window.location.hostname || "localhost"
  const port = configuredPort || "5002"
  return `${protocol}://${host}:${port}`
}

export function getRtcConfiguration() {
  const stunUrls = (import.meta.env.VITE_STUN_URLS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)

  const iceServers = [
    ...(stunUrls.length > 0
      ? [{ urls: stunUrls }]
      : [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:stun1.l.google.com:19302",
              "stun:stun2.l.google.com:19302",
              "stun:stun3.l.google.com:19302",
              "stun:stun4.l.google.com:19302",
            ],
          },
        ]),
  ]

  const turnUrls = (import.meta.env.VITE_TURN_URLS || import.meta.env.VITE_TURN_URL || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)
  const turnUsername = import.meta.env.VITE_TURN_USERNAME
  const turnCredential = import.meta.env.VITE_TURN_CREDENTIAL

  if (turnUrls.length > 0 && turnUsername && turnCredential) {
    iceServers.push({
      urls: turnUrls,
      username: turnUsername,
      credential: turnCredential,
    })
  } else if (import.meta.env.PROD) {
    console.warn("[WebRTC] TURN is not configured; calls may fail across restrictive networks.")
  }

  return {
    iceServers,
    iceCandidatePoolSize: 10,
    iceTransportPolicy: import.meta.env.VITE_ICE_TRANSPORT_POLICY === "relay" ? "relay" : "all",
    bundlePolicy: "max-bundle",
  }
}
