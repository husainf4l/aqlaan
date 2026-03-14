"use client";
import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  Zap, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Play,
  Sparkles,
  Users,
  Shield,
  Clock,
  Star,
  Book,
  Video,
  Package,
  Monitor,
  MessageCircle,
  Award,
  TrendingUp,
  Database,
  Lock,
  Globe
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GetStartedPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const stats = [
    { value: "10k+", label: "Active Developers", icon: Users },
    { value: "99.9%", label: "Uptime SLA", icon: Shield },
    { value: "<100ms", label: "AVG Response", icon: Zap },
    { value: "24/7", label: "Support", icon: Clock },
  ];

  const paths = [
    {
      title: "Starter",
      description: "Perfect for individual developers and small projects.",
      price: { monthly: 0, annual: 0 },
      features: [
        { text: "100 API calls/month", included: true },
        { text: "Basic AI models", included: true },
        { text: "Community support", included: true },
        { text: "Documentation access", included: true },
        { text: "SDK access", included: false },
        { text: "Analytics dashboard", included: false },
      ],
      cta: "Start Free",
      popular: false,
      icon: Sparkles,
      color: "from-slate-500 to-slate-600",
    },
    {
      title: "Developer",
      description: "For developers building AI-powered applications.",
      price: { monthly: 49, annual: 490 },
      features: [
        { text: "10,000 API calls/month", included: true },
        { text: "Advanced AI models", included: true },
        { text: "Email support", included: true },
        { text: "Full SDK access", included: true },
        { text: "Basic analytics", included: true },
        { text: "Custom integrations", included: false },
      ],
      cta: "Start Developer",
      popular: false,
      icon: Code2,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Business",
      description: "Ideal for businesses deploying AI at scale.",
      price: { monthly: 199, annual: 1990 },
      features: [
        { text: "100,000 API calls/month", included: true },
        { text: "All AI models", included: true },
        { text: "Priority support", included: true },
        { text: "Custom integrations", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      cta: "Start Business",
      popular: true,
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Enterprise",
      description: "Full-scale enterprise deployment with custom solutions.",
      price: { monthly: null, annual: null },
      features: [
        { text: "Unlimited API calls", included: true },
        { text: "Custom AI models", included: true },
        { text: "Dedicated support team", included: true },
        { text: "On-premise deployment", included: true },
        { text: "SLA guarantee", included: true },
        { text: "Custom training", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Award,
      color: "from-purple-500 to-pink-600",
    },
  ];

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
    {
      question: "Is there a free tier available?",
      answer: "Yes! Our Starter plan is completely free and includes 100 API calls per month, access to basic AI models, community support, and full documentation. It's perfect for trying out AQLAAN and building proof-of-concepts.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account dashboard. Changes take effect immediately, and billing is prorated based on your usage.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "Support varies by plan: Starter includes community forums, Developer adds email support, Business includes priority support with faster response times, and Enterprise gets a dedicated support team available 24/7.",
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes! Our Enterprise plan includes unlimited API calls, custom AI models trained on your data, on-premise deployment options, dedicated support teams, SLA guarantees, and custom integration services. Contact our sales team for a personalized consultation.",
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

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <FadeIn key={stat.label} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-3">
                        <stat.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-[var(--text)] mb-1">{stat.value}</div>
                      <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Start free and scale as you grow. All plans include our core AI platform.
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    billingCycle === "monthly"
                      ? "bg-blue-500 text-white"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    billingCycle === "annual"
                      ? "bg-blue-500 text-white"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  Annual <span className="ml-1 text-xs">(Save 17%)</span>
                </button>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paths.map((plan, index) => {
              const Icon = plan.icon;
              const price = plan.price[billingCycle];
              
              return (
                <FadeIn key={plan.title} delay={index * 0.1}>
                  <Card 
                    className={`group hover:scale-105 transition-all duration-300 h-full relative ${
                      plan.popular ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
                    } ${selectedPlan === plan.title ? 'ring-2 ring-cyan-500' : ''}`}
                    onClick={() => setSelectedPlan(plan.title)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {plan.title}
                    </h3>
                    
                    <div className="mb-4">
                      {price !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-[var(--text)]">${price}</span>
                          <span className="text-[var(--muted)]">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-[var(--text)]">Custom</div>
                      )}
                    </div>
                    
                    <p className="text-[var(--muted)] mb-6 text-sm">{plan.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <div key={feature.text} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${feature.included ? 'text-green-500' : 'text-slate-600'}`} />
                          <span className={`text-sm ${feature.included ? 'text-[var(--text)]' : 'text-[var(--muted)] line-through'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full mt-auto ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white' 
                          : ''
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
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
                Copy, paste, and run. It's that simple.
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