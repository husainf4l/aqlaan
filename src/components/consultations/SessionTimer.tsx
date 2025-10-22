"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SessionTimerProps {
  startTime: Date;
  endTime: Date | null;
}

export default function SessionTimer({ startTime, endTime }: SessionTimerProps) {
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const elapsedMs = now.getTime() - startTime.getTime();
      setElapsed(Math.floor(elapsedMs / 1000));

      if (endTime) {
        const remainingMs = endTime.getTime() - now.getTime();
        setRemaining(Math.max(0, Math.floor(remainingMs / 1000)));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-end space-y-2">
      {/* Elapsed Time */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center space-x-2"
      >
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-400">Session Time:</span>
        <span className="text-lg font-mono font-bold text-white">
          {formatTime(elapsed)}
        </span>
      </motion.div>

      {/* Remaining Time (if endTime is set) */}
      {endTime && remaining !== null && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm font-mono ${
            remaining < 300 ? 'text-red-400' : 'text-blue-400'
          }`}
        >
          {remaining > 0 ? (
            <>Time remaining: {formatTime(remaining)}</>
          ) : (
            <span className="text-red-400 font-bold">Session ended</span>
          )}
        </motion.div>
      )}

      {/* Session Status Badge */}
      <div className="flex items-center space-x-2">
        {remaining !== null && remaining === 0 ? (
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold">
            Ended
          </span>
        ) : (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
            Active
          </span>
        )}
      </div>
    </div>
  );
}
