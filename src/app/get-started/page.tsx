"use client";
import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  Code2, 
  Rocket,
  ArrowRight, 
  Play,
  Sparkles,
  Users,
  Clock,
  Book,
  Video,
  Package,
  Monitor,
  MessageCircle,
  TrendingUp,
  Lock,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  const steps = [
    {
      step: 1,
      title: "Create Account",
      description: "Sign up in seconds with your email or GitHub account. Verify and you're ready to go.",
      icon: Users,
      time: "30 seconds",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      title: "Get API Keys",
      description: "Generate your unique API keys from the dashboard. Keep them secure and start building.",
      icon: Lock,
      time: "1 minute",
      color: "from-cyan-500 to-teal-500",
    },
    {
      step: 3,
      title: "Make First Call",
      description: "Use our SDK or REST API to make your first request. See results in real-time.",
      icon: Rocket,
      time: "2 minutes",
      color: "from-teal-500 to-green-500",
    },
    {
      step: 4,
      title: "Build & Scale",
      description: "Integrate AI into your app, monitor usage, and scale as you grow with confidence.",
      icon: TrendingUp,
      time: "Ongoing",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const resources = [
    {
      title: "Quick Start Guide",
      description: "Step-by-step tutorial to make your first API call",
      type: "Tutorial",
      time: "5 min read",
      icon: Book,
      link: "/docs/quickstart",
      color: "blue",
    },
    {
      title: "API Documentation",
      description: "Complete reference for all AQLAAN APIs and endpoints",
      type: "Reference",
      time: "Comprehensive",
      icon: Code2,
      link: "/docs",
      color: "cyan",
    },
    {
      title: "SDK Downloads",
      description: "Official SDKs for Python, JavaScript, Java, and more",
      type: "Tools",
      time: "5 min",
      icon: Package,
      link: "/docs/sdks",
      color: "purple",
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code samples for common use cases",
      type: "Examples",
      time: "15 min",
      icon: Monitor,
      link: "/docs/examples",
      color: "green",
    },
    {
      title: "Video Tutorials",
      description: "Visual guides for getting started and advanced topics",
      type: "Video",
      time: "30 min",
      icon: Video,
      link: "/docs/videos",
      color: "pink",
    },
    {
      title: "Community Forum",
      description: "Connect with developers and get help from the community",
      type: "Community",
      time: "Ongoing",
      icon: MessageCircle,
      link: "/community",
      color: "orange",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "You can create an account, get your API keys, and make your first API call in under 5 minutes. Our quick start guide walks you through everything step-by-step.",
    },
    {
      question: "What programming languages do you support?",
      answer: "We provide official SDKs for Python, JavaScript/TypeScript, Java, C#, Go, and Ruby. You can also use our REST APIs directly from any programming language that supports HTTP requests.",
    },
  ];

  const codeExample = `# Install the AQLAAN Python SDK
pip install aqlaan

# Make your first API call
from aqlaan import AqlaanClient

client = AqlaanClient(api_key="your_api_key")

response = client.ai.complete({
  "prompt": "Explain AI in simple terms",
  "model": "aqlaan-gpt-4",
  "max_tokens": 150
})

print(response.text)`;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px] dark:bg-grid-slate-400/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Start Your AI Journey Today</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Get Started with AQLAAN
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed">
                Deploy enterprise-grade AI in minutes. No credit card required to start.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg group">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" className="px-8 py-6 text-lg group">
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Started in 4 Simple Steps</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto">
                From signup to your first API call in under 5 minutes.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 via-teal-500 to-green-500 opacity-20" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <FadeIn key={step.step} delay={index * 0.15}>
                    <Card className="text-center group hover:scale-105 transition-all duration-300 relative bg-[var(--bg)]">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm mb-3">
                        {step.step}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                        <Clock className="w-4 h-4" />
                        {step.time}
                      </div>
                    </Card>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Coding in Seconds</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl">
                Copy, paste, and run. It&apos;s that simple.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-slate-400">quickstart.py</span>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono leading-relaxed">
                  {codeExample}
                </code>
              </pre>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl">
                Everything you need to master AQLAAN AI.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              const colorMap: Record<string, string> = {
                blue: "from-blue-500 to-blue-600",
                cyan: "from-cyan-500 to-cyan-600",
                purple: "from-purple-500 to-purple-600",
                green: "from-green-500 to-green-600",
                pink: "from-pink-500 to-pink-600",
                orange: "from-orange-500 to-orange-600",
              };
              
              return (
                <FadeIn key={resource.title} delay={index * 0.1}>
                  <Link href={resource.link}>
                    <Card className="group hover:scale-105 transition-all duration-300 cursor-pointer h-full bg-[var(--bg)] hover:shadow-xl">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[resource.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--muted)] border border-[var(--border-subtle)]">
                          {resource.type}
                        </span>
                        <span className="text-sm text-[var(--muted)] flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {resource.time}
                        </span>
                      </div>
                      
                      <div className="mt-4 flex items-center text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
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

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl">
                Everything you need to know to get started.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <Card className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">Q</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-[var(--muted)] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
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
            <Globe className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of developers already building with AQLAAN AI.
              Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg font-semibold shadow-xl group">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}