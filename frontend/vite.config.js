import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/perfactchat.com/privkey.pem'),   // Path to your private key
      cert: fs.readFileSync('/etc/letsencrypt/live/perfactchat.com/fullchain.pem'), // Path to your full certificate chain
    },
    host: '0.0.0.0',  
    port: 5001,       // Set the port to 5001
  },
});

