import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Get Started | AQLAAN",
  description: "Begin your AI journey with AQLAAN. Choose the right plan, get started with tutorials, and access comprehensive resources.",
};

export default function GetStartedPage() {
  const paths = [
    {
      title: "Try Free",
      description: "Start with our free tier and explore AQLAAN's capabilities at no cost.",
      features: ["100 API calls/month", "Basic AI models", "Community support", "Documentation access"],
      cta: "Start Free Trial",
      popular: false,
      icon: "🆓",
    },
    {
      title: "Developer",
      description: "Perfect for developers building AI-powered applications and prototypes.",
      features: ["10,000 API calls/month", "Advanced AI models", "Email support", "SDK access", "Basic analytics"],
      cta: "Start Developer Plan",
      popular: false,
      icon: "DEV",
    },
    {
      title: "Business",
      description: "Ideal for small to medium businesses deploying AI solutions.",
      features: ["100,000 API calls/month", "All AI models", "Priority support", "Custom integrations", "Advanced analytics"],
      cta: "Start Business Plan",
      popular: true,
      icon: "CORP",
    },
    {
      title: "Enterprise",
      description: "Full-scale enterprise deployment with dedicated support and customization.",
      features: ["Unlimited API calls", "Custom AI models", "Dedicated support team", "On-premise deployment", "SLA guarantee"],
      cta: "Contact Sales",
      popular: false,
      icon: "CAPITOL",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Create Account",
      description: "Sign up for a free account and verify your email address.",
      icon: "WRITE",
      time: "2 minutes",
    },
    {
      step: 2,
      title: "Choose Your Plan",
      description: "Select the plan that best fits your needs and budget.",
      icon: "TARGET",
      time: "1 minute",
    },
    {
      step: 3,
      title: "Get API Keys",
      description: "Generate your API keys and start making requests immediately.",
      icon: "KEY",
      time: "1 minute",
    },
    {
      step: 4,
      title: "Build & Deploy",
      description: "Use our SDKs, documentation, and examples to build your AI solution.",
      icon: "LAUNCH",
      time: "Varies",
    },
  ];

  const resources = [
    {
      title: "Quick Start Guide",
      description: "Step-by-step guide to make your first API call",
      type: "Tutorial",
      time: "10 min",
      icon: "BOOKS",
    },
    {
      title: "API Documentation",
      description: "Complete reference for all AQLAAN APIs",
      type: "Reference",
      time: "Comprehensive",
      icon: "READ",
    },
    {
      title: "SDK Downloads",
      description: "Official SDKs for Python, JavaScript, and more",
      type: "Tools",
      time: "5 min",
      icon: "PACKAGE",
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code samples for common use cases",
      type: "Examples",
      time: "15 min",
      icon: "COMPUTER",
    },
    {
      title: "Video Tutorials",
      description: "Visual guides for getting started and advanced topics",
      type: "Video",
      time: "30 min",
      icon: "VIDEO",
    },
    {
      title: "Community Forum",
      description: "Connect with other developers and get help",
      type: "Community",
      time: "Ongoing",
      icon: "TEAM",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with AQLAAN?",
      answer: "Simply create a free account, choose your plan, get your API keys, and start making requests. Our quick start guide will walk you through everything.",
    },
    {
      question: "What programming languages do you support?",
      answer: "We provide official SDKs for Python, JavaScript, Java, C#, and Go. You can also use our REST APIs directly from any language.",
    },
    {
      question: "Is there a free tier available?",
      answer: "Yes! Our free tier includes 100 API calls per month, access to basic AI models, and full documentation access.",
    },
    {
      question: "How do I upgrade my plan?",
      answer: "You can upgrade your plan at any time from your account dashboard. Changes take effect immediately, and you'll only pay for the time used.",
    },
    {
      question: "Do you offer enterprise support?",
      answer: "Yes, our Enterprise plan includes dedicated support, custom integrations, on-premise deployment options, and SLA guarantees.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "Support varies by plan: community forums (all plans), email support (Developer+), priority support (Business+), and dedicated teams (Enterprise).",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Get Started with AQLAAN
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Begin your AI journey today. Choose your plan, follow our quick start guide,
                and unlock the power of enterprise-grade AI in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Start Free Trial
                </Button>
                <Button variant="outline">Watch Demo</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-gray-400 text-lg">
                Start free and scale as you grow. All plans include access to our core AI platform.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paths.map((path, index) => (
              <FadeIn key={path.title} delay={index * 0.1}>
                <Card className={`group hover:scale-105 transition-transform duration-300 h-full ${path.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {path.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-4xl mb-4">{path.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{path.description}</p>
                  <div className="space-y-2 mb-6">
                    {path.features.map((feature) => (
                      <div key={feature} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${path.popular ? 'bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600' : ''}`}>
                    {path.cta}
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Getting Started in 4 Steps</h2>
              <p className="text-gray-400 text-lg">
                From signup to deployment in under 10 minutes.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                  <div className="text-sm text-gray-500">{step.time}</div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Learning Resources</h2>
              <p className="text-gray-400 text-lg">
                Everything you need to succeed with AQLAAN AI.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={resource.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">{resource.time}</span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-lg">
                Common questions about getting started with AQLAAN.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Start Building?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of developers and businesses already using AQLAAN to power their AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4">
                Create Free Account
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                Schedule Demo
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}