"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Award, Users, Zap, Target, Shield, Rocket, TrendingUp, Code, Lock, Globe, ArrowRight, Building2, Mail, MapPin, Clock } from "lucide-react";
import { AnimatedHeroBlob } from "@/components/animations/AnimatedHeroBlob";
import BackgroundMotion from "@/components/visuals/BackgroundMotion";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of AI technology to solve real-world problems.",
    },
    {
      icon: Users,
      title: "People-Centric",
      description: "Our solutions are designed with human expertise at the core.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project we undertake.",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Enterprise-grade solutions you can trust for mission-critical operations.",
    },
  ];

  const milestones = [
    { year: "2023", title: "Founded", desc: "Established in Amman, Jordan, focusing on enterprise AI for MENA and EU markets" },
    { year: "2024-Q2", title: "First Deployments", desc: "Launched production systems for distribution and financial services clients" },
    { year: "2024-Q3", title: "Platform Evolution", desc: "Deployed multi-tenant architecture on Azure Kubernetes Service with pgvector" },
    { year: "2025", title: "Security Posture", desc: "ISO 27001 program initiated, SOC 2 Type I readiness achieved" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <AnimatedHeroBlob />
        <BackgroundMotion />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Building2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">About Aqlaan</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transforming Business with{' '}
              <span className="relative inline-block text-[var(--text)]">
                AI
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-[var(--muted)] max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Build production-grade AI systems that enterprises trust with their most critical workflows. Deployed on Azure Kubernetes with tenant isolation, audit logs, and encryption at rest.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 mt-12 border-t border-white/10 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-blue-400" />
                  <div className="text-3xl font-bold text-[var(--text)]">2023</div>
                </div>
                <div className="text-sm text-[var(--muted)]">Founded</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <div className="text-3xl font-bold text-[var(--text)]">99.9%</div>
                </div>
                <div className="text-sm text-[var(--muted)]">Uptime SLA</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <div className="text-3xl font-bold text-[var(--text)]">MENA+EU</div>
                </div>
                <div className="text-sm text-[var(--muted)]">Coverage</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <div className="text-3xl font-bold text-[var(--text)]">SOC 2</div>
                </div>
                <div className="text-sm text-[var(--muted)]">Type I</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/20 h-full">
                <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-4">
                  Build production-grade AI systems that enterprises trust with their most critical workflows. No hype, no shortcuts. Ship reliable software with audit trails, tenant isolation, and measurable outcomes.
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  We focus on enterprise automation, language intelligence (RAG), computer vision, healthcare AI, and infrastructure AI for regulated industries in MENA and EU.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20 h-full">
                <div className="mb-4 p-3 bg-purple-500/10 rounded-xl inline-block">
                  <Rocket className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-4">
                  Become the default AI infrastructure partner for regulated industries in MENA and EU. Expand language support (Arabic, Romanian, Turkish).
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  Achieve SOC 2 Type II and ISO 27001 certification by 2026-Q2. Maintain 99.9% uptime SLA for mission-critical enterprise workflows.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8 hover:scale-105 hover:border-blue-500/30 transition-all duration-300 h-full group">
                    <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{value.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Key milestones in our growth and evolution.
            </p>
          </motion.div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-6 items-start bg-[var(--card-bg)] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="grow pt-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{milestone.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technology{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Enterprise-grade infrastructure and cutting-edge tools.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI/ML Infrastructure",
                icon: Code,
                color: "blue",
                items: ["Azure Kubernetes Service", "Azure OpenAI", "pgvector (PostgreSQL)", "FastAPI", "NestJS"]
              },
              {
                title: "Security & Compliance",
                icon: Lock,
                color: "green",
                items: ["Azure Key Vault", "Azure AD", "ISO 27001 Program", "SOC 2 Type I", "End-to-end encryption"]
              },
              {
                title: "Development Tools",
                icon: Zap,
                color: "purple",
                items: ["TypeScript", "Python", "Next.js", "Tailwind CSS", "GitHub Actions"]
              }
            ].map((stack, index) => {
              const Icon = stack.icon;
              const colorClasses = {
                blue: "text-blue-400 bg-blue-500/10 group-hover:bg-blue-500/20",
                green: "text-green-400 bg-green-500/10 group-hover:bg-green-500/20",
                purple: "text-purple-400 bg-purple-500/10 group-hover:bg-purple-500/20"
              };
              return (
                <motion.div
                  key={stack.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8 h-full hover:scale-105 hover:border-blue-500/30 transition-all duration-300 group">
                    <div className={`mb-4 p-3 rounded-xl inline-block transition-colors ${colorClasses[stack.color as keyof typeof colorClasses]}`}>
                      <Icon className={`w-8 h-8 ${colorClasses[stack.color as keyof typeof colorClasses].split(' ')[0]}`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 ${colorClasses[stack.color as keyof typeof colorClasses].split(' ')[0]}`}>{stack.title}</h3>
                    <ul className="space-y-2">
                      {stack.items.map((item) => (
                        <li key={item} className="text-[var(--muted)] flex items-center text-sm">
                          <CheckCircle className={`w-4 h-4 mr-3 shrink-0 ${colorClasses[stack.color as keyof typeof colorClasses].split(' ')[0]}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industry{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Focus
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Serving regulated industries with production-grade AI solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8">
                <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Primary Industries</h3>
                <div className="space-y-4">
                  {[
                    { industry: "Financial Services", desc: "Document processing, compliance automation, risk assessment" },
                    { industry: "Healthcare", desc: "Medical imaging analysis, clinical decision support, patient monitoring" },
                    { industry: "Manufacturing", desc: "Quality control, predictive maintenance, supply chain optimization" },
                    { industry: "Logistics & Distribution", desc: "Inventory management, route optimization, demand forecasting" }
                  ].map((item) => (
                    <div key={item.industry} className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-bold text-lg">{item.industry}</h4>
                      <p className="text-[var(--muted)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8">
                <div className="mb-4 p-3 bg-purple-500/10 rounded-xl inline-block">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Regional Expertise</h3>
                <div className="space-y-4">
                  {[
                    { region: "Middle East & North Africa", desc: "Arabic language processing, regional compliance, cultural adaptation" },
                    { region: "European Union", desc: "GDPR compliance, multi-language support, EU regulations" },
                    { region: "GCC Countries", desc: "Banking sector expertise, Islamic finance compliance" }
                  ].map((item) => (
                    <div key={item.region} className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-bold text-lg">{item.region}</h4>
                      <p className="text-[var(--muted)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Security &{' '}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Compliance
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Enterprise-grade security and compliance standards.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Protection",
                icon: Lock,
                features: ["End-to-end encryption", "Azure Key Vault integration", "Data residency compliance", "Audit logging"]
              },
              {
                title: "Access Control",
                icon: Shield,
                features: ["Role-based access control", "Multi-factor authentication", "Azure Active Directory", "Tenant isolation"]
              },
              {
                title: "Compliance Standards",
                icon: CheckCircle,
                features: ["ISO 27001 in progress", "SOC 2 Type I achieved", "GDPR ready", "Industry-specific certifications"]
              }
            ].map((security, index) => {
              const Icon = security.icon;
              return (
                <motion.div
                  key={security.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8 h-full hover:scale-105 hover:border-green-500/30 transition-all duration-300 group">
                    <div className="mb-4 p-3 bg-green-500/10 rounded-xl inline-block group-hover:bg-green-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-green-400">{security.title}</h3>
                    <ul className="space-y-2">
                      {security.features.map((feature) => (
                        <li key={feature} className="text-[var(--muted)] flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Team &{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              World-class talent delivering enterprise AI solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8">
                <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Leadership</h3>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Our team combines deep enterprise software development experience with cutting-edge AI research.
                  Founded by engineers with backgrounds in distributed systems, machine learning, and enterprise architecture.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-[var(--muted)]">Former Microsoft Azure engineers</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-[var(--muted)]">PhD-level AI researchers</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-[var(--muted)]">Enterprise software architects</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8">
                <div className="mb-4 p-3 bg-purple-500/10 rounded-xl inline-block">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Domain Expertise</h3>
                <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                  Deep understanding of regulated industries with hands-on experience in healthcare, finance, and manufacturing.
                  Multi-lingual team supporting Arabic, English, and European languages.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-[var(--muted)]">Healthcare AI specialists</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-[var(--muted)]">Financial services experts</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-[var(--muted)]">Manufacturing consultants</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Future{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Our strategic vision for innovation and growth.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quarter: "2025-Q1",
                title: "Multi-Language Expansion",
                desc: "Launch Arabic and Turkish language models. Expand Romanian language support for EU markets."
              },
              {
                quarter: "2025-Q2",
                title: "Healthcare AI Suite",
                desc: "Complete HIPAA-compliant healthcare AI platform with clinical decision support and medical imaging."
              },
              {
                quarter: "2025-Q3",
                title: "Edge AI Platform",
                desc: "Deploy edge computing solutions for IoT and real-time AI inference in manufacturing and logistics."
              },
              {
                quarter: "2025-Q4",
                title: "Advanced Analytics",
                desc: "Launch predictive analytics platform with automated insight generation and business intelligence."
              },
              {
                quarter: "2026-Q1",
                title: "Global Expansion",
                desc: "Establish presence in additional MENA countries and expand EU operations."
              },
              {
                quarter: "2026-Q2",
                title: "Certifications",
                desc: "Achieve ISO 27001 and SOC 2 Type II certifications. Launch FedRAMP-ready solutions."
              }
            ].map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              >
                <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-xs group-hover:scale-110 transition-transform">
                        {item.quarter}
                      </div>
                    </div>
                    <div className="grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-[var(--muted)] leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Location &{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Global presence with regional expertise.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8 h-full">
                <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Headquarters</h3>
                <div className="space-y-3 text-[var(--muted)] mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>Amman, Jordan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>MENA Regional Hub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Time Zone: GMT+3</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-bold mb-3 text-[var(--text)]">Regional Presence</h4>
                  <ul className="space-y-2 text-[var(--muted)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      Amman, Jordan (HQ)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      Dubai, UAE (Operations)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      Bucharest, Romania (EU Hub)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      Remote-first culture
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-8 h-full">
                <div className="mb-4 p-3 bg-purple-500/10 rounded-xl inline-block">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-[var(--text)] mb-1">Enterprise Sales</p>
                      <p className="text-[var(--muted)] text-sm">enterprise@aqlaan.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-[var(--text)] mb-1">Partnerships</p>
                      <p className="text-[var(--muted)] text-sm">partners@aqlaan.com</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    For enterprise inquiries, security assessments, or technical consultations,
                    our team responds within 24 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block p-4 bg-blue-500/10 rounded-2xl">
              <Rocket className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Future?
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our production-grade AI solutions can transform your business operations.
              Join leading enterprises in MENA and EU who trust us with their mission-critical workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-500/25">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 text-base rounded-xl border-white/10 hover:bg-white/5">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}