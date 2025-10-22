import { io } from 'socket.io-client';

// Test WebSocket connection
const socket = io('http://localhost:3001');

socket.on('connect', () => {
  console.log('✅ Connected to WebSocket server');

  // Join a test room
  socket.emit('joinRoom', 'test-session-123');
  console.log('✅ Joined test room');

  // Send a test message
  socket.emit('sendMessage', {
    content: 'Hello from test client!',
    sessionId: 'test-session-123',
    timestamp: new Date().toISOString(),
  });
  console.log('✅ Sent test message');

  // Listen for messages
  socket.on('newMessage', (message) => {
    console.log('📨 Received message:', message);
  });

  // Disconnect after 5 seconds
  setTimeout(() => {
    socket.disconnect();
    console.log('✅ Test completed, disconnected');
    process.exit(0);
  }, 5000);
});

socket.on('disconnect', () => {
  console.log('❌ Disconnected from WebSocket server');
});

socket.on('connect_error', (error) => {
  console.error('❌ WebSocket connection error:', error);
  process.exit(1);
});

// Timeout after 10 seconds if no connection
setTimeout(() => {
  console.error('❌ Connection timeout');
  process.exit(1);
}, 10000);