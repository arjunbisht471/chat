// import React, { useState, useEffect, useRef } from "react";
// import { 
//   FaMicrophone, 
//   FaMicrophoneSlash, 
//   FaVideo, 
//   FaVideoSlash, 
//   FaPhoneSlash, 
//   FaForward, 
//   FaGlobe, 
//   FaUserFriends, 
//   FaGamepad
// } from "react-icons/fa";
// import "./VideoChat.css";

// const VideoChat = ({ initialUsername = "" }) => {
//   const [username, setUsername] = useState(initialUsername);
//   const [ws, setWs] = useState(null);
//   const [isMatching, setIsMatching] = useState(false);
//   const [partnerName, setPartnerName] = useState(null);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isVideoOff, setIsVideoOff] = useState(false);
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [connectionState, setConnectionState] = useState('new');
//   const [localStreamReady, setLocalStreamReady] = useState(false);
//   const [remoteStreamReady, setRemoteStreamReady] = useState(false);
//   const [isOfferer, setIsOfferer] = useState(false);
  
//   const localVideoRef = useRef(null);
//   const partnerVideoRef = useRef(null);
//   const peerConnection = useRef(null);
//   const localStreamRef = useRef(null);
//   const queuedCandidates = useRef([]);
//   const hasSetRemoteDescription = useRef(false);
//   const wsRef = useRef(null); // Add ref for WebSocket to avoid stale closure issues

//   // Use the passed username if available
//   useEffect(() => {
//     if (initialUsername) {
//       setUsername(initialUsername);
//     }
//   }, [initialUsername]);

//   // Updated sendMessage function with better error handling and stale closure fix
//   const sendMessage = (message) => {
//     const currentWs = wsRef.current || ws;
//     if (currentWs && currentWs.readyState === WebSocket.OPEN) {
//       console.log("📤 Sending message:", message.type, message);
//       try {
//         currentWs.send(JSON.stringify(message));
//         return true;
//       } catch (error) {
//         console.error("❌ Failed to send message:", error);
//         handlePartnerDisconnect("Connection error");
//         return false;
//       }
//     } else {
//       console.error("❌ WebSocket not connected, state:", currentWs?.readyState);
//       // Only show disconnect message if we were actually in a call
//       if (partnerName && message.type !== 'ping') {
//         handlePartnerDisconnect("Connection lost");
//       }
//       return false;
//     }
//   };

//   const connectWebSocket = () => {
//     setIsConnecting(true);
//     const socket = new WebSocket("wss://perfactchat.com:5002");
    
//     // Set the ref immediately
//     wsRef.current = socket;

//     socket.onopen = () => {
//       console.log("🔗 WebSocket connected");
//       setWs(socket);
//       wsRef.current = socket;
//       setIsConnecting(false);

//       // Send the initial setUsername message after connection
//       socket.send(
//         JSON.stringify({
//           type: "setUsername",
//           username,
//         })
//       );
//     };

//     socket.onmessage = async (message) => {
//       const data = JSON.parse(message.data);
//       console.log("📨 WebSocket message received:", data.type, data);

//       switch (data.type) {
//         case "usernameSet":
//           console.log("✅ Username set successfully");
//           break;

//         case "matched":
//           console.log("🤝 Matched with partner:", data.partnerName);
//           setPartnerName(data.partnerName);
//           setIsMatching(true);
//           // Reset states
//           hasSetRemoteDescription.current = false;
//           queuedCandidates.current = [];
//           setRemoteStreamReady(false);
          
//           // Add small delay before initializing video call to ensure WebSocket is stable
//           setTimeout(async () => {
//             const currentSocket = wsRef.current;
//             if (currentSocket && currentSocket.readyState === WebSocket.OPEN) {
//               await initializeVideoCall();
//             } else {
//               console.error("❌ WebSocket not ready for video call");
//               handlePartnerDisconnect("Connection lost during video setup");
//             }
//           }, 500);
//           break;

//         case "videoOffer":
//           console.log("📞 Received video offer");
//           setIsOfferer(false);
//           await handleOffer(data.offer);
//           break;

//         case "videoAnswer":
//           console.log("✅ Received video answer");
//           await handleAnswer(data.answer);
//           break;

//         case "iceCandidate":
//           console.log("🧊 Received ICE candidate");
//           await handleIceCandidate(data.candidate);
//           break;

//         case "partnerDisconnected":
//           console.warn("👋 Partner disconnected");
//           handlePartnerDisconnect("Your partner disconnected.");
//           break;

//         case "skip":
//           console.warn("⏭️ Partner skipped");
//           handlePartnerDisconnect("Partner skipped the call.");
//           break;

//         case "waiting":
//           console.log("⏳ Waiting for partner:", data.message);
//           break;

//         case "error":
//           console.error("❌ Server error:", data.message);
//           handlePartnerDisconnect(data.message);
//           break;

//         case "pong":
//           console.log("🏓 Received pong from server");
//           break;

//         default:
//           console.error("❓ Unknown message type:", data.type);
//       }
//     };

//     socket.onclose = (event) => {
//       console.warn("🔌 WebSocket disconnected", { code: event.code, reason: event.reason });
//       setWs(null);
//       wsRef.current = null;
//       setIsMatching(false);
//       setIsConnecting(false);
      
//       // If we were in a call, show disconnection message
//       if (partnerName) {
//         handlePartnerDisconnect("Connection lost");
//       }
//     };

//     socket.onerror = (error) => {
//       console.error("❌ WebSocket error:", error);
//       setIsConnecting(false);
//       setWs(null);
//       wsRef.current = null;
//     };
//   };

//   const handlePartnerDisconnect = (message) => {
//     showToast(message);
//     endCall();
//   };

//   const showToast = (message) => {
//     const toast = document.createElement("div");
//     toast.className = "toast-notification";
//     toast.innerText = message;
//     document.body.appendChild(toast);
    
//     setTimeout(() => {
//       toast.classList.add("show");
//       setTimeout(() => {
//         toast.classList.remove("show");
//         setTimeout(() => {
//           if (document.body.contains(toast)) {
//             document.body.removeChild(toast);
//           }
//         }, 300);
//       }, 3000);
//     }, 100);
//   };

//   const startChat = () => {
//     if (!username.trim()) {
//       showToast("Please enter a username.");
//       return;
//     }

//     connectWebSocket();
//     setIsMatching(true);
//   };

//   const createPeerConnection = () => {
//     console.log("🔧 Creating peer connection");
    
//     const pc = new RTCPeerConnection({
//       iceServers: [
//         { urls: "stun:stun.l.google.com:19302" },
//         { urls: "stun:stun1.l.google.com:19302" },
//         { urls: "stun:stun2.l.google.com:19302" },
//         { urls: "stun:stun3.l.google.com:19302" },
//         { urls: "stun:stun4.l.google.com:19302" }
//       ],
//       iceCandidatePoolSize: 10
//     });

//     pc.onicecandidate = (event) => {
//       if (event.candidate) {
//         console.log("🧊 Sending ICE candidate:", event.candidate.type);
//         sendMessage({ type: "iceCandidate", candidate: event.candidate });
//       } else {
//         console.log("✅ ICE gathering completed");
//       }
//     };

//     pc.oniceconnectionstatechange = () => {
//       console.log("🔗 ICE connection state:", pc.iceConnectionState);
//       setConnectionState(pc.iceConnectionState);
      
//       if (pc.iceConnectionState === 'failed') {
//         console.log("❌ ICE connection failed, restarting...");
//         pc.restartIce();
//       } else if (pc.iceConnectionState === 'connected') {
//         console.log("✅ ICE connection established");
//       }
//     };

//     pc.ontrack = (event) => {
//       console.log("🎥 Remote track received:", {
//         kind: event.track.kind,
//         enabled: event.track.enabled,
//         readyState: event.track.readyState,
//         streamId: event.streams[0]?.id
//       });
      
//       if (event.streams && event.streams[0]) {
//         console.log("📺 Setting partner video stream");
//         if (partnerVideoRef.current) {
//           partnerVideoRef.current.srcObject = event.streams[0];
//           setRemoteStreamReady(true);
          
//           // Audio troubleshooting
//           const stream = event.streams[0];
//           const audioTracks = stream.getAudioTracks();
//           const videoTracks = stream.getVideoTracks();
          
//           console.log("🔊 Remote stream tracks:", {
//             audio: audioTracks.length,
//             video: videoTracks.length
//           });
          
//           audioTracks.forEach((track, index) => {
//             console.log(`🔊 Remote audio track ${index}:`, {
//               enabled: track.enabled,
//               muted: track.muted,
//               readyState: track.readyState,
//               label: track.label
//             });
//           });
          
//           // Set video properties for audio
//           partnerVideoRef.current.muted = false; // IMPORTANT: Don't mute partner video
//           partnerVideoRef.current.volume = 1.0;
//           partnerVideoRef.current.controls = false;
          
//           // Ensure video plays with audio
//           const playPromise = partnerVideoRef.current.play();
//           if (playPromise !== undefined) {
//             playPromise
//               .then(() => {
//                 console.log("✅ Partner video playing with audio");
//                 // Double check audio is not muted
//                 if (partnerVideoRef.current.muted) {
//                   partnerVideoRef.current.muted = false;
//                   console.log("🔊 Unmuted partner video for audio");
//                 }
//               })
//               .catch(error => {
//                 console.error("❌ Partner video play error:", error);
//                 // Try to play with muted first, then unmute
//                 partnerVideoRef.current.muted = true;
//                 partnerVideoRef.current.play().then(() => {
//                   setTimeout(() => {
//                     partnerVideoRef.current.muted = false;
//                     console.log("🔊 Unmuted partner video after autoplay");
//                   }, 1000);
//                 }).catch(e => console.error("❌ Still failed to play:", e));
//               });
//           }
//         }
//       }
//     };

//     pc.onconnectionstatechange = () => {
//       console.log("🔗 Connection state:", pc.connectionState);
//       if (pc.connectionState === 'connected') {
//         console.log("🎉 WebRTC connection fully established");
//       }
//     };

//     pc.onsignalingstatechange = () => {
//       console.log("📡 Signaling state:", pc.signalingState);
//     };

//     return pc;
//   };

//   const getLocalStream = async () => {
//     try {
//       console.log("🎥 Requesting local media stream");
//       const constraints = {
//         video: { 
//           width: { min: 640, ideal: 1280, max: 1920 },
//           height: { min: 480, ideal: 720, max: 1080 },
//           frameRate: { ideal: 30, max: 60 }
//         },
//         audio: {
//           echoCancellation: true,
//           noiseSuppression: true,
//           autoGainControl: true,
//           sampleRate: 44100,
//           channelCount: 2,
//           latency: 0.01
//         }
//       };

//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       console.log("✅ Local stream obtained:", {
//         videoTracks: stream.getVideoTracks().length,
//         audioTracks: stream.getAudioTracks().length,
//         id: stream.id
//       });

//       // Log track details and test audio
//       stream.getTracks().forEach(track => {
//         console.log(`Track ${track.kind}:`, {
//           enabled: track.enabled,
//           muted: track.muted,
//           readyState: track.readyState,
//           label: track.label
//         });
        
//         // Ensure audio track is enabled
//         if (track.kind === 'audio') {
//           track.enabled = true;
//           console.log("🔊 Audio track force enabled:", track.enabled);
//         }
//       });

//       return stream;
//     } catch (error) {
//       console.error("❌ Error getting local stream:", error);
//       throw error;
//     }
//   };

//   const initializeVideoCall = async () => {
//     try {
//       console.log("🚀 Initializing video call");
      
//       // Get local stream
//       const localStream = await getLocalStream();
//       localStreamRef.current = localStream;
      
//       if (localVideoRef.current) {
//         localVideoRef.current.srcObject = localStream;
//         setLocalStreamReady(true);
//       }

//       // Create peer connection
//       peerConnection.current = createPeerConnection();

//       // Add tracks to peer connection
//       localStream.getTracks().forEach((track) => {
//         console.log(`➕ Adding ${track.kind} track to peer connection`);
//         peerConnection.current.addTrack(track, localStream);
//       });

//       // Wait a bit for peer connection to be ready
//       await new Promise(resolve => setTimeout(resolve, 200));

//       // Create and send offer
//       console.log("📞 Creating offer");
//       setIsOfferer(true);
      
//       const offer = await peerConnection.current.createOffer({
//         offerToReceiveAudio: true,
//         offerToReceiveVideo: true
//       });
      
//       console.log("✅ Offer created");
//       await peerConnection.current.setLocalDescription(offer);
//       console.log("✅ Local description set");
      
//       // Use the ref to check WebSocket status and send message
//       const success = sendMessage({ type: "videoOffer", offer });
//       if (!success) {
//         console.error("❌ Failed to send video offer");
//         handlePartnerDisconnect("Connection lost during video setup");
//       }
      
//     } catch (error) {
//       console.error("❌ Error initializing video call:", error);
//       handlePartnerDisconnect("Unable to access camera or microphone. Please check your permissions.");
//     }
//   };

//   const handleOffer = async (offer) => {
//     try {
//       console.log("📞 Handling received offer");
      
//       // Get local stream if not already available
//       if (!localStreamRef.current) {
//         const localStream = await getLocalStream();
//         localStreamRef.current = localStream;
        
//         if (localVideoRef.current) {
//           localVideoRef.current.srcObject = localStream;
//           setLocalStreamReady(true);
//         }
//       }

//       // Create peer connection if not exists
//       if (!peerConnection.current) {
//         peerConnection.current = createPeerConnection();
        
//         // Add tracks to peer connection
//         localStreamRef.current.getTracks().forEach((track) => {
//           console.log(`➕ Adding ${track.kind} track to peer connection`);
//           peerConnection.current.addTrack(track, localStreamRef.current);
//         });
//       }

//       // Set remote description
//       console.log("📡 Setting remote description (offer)");
//       await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
//       hasSetRemoteDescription.current = true;
//       console.log("✅ Remote description set");

//       // Process queued ICE candidates
//       await processQueuedCandidates();

//       // Create answer
//       console.log("📞 Creating answer");
//       const answer = await peerConnection.current.createAnswer({
//         offerToReceiveAudio: true,
//         offerToReceiveVideo: true
//       });
      
//       console.log("✅ Answer created");
//       await peerConnection.current.setLocalDescription(answer);
//       console.log("✅ Local description set (answer)");
      
//       sendMessage({ type: "videoAnswer", answer });
      
//     } catch (error) {
//       console.error("❌ Error handling offer:", error);
//       handlePartnerDisconnect("Error setting up video connection.");
//     }
//   };

//   const handleAnswer = async (answer) => {
//     try {
//       console.log("✅ Handling received answer");
      
//       if (peerConnection.current && peerConnection.current.signalingState !== 'closed') {
//         await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
//         hasSetRemoteDescription.current = true;
//         console.log("✅ Remote description set (answer)");
        
//         // Process queued ICE candidates
//         await processQueuedCandidates();
//       }
//     } catch (error) {
//       console.error("❌ Error handling answer:", error);
//     }
//   };

//   const handleIceCandidate = async (candidate) => {
//     try {
//       if (peerConnection.current && hasSetRemoteDescription.current && peerConnection.current.signalingState !== 'closed') {
//         await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
//         console.log("✅ ICE candidate added");
//       } else {
//         console.log("⏳ Queueing ICE candidate (remote description not set)");
//         queuedCandidates.current.push(candidate);
//       }
//     } catch (error) {
//       console.error("❌ Error adding ICE candidate:", error);
//     }
//   };

//   const processQueuedCandidates = async () => {
//     if (queuedCandidates.current.length > 0) {
//       console.log(`🔄 Processing ${queuedCandidates.current.length} queued ICE candidates`);
      
//       for (const candidate of queuedCandidates.current) {
//         try {
//           if (peerConnection.current && peerConnection.current.remoteDescription) {
//             await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
//             console.log("✅ Queued ICE candidate added");
//           }
//         } catch (error) {
//           console.error("❌ Error adding queued ICE candidate:", error);
//         }
//       }
      
//       queuedCandidates.current = [];
//     }
//   };

//   const toggleMute = () => {
//     if (localStreamRef.current) {
//       const audioTracks = localStreamRef.current.getAudioTracks();
//       audioTracks.forEach(track => {
//         track.enabled = !track.enabled;
//         console.log(`🔊 Audio track ${track.enabled ? 'enabled' : 'disabled'}`);
//       });
//       setIsMuted(!isMuted);
//       console.log(`🔇 Audio ${isMuted ? 'unmuted' : 'muted'}`);
      
//       // Also update the sender if peer connection exists
//       if (peerConnection.current) {
//         const sender = peerConnection.current.getSenders().find(s => 
//           s.track && s.track.kind === 'audio'
//         );
//         if (sender && sender.track) {
//           sender.track.enabled = !isMuted;
//           console.log(`🔊 Updated sender audio track: ${sender.track.enabled}`);
//         }
//       }
//     }
//   };

//   const toggleVideo = () => {
//     if (localStreamRef.current) {
//       const videoTracks = localStreamRef.current.getVideoTracks();
//       videoTracks.forEach(track => {
//         track.enabled = !track.enabled;
//       });
//       setIsVideoOff(!isVideoOff);
//       console.log(`📹 Video ${isVideoOff ? 'enabled' : 'disabled'}`);
//     }
//   };

//   const endCall = () => {
//     console.log("☎️ Ending call");
    
//     // Reset states
//     setLocalStreamReady(false);
//     setRemoteStreamReady(false);
//     setIsOfferer(false);
//     hasSetRemoteDescription.current = false;
//     queuedCandidates.current = [];
    
//     // Close peer connection
//     if (peerConnection.current) {
//       peerConnection.current.close();
//       peerConnection.current = null;
//     }
    
//     // Stop local stream
//     if (localStreamRef.current) {
//       localStreamRef.current.getTracks().forEach(track => {
//         track.stop();
//         console.log(`🛑 Stopped ${track.kind} track`);
//       });
//       localStreamRef.current = null;
//     }
    
//     // Clear video elements
//     if (localVideoRef.current) localVideoRef.current.srcObject = null;
//     if (partnerVideoRef.current) partnerVideoRef.current.srcObject = null;
    
//     // Reset UI state
//     setPartnerName(null);
//     setConnectionState('new');
//     setIsMatching(false);
//     setIsMuted(false);
//     setIsVideoOff(false);
  
//     // Close WebSocket
//     if (wsRef.current) {
//       wsRef.current.close();
//       wsRef.current = null;
//     }
//     if (ws) {
//       ws.close();
//       setWs(null);
//     }
//   };

//   const skipCall = () => {
//     console.log("⏭️ Skipping call");
//     sendMessage({ type: "skip" });

//     // Reset video connection but keep WebSocket
//     if (peerConnection.current) {
//       peerConnection.current.close();
//       peerConnection.current = null;
//     }
    
//     if (localStreamRef.current) {
//       localStreamRef.current.getTracks().forEach(track => track.stop());
//       localStreamRef.current = null;
//     }
    
//     // Reset states
//     setLocalStreamReady(false);
//     setRemoteStreamReady(false);
//     setIsOfferer(false);
//     hasSetRemoteDescription.current = false;
//     queuedCandidates.current = [];
    
//     if (localVideoRef.current) localVideoRef.current.srcObject = null;
//     if (partnerVideoRef.current) partnerVideoRef.current.srcObject = null;
    
//     setPartnerName(null);
//     setConnectionState('new');
//     setIsMuted(false);
//     setIsVideoOff(false);
    
//     // Stay in matching mode
//     setIsMatching(true);
//   };

//   // Heartbeat effect with better WebSocket reference handling
//   useEffect(() => {
//     let heartbeat;
//     const currentWs = wsRef.current || ws;
    
//     if (currentWs && currentWs.readyState === WebSocket.OPEN) {
//       heartbeat = setInterval(() => {
//         const wsToCheck = wsRef.current || ws;
//         if (wsToCheck && wsToCheck.readyState === WebSocket.OPEN) {
//           sendMessage({ type: "ping" });
//         } else {
//           console.log("⚠️ Clearing heartbeat - WebSocket not connected");
//           clearInterval(heartbeat);
//         }
//       }, 25000);
//     }
    
//     return () => {
//       if (heartbeat) {
//         clearInterval(heartbeat);
//       }
//     };
//   }, [ws]); // Keep dependency on ws state for reactivity

//   // Cleanup effect
//   useEffect(() => {
//     return () => {
//       if (localStreamRef.current) {
//         localStreamRef.current.getTracks().forEach(track => track.stop());
//       }
//       if (peerConnection.current) {
//         peerConnection.current.close();
//       }
//       if (wsRef.current) {
//         wsRef.current.close();
//       }
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, []);

//   return (
//     <div className="video-chat-app">
//       <div className="ad-container ad-top">
//         <div className="ad-placeholder">
//           <p>Advertisement</p>
//         </div>
//       </div>

//       <div className="video-chat-container">
//         {!isMatching ? (
//           <div className="welcome-container">
//             <div className="welcome-card">
//               <h1 className="app-title">Random Video Chat</h1>
//               <p className="app-description">Connect with random people around the world!</p>
              
//               <div className="username-section">
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="username-input"
//                   onKeyPress={(e) => {
//                     if (e.key === 'Enter') {
//                       startChat();
//                     }
//                   }}
//                 />
//                 <button onClick={startChat} className="start-chat-button" disabled={isConnecting}>
//                   {isConnecting ? (
//                     <div className="loading-spinner"></div>
//                   ) : (
//                     <>Start Chatting</>
//                   )}
//                 </button>
//               </div>
              
//               <div className="features">
//                 <div className="feature">
//                   <div className="feature-icon"><FaUserFriends /></div>
//                   <div className="feature-text">Meet new people</div>
//                 </div>
//                 <div className="feature">
//                   <div className="feature-icon"><FaGlobe /></div>
//                   <div className="feature-text">Global connections</div>
//                 </div>
//                 <div className="feature">
//                   <div className="feature-icon"><FaGamepad /></div>
//                   <div className="feature-text">Fun interactions</div>
//                 </div>
//               </div>
//             </div>
           
//             <div className="ad-container ad-welcome-side">
//               <div className="ad-placeholder">
//                 <p>Advertisement</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="chat-section">
//             <div className="video-container">
//               <div className="main-video-area">
//                 {partnerName ? (
//                   <div className="partner-info">
//                     <span className="partner-name">{partnerName}</span>
//                     <span className="connection-status">
//                       Connection: {connectionState} 
//                       {localStreamReady && " | Local: ✅"}
//                       {remoteStreamReady && " | Remote: ✅"}
//                     </span>
//                   </div>
//                 ) : (
//                   <div className="connecting-message">
//                     <div className="loading-dots">
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                     </div>
//                     <p>Finding someone to chat with...</p>
//                   </div>
//                 )}
                
//                 <video
//                   ref={partnerVideoRef}
//                   autoPlay
//                   playsInline
//                   className="video partner-video"
//                   style={{ 
//                     backgroundColor: '#000',
//                     objectFit: 'cover',
//                     border: remoteStreamReady ? '2px solid green' : '2px solid red'
//                   }}
//                   onLoadedMetadata={() => {
//                     console.log("Partner video metadata loaded");
//                     // Check audio tracks when metadata loads
//                     if (partnerVideoRef.current && partnerVideoRef.current.srcObject) {
//                       const stream = partnerVideoRef.current.srcObject;
//                       const audioTracks = stream.getAudioTracks();
//                       console.log("🔊 Partner audio tracks on metadata:", audioTracks.length);
//                       audioTracks.forEach((track, i) => {
//                         console.log(`🔊 Partner audio track ${i}:`, {
//                           enabled: track.enabled,
//                           muted: track.muted,
//                           readyState: track.readyState
//                         });
//                       });
//                     }
//                   }}
//                   onPlay={() => {
//                     console.log("▶️ Partner video started playing");
//                     // Ensure audio is unmuted when video starts playing
//                     if (partnerVideoRef.current) {
//                       partnerVideoRef.current.muted = false;
//                       partnerVideoRef.current.volume = 1.0;
//                       console.log("🔊 Partner video unmuted on play");
//                     }
//                   }}
//                   onError={(e) => console.error("❌ Partner video error:", e)}
//                 />
                
//                 <div className="local-video-container">
//                   <video
//                     ref={localVideoRef}
//                     autoPlay
//                     playsInline
//                     muted
//                     className="video local-video"
//                     style={{ 
//                       border: localStreamReady ? '2px solid green' : '2px solid red'
//                     }}
//                     onLoadedMetadata={() => console.log("📺 Local video metadata loaded")}
//                     onPlay={() => console.log("▶️ Local video started playing")}
//                   />
//                   <div className="username-display">{username}</div>
//                 </div>
//               </div>

//               <div className="control-panel">
//                 <button 
//                   onClick={toggleMute} 
//                   className={`control-button ${isMuted ? 'active' : ''}`}
//                   aria-label={isMuted ? "Unmute" : "Mute"}
//                   title={isMuted ? "Unmute" : "Mute"}
//                 >
//                   {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
//                 </button>
//                 <button 
//                   onClick={toggleVideo} 
//                   className={`control-button ${isVideoOff ? 'active' : ''}`}
//                   aria-label={isVideoOff ? "Turn video on" : "Turn video off"}
//                   title={isVideoOff ? "Turn video on" : "Turn video off"}
//                 >
//                   {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
//                 </button>
//                 <button 
//                   onClick={skipCall} 
//                   className="control-button skip-button"
//                   aria-label="Skip to next person"
//                   title="Skip to next person"
//                 >
//                   <FaForward />
//                 </button>
//                 <button 
//                   onClick={endCall} 
//                   className="control-button end-button"
//                   aria-label="End call"
//                   title="End call"
//                 >
//                   <FaPhoneSlash />
//                 </button>
                
//                 {/* Audio Debug Info */}
//                 <div style={{fontSize: '10px', color: '#666', marginTop: '5px'}}>
//                   Local Audio: {localStreamReady ? '✅' : '❌'} | 
//                   Remote Audio: {remoteStreamReady ? '✅' : '❌'} | 
//                   Muted: {isMuted ? '🔇' : '🔊'}
//                 </div>
//               </div>
//             </div>

//             <div className="ad-container ad-chat-side">
//               <div className="ad-placeholder">
//                 <p>Advertisement</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="ad-container ad-bottom">
//         <div className="ad-placeholder">
//           <p>Advertisement</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoChat;