"use client";
import Link from "next/link";

export default function AIAgentCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/4 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Pre-title */}
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
              AI Strategy Consultation
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1]">
              Ready to transform your business with{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                strategic AI?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              Start a consultation with our AI agent to discover custom AI
              solutions tailored to your business challenges and strategic
              objectives.
            </p>
          </div>

          {/* AI Agent Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500">
              <div className="text-blue-400 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Instant Analysis
              </h3>
              <p className="text-white/60 text-sm">
                Get immediate insights on AI opportunities specific to your
                industry and business model.
              </p>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500">
              <div className="text-purple-400 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Custom Strategy</h3>
              <p className="text-white/60 text-sm">
                Receive tailored AI implementation roadmaps designed for your
                specific goals and constraints.
              </p>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500">
              <div className="text-blue-400 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189c.422-.056.822-.148 1.2-.264a.75.75 0 00.504-.832l-.243-1.456a.75.75 0 00-.832-.504c-.378.116-.778.208-1.2.264A6.01 6.01 0 0112 10.5v-.75M12 10.5v-.75M12 10.5a6.01 6.01 0 01-1.5.189c-.422.056-.822.148-1.2.264a.75.75 0 01-.832-.504l-.243-1.456a.75.75 0 01.504-.832c.378-.116.778-.208 1.2-.264A6.01 6.01 0 0112 9.75v.75m0 0V8.25M12 9.75V6.3m0 0a6.01 6.01 0 01-1.5-.189c-.422-.056-.822-.148-1.2-.264a.75.75 0 01-.832-.504l-.243-1.456a.75.75 0 01.504-.832c.378-.116.778-.208 1.2-.264A6.01 6.01 0 0112 3v3.3m0 0V8.25"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
              <p className="text-white/60 text-sm">
                Connect with our AI strategists for deep-dive consultations and
                implementation support.
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="pt-8">
            <Link
              href="/aqlanai"
              aria-label="Start AI strategy consultation with AQLAAN"
            >
              <button className="group relative bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold px-12 py-6 rounded-2xl hover:from-red-400 hover:to-purple-500 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <span className="relative z-10 flex items-center justify-center">
                  Start AI Strategy Consultation
                  <svg
                    className="inline-block ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 12h8m0 0l-3-3m3 3l-3 3"
                    />
                  </svg>
                </span>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            </Link>
          </div>

          {/* Supporting text */}
          <div className="pt-4">
            <p className="text-white/50 text-sm font-light">
              Free consultation • No commitment required • Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
