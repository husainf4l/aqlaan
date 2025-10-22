"use client";
import { motion } from 'framer-motion';

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

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  showAvatar: boolean;
}

export default function MessageBubble({ message, isOwn, showAvatar }: MessageBubbleProps) {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex items-end space-x-2 ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}
    >
      {/* Avatar */}
      {showAvatar ? (
        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
          isOwn 
            ? 'bg-blue-600 text-white' 
            : 'bg-purple-600 text-white'
        }`}>
          {message.sender.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
      ) : (
        <div className="w-8 h-8" />
      )}

      {/* Message Content */}
      <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'} max-w-[70%]`}>
        {showAvatar && (
          <span className="text-xs text-gray-500 mb-1 px-2">
            {message.sender.name}
          </span>
        )}
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`rounded-2xl px-4 py-2 ${
            isOwn
              ? 'bg-linear-to-r from-blue-600 to-blue-700 text-white'
              : 'bg-gray-800 text-gray-100'
          } shadow-lg`}
        >
          <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
          <span className={`text-xs mt-1 block ${
            isOwn ? 'text-blue-200' : 'text-gray-500'
          }`}>
            {formatTime(message.createdAt)}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
