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
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="grow pt-1">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </div>
                </div>
              </FadeInStatic>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Technology Stack</h2>
          </FadeInStatic>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI/ML Infrastructure",
                items: ["Azure Kubernetes Service", "Azure OpenAI", "pgvector (PostgreSQL)", "FastAPI", "NestJS"]
              },
              {
                title: "Security & Compliance",
                items: ["Azure Key Vault", "Azure AD", "ISO 27001 Program", "SOC 2 Type I", "End-to-end encryption"]
              },
              {
                title: "Development Tools",
                items: ["TypeScript", "Python", "Next.js", "Tailwind CSS", "GitHub Actions"]
              }
            ].map((stack, index) => (
              <FadeInStatic key={stack.title} delay={index * 0.1}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{stack.title}</h3>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInStatic>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Industry Focus</h2>
          </FadeInStatic>
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInStatic>
              <div>
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
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInStatic>
            <FadeInStatic delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Regional Expertise</h3>
                <div className="space-y-4">
                  {[
                    { region: "Middle East & North Africa", desc: "Arabic language processing, regional compliance, cultural adaptation" },
                    { region: "European Union", desc: "GDPR compliance, multi-language support, EU regulations" },
                    { region: "GCC Countries", desc: "Banking sector expertise, Islamic finance compliance" }
                  ].map((item) => (
                    <div key={item.region} className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-bold text-lg">{item.region}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInStatic>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Security & Compliance</h2>
          </FadeInStatic>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Protection",
                features: ["End-to-end encryption", "Azure Key Vault integration", "Data residency compliance", "Audit logging"]
              },
              {
                title: "Access Control",
                features: ["Role-based access control", "Multi-factor authentication", "Azure Active Directory", "Tenant isolation"]
              },
              {
                title: "Compliance Standards",
                features: ["ISO 27001 in progress", "SOC 2 Type I achieved", "GDPR ready", "Industry-specific certifications"]
              }
            ].map((security, index) => (
              <FadeInStatic key={security.title} delay={index * 0.1}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-green-400">{security.title}</h3>
                  <ul className="space-y-2">
                    {security.features.map((feature) => (
                      <li key={feature} className="text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInStatic>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Team & Expertise</h2>
          </FadeInStatic>
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInStatic>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Leadership</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Our team combines deep enterprise software development experience with cutting-edge AI research.
                  Founded by engineers with backgrounds in distributed systems, machine learning, and enterprise architecture.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Former Microsoft Azure engineers</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">PhD-level AI researchers</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Enterprise software architects</span>
                  </div>
                </div>
              </div>
            </FadeInStatic>
            <FadeInStatic delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Domain Expertise</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Deep understanding of regulated industries with hands-on experience in healthcare, finance, and manufacturing.
                  Multi-lingual team supporting Arabic, English, and European languages.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Healthcare AI specialists</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Financial services experts</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Manufacturing consultants</span>
                  </div>
                </div>
              </div>
            </FadeInStatic>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Future Roadmap</h2>
          </FadeInStatic>
          <div className="space-y-8">
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
              <FadeInStatic key={item.quarter} delay={index * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-white font-bold text-sm">
                      {item.quarter}
                    </div>
                  </div>
                  <div className="grow pt-2">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </FadeInStatic>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInStatic>
            <h2 className="text-4xl font-bold text-center mb-16">Location & Contact</h2>
          </FadeInStatic>
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInStatic>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Headquarters</h3>
                <div className="space-y-3 text-gray-400">
                  <p>Amman, Jordan</p>
                  <p>MENA Regional Hub</p>
                  <p>Time Zone: GMT+3</p>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold mb-3">Regional Presence</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Amman, Jordan (HQ)</li>
                    <li>• Dubai, UAE (Operations)</li>
                    <li>• Bucharest, Romania (EU Hub)</li>
                    <li>• Remote-first culture</li>
                  </ul>
                </div>
              </div>
            </FadeInStatic>
            <FadeInStatic delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-300">Enterprise Sales</p>
                    <p className="text-gray-400">enterprise@aqlaan.com</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-300">Technical Support</p>
                    <p className="text-gray-400">support@aqlaan.com</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-300">Partnerships</p>
                    <p className="text-gray-400">partners@aqlaan.com</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-400 text-sm">
                    For enterprise inquiries, security assessments, or technical consultations,
                    our team responds within 24 hours.
                  </p>
                </div>
              </div>
            </FadeInStatic>
          </div>
        </div>
      </section>
    </div>
  );
}