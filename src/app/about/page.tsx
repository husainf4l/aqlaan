"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

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
    { year: "2020", title: "Founded AQLAAN", desc: "Started with a vision to democratize AI for enterprises" },
    { year: "2021", title: "First 100 Clients", desc: "Rapid growth across diverse industries and sectors" },
    { year: "2022", title: "Global Expansion", desc: "Opened offices in key markets across North America and Europe" },
    { year: "2023", title: "AI Innovation Lab", desc: "Launched dedicated research facility for cutting-edge AI development" },
    { year: "2024", title: "Series B Funding", desc: "Secured significant funding to accelerate product development" },
    { year: "2025", title: "Enterprise Leader", desc: "Recognized as top AI and automation solutions provider" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transforming Business with AI
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AQLAAN is a leading provider of AI and automation solutions, empowering enterprises to unlock new possibilities and drive digital transformation.
            </motion.p>
          </div>
        </FadeIn>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  To democratize artificial intelligence and enable every enterprise to harness the power of intelligent automation, regardless of size or technical expertise.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We believe that AI should be accessible, ethical, and designed to augment human expertise rather than replace it.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  To create a future where intelligent systems seamlessly integrate with human work, unlocking unprecedented productivity and innovation across all industries.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We envision a world where AI is not a competitive advantage—it&apos;s a standard utility that empowers every organization to achieve their full potential.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors">
                    <Icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          </FadeIn>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <FadeIn key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">By The Numbers</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Enterprise Clients" },
              { value: "45+", label: "Countries" },
              { value: "250+", label: "Team Members" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Interested in becoming part of AQLAAN? Explore career opportunities and partnership options.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/careers"
              className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Careers
            </a>
            <a
              href="/partners"
              className="border border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}