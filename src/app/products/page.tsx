import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products | AQLAAN",
  description: "Explore AQLAAN's comprehensive suite of AI products and platforms designed for enterprise-scale deployment and innovation.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "AQLAAN Platform",
      slug: "platform",
      description: "Unified AI platform for building, deploying, and managing enterprise AI solutions at scale.",
      icon: "PLATFORM",
      features: [
        "Model training & deployment",
        "Auto-scaling infrastructure",
        "Multi-cloud support",
        "Enterprise security",
        "API management",
        "Monitoring & analytics"
      ],
      pricing: "Custom Enterprise",
      popular: true,
    },
    {
      name: "AQLAAN Vision AI",
      slug: "vision",
      description: "Advanced computer vision platform for image recognition, object detection, and visual analytics.",
      icon: "VISION",
      features: [
        "Real-time object detection",
        "Image classification",
        "Facial recognition",
        "Quality inspection",
        "Medical imaging",
        "Autonomous systems"
      ],
      pricing: "Starting at $99/month",
      popular: false,
    },
    {
      name: "AQLAAN Language AI",
      slug: "language",
      description: "Natural language processing platform for text analysis, sentiment detection, and conversational AI.",
      icon: "LANGUAGE",
      features: [
        "Sentiment analysis",
        "Text classification",
        "Language translation",
        "Chatbot development",
        "Content summarization",
        "Voice processing"
      ],
      pricing: "Starting at $149/month",
      popular: false,
    },
    {
      name: "AQLAAN Automation Suite",
      slug: "automation",
      description: "Intelligent process automation platform for workflow optimization and business process management.",
      icon: "AUTOMATION",
      features: [
        "RPA integration",
        "Workflow automation",
        "Document processing",
        "API orchestration",
        "Business rules engine",
        "Analytics dashboard"
      ],
      pricing: "Starting at $199/month",
      popular: false,
    },
    {
      name: "AQLAAN Healthcare AI",
      slug: "healthcare",
      description: "Specialized AI platform for medical diagnostics, patient care, and healthcare management.",
      icon: "HEALTHCARE",
      features: [
        "Medical imaging analysis",
        "Predictive diagnostics",
        "Patient monitoring",
        "Clinical decision support",
        "Drug discovery",
        "Regulatory compliance"
      ],
      pricing: "Custom Healthcare",
      popular: false,
    },
    {
      name: "AQLAAN Edge AI",
      slug: "edge",
      description: "Edge computing platform for real-time AI inference on IoT devices and edge infrastructure.",
      icon: "EDGE",
      features: [
        "Edge deployment",
        "Real-time processing",
        "Low-latency inference",
        "Device management",
        "Offline capabilities",
        "Energy optimization"
      ],
      pricing: "Starting at $79/month",
      popular: false,
    },
  ];

  const addons = [
    {
      name: "Custom Model Training",
      description: "Train custom AI models on your specific datasets and use cases.",
      price: "$2,500",
    },
    {
      name: "API Integration Services",
      description: "Professional services for seamless integration with existing systems.",
      price: "$5,000",
    },
    {
      name: "24/7 Support & Monitoring",
      description: "Enterprise-grade support with proactive monitoring and maintenance.",
      price: "$1,999/month",
    },
    {
      name: "Security & Compliance Package",
      description: "Enhanced security features and compliance certifications.",
      price: "$3,500/month",
    },
  ];

  const testimonials = [
    {
      company: "TechCorp Global",
      quote: "AQLAAN's platform transformed our AI deployment process. What used to take months now takes days.",
      author: "Sarah Chen, CTO",
      rating: 5,
    },
    {
      company: "MediHealth Systems",
      quote: "The Healthcare AI platform helped us achieve 40% faster diagnosis times with improved accuracy.",
      author: "Dr. Michael Rodriguez, Chief Medical Officer",
      rating: 5,
    },
    {
      company: "AutoFlow Industries",
      quote: "Automation Suite reduced our operational costs by 60% while improving quality control.",
      author: "James Wilson, Operations Director",
      rating: 5,
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
                AI Products
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Enterprise-grade AI solutions designed for scale, security, and performance.
                Choose from our comprehensive product suite or build custom solutions with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">Compare Products</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Product Suite</h2>
              <p className="text-gray-400 text-lg">
                Comprehensive AI solutions for every business need.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeIn key={product.name} delay={index * 0.1}>
                <Card className={`group hover:scale-105 transition-transform duration-300 h-full ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-lg font-bold mb-4 text-blue-400 bg-gray-800 px-3 py-1 rounded-lg inline-block">{product.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-lg font-semibold text-blue-400 mb-3">{product.pricing}</div>
                    <Link href={`/products/${product.slug}`}>
                      <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                        {product.popular ? "Get Started" : "Learn More"}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Professional Services & Add-ons</h2>
              <p className="text-gray-400 text-lg">
                Enhance your AI implementation with expert services and premium features.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addons.map((addon, index) => (
              <FadeIn key={addon.name} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {addon.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-3">{addon.price}</div>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">Add to Cart</Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-gray-400 text-lg">
                See how organizations are transforming their businesses with AQLAAN products.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.company} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-lg font-bold text-yellow-400 mr-2">{testimonial.rating}</span>
                    <span className="text-sm text-gray-500">/ 5 stars</span>
                  </div>
                  <blockquote className="text-gray-300 mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <div className="font-semibold group-hover:text-blue-400 transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Scale Your AI?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get started with a free trial or contact our enterprise team for custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                Contact Sales
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}