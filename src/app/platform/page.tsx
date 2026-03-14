"use client";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, CheckCircle2, Shield, Zap, Globe, 
  Database, Cloud, Lock, Code2, Layers, BarChart3, 
  Cpu, Network, Server, Box, GitBranch, Activity, TrendingUp 
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function PlatformPage() {
  const platformFeatures = [
    {
      icon: Cloud,
      title: "Multi-Cloud Infrastructure",
      description: "Deploy on Azure, AWS, or Google Cloud with enterprise-grade reliability and 99.9% uptime SLA.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Vector Database",
      description: "Built on pgvector with advanced indexing for lightning-fast semantic search and retrieval.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption, SSO, and advanced access controls.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Layers,
      title: "Microservices Architecture",
      description: "Scalable, containerized services on Kubernetes for maximum flexibility and performance.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Code2,
      title: "RESTful & GraphQL APIs",
      description: "Comprehensive APIs with SDKs for Python, JavaScript, Go, and Java.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor performance, usage, and costs with detailed dashboards and custom alerts.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const capabilities = [
    {
      icon: Cpu,
      title: "AI Model Hub",
      description: "Pre-trained models for NLP, computer vision, and custom fine-tuning",
      features: ["GPT-4, Claude, Llama integration", "Custom model deployment", "A/B testing framework"],
    },
    {
      icon: Network,
      title: "Data Pipeline",
      description: "ETL workflows for ingestion, transformation, and vectorization",
      features: ["Real-time streaming", "Batch processing", "Schema validation"],
    },
    {
      icon: Server,
      title: "Orchestration",
      description: "Automated workflows with event-driven architecture",
      features: ["Job scheduling", "Retry logic", "Dependency management"],
    },
    {
      icon: Lock,
      title: "Compliance Engine",
      description: "Automated compliance checks and audit trails",
      features: ["GDPR compliance", "Data residency controls", "Audit logging"],
    },
  ];

  const techStack = [
    { name: "Kubernetes", category: "Orchestration", icon: Server },
    { name: "PostgreSQL + pgvector", category: "Database", icon: Database },
    { name: "Redis", category: "Cache", icon: Zap },
    { name: "RabbitMQ", category: "Message Queue", icon: GitBranch },
    { name: "Prometheus", category: "Monitoring", icon: Activity },
    { name: "Grafana", category: "Visualization", icon: BarChart3 },
    { name: "Azure OpenAI", category: "AI Services", icon: Cpu },
    { name: "Docker", category: "Containers", icon: Box },
  ];

  const architectureLayers = [
    {
      layer: "Application Layer",
      description: "Client SDKs, Admin Dashboard, API Gateway",
      technologies: ["Next.js", "React", "TypeScript", "REST/GraphQL"],
      color: "from-blue-500 to-blue-600",
    },
    {
      layer: "Service Layer",
      description: "AI Models, Vector Search, Authentication, Billing",
      technologies: ["Python FastAPI", "Node.js", "Go Services", "OAuth 2.0"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      layer: "Data Layer",
      description: "Vector DB, Cache, Message Queue, Object Storage",
      technologies: ["PostgreSQL+pgvector", "Redis", "RabbitMQ", "Azure Blob"],
      color: "from-teal-500 to-teal-600",
    },
    {
      layer: "Infrastructure Layer",
      description: "Container Orchestration, Load Balancing, Monitoring",
      technologies: ["Kubernetes", "NGINX", "Prometheus", "Grafana"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const performanceBenchmarks = [
    { metric: "API Response Time", value: "<100ms", benchmark: "p95", icon: Zap },
    { metric: "Vector Search", value: "<50ms", benchmark: "1M vectors", icon: Database },
    { metric: "Model Inference", value: "<2s", benchmark: "GPT-4 equiv", icon: Cpu },
    { metric: "Throughput", value: "10K req/s", benchmark: "per instance", icon: TrendingUp },
  ];

  const deploymentOptions = [
    {
      name: "Cloud (SaaS)",
      description: "Fully managed on our infrastructure",
      features: ["No setup required", "Auto-scaling", "99.9% SLA", "Pay-as-you-go"],
      bestFor: "Startups & SMBs",
      icon: Cloud,
    },
    {
      name: "Hybrid",
      description: "Combine cloud and on-premise",
      features: ["Data residency", "Flexible deployment", "Custom SLA", "Dedicated support"],
      bestFor: "Regulated Industries",
      icon: Network,
    },
    {
      name: "On-Premise",
      description: "Deploy in your data center",
      features: ["Full control", "Air-gapped option", "Custom infrastructure", "White-label"],
      bestFor: "Enterprises & Gov",
      icon: Server,
    },
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
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Enterprise AI Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                The Intelligence Layer for Modern Enterprises
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed">
                Production-ready AI infrastructure built on battle-tested cloud-native technologies. Deploy, scale, and manage AI workloads with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg group">
                    Explore Platform
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    <Code2 className="mr-2 w-5 h-5" />
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Features</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Built for scale, secured by design, optimized for performance.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.1}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Everything you need to build, deploy, and scale AI applications.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <FadeIn key={capability.title} delay={index * 0.1}>
                  <Card className="group hover:scale-105 transition-all duration-300 bg-[var(--bg)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {capability.title}
                        </h3>
                        <p className="text-[var(--muted)] mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {capability.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
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

      {/* Architecture Layers */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Architecture</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Modern, scalable architecture designed for enterprise workloads.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4 mb-16">
            {architectureLayers.map((layer, index) => (
              <FadeIn key={layer.layer} delay={index * 0.1}>
                <Card className="group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {layer.layer}
                      </h3>
                      <p className="text-[var(--muted)] mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-sm text-[var(--text)] border border-[var(--border-subtle)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <FadeIn delay={0.5}>
            <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack Overview</h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <FadeIn key={tech.name} delay={0.6 + index * 0.05}>
                  <Card className="group hover:scale-105 transition-all duration-300 text-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-[var(--muted)]">{tech.category}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Performance Benchmarks</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Industry-leading performance across all key metrics.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceBenchmarks.map((bench, index) => {
              const Icon = bench.icon;
              return (
                <FadeIn key={bench.metric} delay={index * 0.1}>
                  <Card className="text-center bg-[var(--bg)] group hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{bench.value}</div>
                    <div className="font-semibold mb-1">{bench.metric}</div>
                    <div className="text-sm text-[var(--muted)]">{bench.benchmark}</div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Deployment Options</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Choose the deployment model that fits your security and compliance requirements.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <FadeIn key={option.name} delay={index * 0.15}>
                  <Card className="group hover:scale-105 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {option.name}
                    </h3>
                    <p className="text-[var(--muted)] mb-6">{option.description}</p>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-[var(--border-subtle)]">
                      <div className="text-sm text-[var(--muted)]">Best for:</div>
                      <div className="font-semibold text-blue-400">{option.bestFor}</div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:75px_75px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <Globe className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your AI Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join leading enterprises building on AQLAAN Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg font-semibold shadow-xl group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
