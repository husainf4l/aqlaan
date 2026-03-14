"use client";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, Target, Eye, Lightbulb, Globe, 
  Rocket, TrendingUp, Users, Zap, Shield, Heart,
  Brain, Award, Building2, BookOpen, CheckCircle2
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function VisionPage() {
  const visionPillars = [
    {
      icon: Brain,
      title: "AI for Everyone",
      description: "Democratize access to enterprise-grade AI technology, making it accessible to organizations of all sizes across the MENA region and beyond.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Regional Leadership",
      description: "Establish AQLAAN as the leading AI platform in the Middle East, bridging the technology gap and fostering innovation.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Build AI systems that are secure, compliant, and transparent, setting new standards for responsible AI development.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Rocket,
      title: "Innovation at Scale",
      description: "Enable businesses to innovate faster by providing production-ready AI infrastructure that scales effortlessly.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const goals = [
    {
      icon: Target,
      title: "2026 Milestone",
      description: "Power 1,000+ AI applications across healthcare, finance, and enterprise sectors",
      metrics: ["500+ Enterprise Clients", "99.99% Platform Uptime", "10M+ Daily API Calls"],
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "Build the largest AI developer community in MENA region",
      metrics: ["50,000+ Developers", "100+ Partner Integrations", "1,000+ Open Source Contributors"],
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Achieve global recognition for AI excellence and innovation",
      metrics: ["ISO 27001 Certified", "SOC 2 Type II Compliant", "Gartner Recognition"],
    },
  ];

  const principles = [
    { icon: Heart, title: "Human-Centered", desc: "AI that augments human intelligence, not replaces it" },
    { icon: Lightbulb, title: "Innovation First", desc: "Continuously push the boundaries of what's possible" },
    { icon: Shield, title: "Security by Design", desc: "Enterprise-grade security built into every layer" },
    { icon: Globe, title: "Global Impact", desc: "Solutions that create positive change worldwide" },
    { icon: BookOpen, title: "Knowledge Sharing", desc: "Open research and transparent methodologies" },
    { icon: TrendingUp, title: "Sustainable Growth", desc: "Long-term value creation for all stakeholders" },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Foundation & Vision",
      description: "AQLAAN founded in Amman, Jordan with mission to democratize AI for MENA region",
      achievements: ["Core team assembled", "Initial funding secured", "Platform architecture designed"],
      icon: Rocket,
    },
    {
      year: "2024",
      title: "Product Launch & Growth",
      description: "Production platform launched with first enterprise customers",
      achievements: ["100+ customers onboarded", "10M+ API calls processed", "SOC 2 Type I achieved"],
      icon: TrendingUp,
    },
    {
      year: "2025",
      title: "Scale & Expansion",
      description: "Regional expansion and advanced AI capabilities",
      achievements: ["500+ enterprise clients", "Multi-region deployment", "SOC 2 Type II certified"],
      icon: Globe,
    },
    {
      year: "2026",
      title: "Market Leadership",
      description: "Establishing AQLAAN as the leading AI platform in MENA",
      achievements: ["1,000+ applications powered", "ISO 27001 certification", "50K+ developer community"],
      icon: Award,
    },
    {
      year: "2027+",
      title: "Global Innovation",
      description: "Expanding global reach and next-gen AI capabilities",
      achievements: ["Global presence", "Advanced AGI research", "Industry partnerships"],
      icon: Sparkles,
    },
  ];

  const impactMetrics = [
    { value: "245M+", label: "API Calls Processed", sublabel: "Monthly", icon: Zap },
    { value: "500+", label: "Enterprise Customers", sublabel: "Globally", icon: Building2 },
    { value: "99.98%", label: "Platform Uptime", sublabel: "Last 12 months", icon: Shield },
    { value: "15K+", label: "Developers", sublabel: "Active users", icon: Users },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)] overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px] dark:bg-grid-slate-400/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Eye className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Our Vision</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Shaping the Future of Intelligence
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed">
                We envision a world where every organization—regardless of size or location—can harness the transformative power of artificial intelligence to solve their most complex challenges.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vision Pillars</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Four fundamental beliefs that guide our mission and shape our future.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {visionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={index * 0.1}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[var(--muted)] text-lg leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic Goals</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Ambitious targets that drive us forward every day.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <FadeIn key={goal.title} delay={index * 0.15}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full bg-[var(--bg)]">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {goal.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-6 leading-relaxed">
                      {goal.description}
                    </p>
                    <ul className="space-y-3">
                      {goal.metrics.map((metric) => (
                        <li key={metric} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span className="text-[var(--muted)]">{metric}</span>
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

      {/* Guiding Principles */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Guiding Principles</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                The values that shape our decisions and define our culture.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <FadeIn key={principle.title} delay={index * 0.08}>
                  <Card className="group hover:scale-105 transition-all duration-300 text-center h-full">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {principle.desc}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                From vision to reality — building the future of AI, one milestone at a time.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 opacity-20" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <FadeIn key={item.year} delay={index * 0.15}>
                    <div className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                        <Card className="bg-[var(--bg)] group hover:scale-105 transition-all duration-300">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-2xl font-bold text-blue-400 mb-1">{item.year}</div>
                              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-[var(--muted)] mb-4">{item.description}</p>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="hidden lg:block relative z-10">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50" />
                      </div>
                      
                      <div className="flex-1" />
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to excellence.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <FadeIn key={metric.label} delay={index * 0.1}>
                  <Card className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                    <div className="font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-[var(--muted)]">{metric.sublabel}</div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Journey Ahead */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Card className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:75px_75px]" />
              <div className="relative p-12 text-center">
                <Rocket className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The Journey Ahead
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                  We're just getting started. Our vision extends far beyond today's capabilities. 
                  We're building the infrastructure for the next generation of AI applications—systems 
                  that are more intelligent, more ethical, and more accessible than ever before.
                </p>
                <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                  Join us in shaping a future where AI empowers every business, enriches every industry, 
                  and creates opportunities for innovation at unprecedented scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about">
                    <Button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg font-semibold shadow-xl group">
                      Learn About Us
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/careers">
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                      Join Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Building2 className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Part of the Vision
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
              Whether you're a developer, enterprise, or partner—there's a place for you in our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/partners">
                <Button variant="outline" className="px-8 py-6 text-lg">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
