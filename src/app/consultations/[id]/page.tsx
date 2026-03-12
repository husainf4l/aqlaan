"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
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

const CURRENT_USER_ID = 'user-123';
const CONSULTANT_ID = 'consultant-1';

export default function ChatRoomPage() {
  const params = useParams();
  const sessionId = params.id as string;

  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUsers] = useState<Set<string>>(new Set());

  useEffect(() => {
    const mockSession: Session = {
      id: sessionId,
      startTime: new Date().toISOString(),
      endTime: null,
      status: 'active',
      consultant: {
        id: CONSULTANT_ID,
        name: 'Dr. Sarah Chen',
        role: 'consultant',
      },
      client: {
        id: CURRENT_USER_ID,
        name: 'John Doe',
        role: 'client',
      },
      messages: [],
    };
    setSession(mockSession);
    setMessages(mockSession.messages);
  }, [sessionId]);

  const handleSendMessage = (content: string) => {
    if (!session) return;
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      content,
      senderId: CURRENT_USER_ID,
      createdAt: new Date().toISOString(),
      sender: {
        id: CURRENT_USER_ID,
        name: 'John Doe',
        role: 'client',
      },
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleTyping = (_: boolean) => {
    // No-op without backend
  };

  if (!session) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Session not found</h2>
          <p className="text-[var(--muted)]">This consultation session does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FadeIn>
          {/* Header */}
          <div className="bg-[var(--bg-secondary)] rounded-t-2xl border-b border-[var(--border)] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {session.consultant.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text)]">{session.consultant.name}</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-[var(--muted)]">Online</span>
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
          <div className="bg-[var(--bg-secondary)] rounded-b-2xl">
            <ChatRoom
              messages={messages}
              currentUserId={CURRENT_USER_ID}
              onSendMessage={handleSendMessage}
              onTyping={handleTyping}
              typingUsers={typingUsers}
            />
          </div>

          {/* Session Info Panel */}
          <div className="mt-6 bg-[var(--bg-secondary)] rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Session Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[var(--muted)]">Status:</span>
                <span className={`ml-2 px-2 py-1 rounded text-xs ${
                  session.status === 'active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-gray-500/20 text-[var(--muted)]'
                }`}>
                  {session.status}
                </span>
              </div>
              <div>
                <span className="text-[var(--muted)]">Messages:</span>
                <span className="ml-2 text-white">{messages.length}</span>
              </div>
              <div>
                <span className="text-[var(--muted)]">Started:</span>
                <span className="ml-2 text-white">
                  {new Date(session.startTime).toLocaleTimeString()}
                </span>
              </div>
              <div>
                <span className="text-[var(--muted)]">Participants:</span>
                <span className="ml-2 text-white">2</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
