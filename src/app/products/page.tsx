"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, Zap, CheckCircle } from "lucide-react";
import { AnimatedHeroBlob } from "@/components/animations/AnimatedHeroBlob";
import BackgroundMotion from "@/components/visuals/BackgroundMotion";

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
    <div className="min-h-screen">
      {/* Background Motion */}
      <BackgroundMotion />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--bg)] overflow-hidden">
        {/* Animated Hero Blob */}
        <AnimatedHeroBlob />
        
        {/* Animated background gradient blobs */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-500/10 to-slate-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main content - Centered layout */}
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="text-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] leading-[1.1] tracking-tighter mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                AI Products for{' '}
                <span className="relative inline-block text-[var(--text)]">
                  every need
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Enterprise-grade AI solutions designed for scale, security, and performance.
                Choose from our comprehensive product suite or build custom solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-500/25">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base rounded-xl border-white/10 hover:bg-white/5">
                  Compare Products
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div>
                  <div className="text-3xl font-bold text-[var(--text)]">50+</div>
                  <div className="text-sm text-[var(--muted)]">AI Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--text)]">99.9%</div>
                  <div className="text-sm text-[var(--muted)]">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--text)]">24/7</div>
                  <div className="text-sm text-[var(--muted)]">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">Product Suite</h2>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive AI solutions for every business need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`group hover:scale-105 transition-all duration-300 h-full relative ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-3xl mb-4">{product.icon === 'PLATFORM' ? '🚀' : product.icon === 'VISION' ? '👁️' : product.icon === 'LANGUAGE' ? '💬' : product.icon === 'AUTOMATION' ? '⚙️' : product.icon === 'HEALTHCARE' ? '🏥' : '📡'}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--text)] group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[var(--muted)] mb-6 text-sm">{product.description}</p>
                  <div className="space-y-2.5 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="text-sm text-[var(--muted)] flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[var(--border)] pt-4 mt-auto">
                    <div className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                      {product.pricing}
                    </div>
                    <Link href={`/products/${product.slug}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all">
                        {product.popular ? "Get Started" : "Learn More"}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">
              Professional Services & Add-ons
            </h2>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto font-light leading-relaxed">
              Enhance your AI implementation with expert services and premium features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center group hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-[var(--text)] group-hover:text-blue-400 transition-colors">
                      {addon.name}
                    </h3>
                    <p className="text-[var(--muted)] text-sm mb-4">{addon.description}</p>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                      {addon.price}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all">
                    Add to Cart
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto font-light leading-relaxed">
              See how organizations are transforming their businesses with AQLAAN products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group hover:scale-105 transition-all duration-300 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-[var(--muted)] mb-6 italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="mt-auto">
                    <div className="font-semibold text-[var(--text)] group-hover:text-blue-400 transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[var(--muted)]">{testimonial.company}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Ready to Scale Your AI?
            </h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Get started with a free trial or contact our enterprise team for custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}