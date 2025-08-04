"use client";
import { useState, useEffect } from "react";
import { ChatMessages } from "@/components/ChatMessages";
import ChatInput from "@/components/ChatInput";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  isStreaming?: boolean;
  sections?: {
    thought?: string;
    action?: string;
    observation?: string;
    final_answer?: string;
  };
}

export default function AqlanAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string>("");

  // Generate thread ID only on client side to avoid hydration mismatch
  useEffect(() => {
    setThreadId(
      Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !threadId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsLoading(true);

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: "",
      sender: "ai",
      timestamp: new Date(),
      isStreaming: true,
      sections: {
        thought: "",
        action: "",
        observation: "",
        final_answer: "",
      },
    };

    setMessages((prev) => [...prev, aiMessage]);

    try {
      const response = await fetch("http://localhost:8001/chat/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          thread_id: threadId,
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === aiMessage.id ? { ...msg, isStreaming: false } : msg
                )
              );
              break;
            }

            try {
              const parsed = JSON.parse(data);

              // Handle completion status
              if (parsed.status === "completed") {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === aiMessage.id
                      ? { ...msg, isStreaming: false }
                      : msg
                  )
                );
                break;
              }

              // Handle the new streaming format
              if (parsed.content) {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === aiMessage.id
                      ? {
                          ...msg,
                          sections: parsed.section
                            ? {
                                ...msg.sections,
                                [parsed.section]:
                                  (msg.sections?.[
                                    parsed.section as keyof typeof msg.sections
                                  ] || "") + parsed.content,
                              }
                            : msg.sections,
                          content:
                            parsed.section === "final_answer"
                              ? (msg.content || "") +
                                parsed.content.replace(/^\*\*[^:]*:\*\*\s*/, "")
                              : !parsed.section
                              ? (msg.content || "") + parsed.content
                              : msg.content,
                        }
                      : msg
                  )
                );
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessage.id
            ? {
                ...msg,
                content: "Sorry, I encountered an error. Please try again.",
                isStreaming: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen text-white flex flex-col pt-16">
      {/* Chat Messages - Full height with proper scrolling, accounting for navbar */}
      <ChatMessages messages={messages} isLoading={isLoading} />

      {/* Fixed Input at Bottom */}
      <ChatInput
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </main>
  );
}
