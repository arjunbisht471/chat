const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const path = require('path');  // For serving static files dynamically

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let waitingUsers = []; 

// Serve static files from the 'public' directory (update if directory structure is different)
app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
  console.log('New client connected');

  waitingUsers.push(ws);

  // Try to match with another user
  if (waitingUsers.length >= 2) {
    const user1 = waitingUsers.shift(); 
    const user2 = waitingUsers.shift(); 

    user1.send(JSON.stringify({ type: 'matched', partnerId: user2._socket.remoteAddress }));
    user2.send(JSON.stringify({ type: 'matched', partnerId: user1._socket.remoteAddress }));

    // Notify users that they are matched and ready to start the video chat
    user1.send(JSON.stringify({ type: 'videoChat', message: 'You are now matched with someone for video chat!' }));
    user2.send(JSON.stringify({ type: 'videoChat', message: 'You are now matched with someone for video chat!' }));
  }

  // Handle incoming messages (for signaling WebRTC)
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

  // Handle WebSocket close
  ws.on('close', () => {
    console.log('Client disconnected');
    // Remove the user from the waiting queue
    waitingUsers = waitingUsers.filter(user => user !== ws);
  });
});

// Use dynamic port from environment variables or default to 5000 for local testing
const port = process.env.PORT || 5001;  // Changing to port 5001
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

