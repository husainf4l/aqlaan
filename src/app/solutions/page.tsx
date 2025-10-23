import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI Solutions | AQLAAN",
  description: "Explore AQLAAN's comprehensive AI solutions portfolio - from enterprise automation to specialized industry applications.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Enterprise Automation",
      description: "Transform business operations with intelligent automation that scales across your entire organization.",
      href: "/solutions/enterprise-automation",
      icon: "AUTO",
      features: ["Process Optimization", "Workflow Automation", "Digital Transformation"],
    },
    {
      title: "Computer Vision",
      description: "Advanced visual intelligence for quality control, security, and automated inspection systems.",
      href: "/solutions/computer-vision",
      icon: "VISION",
      features: ["Object Detection", "Quality Inspection", "Security Monitoring"],
    },
    {
      title: "Language Intelligence",
      description: "Natural language processing and understanding for customer service, content analysis, and insights.",
      href: "/solutions/language-intelligence",
      icon: "LANG",
      features: ["Text Analysis", "Sentiment Analysis", "Chatbots"],
    },
    {
      title: "Healthcare AI",
      description: "Specialized AI solutions for medical imaging, diagnostics, and patient care optimization.",
      href: "/solutions/healthcare-ai",
      icon: "HEALTH",
      features: ["Medical Imaging", "Diagnostic Support", "Patient Monitoring"],
    },
    {
      title: "Infrastructure AI",
      description: "Smart infrastructure monitoring and predictive maintenance for cities and industrial facilities.",
      href: "/solutions/infrastructure-ai",
      icon: "INFRA",
      features: ["Predictive Maintenance", "Smart Cities", "Asset Monitoring"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Comprehensive AI-powered solutions designed to solve real-world problems across industries.
              From automation to specialized applications, we deliver results that matter.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Solutions
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">Contact Experts</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Solution Portfolio</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Tailored AI solutions for every industry and use case.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-lg font-bold mb-4 text-blue-400 bg-gray-800 px-3 py-1 rounded-lg inline-block">{solution.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={solution.href}>
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-400">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose AQLAAN Solutions?</h2>
              <p className="text-gray-400 text-lg">
                We don&apos;t just implement AI – we ensure it delivers measurable business value.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="text-3xl mb-4 font-bold text-green-400">TARGET</div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-400">
                  Average 300% ROI within 12 months. Our solutions deliver measurable outcomes.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="text-3xl mb-4 font-bold text-yellow-400">FAST</div>
                <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
                <p className="text-gray-400">
                  From concept to production in weeks, not months. Fast-track your AI initiatives.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="text-3xl mb-4 font-bold text-blue-400">SUPPORT</div>
                <h3 className="text-xl font-semibold mb-3">Full Support</h3>
                <p className="text-gray-400">
                  24/7 technical support and ongoing optimization to ensure continued success.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}