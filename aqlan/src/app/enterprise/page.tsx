import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions",
  description:
    "Transform your business with AQLAAN&apos;s enterprise-grade AI solutions. From automation to intelligence, we help companies scale efficiently with cutting-edge artificial intelligence.",
  keywords: [
    "enterprise AI",
    "business automation",
    "AI transformation",
    "machine learning",
    "corporate AI solutions",
    "business intelligence",
    "AI consulting",
    "enterprise technology",
    "digital transformation",
    "AI implementation",
  ],
  openGraph: {
    title: "Enterprise AI Solutions | AQLAAN",
    description:
      "Transform your business with enterprise-grade AI solutions designed for scale, security, and measurable ROI.",
    url: "https://aqlaan.com/enterprise",
    siteName: "AQLAAN",
    images: [
      {
        url: "/enterprise-og.webp",
        width: 1200,
        height: 630,
        alt: "AQLAAN Enterprise AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Solutions | AQLAAN",
    description:
      "Transform your business with enterprise-grade AI solutions designed for scale and ROI.",
    images: ["/enterprise-og.webp"],
  },
};

export default function Enterprise() {
  const useCases = [
    {
      title: "Intelligent Process Automation",
      description: "Streamline complex business workflows with AI-powered automation that learns, adapts, and optimizes operations in real-time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      examples: ["Document processing", "Workflow orchestration", "Quality assurance", "Resource optimization"]
    },
    {
      title: "Advanced Data Analytics & BI",
      description: "Transform raw data into strategic insights with AI-powered analytics that predict trends, identify opportunities, and drive decision-making.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      examples: ["Predictive analytics", "Customer insights", "Market intelligence", "Performance dashboards"]
    },
    {
      title: "Customer Experience Intelligence",
      description: "Enhance customer interactions with AI-driven personalization, intelligent chatbots, and predictive customer service solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      examples: ["Personalized recommendations", "Intelligent support", "Sentiment analysis", "Customer journey optimization"]
    },
    {
      title: "Supply Chain & Operations AI",
      description: "Optimize supply chain operations with AI-powered demand forecasting, inventory management, and logistics optimization.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      examples: ["Demand forecasting", "Inventory optimization", "Route planning", "Supplier analytics"]
    }
  ];

  const capabilities = [
    {
      title: "Enterprise AI Strategy",
      description: "Comprehensive AI transformation roadmaps aligned with your business objectives, competitive landscape, and growth targets.",
      features: ["AI readiness assessment", "Strategic roadmapping", "ROI modeling", "Technology selection"]
    },
    {
      title: "Scalable AI Architecture",
      description: "Design and implement AI systems that grow with your business, ensuring security, performance, and maintainability.",
      features: ["Cloud-native design", "Microservices architecture", "Security-first approach", "Performance optimization"]
    },
    {
      title: "Full-Cycle Implementation",
      description: "End-to-end AI project delivery from concept to production, including training, support, and continuous optimization.",
      features: ["Proof of concept", "Production deployment", "Team training", "Ongoing optimization"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Risk management, fraud detection, algorithmic trading, and regulatory compliance solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Healthcare",
      description: "Medical imaging analysis, drug discovery, patient care optimization, and clinical decision support.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, production optimization, and smart factory solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Retail & E-commerce",
      description: "Personalization engines, inventory management, demand forecasting, and customer analytics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "Technology",
      description: "AI-powered development tools, intelligent testing, code optimization, and developer productivity.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: "Energy & Utilities",
      description: "Smart grid optimization, predictive maintenance, energy forecasting, and sustainability analytics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Two Column Layout like Homepage */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Pre-title */}
              <div className="inline-flex items-center justify-start px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
                <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
                  Enterprise AI Solutions
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-[1.1]">
                Scale your business with{" "}
                <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  intelligent AI
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
                  Transform your enterprise operations with AI solutions designed for scale, security, and measurable ROI. From automation to intelligence, we help companies accelerate growth and innovation.
                </p>

                <p className="text-lg text-white/80 font-light leading-relaxed">
                  Ready to partner with forward-thinking enterprises seeking to harness AI&apos;s competitive advantages while maintaining operational excellence and strategic focus.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/aqlanai" aria-label="Start enterprise AI consultation with AQLAAN">
                  <button className="group bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold px-10 py-4 rounded-xl hover:from-red-400 hover:to-purple-500 transition-all duration-300 text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      Start Your AI Transformation
                      <svg className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h8m0 0l-3-3m3 3l-3 3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <button className="bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98]">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Right Content - Enterprise Metrics Dashboard */}
            <div className="lg:col-span-2 relative">
              <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 lg:p-10">
                <div className="space-y-8">
                  <h3 className="text-white text-xl font-semibold tracking-tight">
                    Enterprise AI Impact
                  </h3>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-purple-400 font-bold text-2xl lg:text-3xl">
                        3x
                      </div>
                      <div className="text-white/60 text-sm">
                        Productivity Increase
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-400 font-bold text-2xl lg:text-3xl">
                        65%
                      </div>
                      <div className="text-white/60 text-sm">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-bold text-2xl lg:text-3xl">
                        98%
                      </div>
                      <div className="text-white/60 text-sm">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-400 font-bold text-2xl lg:text-3xl">
                        24/7
                      </div>
                      <div className="text-white/60 text-sm">Operations</div>
                    </div>
                  </div>

                  {/* Industry Focus */}
                  <div className="border-t border-white/[0.08] pt-6">
                    <div className="text-white/50 text-sm mb-3">
                      Industry Expertise:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        FinTech
                      </span>
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        Healthcare
                      </span>
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        Manufacturing
                      </span>
                      <span className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-white/70">
                        Retail
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
              Ready to partner with enterprises to build{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                AI-powered competitive advantages
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto">
              While we&apos;re expanding our enterprise client portfolio, our expertise in scalable AI architecture, business process optimization, and strategic implementation positions us to help companies navigate their AI transformation journey effectively and profitably.
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
                enterprise success
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              From operational efficiency to strategic intelligence, we&apos;re prepared to help enterprises implement AI that drives measurable business results.
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
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.05] to-red-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

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
                      Key Applications:
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

      {/* Industries */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-red-600/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6">
              Industry-specific{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                AI solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              Deep domain expertise across key industries, delivering AI solutions that understand your unique challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500/20 to-purple-600/20 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-purple-600/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-red-600/4 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6">
              How we accelerate your{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                AI transformation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              Our comprehensive approach ensures AI implementations that drive measurable business value while scaling with your growth.
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
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.05] to-red-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

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
                        <svg className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 group-hover:text-red-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Why enterprises should{" "}
              <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                choose AQLAAN
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
            <div className="group text-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-red-400 group-hover:text-red-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-500">
                Performance Driven
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg">
                Every AI implementation focused on measurable business outcomes, ROI optimization, and competitive advantage creation.
              </p>
            </div>

            <div className="group text-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-500">
                Enterprise Scale
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg">
                AI architectures designed to scale with your business growth, handling enterprise-level complexity and performance demands.
              </p>
            </div>

            <div className="group text-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-500">
                Strategic Partnership
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-500 text-base lg:text-lg">
                Long-term partnership approach focused on your strategic objectives, competitive positioning, and continuous innovation.
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
                Enterprise AI Transformation
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1]">
                Ready to scale your business with{" "}
                <span className="font-medium bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  intelligent AI?
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto">
                Let&apos;s discuss how AI can accelerate your growth, optimize operations, and create sustainable competitive advantages for your enterprise.
              </p>
            </div>

            {/* Main CTA */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/aqlanai" aria-label="Start enterprise AI transformation with AQLAAN">
                  <button className="group relative bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold px-12 py-6 rounded-2xl hover:from-red-400 hover:to-purple-500 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-center">
                      Start AI Transformation
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
                <Link href="/contact" aria-label="Request enterprise AI consultation">
                  <button className="group bg-white text-black font-semibold px-12 py-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden">
                    <span className="relative z-10">Schedule Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Supporting text */}
            <div className="pt-6">
              <p className="text-white/50 text-sm font-light">
                Free strategy session • ROI-focused approach • Enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}