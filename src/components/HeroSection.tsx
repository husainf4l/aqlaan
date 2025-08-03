"use client";
import { useState, useMemo } from "react";
import AnimatedNetworkBackground from "./AnimatedNetworkBackground";

export default function HeroSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Memoized tech descriptions to prevent re-creation
  const techDescriptions = useMemo(
    () => ({
      OpenCV:
        "Computer vision library for real-time image processing, object detection, and visual intelligence",
      "Microsoft Agentic AI":
        "Multi-agent orchestration framework for autonomous AI systems and workflow automation",
      PyTorch:
        "Dynamic neural network library enabling rapid prototyping and production-scale deep learning",
      "Google AI SDK":
        "Comprehensive ML toolkit with Gemini integration for multimodal AI applications",
      LangChain:
        "Composable framework for building context-aware, reasoning AI applications with memory",
      LangGraph:
        "Stateful multi-agent coordination platform for complex AI workflow orchestration",
      TensorFlow:
        "End-to-end platform for scalable machine learning deployment and model serving",
    }),
    []
  );

  // Memoized date to prevent recalculation
  const today = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, []);

  // Memoized tech list for better performance
  const techList = useMemo(
    () => [
      { key: "OpenCV", label: "OpenCV" },
      { key: "Microsoft Agentic AI", label: "Microsoft AI" },
      { key: "PyTorch", label: "PyTorch" },
      { key: "Google AI SDK", label: "Google AI" },
      { key: "LangChain", label: "LangChain" },
      { key: "LangGraph", label: "LangGraph" },
      { key: "TensorFlow", label: "TensorFlow" },
    ],
    []
  );

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-label="Hero section introducing Aqlaan AI solutions"
    >
      <AnimatedNetworkBackground />

      {/* Content */}
      <div className="relative z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center min-h-screen py-20">
        {/* Hero headline - Scale style */}
        <div className="space-y-6 md:space-y-6 flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] max-w-5xl mx-auto tracking-[-0.02em]">
            Middle East Enterprise
            <br />
            <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Intelligence.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal ">
            At Aqlaan, we engineer scalable AI solutions using{" "}
            <span className="text-white">today&apos;s</span> most advanced
            frameworks — from LangGraph to PyTorch — to automate, optimize, and
            empower modern business.
          </p>

          {/* CTA Buttons */}
          {/* CTA Buttons - Scale style */}
          <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center mt-3 sm:mt-4 px-4">
            <button className="bg-white hover:bg-gray-100 text-black font-medium py-3 px-4 rounded-md transition-all duration-200 text-base">
              Ask Aqlaan
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 text-base hover:bg-gray-900">
              Build AI
            </button>
          </div>

          <div className="mt-16 sm:mt-20">
            {/* Optimized section divider */}
            <div className="text-center mb-8">
              <p className="text-gray-400 text-xs sm:text-sm tracking-wider mb-3">
                As of <span className="text-gray-200 font-medium">{today}</span>
              </p>
              <h3 className="text-gray-300 text-xs sm:text-sm font-normal tracking-wide">
                Aqlaan’s AI Stack
              </h3>
            </div>

            {/* Optimized horizontal logo slider */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 opacity-70 hover:opacity-90 transition-opacity duration-300 max-w-4xl mx-auto px-4">
              {techList.map(({ key, label }) => (
                <div
                  key={key}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredTech(key)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <span className="text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300 tracking-wide">
                    {label}
                  </span>
                  {hoveredTech === key && (
                    <div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-900/95 border border-gray-600 rounded-lg px-3 py-2 text-xs text-gray-200 z-50 backdrop-blur-sm shadow-xl"
                      role="tooltip"
                      aria-label={`Description for ${label}`}
                    >
                      <div className="text-center leading-relaxed">
                        {techDescriptions[key as keyof typeof techDescriptions]}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-transparent border-t-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
