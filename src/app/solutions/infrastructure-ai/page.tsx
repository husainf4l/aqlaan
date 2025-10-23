import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Infrastructure AI | AQLAAN",
  description: "Intelligent infrastructure management with predictive maintenance, smart monitoring, and automated optimization for critical systems.",
};

export default function InfrastructureAIPage() {
  const capabilities = [
    {
      title: "Predictive Maintenance",
      description: "AI-powered prediction of equipment failures before they occur, minimizing downtime and costs.",
      icon: "TOOLS",
      benefits: ["80% reduction in breakdowns", "50% lower maintenance costs", "30% increased uptime"],
    },
    {
      title: "Smart Grid Management",
      description: "Intelligent energy distribution and consumption optimization for power infrastructure.",
      icon: "POWER",
      benefits: ["25% energy savings", "Real-time load balancing", "Predictive demand forecasting"],
    },
    {
      title: "Network Optimization",
      description: "AI-driven network traffic management and infrastructure capacity planning.",
      icon: "WEB",
      benefits: ["40% faster data routing", "99.9% network reliability", "Automated scaling"],
    },
    {
      title: "Environmental Monitoring",
      description: "Real-time monitoring of air quality, water systems, and environmental conditions.",
      icon: "GREEN",
      benefits: ["Early pollution detection", "Resource conservation", "Compliance automation"],
    },
    {
      title: "Transportation Systems",
      description: "Intelligent traffic management, route optimization, and infrastructure utilization.",
      icon: "TRAFFIC",
      benefits: ["30% reduced congestion", "15% fuel savings", "Improved safety"],
    },
    {
      title: "Building Automation",
      description: "Smart building management with automated climate control and energy optimization.",
      icon: "CORP",
      benefits: ["35% energy reduction", "Enhanced occupant comfort", "Predictive maintenance"],
    },
  ];

  const technologies = [
    {
      name: "IoT Sensor Networks",
      description: "Massive-scale sensor data collection and real-time analysis",
      scale: "Millions of sensors",
    },
    {
      name: "Edge Computing",
      description: "AI processing at the network edge for real-time decision making",
      scale: "Microsecond latency",
    },
    {
      name: "Digital Twins",
      description: "Virtual replicas of physical infrastructure for simulation and optimization",
      scale: "Real-time sync",
    },
    {
      name: "Machine Learning",
      description: "Advanced algorithms for pattern recognition and predictive analytics",
      scale: "99.5% accuracy",
    },
  ];

  const sectors = [
    {
      sector: "Energy & Utilities",
      applications: ["Smart grid optimization", "Predictive maintenance", "Renewable energy forecasting"],
      impact: "$2.5B annual savings",
    },
    {
      sector: "Transportation",
      applications: ["Traffic flow optimization", "Infrastructure monitoring", "Autonomous vehicle coordination"],
      impact: "40% congestion reduction",
    },
    {
      sector: "Manufacturing",
      applications: ["Equipment monitoring", "Supply chain optimization", "Quality control automation"],
      impact: "25% productivity increase",
    },
    {
      sector: "Smart Cities",
      applications: ["Waste management", "Air quality monitoring", "Public safety systems"],
      impact: "30% operational efficiency",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Infrastructure AI
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Build smarter, more resilient infrastructure with AI-powered monitoring, optimization,
                and predictive capabilities. Transform critical systems into intelligent, self-managing networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  Infrastructure Solutions
                </Button>
                                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">View Case Studies</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">AI Infrastructure Capabilities</h2>
              <p className="text-gray-400 text-lg">
                Intelligent systems that optimize performance, reduce costs, and enhance reliability.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FadeIn key={capability.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.benefits.map((benefit) => (
                      <div key={benefit} className="text-sm text-green-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Advanced Technology Stack</h2>
              <p className="text-gray-400 text-lg">
                Cutting-edge technologies enabling intelligent infrastructure management.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <FadeIn key={tech.name} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{tech.description}</p>
                  <div className="text-blue-400 font-semibold">{tech.scale}</div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Applications */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Industry Applications</h2>
              <p className="text-gray-400 text-lg">
                AI infrastructure solutions across critical sectors.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <FadeIn key={sector.sector} delay={index * 0.2}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {sector.sector}
                    </h3>
                    <div className="text-green-400 font-bold">{sector.impact}</div>
                  </div>
                  <div className="space-y-3 mb-4">
                    {sector.applications.map((app) => (
                      <div key={app} className="text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {app}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Showcase */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Infrastructure Transformation</h2>
              <p className="text-gray-400 text-lg">
                See how AI is revolutionizing critical infrastructure management.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="bg-linear-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4">Smart City Infrastructure</h3>
                <p className="text-gray-400 mb-6">
                  Integrated AI systems managing transportation, utilities, and public services across a major metropolitan area.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">40%</div>
                    <div className="text-sm text-gray-500">Energy Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">60%</div>
                    <div className="text-sm text-gray-500">Response Time</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-linear-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold mb-4">Industrial IoT Network</h3>
                <p className="text-gray-400 mb-6">
                  AI-powered predictive maintenance across 50 manufacturing facilities, reducing downtime by 75%.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">75%</div>
                    <div className="text-sm text-gray-500">Downtime Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$50M</div>
                    <div className="text-sm text-gray-500">Annual Savings</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}