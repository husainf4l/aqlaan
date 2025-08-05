import Link from "next/link";

export default function PublicSector() {
  const useCases = [
    {
      title: "Citizen Services & Digital Transformation",
      description: "AI-powered chatbots, automated service delivery, and intelligent document processing to enhance citizen experiences and reduce administrative burden.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      examples: ["Multi-language citizen portals", "Automated permit processing", "Service request routing", "Complaint resolution systems"]
    },
    {
      title: "Data Intelligence & Policy Analysis",
      description: "Transform vast datasets into actionable insights for evidence-based policy making, resource allocation, and strategic planning.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      examples: ["Economic impact modeling", "Population trend analysis", "Budget optimization", "Performance dashboards"]
    },
    {
      title: "Security & Compliance Automation",
      description: "AI-driven security monitoring, threat detection, and automated compliance reporting to protect sensitive government data and operations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      examples: ["Anomaly detection", "Access control automation", "Audit trail analysis", "Regulatory reporting"]
    },
    {
      title: "Operational Efficiency & Automation",
      description: "Streamline bureaucratic processes, reduce processing times, and optimize resource allocation through intelligent automation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      examples: ["Workflow automation", "Document processing", "Approval routing", "Resource optimization"]
    }
  ];

  const capabilities = [
    {
      title: "Strategic AI Consulting",
      description: "Comprehensive AI strategy development tailored to government objectives, regulatory requirements, and citizen needs.",
      features: ["AI readiness assessment", "Technology roadmapping", "Use case identification", "ROI modeling"]
    },
    {
      title: "Secure AI Architecture",
      description: "Design and implement AI systems that meet government security standards and compliance requirements.",
      features: ["Zero-trust architecture", "Data sovereignty", "Privacy-by-design", "Audit-ready systems"]
    },
    {
      title: "Implementation Support",
      description: "End-to-end support from pilot projects to full-scale deployment with change management and training.",
      features: ["Pilot development", "Scaling strategies", "Staff training", "Change management"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Two Column Layout like Homepage */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Pre-title */}
              <div className="inline-flex items-center justify-start px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
                <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
                  Public Sector AI Solutions
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-[1.1]">
                Transforming government through{" "}
                <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  strategic AI
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
                  We help government organizations design and implement secure, compliant AI systems that enhance citizen services, improve operational efficiency, and drive evidence-based decision making.
                </p>

                <p className="text-lg text-white/80 font-light leading-relaxed">
                  Ready to partner with public sector organizations seeking to harness AI&apos;s transformative potential while maintaining the highest standards of security and citizen trust.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/aqlanai" aria-label="Start AI strategy consultation with AQLAAN">
                  <button className="group bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold px-10 py-4 rounded-xl hover:from-red-400 hover:to-purple-500 transition-all duration-300 text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      Discuss Your AI Strategy
                      <svg className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h8m0 0l-3-3m3 3l-3 3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <button className="bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98]">
                  Download Overview
                </button>
              </div>
            </div>

            {/* Right Content - Government Metrics Dashboard */}
            <div className="lg:col-span-2 relative">
              <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 lg:p-10">
                <div className="space-y-8">
                  <h3 className="text-white text-xl font-semibold tracking-tight">
                    Government AI Impact
                  </h3>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-purple-400 font-bold text-2xl lg:text-3xl">
                        40%
                      </div>
                      <div className="text-white/60 text-sm">
                        Processing Time Reduction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-bold text-2xl lg:text-3xl">
                        24/7
                      </div>
                      <div className="text-white/60 text-sm">Citizen Services</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-bold text-2xl lg:text-3xl">
                        95%
                      </div>
                      <div className="text-white/60 text-sm">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-bold text-2xl lg:text-3xl">
                        60%
                      </div>
                      <div className="text-white/60 text-sm">Cost Savings</div>
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="border-t border-white/[0.08] pt-6">
                    <div className="text-white/50 text-sm mb-3">
                      Government Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        Citizen Services
                      </span>
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        Data Analytics
                      </span>
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        Security
                      </span>
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        Automation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-red-600/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-purple-600/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-[1.1] mb-8">
              Ready to partner with government organizations to build{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                AI systems that serve citizens better
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto">
              While we&apos;re building our government client portfolio, our expertise in secure AI architecture, compliance frameworks, and strategic implementation positions us to help public sector organizations navigate their AI transformation journey safely and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-purple-600/4 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6">
              AI solutions designed for{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                public service
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              From citizen engagement to operational efficiency, we&apos;re prepared to help government organizations implement AI that makes a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
            {useCases.map((useCase, index) => (
              <article
                key={index}
                className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 min-h-[420px] flex flex-col"
              >
                {/* Enhanced Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-purple-500/[0.02] rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.05] to-blue-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-red-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                      {useCase.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
                        {useCase.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="text-white/50 text-sm font-medium mb-3 group-hover:text-white/70 transition-colors duration-500">
                      Potential Applications:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <span 
                          key={exampleIndex} 
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] text-white/70 border border-white/[0.08] group-hover:bg-white/[0.1] group-hover:text-white/90 group-hover:border-white/[0.15] transition-all duration-500"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-red-600/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6">
              How we can help your{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                organization
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              Our comprehensive approach ensures AI implementations that are secure, compliant, and aligned with your mission objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
            {capabilities.map((capability, index) => (
              <article
                key={index}
                className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 min-h-[400px] flex flex-col"
              >
                {/* Enhanced Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-purple-500/[0.02] rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.05] to-blue-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
                    {capability.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-8 group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg flex-1">
                    {capability.description}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/60 text-sm lg:text-base group-hover:text-white/80 transition-colors duration-500">
                        <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AQLAAN */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-600/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6">
              Why government organizations should{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                choose AQLAAN
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
            <div className="group text-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-500">
                Security First
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg">
                Every AI system designed with government-grade security, privacy, and compliance requirements from day one.
              </p>
            </div>

            <div className="group text-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-500">
                Innovation Ready
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg">
                Cutting-edge AI capabilities adapted for government use cases, regulations, and citizen service requirements.
              </p>
            </div>

            <div className="group text-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-500">
                Citizen Focused
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg">
                AI solutions designed to enhance citizen experiences while improving government operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/4 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            {/* Pre-title */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
              <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
                Government AI Transformation
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1]">
                Ready to explore AI for your{" "}
                <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  organization?
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto">
                Let&apos;s discuss how AI can transform your government operations while maintaining the highest standards of security and compliance.
              </p>
            </div>

            {/* Main CTA */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/aqlanai" aria-label="Start AI strategy discussion with AQLAAN">
                  <button className="group relative bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold px-12 py-6 rounded-2xl hover:from-red-400 hover:to-purple-500 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-center">
                      Start AI Strategy Discussion
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
                <Link href="/contact" aria-label="Request information about government AI solutions">
                  <button className="group bg-white text-black font-semibold px-12 py-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
                    <span className="relative z-10">Request Information</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Supporting text */}
            <div className="pt-6">
              <p className="text-white/50 text-sm font-light">
                Free consultation • Security-first approach • Government compliance ready
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
