import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Enterprise Automation | AQLAAN",
  description: "Transform your business operations with AQLAAN's enterprise automation solutions. Streamline workflows, reduce costs, and scale efficiently.",
};

export default function EnterpriseAutomationPage() {
  const benefits = [
    {
      title: "Cost Reduction",
      value: "40%",
      description: "Average operational cost savings",
      icon: "SAVE",
    },
    {
      title: "Efficiency Gain",
      value: "60%",
      description: "Improvement in process efficiency",
      icon: "BOOST",
    },
    {
      title: "Error Reduction",
      value: "80%",
      description: "Reduction in manual errors",
      icon: "ACCURATE",
    },
    {
      title: "Scalability",
      value: "∞",
      description: "Unlimited scaling potential",
      icon: "GROW",
    },
  ];

  const features = [
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-powered decision making and workflow optimization.",
      details: ["Rule-based automation", "Machine learning integration", "Real-time monitoring"],
    },
    {
      title: "Document Processing",
      description: "Extract, classify, and process documents automatically with advanced OCR and NLP capabilities.",
      details: ["Multi-format support", "Data extraction", "Compliance automation"],
    },
    {
      title: "Customer Service Automation",
      description: "Handle customer inquiries 24/7 with intelligent chatbots and automated ticketing systems.",
      details: ["Natural language processing", "Multi-channel support", "Sentiment analysis"],
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize inventory management, demand forecasting, and logistics with predictive analytics.",
      details: ["Demand forecasting", "Inventory optimization", "Route optimization"],
    },
  ];

  const caseStudies = [
    {
      company: "Global Manufacturing Corp",
      result: "Reduced operational costs by 45% and improved delivery times by 30%",
      industry: "Manufacturing",
    },
    {
      company: "Financial Services Inc",
      result: "Automated 80% of manual processes, saving 200+ employee hours weekly",
      industry: "Finance",
    },
    {
      company: "Healthcare Network",
      result: "Streamlined patient onboarding and reduced administrative errors by 75%",
      industry: "Healthcare",
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
                Enterprise Automation
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Transform your business operations with intelligent automation that scales across your entire organization.
                From document processing to complex workflow automation, we deliver solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Start Automation Journey
                </Button>
                <Button variant="outline">View Case Studies</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Measurable Business Impact</h2>
              <p className="text-gray-400 text-lg">
                Real results from enterprise automation implementations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-lg font-bold mb-4 text-blue-400 bg-gray-800 px-3 py-1 rounded-lg inline-block">{benefit.icon}</div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.value}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Automation Capabilities</h2>
              <p className="text-gray-400 text-lg">
                Comprehensive automation solutions for every business process.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-400 text-lg">
                Real-world results from our enterprise automation implementations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.company} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-400 text-sm font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {study.company}
                  </h3>
                  <p className="text-gray-400 text-sm">{study.result}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}