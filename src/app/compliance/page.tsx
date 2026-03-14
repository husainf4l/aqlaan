"use client";
import { 
  Shield, CheckCircle, Lock, Globe, FileText, 
  Award, Server, Database, Eye, Calendar,
  Building2, Users, AlertCircle, Download
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CompliancePage() {
  const certifications = [
    {
      icon: Shield,
      name: "SOC 2 Type II",
      status: "Certified",
      date: "2025",
      description: "Annual audit of security, availability, and confidentiality controls by independent third-party auditors.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      name: "ISO 27001",
      status: "In Progress",
      date: "Expected Q3 2026",
      description: "International standard for information security management systems (ISMS) certification program initiated.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Globe,
      name: "GDPR Compliant",
      status: "Compliant",
      date: "2023",
      description: "Full compliance with EU General Data Protection Regulation for data privacy and protection.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FileText,
      name: "HIPAA Ready",
      status: "Available",
      date: "2024",
      description: "Business Associate Agreement (BAA) available for healthcare customers requiring HIPAA compliance.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const frameworks = [
    {
      name: "Data Protection & Privacy",
      items: [
        "GDPR (General Data Protection Regulation) - EU",
        "CCPA (California Consumer Privacy Act) - USA",
        "PIPEDA (Personal Information Protection) - Canada",
        "Data residency controls for regional compliance",
      ],
    },
    {
      name: "Security Standards",
      items: [
        "SOC 2 Type II - Security, Availability, Confidentiality",
        "ISO 27001 - Information Security Management",
        "NIST Cybersecurity Framework alignment",
        "PCI DSS for payment processing",
      ],
    },
    {
      name: "Industry Regulations",
      items: [
        "HIPAA - Healthcare (BAA available)",
        "FERPA - Educational institutions",
        "Financial services compliance (varies by region)",
        "Export control compliance (ITAR, EAR)",
      ],
    },
  ];

  const securityMeasures = [
    {
      icon: Lock,
      title: "Encryption",
      description: "AES-256 encryption at rest, TLS 1.3 in transit",
      details: ["End-to-end encryption", "Key rotation policies", "HSM for key management"],
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Multi-layered security architecture",
      details: ["DDoS protection", "WAF & IDS/IPS", "Network segmentation", "Zero-trust architecture"],
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Comprehensive data protection",
      details: ["Regular backups", "Data anonymization", "Secure data deletion", "Access logging"],
    },
    {
      icon: Eye,
      title: "Monitoring & Auditing",
      description: "24/7 security monitoring",
      details: ["SIEM integration", "Real-time alerts", "Audit trails", "Incident response"],
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Principle of least privilege",
      details: ["MFA enforcement", "RBAC", "SSO integration", "Session management"],
    },
    {
      icon: AlertCircle,
      title: "Incident Response",
      description: "Documented security procedures",
      details: ["24-hour response SLA", "Breach notification", "Forensic analysis", "Recovery protocols"],
    },
  ];

  const dataHandling = [
    {
      category: "Data Collection",
      practices: [
        "Transparent data collection policies",
        "Minimal data collection principle",
        "Clear consent mechanisms",
        "Purpose limitation compliance",
      ],
    },
    {
      category: "Data Storage",
      practices: [
        "Geographic data residency options",
        "Encrypted storage with AES-256",
        "Separate production/development environments",
        "Regular security assessments",
      ],
    },
    {
      category: "Data Processing",
      practices: [
        "Processing only per customer instructions",
        "Data Processing Agreements (DPA) available",
        "Sub-processor transparency",
        "Regular compliance audits",
      ],
    },
    {
      category: "Data Rights",
      practices: [
        "Right to access personal data",
        "Right to rectification and deletion",
        "Data portability in standard formats",
        "Objection and restriction rights",
      ],
    },
  ];

  const documents = [
    { name: "SOC 2 Type II Report", description: "Security audit report (under NDA)", type: "Audit Report" },
    { name: "Data Processing Agreement", description: "DPA template for GDPR compliance", type: "Legal" },
    { name: "Business Associate Agreement", description: "HIPAA BAA for healthcare customers", type: "Legal" },
    { name: "Security Whitepaper", description: "Technical security architecture overview", type: "Technical" },
    { name: "Penetration Test Results", description: "Annual third-party security assessment", type: "Audit Report" },
    { name: "Compliance Certifications", description: "Official certification documents", type: "Certificate" },
  ];

  const complianceRoadmap = [
    {
      year: "2023",
      status: "Completed",
      achievements: [
        "GDPR compliance framework established",
        "Data residency controls implemented",
        "Privacy policy and DPA templates created",
        "Initial security audit completed",
      ],
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      year: "2024",
      status: "Completed",
      achievements: [
        "HIPAA BAA program launched",
        "Advanced encryption implementation",
        "Third-party penetration testing",
        "Security incident response procedures",
      ],
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      year: "2025",
      status: "Completed",
      achievements: [
        "SOC 2 Type II certification achieved",
        "24/7 security monitoring established",
        "Zero-trust architecture deployment",
        "Annual compliance audit passed",
      ],
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      year: "2026",
      status: "In Progress",
      achievements: [
        "ISO 27001 certification (Q3 2026)",
        "Enhanced SIEM integration",
        "AI/ML security controls",
        "Expanded regional compliance",
      ],
      icon: AlertCircle,
      color: "text-blue-500",
    },
  ];

  const trustMetrics = [
    { label: "Security Incidents (2025)", value: "0", icon: Shield },
    { label: "Uptime SLA", value: "99.9%", icon: Server },
    { label: "Data Breach History", value: "Never", icon: Lock },
    { label: "Customer Audits Passed", value: "100%", icon: Award },
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
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Security & Compliance</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Enterprise-Grade Compliance
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed">
                Trust and transparency are at the core of everything we build. AQLAAN meets the highest standards for security, privacy, and regulatory compliance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Standards</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Independently verified security and compliance certifications.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <FadeIn key={cert.name} delay={index * 0.1}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                            {cert.name}
                          </h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            cert.status === 'Certified' || cert.status === 'Compliant' || cert.status === 'Available'
                              ? 'bg-green-500/10 text-green-500'
                              : 'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {cert.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-3">
                          <Calendar className="w-4 h-4" />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                    <p className="text-[var(--muted)] leading-relaxed">
                      {cert.description}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <FadeIn key={metric.label} delay={index * 0.1}>
                  <div className="text-center">
                    <Icon className="w-10 h-10 mx-auto mb-3 text-white/90" />
                    <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-sm text-white/70">{metric.label}</div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Compliance Frameworks</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                We adhere to global standards for data protection and security.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <FadeIn key={framework.name} delay={index * 0.15}>
                <Card className="bg-[var(--bg)] h-full">
                  <h3 className="text-xl font-bold mb-6 text-blue-400">{framework.name}</h3>
                  <ul className="space-y-3">
                    {framework.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Security Measures</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Multi-layered security architecture protecting your data.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
              return (
                <FadeIn key={measure.title} delay={index * 0.08}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {measure.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] mb-4">{measure.description}</p>
                    <ul className="space-y-2">
                      {measure.details.map((detail) => (
                        <li key={detail} className="text-sm text-[var(--muted)] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {detail}
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

      {/* Compliance Roadmap */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Compliance Journey</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Our commitment to security and compliance excellence over time.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 hidden md:block" />
              
              <div className="space-y-8">
                {complianceRoadmap.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <FadeIn key={milestone.year} delay={index * 0.15}>
                      <div className="relative">
                        <div className="md:flex items-start gap-8">
                          {/* Year marker */}
                          <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0">
                            <div className="inline-flex md:flex items-center gap-3">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center relative z-10`}>
                                <Icon className={`w-8 h-8 ${milestone.color}`} />
                              </div>
                              <div className="md:hidden">
                                <div className="text-2xl font-bold">{milestone.year}</div>
                                <div className="text-sm text-[var(--muted)]">{milestone.status}</div>
                              </div>
                            </div>
                            <div className="hidden md:block mt-3 text-center">
                              <div className="text-2xl font-bold">{milestone.year}</div>
                              <div className="text-sm text-[var(--muted)]">{milestone.status}</div>
                            </div>
                          </div>
                          
                          {/* Achievements */}
                          <Card className="flex-1 bg-[var(--bg)]">
                            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                            <ul className="space-y-3">
                              {milestone.achievements.map((achievement, i) => (
                                <li key={i} className="flex gap-3 text-sm">
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-[var(--muted)]">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </Card>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Data Handling Practices</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Transparent and responsible data management throughout the lifecycle.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {dataHandling.map((section, index) => (
              <FadeIn key={section.category} delay={index * 0.1}>
                <Card className="bg-[var(--bg)] h-full">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Database className="w-6 h-6 text-blue-400" />
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.practices.map((practice) => (
                      <li key={practice} className="flex gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--muted)]">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Documents */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Compliance Documentation</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Access our compliance reports and legal agreements.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <FadeIn key={doc.name} delay={index * 0.08}>
                <Card className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1 group-hover:text-blue-400 transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-[var(--muted)] mb-2">{doc.description}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--muted)]">
                        {doc.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-blue-500/10">
                    <Download className="w-4 h-4 mr-2" />
                    Request Access
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:75px_75px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <Building2 className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions About Compliance?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our compliance and security teams are here to answer your questions and provide documentation for your audit requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg font-semibold shadow-xl">
                Contact Compliance Team
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                Schedule Audit Call
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
