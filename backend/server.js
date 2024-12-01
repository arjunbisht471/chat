const express = require('express');
const WebSocket = require('ws');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load SSL certificates for HTTPS server (adjust paths as needed)
const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/perfactchat.com/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/perfactchat.com/privkey.pem'),
};

const app = express();

// Create HTTPS server
const server = https.createServer(options, app);

// Create WebSocket server on the HTTPS server
const wss = new WebSocket.Server({ server });

let waitingUsers = [];

// Serve static files from 'public' (adjust if needed)
app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
  console.log('New client connected');

  waitingUsers.push(ws);

  // Match users for chat
  if (waitingUsers.length >= 2) {
    const user1 = waitingUsers.shift();
    const user2 = waitingUsers.shift();

    user1.send(JSON.stringify({ type: 'matched', partnerName: user2._socket.remoteAddress }));
    user2.send(JSON.stringify({ type: 'matched', partnerName: user1._socket.remoteAddress }));

    user1.send(JSON.stringify({ type: 'videoChat', message: 'You are now matched with someone for video chat!' }));
    user2.send(JSON.stringify({ type: 'videoChat', message: 'You are now matched with someone for video chat!' }));
  }

  // Handle incoming WebSocket messages (e.g., WebRTC signaling)
  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'offer' || data.type === 'answer' || data.type === 'candidate') {
      // Relay WebRTC signaling message to the partner user
      const partner = waitingUsers.find(user => user._socket.remoteAddress === data.partnerId);
      if (partner) {
        partner.send(JSON.stringify(data));
      }
    }
  });

  // Handle WebSocket close event
  ws.on('close', () => {
    console.log('Client disconnected');
    waitingUsers = waitingUsers.filter(user => user !== ws);
  });
});

// Set the server to listen on port 5001 (adjust if needed)
const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
