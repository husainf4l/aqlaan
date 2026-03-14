"use client";
import Link from "next/link";
import { 
  BookOpen, ArrowRight, Code2, Rocket, Terminal, 
  Book, FileText, Video, MessageCircle, Search,
  Zap, Shield, Database, Cloud, Layers, Box,
  CheckCircle2, ExternalLink, Github, MonitorPlay
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function DocsPage() {
  const quickLinks = [
    {
      icon: Rocket,
      title: "Quick Start",
      description: "Get up and running in 5 minutes",
      href: "/get-started",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Code2,
      title: "API Reference",
      description: "Complete API documentation",
      href: "#api-reference",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Terminal,
      title: "SDK Documentation",
      description: "Python, JavaScript, Go, Java SDKs",
      href: "#sdks",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      href: "#tutorials",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const sections = [
    {
      category: "Getting Started",
      icon: Rocket,
      items: [
        { title: "Introduction to AQLAAN", desc: "Overview of the platform and core concepts", time: "5 min" },
        { title: "Authentication & API Keys", desc: "Setting up authentication for your applications", time: "3 min" },
        { title: "Your First API Call", desc: "Make your first request in under 2 minutes", time: "2 min" },
        { title: "Environment Setup", desc: "Configure your development environment", time: "10 min" },
      ],
    },
    {
      category: "Core Concepts",
      icon: Book,
      items: [
        { title: "Vector Embeddings", desc: "Understanding semantic search and embeddings", time: "15 min" },
        { title: "Model Selection", desc: "Choosing the right AI model for your use case", time: "10 min" },
        { title: "Rate Limits & Quotas", desc: "Understanding API limits and optimization", time: "8 min" },
        { title: "Error Handling", desc: "Best practices for handling errors", time: "12 min" },
      ],
    },
    {
      category: "Integration Guides",
      icon: Layers,
      items: [
        { title: "Python SDK", desc: "Complete guide for Python integration", time: "20 min" },
        { title: "JavaScript/TypeScript SDK", desc: "Node.js and browser integration", time: "20 min" },
        { title: "REST API", desc: "Direct HTTP API integration", time: "15 min" },
        { title: "GraphQL API", desc: "Using our GraphQL endpoint", time: "15 min" },
      ],
    },
    {
      category: "Advanced Topics",
      icon: Zap,
      items: [
        { title: "Custom Model Fine-tuning", desc: "Train models on your data", time: "45 min" },
        { title: "Streaming Responses", desc: "Implement real-time streaming", time: "25 min" },
        { title: "Batch Processing", desc: "Process large datasets efficiently", time: "30 min" },
        { title: "Performance Optimization", desc: "Tips for maximizing throughput", time: "20 min" },
      ],
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      items: [
        { title: "Security Best Practices", desc: "Secure your integrations", time: "15 min" },
        { title: "Data Privacy", desc: "GDPR and data residency controls", time: "12 min" },
        { title: "Audit Logging", desc: "Track and monitor API usage", time: "10 min" },
        { title: "SSO Integration", desc: "Single sign-on configuration", time: "20 min" },
      ],
    },
    {
      category: "Platform Administration",
      icon: Cloud,
      items: [
        { title: "Organization Management", desc: "Manage teams and permissions", time: "15 min" },
        { title: "Billing & Usage", desc: "Understanding costs and monitoring usage", time: "10 min" },
        { title: "Monitoring & Alerts", desc: "Set up dashboards and notifications", time: "18 min" },
        { title: "Deployment Options", desc: "Cloud, on-premise, and hybrid setups", time: "25 min" },
      ],
    },
  ];

  const codeExamples = [
    {
      language: "Python",
      icon: Code2,
      code: `import aqlaan

# Initialize the client
client = aqlaan.Client(api_key="your-api-key")

# Generate embeddings
embeddings = client.embeddings.create(
    text="Transform text into vector embeddings",
    model="aqlaan-embed-v1"
)

# Semantic search
results = client.search(
    query="AI solutions",
    top_k=10
)`,
      color: "from-blue-500 to-blue-600",
    },
    {
      language: "JavaScript",
      icon: Terminal,
      code: `import { AqlaanClient } from '@aqlaan/sdk';

// Initialize the client
const client = new AqlaanClient({
  apiKey: 'your-api-key'
});

// Generate text
const response = await client.generate({
  prompt: 'Explain quantum computing',
  model: 'aqlaan-v3',
  maxTokens: 500
});`,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      language: "cURL",
      icon: Zap,
      code: `curl https://api.aqlaan.ai/v1/embeddings \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text here",
    "model": "aqlaan-embed-v1"
  }'`,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const popularTopics = [
    { title: "Embeddings API", views: "125K", icon: Database },
    { title: "Rate Limits", views: "98K", icon: Zap },
    { title: "Authentication", views: "87K", icon: Shield },
    { title: "Streaming", views: "76K", icon: MonitorPlay },
    { title: "Error Codes", views: "65K", icon: Code2 },
    { title: "Webhooks", views: "54K", icon: Cloud },
  ];

  const resources = [
    {
      icon: Github,
      title: "Code Examples",
      description: "Browse our GitHub repository with sample applications and use cases",
      link: "https://github.com/aqlaan",
      color: "blue",
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Ask questions and get help from our developer community",
      link: "/community",
      color: "cyan",
    },
    {
      icon: Video,
      title: "Video Library",
      description: "Watch tutorials, webinars, and conference talks",
      link: "#videos",
      color: "purple",
    },
    {
      icon: FileText,
      title: "API Changelog",
      description: "Stay updated with the latest API changes and deprecations",
      link: "#changelog",
      color: "green",
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
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Documentation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Developer Documentation
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed">
                Everything you need to build, integrate, and scale with AQLAAN AI.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--text)]"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <FadeIn key={link.title} delay={index * 0.1}>
                  <Link href={link.href}>
                    <Card className="group hover:scale-105 transition-all duration-300 h-full cursor-pointer">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-[var(--muted)] text-sm">
                        {link.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Start Examples</h2>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                Get started with these simple code examples.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6">
            {codeExamples.map((example, index) => {
              const Icon = example.icon;
              return (
                <FadeIn key={example.language} delay={index * 0.1}>
                  <Card className="bg-[var(--bg)] h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${example.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">{example.language}</h3>
                    </div>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Most Popular Topics</h2>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                The documentation our developers reference most.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <FadeIn key={topic.title} delay={index * 0.05}>
                  <Card className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold group-hover:text-blue-400 transition-colors">
                          {topic.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
                        <span>{topic.views}</span>
                        <span>views</span>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Browse by Topic</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                Comprehensive guides organized by category.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <FadeIn key={section.category} delay={sectionIndex * 0.1}>
                  <Card className="bg-[var(--bg)] h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold">{section.category}</h3>
                    </div>
                    <ul className="space-y-4">
                      {section.items.map((item) => (
                        <li key={item.title} className="group cursor-pointer">
                          <div className="flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[var(--muted)] whitespace-nowrap">
                              <CheckCircle2 className="w-3 h-3" />
                              {item.time}
                            </div>
                          </div>
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

      {/* Additional Resources */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Additional Resources</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                More ways to learn and get support.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              const colorMap: Record<string, string> = {
                blue: "from-blue-500 to-blue-600",
                cyan: "from-cyan-500 to-cyan-600",
                purple: "from-purple-500 to-purple-600",
                green: "from-green-500 to-green-600",
              };
              
              return (
                <FadeIn key={resource.title} delay={index * 0.1}>
                  <Link href={resource.link}>
                    <Card className="group hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[resource.color]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                            {resource.title}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <p className="text-[var(--muted)] text-sm">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
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
            <Terminal className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your API key and make your first call in under 5 minutes.
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
                  Contact Support
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
