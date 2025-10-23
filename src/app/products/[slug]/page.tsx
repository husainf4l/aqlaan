import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Product {
  name: string;
  slug: string;
  description: string;
  detailedDescription: string;
  icon: string;
  features: string[];
  useCases: string[];
  pricing: string;
  pricingTiers?: { name: string; price: string; features: string[] }[];
  popular: boolean;
}

const products: Product[] = [
  {
    name: "AQLAAN Platform",
    slug: "platform",
    description: "Unified AI platform for building, deploying, and managing enterprise AI solutions at scale.",
    detailedDescription: "The AQLAAN Platform is a comprehensive enterprise AI infrastructure that provides everything you need to build, deploy, and manage AI solutions at scale. From model training to production deployment, our platform handles the complexity so you can focus on innovation.",
    icon: "PLATFORM",
    features: [
      "Model training & deployment",
      "Auto-scaling infrastructure",
      "Multi-cloud support",
      "Enterprise security",
      "API management",
      "Monitoring & analytics"
    ],
    useCases: [
      "Enterprise AI transformation",
      "Custom model development",
      "AI infrastructure management",
      "Multi-cloud AI operations",
      "Regulatory compliance automation"
    ],
    pricing: "Custom Enterprise",
    pricingTiers: [
      { name: "Starter", price: "$9,999/month", features: ["Up to 10 models", "Basic monitoring", "Email support"] },
      { name: "Professional", price: "$24,999/month", features: ["Up to 50 models", "Advanced analytics", "Phone support", "Custom integrations"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited models", "White-label solution", "24/7 support", "Dedicated success manager"] }
    ],
    popular: true,
  },
  {
    name: "AQLAAN Vision AI",
    slug: "vision",
    description: "Advanced computer vision platform for image recognition, object detection, and visual analytics.",
    detailedDescription: "Our Vision AI platform leverages state-of-the-art computer vision algorithms to provide real-time image analysis, object detection, and visual intelligence. Perfect for manufacturing, retail, healthcare, and autonomous systems.",
    icon: "VISION",
    features: [
      "Real-time object detection",
      "Image classification",
      "Facial recognition",
      "Quality inspection",
      "Medical imaging",
      "Autonomous systems"
    ],
    useCases: [
      "Manufacturing quality control",
      "Retail inventory management",
      "Security surveillance",
      "Medical diagnosis assistance",
      "Autonomous vehicle systems"
    ],
    pricing: "Starting at $99/month",
    pricingTiers: [
      { name: "Basic", price: "$99/month", features: ["1,000 images/month", "Basic models", "REST API"] },
      { name: "Pro", price: "$299/month", features: ["10,000 images/month", "Custom models", "Advanced analytics"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited usage", "On-premise deployment", "Custom training"] }
    ],
    popular: false,
  },
  {
    name: "AQLAAN Language AI",
    slug: "language",
    description: "Natural language processing platform for text analysis, sentiment detection, and conversational AI.",
    detailedDescription: "Transform how you process and understand human language with our comprehensive NLP platform. From sentiment analysis to conversational AI, we provide the tools to extract insights from text data at scale.",
    icon: "LANGUAGE",
    features: [
      "Sentiment analysis",
      "Text classification",
      "Language translation",
      "Chatbot development",
      "Content summarization",
      "Voice processing"
    ],
    useCases: [
      "Customer service automation",
      "Content moderation",
      "Market research analysis",
      "Legal document review",
      "Multilingual communication"
    ],
    pricing: "Starting at $149/month",
    pricingTiers: [
      { name: "Basic", price: "$149/month", features: ["10,000 requests/month", "Standard models", "Basic support"] },
      { name: "Pro", price: "$499/month", features: ["100,000 requests/month", "Custom models", "Priority support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited usage", "Custom training", "Dedicated support"] }
    ],
    popular: false,
  },
  {
    name: "AQLAAN Automation Suite",
    slug: "automation",
    description: "Intelligent process automation platform for workflow optimization and business process management.",
    detailedDescription: "Streamline your business processes with intelligent automation. Our platform combines RPA, AI, and workflow management to eliminate repetitive tasks and optimize operational efficiency.",
    icon: "AUTOMATION",
    features: [
      "RPA integration",
      "Workflow automation",
      "Document processing",
      "API orchestration",
      "Business rules engine",
      "Analytics dashboard"
    ],
    useCases: [
      "Invoice processing",
      "Customer onboarding",
      "Compliance reporting",
      "Supply chain optimization",
      "HR process automation"
    ],
    pricing: "Starting at $199/month",
    pricingTiers: [
      { name: "Basic", price: "$199/month", features: ["5 workflows", "Basic analytics", "Email support"] },
      { name: "Pro", price: "$599/month", features: ["25 workflows", "Advanced analytics", "API access"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited workflows", "Custom integrations", "24/7 support"] }
    ],
    popular: false,
  },
  {
    name: "AQLAAN Healthcare AI",
    slug: "healthcare",
    description: "Specialized AI platform for medical diagnostics, patient care, and healthcare management.",
    detailedDescription: "Revolutionize healthcare delivery with AI-powered diagnostics, patient monitoring, and clinical decision support. Our HIPAA-compliant platform ensures patient privacy while delivering actionable insights.",
    icon: "HEALTHCARE",
    features: [
      "Medical imaging analysis",
      "Predictive diagnostics",
      "Patient monitoring",
      "Clinical decision support",
      "Drug discovery",
      "Regulatory compliance"
    ],
    useCases: [
      "Radiology image analysis",
      "Patient risk prediction",
      "Drug interaction checking",
      "Treatment plan optimization",
      "Population health management"
    ],
    pricing: "Custom Healthcare",
    pricingTiers: [
      { name: "Clinic", price: "$999/month", features: ["Basic imaging analysis", "Patient monitoring", "HIPAA compliance"] },
      { name: "Hospital", price: "$4,999/month", features: ["Advanced diagnostics", "Clinical decision support", "Integration APIs"] },
      { name: "Enterprise", price: "Custom", features: ["Full platform access", "Custom models", "Dedicated support"] }
    ],
    popular: false,
  },
  {
    name: "AQLAAN Edge AI",
    slug: "edge",
    description: "Edge computing platform for real-time AI inference on IoT devices and edge infrastructure.",
    detailedDescription: "Deploy AI models directly on edge devices for ultra-low latency inference. Perfect for IoT applications, autonomous systems, and real-time decision making where every millisecond counts.",
    icon: "EDGE",
    features: [
      "Edge deployment",
      "Real-time processing",
      "Low-latency inference",
      "Device management",
      "Offline capabilities",
      "Energy optimization"
    ],
    useCases: [
      "IoT sensor analytics",
      "Autonomous drones",
      "Industrial monitoring",
      "Smart city infrastructure",
      "Retail analytics"
    ],
    pricing: "Starting at $79/month",
    pricingTiers: [
      { name: "Basic", price: "$79/month", features: ["10 devices", "Basic models", "Cloud sync"] },
      { name: "Pro", price: "$249/month", features: ["100 devices", "Custom models", "Offline mode"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited devices", "On-premise deployment", "Custom hardware"] }
    ],
    popular: false,
  },
];

function getProduct(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) {
    return {
      title: "Product Not Found | AQLAAN",
    };
  }
  return {
    title: `${product.name} | AQLAAN`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="text-lg font-bold mb-4 text-blue-400 bg-gray-800 px-3 py-1 rounded-lg inline-block">
                {product.icon}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                {product.name}
              </h1>
              <p className="text-xl text-gray-400 mb-6">
                {product.description}
              </p>
              <p className="text-lg text-gray-300 mb-8">
                {product.detailedDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Start Free Trial
                </Button>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-gray-400 text-lg">
                Everything you need to succeed with {product.name}.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <FadeIn key={feature} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {feature}
                  </h3>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
              <p className="text-gray-400 text-lg">
                Real-world applications of {product.name}.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.useCases.map((useCase, index) => (
              <FadeIn key={useCase} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {useCase}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Transform your operations with AI-powered {useCase.toLowerCase()}.
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {product.pricingTiers && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
                <p className="text-gray-400 text-lg">
                  Choose the plan that fits your needs.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {product.pricingTiers.map((tier, index) => (
                <FadeIn key={tier.name} delay={index * 0.1}>
                  <Card className={`group hover:scale-105 transition-transform duration-300 h-full ${tier.name === 'Professional' ? 'ring-2 ring-blue-500' : ''}`}>
                    {tier.name === 'Professional' && (
                      <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {tier.name}
                    </h3>
                    <div className="text-3xl font-bold text-blue-400 mb-4">{tier.price}</div>
                    <div className="space-y-2 mb-6">
                      {tier.features.map((feature) => (
                        <div key={feature} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                      Get Started
                    </Button>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of companies already using {product.name} to transform their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4">
                Start Free Trial
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
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