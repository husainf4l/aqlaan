"use client";
import { useState, useEffect } from "react";
import AnimatedNetworkBackground from "../AnimatedNetworkBackground";

export default function BlogHero() {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-black"
      aria-labelledby="blog-hero-heading"
      role="banner"
    >
      <AnimatedNetworkBackground />

      <div className="relative z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-6 flex flex-col items-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] max-w-4xl mx-auto tracking-[-0.02em]"
            id="blog-hero-heading"
          >
            AI Insights &
            <br />
            <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Industry Intelligence
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Explore cutting-edge AI trends, enterprise implementation strategies,
            and expert insights from AQLAAN&apos;s team of engineers and AI specialists.
          </p>

          <div className="mt-8">
            <p className="text-gray-400 text-sm tracking-wide">
              Latest insights as of{" "}
              <span className="text-gray-200 font-medium">{today}</span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        aria-label="Scroll down to see blog posts"
        role="img"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}