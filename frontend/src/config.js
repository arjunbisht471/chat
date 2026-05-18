export function getWebSocketUrl() {
  const customUrl = import.meta.env.VITE_WS_URL
  if (customUrl) {
    return customUrl
  }

  const protocol = import.meta.env.VITE_WS_PROTOCOL || (window.location.protocol === "https:" ? "wss" : "ws")
  const host = import.meta.env.VITE_WS_HOST || window.location.hostname || "localhost"
  const port = import.meta.env.VITE_WS_PORT || "5002"

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

  const turnUrl = import.meta.env.VITE_TURN_URL
  const turnUsername = import.meta.env.VITE_TURN_USERNAME
  const turnCredential = import.meta.env.VITE_TURN_CREDENTIAL

  if (turnUrl && turnUsername && turnCredential) {
    iceServers.push({
      urls: turnUrl,
      username: turnUsername,
      credential: turnCredential,
    })
  }

  return {
    iceServers,
    iceCandidatePoolSize: 10,
  }
}
