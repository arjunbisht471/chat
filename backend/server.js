const WebSocket = require("ws");
const http = require("http");
const axios = require("axios");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

let users = [];

function sendToClient(client, message) {
  if (client && client.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify(message));
  }
}

// Function to find a partner for the user
function findPartner(client) {
  const user = users.find((u) => u.ws === client);
  if (!user) return;

  const availableUsers = users.filter((u) => u.ws !== client && !u.partner);
  if (availableUsers.length > 0) {
    const partner = availableUsers[Math.floor(Math.random() * availableUsers.length)];

    // Set partners
    user.partner = partner.ws;
    partner.partner = user.ws;

    // Notify both clients of the match
    sendToClient(client, { type: "matched", partnerName: partner.username });
    sendToClient(partner.ws, { type: "matched", partnerName: user.username });
  } else {
    sendToClient(client, { type: "waiting", message: "Waiting for a partner..." });
  }
}

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET || "your-secret-key";
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      {},
      {
        params: { secret: secretKey, response: token },
      }
    );
    return response.data.success;
  } catch (err) {
    console.error("Error verifying reCAPTCHA:", err.message);
    return false;
  }
}

// WebSocket connection handling
wss.on("connection", (ws) => {
  ws.isAlive = true;

  ws.on("message", async (message) => {
    try {
      const data = JSON.parse(message);

      switch (data.type) {
        case "setUsername":
          const isValidRecaptcha = await verifyRecaptcha(data.recaptchaToken);
          if (!isValidRecaptcha) {
            sendToClient(ws, { type: "error", message: "reCAPTCHA validation failed." });
            return;
          }

          const username = data.username.trim();
          if (!username) {
            sendToClient(ws, { type: "error", message: "Invalid username." });
            return;
          }

          users.push({ ws, username, partner: null });
          findPartner(ws);
          break;

        case "image":
          const imageSender = users.find((user) => user.ws === ws);
          if (imageSender?.partner) {
            sendToClient(imageSender.partner, {
              type: "image",
              content: data.content,
              username: imageSender.username,
            });
          }
          break;

        case "videoOffer":
          const offerSender = users.find((user) => user.ws === ws);
          if (offerSender?.partner) {
            sendToClient(offerSender.partner, {
              type: "videoOffer",
              offer: data.offer,
              username: offerSender.username,
            });
          }
          break;

        case "videoAnswer":
          const answerSender = users.find((user) => user.ws === ws);
          if (answerSender?.partner) {
            sendToClient(answerSender.partner, {
              type: "videoAnswer",
              answer: data.answer,
              username: answerSender.username,
            });
          }
          break;

        case "candidate":
          const candidateSender = users.find((user) => user.ws === ws);
          if (candidateSender?.partner) {
            sendToClient(candidateSender.partner, {
              type: "candidate",
              candidate: data.candidate,
            });
          }
          break;

        case "skip":
          const skippingUser = users.find((user) => user.ws === ws);
          if (skippingUser) {
            if (skippingUser.partner) {
              sendToClient(skippingUser.partner, { type: "skip" });
              const partnerUser = users.find((user) => user.ws === skippingUser.partner);
              if (partnerUser) partnerUser.partner = null;
            }
            skippingUser.partner = null;
            findPartner(ws);
          }
          break;

        default:
          sendToClient(ws, { type: "error", message: "Unknown message type." });
      }
    } catch (error) {
      console.error("Error handling message:", error.message);
      sendToClient(ws, { type: "error", message: "An error occurred." });
    }
  });

  ws.on("pong", () => {
    ws.isAlive = true;
  });

  ws.on("close", () => {
    const userIndex = users.findIndex((user) => user.ws === ws);
    if (userIndex !== -1) {
      const user = users[userIndex];
      if (user.partner) {
        sendToClient(user.partner, { type: "partnerDisconnected" });
        const partnerUser = users.find((user) => user.partner === ws);
        if (partnerUser) partnerUser.partner = null;
      }
      users.splice(userIndex, 1);
    }
  });
});

// Ping-pong mechanism to detect and close stale connections
setInterval(() => {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive) {
      ws.terminate();
    } else {
      ws.isAlive = false;
      ws.ping();
    }
  });
}, 30000);

// Start the server
server.listen(5002, () => console.log("Server running on port 5002"));
