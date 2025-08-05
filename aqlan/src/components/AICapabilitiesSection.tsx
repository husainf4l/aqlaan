"use client";
import Link from "next/link";

export default function AICapabilitiesSection() {
  const capabilities = [
    {
      title: "Strategic Assessment & Architecture",
      description:
        "We decode your business model, analyze competitive dynamics, and architect AI systems that create defensible competitive moats. Strategic intelligence that transforms market positioning.",
      detail: "Where C-suite strategy meets Silicon Valley execution.",
      hoverMetric:
        "Fortune 500 leaders achieve 4x faster AI ROI with our strategic-first methodology",
      keyOutcomes: [
        "Competitive Intelligence",
        "Market Positioning",
        "Scalable Systems",
      ],
    },
    {
      title: "Proprietary Intelligence Systems",
      description:
        "Custom AI models trained on your institutional knowledge. RAG systems that capture your expertise, scale your decision-making, and create sustainable competitive advantages.",
      detail: "Your intellectual property, systematized and amplified.",
      hoverMetric:
        "Proprietary systems deliver 340% better performance vs. generic solutions",
      keyOutcomes: [
        "Institutional Memory",
        "Expert Scaling",
        "Continuous Learning",
      ],
    },
    {
      title: "Enterprise Transformation",
      description:
        "Technology doesn't transform businesses—strategy does. We redesign workflows, evolve organizational capabilities, and embed AI to create measurable competitive advantages.",
      detail: "From AI adoption to market-leading AI-native operations.",
      hoverMetric:
        "Organizations achieve transformation in 18 months with our proven methodology",
      keyOutcomes: [
        "Workflow Innovation",
        "Cultural Evolution",
        "Measurable ROI",
      ],
    },
  ];

  const partners = [
    { name: "OpenAI", opacity: "opacity-60" },
    { name: "Meta", opacity: "opacity-50" },
    { name: "Google", opacity: "opacity-60" },
    { name: "Cohere", opacity: "opacity-50" },
    { name: "Mistral", opacity: "opacity-55" },
    { name: "Hugging Face", opacity: "opacity-50" },
  ];

  return (
    <section
      className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-black relative overflow-hidden"
      aria-labelledby="ai-capabilities-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Pre-title */}
            <div className="inline-flex items-center justify-start px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
              <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
                Strategic AI Partnership
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-[1.1]"
              id="ai-capabilities-heading"
            >
              The difference between{" "}
              <span className="font-medium bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                deploying AI
              </span>
              <br />
              and{" "}
              <span className="font-medium bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                transforming business
              </span>
              ?
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Most organizations deploy AI without asking the fundamental
                question:
                <em className="text-white/50">
                  {" "}
                  How will this create sustainable competitive advantage?
                </em>
              </p>

              <p className="text-lg text-white/80 font-light leading-relaxed">
                At AQLAAN, we begin where others end. We architect AI systems
                that don&apos;t just work—they compound your strategic
                advantages over time.
              </p>

              <div className="text-lg text-white/90 font-medium leading-relaxed pt-2">
                <p>
                  Because intelligence without strategy is just expensive
                  automation.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/aqlanai"
                aria-label="Navigate to AQLAAN AI chat to discuss your strategic vision"
              >
                <button
                  className="group bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                  aria-describedby="cta-description"
                >
                  <span className="relative z-10">
                    Discuss Your Strategic Vision
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="inline-block ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <span id="cta-description" className="sr-only">
                  Click to start a conversation about implementing strategic AI
                  solutions for your business
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-[3/2] bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden relative group">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] opacity-20 z-10 pointer-events-none"></div>

              {/* Video Background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: "brightness(0.8) contrast(1.1)",
                  animationPlayState: "running",
                  animationTimingFunction: "linear",
                  transform: "scale(1.05)",
                  transition: "transform 20s ease-in-out infinite alternate",
                }}
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.playbackRate = 0.5; // 50% speed for slow motion
                }}
                aria-label="Background video showing AI transformation visualization"
              >
                <source src="/background-low.webm" type="video/webm" />
              </video>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 p-3">
                <div className="text-center space-y-3 bg-black/40 backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-white/15 max-w-[200px] sm:max-w-[240px]">
                  <div className="space-y-2">
                    <h3 className="text-white text-sm sm:text-base font-semibold tracking-tight">
                      Your Next Brilliant Decision?
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed">
                      Strategic AI that transforms competitive positioning
                    </p>

                    {/* Business metrics */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="text-center">
                        <div className="text-blue-400 font-bold text-sm">
                          340%
                        </div>
                        <div className="text-white/60 text-xs">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-purple-400 font-bold text-sm">
                          18mo
                        </div>
                        <div className="text-white/60 text-xs">Timeline</div>
                      </div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex justify-center">
                    <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse z-20"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse delay-1000 z-20"></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-500 z-20"></div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-8"
          role="region"
          aria-labelledby="capabilities-heading"
        >
          <h3 id="capabilities-heading" className="sr-only">
            AQLAAN AI Capabilities and Services
          </h3>
          {capabilities.map((capability, index) => (
            <article
              key={index}
              className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 lg:p-8 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 min-h-[400px] flex flex-col"
              aria-labelledby={`capability-${index}-title`}
            >
              {/* Enhanced Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-blue-500/[0.02] rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/[0.05] to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Content Container */}
                <div className="flex-1 flex flex-col">
                  {/* Enhanced Content */}
                  <h3
                    className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 group-hover:text-white transition-colors duration-500 leading-tight"
                    id={`capability-${index}-title`}
                  >
                    {capability.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed mb-3 lg:mb-4 group-hover:text-white/85 transition-colors duration-500 text-sm lg:text-base flex-1">
                    {capability.description}
                  </p>

                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500 text-xs lg:text-sm mb-4">
                    {capability.detail}
                  </p>

                  {/* Key Outcomes */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 lg:gap-2">
                      {capability.keyOutcomes.map((outcome, outcomeIndex) => (
                        <span
                          key={outcomeIndex}
                          className="inline-flex items-center px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full text-xs font-medium bg-white/[0.05] text-white/60 group-hover:bg-white/[0.1] group-hover:text-white/80 transition-all duration-500 border border-white/[0.08] group-hover:border-white/[0.15] whitespace-nowrap"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Hover Metric */}
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-8 right-4 lg:right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0">
                  <div className="border-t border-white/[0.15] pt-3 lg:pt-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-bold text-blue-400 tracking-wide leading-tight flex-1">
                        {capability.hoverMetric}
                      </p>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse flex-shrink-0 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Partner Strip */}
        <div
          className="border-t border-white/[0.08] pt-16"
          role="region"
          aria-labelledby="partners-heading"
        >
          <div className="text-center mb-8">
            <p
              className="text-xs text-white/40 font-light tracking-[0.2em] uppercase mb-3"
              id="partners-heading"
            >
              Built on the Foundation of Excellence
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
          </div>

          <div className="flex items-center justify-center space-x-8 sm:space-x-12 flex-wrap gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`group text-white/50 hover:text-white/90 transition-all duration-500 text-sm font-medium ${partner.opacity} hover:opacity-100 relative`}
                role="img"
                aria-label={`Partner: ${partner.name}`}
              >
                <span className="relative z-10">{partner.name}</span>
                <div className="absolute inset-0 bg-white/[0.02] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
