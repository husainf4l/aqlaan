"use client";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, Handshake, Globe, Zap, 
  Award, TrendingUp, Users, Building2, Code2,
  Rocket, Star, CheckCircle2, Target, Heart,
  Shield, Package, Layers, MonitorPlay
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function PartnersPage() {
  const partnerTypes = [
    {
      icon: Code2,
      title: "Technology Partners",
      description: "Integrate AQLAAN into your product ecosystem and create powerful AI-enabled solutions.",
      benefits: ["Co-marketing opportunities", "Technical support", "Revenue sharing", "Early access to features"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Building2,
      title: "Consulting Partners",
      description: "Help clients implement and optimize AQLAAN AI solutions for their specific needs.",
      benefits: ["Partner certification", "Sales enablement", "Deal registration", "Commission structure"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Rocket,
      title: "Reseller Partners",
      description: "Sell AQLAAN platform to your customers as part of your solution portfolio.",
      benefits: ["Competitive margins", "Sales training", "Marketing materials", "Partner portal access"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Layers,
      title: "Referral Partners",
      description: "Refer clients to AQLAAN and earn rewards for successful engagements.",
      benefits: ["Attractive referral fees", "No implementation required", "Partner dashboard", "Monthly payouts"],
      color: "from-green-500 to-green-600",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Expand your offerings and increase revenue streams with AI solutions",
    },
    {
      icon: Shield,
      title: "Enterprise Trust",
      description: "Leverage our SOC 2 and ISO 27001 compliance for enterprise deals",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Access to partner success managers and technical resources",
    },
    {
      icon: Star,
      title: "Market Leadership",
      description: "Position yourself as an AI innovation leader in your market",
    },
    {
      icon: Package,
      title: "Marketing Resources",
      description: "Co-branded materials, case studies, and demand generation",
    },
    {
      icon: Target,
      title: "Deal Registration",
      description: "Protect your opportunities with our partner protection program",
    },
  ];

  const partnerLogos = [
    { name: "Tech Corp", category: "Technology" },
    { name: "Consulting Group", category: "Consulting" },
    { name: "Cloud Solutions", category: "Cloud Provider" },
    { name: "Data Systems", category: "Data Infrastructure" },
    { name: "AI Labs", category: "Research" },
    { name: "Enterprise Software", category: "Software" },
  ];

  const requirements = [
    "Proven track record in AI, cloud, or enterprise solutions",
    "Technical team capable of implementing AI solutions",
    "Commitment to AQLAAN partnership program guidelines",
    "Coverage of specific geographic or industry verticals",
  ];

  const successStories = [
    {
      company: "CloudTech Solutions",
      type: "Technology Partner",
      logo: Code2,
      quote: "Partnering with AQLAAN has transformed our product offering. We've seen a 300% increase in customer engagement and closed 12 enterprise deals in just 6 months.",
      author: "Sarah Chen",
      role: "VP of Partnerships",
      metrics: [
        { label: "Revenue Growth", value: "+285%" },
        { label: "New Customers", value: "47" },
        { label: "Implementation Time", value: "-60%" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Enterprise Consulting Group",
      type: "Consulting Partner",
      logo: Building2,
      quote: "AQLAAN's partner program provides everything we need to deliver world-class AI solutions. The technical support and co-marketing opportunities are exceptional.",
      author: "Michael Rodriguez",
      role: "CEO",
      metrics: [
        { label: "Projects Delivered", value: "28" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Revenue from AQLAAN", value: "$2.4M" },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "DataStack Inc",
      type: "Reseller Partner",
      logo: Layers,
      quote: "The margins are competitive, the platform is solid, and our customers love it. AQLAAN has become our flagship AI offering.",
      author: "Jessica Park",
      role: "Sales Director",
      metrics: [
        { label: "Annual Recurring Revenue", value: "$1.8M" },
        { label: "Active Licenses", value: "156" },
        { label: "Renewal Rate", value: "94%" },
      ],
      color: "from-green-500 to-teal-500",
    },
  ];

  const partnerStats = [
    { icon: Globe, label: "Countries", value: "25+" },
    { icon: Users, label: "Active Partners", value: "100+" },
    { icon: TrendingUp, label: "Partner Revenue", value: "$15M+" },
    { icon: Star, label: "Avg. Partner Rating", value: "4.9/5" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)] overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px] dark:bg-grid-slate-400/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Handshake className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Partner Program</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Grow Together with AQLAAN
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed">
                Join our global partner network and deliver cutting-edge AI solutions to your customers while growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg group">
                    Become a Partner
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Partnership Models</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Choose the partnership type that fits your business model.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <FadeIn key={type.title} delay={index * 0.1}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="space-y-3">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-[var(--text)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner Benefits</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Access exclusive resources and support to accelerate your success.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={benefit.title} delay={index * 0.08}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full bg-[var(--bg)]">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Partner Network</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Join a growing ecosystem of innovative companies worldwide.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {partnerLogos.map((partner, index) => (
              <FadeIn key={partner.name} delay={index * 0.05}>
                <Card className="group hover:scale-105 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)]">{partner.category}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center">
              <p className="text-[var(--muted)] mb-6">
                + 100 partners across 25 countries
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partner Stats */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <Icon className="w-10 h-10 mx-auto mb-3 text-white/90" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner Success Stories</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                See how our partners are growing their businesses with AQLAAN.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {successStories.map((story, index) => {
              const Logo = story.logo;
              return (
                <FadeIn key={story.company} delay={index * 0.15}>
                  <Card className="bg-[var(--bg)] overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${story.color} flex items-center justify-center`}>
                            <Logo className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{story.company}</h3>
                            <p className="text-sm text-[var(--muted)]">{story.type}</p>
                          </div>
                        </div>
                        
                        <blockquote className="text-lg text-[var(--text)] mb-6 leading-relaxed italic">
                          &quot;{story.quote}&quot;
                        </blockquote>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <span className="text-white font-semibold">{story.author[0]}</span>
                          </div>
                          <div>
                            <div className="font-semibold">{story.author}</div>
                            <div className="text-sm text-[var(--muted)]">{story.role}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-center">
                        <div className="space-y-4">
                          {story.metrics.map((metric, i) => (
                            <div key={metric.label} className="text-center p-4 rounded-lg bg-[var(--bg-secondary)]">
                              <div className="text-3xl font-bold text-blue-400 mb-1">{metric.value}</div>
                              <div className="text-sm text-[var(--muted)]">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Card className="bg-[var(--bg)]">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Requirements</h2>
                <p className="text-[var(--muted)] text-lg">
                  We look for partners who share our commitment to excellence and innovation.
                </p>
              </div>
              <ul className="space-y-4 max-w-3xl mx-auto">
                {requirements.map((req, index) => (
                  <FadeIn key={req} delay={index * 0.1}>
                    <li className="flex items-start gap-4 p-4 rounded-lg bg-[var(--bg-secondary)]">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text)]">{req}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:75px_75px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build the Future Together
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Apply to join our partner program and start delivering AI excellence to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg font-semibold shadow-xl group">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                  Partner Login
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
