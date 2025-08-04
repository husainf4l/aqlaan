"use client";
import { useRef, FormEvent } from "react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}

export default function ChatInput({
  input,
  setInput,
  onSubmit,
  isLoading,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as any);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = "auto";
    target.style.height = Math.min(target.scrollHeight, 128) + "px";
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-white/[0.08] bg-black/80 backdrop-blur-2xl z-30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <form onSubmit={onSubmit} className="relative">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            placeholder="Tell me about your business challenges..."
            disabled={isLoading}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-16 text-white placeholder-white/40 focus:outline-none focus:border-white/[0.12] focus:bg-white/[0.05] resize-none min-h-[48px] sm:min-h-[56px] max-h-32 sm:max-h-40 transition-all duration-300 text-sm sm:text-base leading-5 sm:leading-6 shadow-2xl shadow-black/20"
            rows={1}
            style={{
              height: "auto",
              minHeight: "48px",
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/15 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/10"
          >
            {isLoading ? (
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
