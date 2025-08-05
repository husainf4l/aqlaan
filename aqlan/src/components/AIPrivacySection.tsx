"use client";
import Link from "next/link";

export default function AIPrivacySection() {
  const privacyCapabilities = [
    {
      title: "Zero-Trust AI Architecture",
      description:
        "Banking-grade security meets enterprise AI. We architect locally-hosted AI systems designed to ensure your data never leaves your infrastructure. Complete operational independence from external AI providers.",
      detail: "Where regulatory compliance meets cutting-edge innovation.",
      hoverMetric:
        "Financial institutions achieve 100% data sovereignty with properly architected systems",
      keyOutcomes: [
        "Data Sovereignty",
        "Regulatory Compliance",
        "Zero External Dependencies",
      ],
    },
    {
      title: "ISO 27001 Compliant AI Systems",
      description:
        "Purpose-built AI infrastructure designed to meet the most stringent security standards. From model training to inference deployment—every component architected for maximum security and auditability.",
      detail: "Enterprise security without compromising AI capability.",
      hoverMetric:
        "Organizations reduce compliance risk by 85% with properly designed frameworks",
      keyOutcomes: [
        "Certified Security",
        "Full Auditability",
        "Risk Mitigation",
      ],
    },
    {
      title: "Private Model Training & Deployment",
      description:
        "Your institutional knowledge stays institutional. We design custom AI models to be trained exclusively on your infrastructure, ensuring sensitive data and proprietary algorithms remain completely private.",
      detail: "Intelligence that scales without exposure.",
      hoverMetric:
        "Private deployments deliver enterprise performance with zero data exposure risk",
      keyOutcomes: [
        "Local Processing",
        "Proprietary Models",
        "Complete Privacy",
      ],
    },
  ];

  const certifications = [
    { name: "ISO 27001", level: "Architecture" },
    { name: "SOC 2 Type II", level: "Framework" },
    { name: "GDPR", level: "Design" },
    { name: "HIPAA", level: "Planning" },
    { name: "PCI DSS", level: "Standards" },
    { name: "FedRAMP", level: "Blueprint" },
  ];

  return (
    <section
      className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 bg-black relative overflow-hidden"
      aria-labelledby="ai-privacy-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Two Column Layout like AICapabilitiesSection */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Pre-title */}
            <div className="inline-flex items-center justify-start px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
              <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
                Enterprise Security & Privacy
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-[1.1]"
              id="ai-privacy-heading"
            >
              When security isn&apos;t negotiable,{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                neither is intelligence
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-white/70 font-light leading-relaxed">
                A global bank faces ISO 27001 compliance requirements.
                <em className="text-white/50">
                  {" "}
                  Can they implement AI without compromising security?
                </em>
              </p>

              <p className="text-lg text-white/80 font-light leading-relaxed">
                At AQLAAN, we architect AI systems that operate entirely within
                your infrastructure. Your data, your models, your
                compliance—maintained without exception.
              </p>

              <div className="text-lg text-white/90 font-medium leading-relaxed pt-2">
                <p>
                  Because true enterprise AI means never choosing between
                  innovation and security.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/aqlanai"
                  aria-label="Navigate to AQLAAN AI chat to discuss your security architecture"
                >
                  <button
                    className="group bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                    aria-describedby="security-vision-description"
                  >
                    <span className="relative z-10">
                      Discuss Your Security Vision
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
                  <span id="security-vision-description" className="sr-only">
                    Click to start a conversation about implementing secure AI
                    architecture for your business
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Security Metrics */}
          <div className="lg:col-span-2 relative">
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 lg:p-8">
              <div className="space-y-6">
                <h3 className="text-white text-lg font-semibold tracking-tight">
                  Security First Architecture
                </h3>

                {/* Key Security Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-xl lg:text-2xl">
                      100%
                    </div>
                    <div className="text-white/60 text-xs">
                      Data Sovereignty
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-xl lg:text-2xl">
                      Zero
                    </div>
                    <div className="text-white/60 text-xs">Data Exposure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-xl lg:text-2xl">
                      Local
                    </div>
                    <div className="text-white/60 text-xs">Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-xl lg:text-2xl">
                      85%
                    </div>
                    <div className="text-white/60 text-xs">Risk Reduction</div>
                  </div>
                </div>

                {/* Quick Certifications Preview */}
                <div className="border-t border-white/[0.08] pt-4">
                  <div className="text-white/50 text-xs mb-2">
                    Built With Standards For:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-white/[0.05] rounded text-xs text-white/70">
                      ISO 27001
                    </span>
                    <span className="px-2 py-1 bg-white/[0.05] rounded text-xs text-white/70">
                      SOC 2
                    </span>
                    <span className="px-2 py-1 bg-white/[0.05] rounded text-xs text-white/70">
                      GDPR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Capabilities Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-8"
          role="region"
          aria-labelledby="privacy-capabilities-heading"
        >
          <h3 id="privacy-capabilities-heading" className="sr-only">
            AQLAAN AI Privacy and Security Capabilities
          </h3>
          {privacyCapabilities.map((capability, index) => (
            <article
              key={index}
              className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 lg:p-8 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 min-h-[400px] flex flex-col"
              aria-labelledby={`privacy-capability-${index}-title`}
            >
              {/* Enhanced Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-purple-500/[0.02] rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.05] to-blue-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Content Container */}
                <div className="flex-1 flex flex-col">
                  {/* Enhanced Content */}
                  <h3
                    className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 group-hover:text-white transition-colors duration-500 leading-tight"
                    id={`privacy-capability-${index}-title`}
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
                      <p className="text-xs font-bold text-purple-400 tracking-wide leading-tight flex-1">
                        {capability.hoverMetric}
                      </p>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse flex-shrink-0 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-12 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Architected for Enterprise Standards
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Every AI system we design incorporates the security frameworks and
              compliance standards required by global financial institutions,
              healthcare organizations, and government agencies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group text-center p-4 bg-white/[0.02] rounded-2xl border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="text-purple-400 font-bold text-sm mb-1 group-hover:text-purple-300 transition-colors duration-300">
                  {cert.name}
                </div>
                <div className="text-white/60 text-xs font-medium group-hover:text-white/80 transition-colors duration-300">
                  {cert.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
