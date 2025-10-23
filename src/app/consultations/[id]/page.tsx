"use client";
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { io, Socket } from 'socket.io-client';
import FadeIn from '@/components/animations/FadeIn';
import ChatRoom from '@/components/consultations/ChatRoom';
import SessionTimer from '@/components/consultations/SessionTimer';

interface Message {
  id: string;
  content: string;
  senderId: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    role: string;
  };
}

interface Session {
  id: string;
  startTime: string;
  endTime: string | null;
  status: string;
  consultant: {
    id: string;
    name: string;
    role: string;
  };
  client: {
    id: string;
    name: string;
    role: string;
  };
  messages: Message[];
}

export default function ChatRoomPage() {
  const params = useParams();
  const sessionId = params.id as string;
  
  const [socket, setSocket] = useState<Socket | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const [currentUserId] = useState('user-123'); // Mock user ID

  const fetchSession = useCallback(async () => {
    try {
      // In production, fetch from your API
      // const response = await fetch(`http://localhost:3001/sessions/${sessionId}`);
      // const data = await response.json();
      
      // Mock session data for now
      const mockSession: Session = {
        id: sessionId,
        startTime: new Date().toISOString(),
        endTime: null,
        status: 'active',
        consultant: {
          id: 'consultant-1',
          name: 'Dr. Sarah Chen',
          role: 'consultant',
        },
        client: {
          id: currentUserId,
          name: 'John Doe',
          role: 'client',
        },
        messages: [],
      };

      setSession(mockSession);
      setMessages(mockSession.messages);
    } catch (error) {
      console.error('Error fetching session:', error);
    }
  }, [sessionId, currentUserId]);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io('http://localhost:3001', {
      transports: ['websocket'],
    });

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server');
      
      // Join the room
      newSocket.emit('joinRoom', {
        sessionId,
        userId: currentUserId,
      });
    });

    newSocket.on('joinedRoom', (data) => {
      console.log('Joined room:', data);
    });

    newSocket.on('newMessage', (message: Message) => {
      console.log('New message received:', message);
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('userTyping', ({ userId, isTyping }) => {
      setTypingUsers((prev) => {
        const newSet = new Set(prev);
        if (isTyping) {
          newSet.add(userId);
        } else {
          newSet.delete(userId);
        }
        return newSet;
      });
    });

    newSocket.on('userJoined', ({ userId }) => {
      console.log('User joined:', userId);
    });

    newSocket.on('userLeft', ({ userId }) => {
      console.log('User left:', userId);
    });

    setSocket(newSocket);

    // Fetch session data
    fetchSession();

    return () => {
      if (socket) {
        socket.emit('leaveRoom', { sessionId, userId: currentUserId });
        socket.disconnect();
      }
    };
  }, [sessionId, currentUserId, fetchSession, socket]);

  const handleSendMessage = (content: string) => {
    if (!socket || !session) return;

    socket.emit('sendMessage', {
      sessionId,
      content,
      senderId: currentUserId,
    });
  };

  const handleTyping = (isTyping: boolean) => {
    if (!socket) return;

    socket.emit('typing', {
      sessionId,
      userId: currentUserId,
      isTyping,
    });
  };

  if (!session) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Session not found</h2>
          <p className="text-gray-400">This consultation session does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FadeIn>
          {/* Header */}
          <div className="bg-gray-900 rounded-t-2xl border-b border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {session.consultant.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{session.consultant.name}</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">Online</span>
                  </div>
                </div>
              </div>

              <SessionTimer 
                startTime={new Date(session.startTime)} 
                endTime={session.endTime ? new Date(session.endTime) : null}
              />
            </div>
          </div>

          {/* Chat Room */}
          <div className="bg-gray-900 rounded-b-2xl">
            <ChatRoom
              messages={messages}
              currentUserId={currentUserId}
              onSendMessage={handleSendMessage}
              onTyping={handleTyping}
              typingUsers={typingUsers}
            />
          </div>

          {/* Session Info Panel */}
          <div className="mt-6 bg-gray-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Session Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Status:</span>
                <span className={`ml-2 px-2 py-1 rounded text-xs ${
                  session.status === 'active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {session.status}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Messages:</span>
                <span className="ml-2 text-white">{messages.length}</span>
              </div>
              <div>
                <span className="text-gray-400">Started:</span>
                <span className="ml-2 text-white">
                  {new Date(session.startTime).toLocaleTimeString()}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Participants:</span>
                <span className="ml-2 text-white">2</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
