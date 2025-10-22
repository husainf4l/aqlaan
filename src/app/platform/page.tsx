import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Platform | AQLAAN",
  description: "Discover AQLAAN's comprehensive AI platform - the foundation for intelligent automation and data-driven solutions.",
};

export default function PlatformPage() {
  const features = [
    {
      title: "Unified AI Infrastructure",
      description: "Single platform for all your AI needs with seamless integration across all solutions.",
      icon: "INFRA",
    },
    {
      title: "Scalable Architecture",
      description: "Built for enterprise scale with auto-scaling capabilities and high availability.",
      icon: "SCALE",
    },
    {
      title: "Real-time Processing",
      description: "Process data in real-time with sub-millisecond latency for critical applications.",
      icon: "SPEED",
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights and predictive analytics powered by machine learning algorithms.",
      icon: "ANALYTICS",
    },
    {
      title: "API-First Design",
      description: "RESTful APIs and SDKs for easy integration with existing systems.",
      icon: "CONNECT",
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications.",
      icon: "SECURITY",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              The AQLAAN Platform
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              A comprehensive AI infrastructure that powers intelligent automation across industries.
              Built for scale, security, and seamless integration.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Platform Capabilities</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to build, deploy, and scale AI solutions at enterprise level.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-lg font-bold mb-4 text-blue-400 bg-gray-800 px-3 py-1 rounded-lg inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Platform Architecture</h2>
              <p className="text-gray-400 text-lg">
                Built on modern cloud-native principles for maximum performance and reliability.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl mb-4 font-bold text-blue-400">CLOUD</div>
                  <h3 className="text-xl font-semibold mb-2">Cloud-Native</h3>
                  <p className="text-gray-400">Deploy anywhere with Kubernetes and container orchestration.</p>
                </div>
                <div>
                  <div className="text-3xl mb-4 font-bold text-green-400">MICRO</div>
                  <h3 className="text-xl font-semibold mb-2">Microservices</h3>
                  <p className="text-gray-400">Modular architecture for independent scaling and updates.</p>
                </div>
                <div>
                  <div className="text-3xl mb-4 font-bold text-purple-400">AUTO</div>
                  <h3 className="text-xl font-semibold mb-2">Serverless</h3>
                  <p className="text-gray-400">Pay-per-use model with automatic scaling and zero maintenance.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}