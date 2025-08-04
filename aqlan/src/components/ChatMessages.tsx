"use client";
import React, { useEffect, useRef, useState } from "react";
import { ContentRenderer } from "@/utils/contentFormatter";

interface MessageSection {
  thought?: string;
  action?: string;
  observation?: string;
}

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  sections?: MessageSection;
  isStreaming?: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 sm:px-6">
      {/* Main Logo/Icon - Apple Style */}
      <div className="relative mb-6 sm:mb-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-900/40 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/[0.08] shadow-2xl">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent rounded-2xl sm:rounded-3xl" />

          {/* Ultra-subtle inner shadow */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-inner shadow-black/10" />

          {/* Business/Analytics Icon */}
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-white/90 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-gray-800/20 rounded-2xl sm:rounded-3xl blur-xl" />
      </div>

      {/* Welcome Text - Business Advisory Focus */}
      <div className="space-y-4 sm:space-y-6 max-w-lg sm:max-w-2xl">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-4xl font-light text-white/95 tracking-tight">
            <span className="text-white font-medium">Aqlon AI</span>{" "}
            <span className="text-white/60">Business Advisor</span>
          </h1>

          <div className="w-12 sm:w-16 h-0.5 bg-white/20 mx-auto rounded-full" />
        </div>

        <p className="text-base sm:text-xl text-white/60 font-light leading-relaxed px-2">
          Discover AI opportunities for your business. I specialize in
          identifying automation potential, analyzing processes, and
          recommending tailored AI solutions.
        </p>

        {/* Business Advisory Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
          {[
            {
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              ),
              title: "AI Discovery",
              description: "Identify opportunities in your business",
            },
            {
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ),
              title: "Process Analysis",
              description: "Analyze workflows for automation",
            },
            {
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 01.814 10.176l3.75-3.75a13.5 13.5 0 00-3.75-13.5L9 11.25z"
                  />
                </svg>
              ),
              title: "Market Research",
              description: "Competitive analysis & insights",
            },
            {
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21"
                  />
                </svg>
              ),
              title: "Solution Design",
              description: "Tailored AI recommendations",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/[0.02] backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 group"
            >
              <div className="text-blue-400 mb-2 sm:mb-3 flex justify-center group-hover:text-blue-300 transition-colors duration-500">
                <div className="w-5 h-5 sm:w-6 sm:h-6">{feature.icon}</div>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white/85 mb-1 sm:mb-2 group-hover:text-white transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-xs text-white/45 leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/[0.06]">
          <p className="text-white/50 text-xs sm:text-sm font-light px-2">
            Ready to transform your business with AI?
            <span className="text-blue-400 font-medium">
              {" "}
              Let's start the conversation.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [showThinking, setShowThinking] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (isLoading && messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-3 text-white/60">
          <div className="animate-spin w-5 h-5 border-2 border-gray-600 border-t-blue-500 rounded-full"></div>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={messagesContainerRef}
      className="flex-1 overflow-y-auto pb-40 pt-4 scroll-smooth"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {messages.length === 0 ? (
          <WelcomeScreen />
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`w-full ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {message.sender === "user" ? (
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl max-w-[85%] sm:max-w-2xl ml-auto shadow-lg">
                      <div className="text-sm sm:text-[15px] leading-5 sm:leading-6 font-medium break-words">
                        {message.content}
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent rounded-2xl sm:rounded-3xl pointer-events-none" />

                      <div className="relative">
                        {/* Show Thinking Toggle */}
                        {(message.sections?.thought ||
                          message.sections?.action ||
                          message.sections?.observation) && (
                          <button
                            onClick={() => setShowThinking(!showThinking)}
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/40 hover:text-white/70 mb-4 sm:mb-6 transition-all duration-300 group font-light"
                          >
                            <svg
                              className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${
                                showThinking ? "rotate-90" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            <span className="group-hover:text-white transition-colors duration-300">
                              {showThinking ? "Hide" : "Show"} analysis process
                            </span>
                          </button>
                        )}

                        {/* Thinking Process */}
                        {showThinking && (
                          <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3 border-l-2 border-gray-600/50 pl-3 sm:pl-5">
                            {message.sections?.thought && (
                              <div className="bg-gray-900/40 border border-gray-700/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-gray-300 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                  </svg>
                                  Analysis
                                </div>
                                <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                  <ContentRenderer
                                    content={message.sections.thought}
                                  />
                                </div>
                              </div>
                            )}
                            {message.sections?.action && (
                              <div className="bg-gray-800/30 border border-gray-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-gray-300 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                  </svg>
                                  Strategy
                                </div>
                                <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                  <ContentRenderer
                                    content={message.sections.action}
                                  />
                                </div>
                              </div>
                            )}
                            {message.sections?.observation && (
                              <div className="bg-gray-900/30 border border-gray-700/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-gray-300 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>
                                  Insights
                                </div>
                                <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                  <ContentRenderer
                                    content={message.sections.observation}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Final Answer */}
                        <div className="text-white/95 leading-6 sm:leading-7 text-sm sm:text-[15px]">
                          {message.content ? (
                            <ContentRenderer content={message.content} />
                          ) : (
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 py-2 sm:py-3">
                              <div className="animate-spin w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-600 border-t-blue-500 rounded-full"></div>
                              <span className="font-medium text-xs sm:text-sm">
                                Thinking...
                              </span>
                            </div>
                          )}
                          {message.isStreaming && message.content && (
                            <span className="inline-block w-0.5 h-5 bg-blue-500 ml-0.5 animate-pulse rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Scroll anchor with extra padding */}
        <div ref={messagesEndRef} className="h-4" />
      </div>
    </div>
  );
}
