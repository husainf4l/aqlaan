import FadeInStatic from "@/components/animations/FadeInStatic";
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
    { year: "2023", title: "Founded", desc: "Established in Amman, Jordan, focusing on enterprise AI for MENA and EU markets" },
    { year: "2024-Q2", title: "First Deployments", desc: "Launched production systems for distribution and financial services clients" },
    { year: "2024-Q3", title: "Platform Evolution", desc: "Deployed multi-tenant architecture on Azure Kubernetes Service with pgvector" },
    { year: "2025", title: "Security Posture", desc: "ISO 27001 program initiated, SOC 2 Type I readiness achieved" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <FadeInStatic>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              Transforming Business with AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in">
              Build production-grade AI systems that enterprises trust with their most critical workflows. Deployed on Azure Kubernetes with tenant isolation, audit logs, and encryption at rest.
            </p>
          </div>
        </FadeInStatic>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInStatic>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  Build production-grade AI systems that enterprises trust with their most critical workflows. No hype, no shortcuts. Ship reliable software with audit trails, tenant isolation, and measurable outcomes.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We focus on enterprise automation, language intelligence (RAG), computer vision, healthcare AI, and infrastructure AI for regulated industries in MENA and EU.
                </p>
              </div>
            </FadeInStatic>
            <FadeInStatic delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  Become the default AI infrastructure partner for regulated industries in MENA and EU. Expand language support (Arabic, Romanian, Turkish).
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Achieve SOC 2 Type II and ISO 27001 certification by 2026-Q2. Maintain 99.9% uptime SLA for mission-critical enterprise workflows.
                </p>
              </div>
            </FadeInStatic>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          </FadeInStatic>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeInStatic key={value.title} delay={index * 0.1}>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors">
                    <Icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </FadeInStatic>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          </FadeInStatic>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <FadeInStatic key={milestone.year} delay={index * 0.1}>
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
              </FadeInStatic>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">By The Numbers</h2>
          </FadeInStatic>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "12+", label: "Enterprise Deployments" },
              { value: "MENA+EU", label: "Regional Coverage" },
              { value: "<180ms", label: "Median Query Latency" },
              { value: "ISO 27001", label: "Security Track" },
            ].map((stat, index) => (
              <FadeInStatic key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </FadeInStatic>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}