"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedHeroBlob } from "@/components/animations/AnimatedHeroBlob";
import BackgroundMotion from "@/components/visuals/BackgroundMotion";
import { 
  Eye,
  ShoppingCart,
  Shield,
  Stethoscope,
  Car,
  Leaf,
  Target,
  Camera,
  ScanLine,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Zap
} from "lucide-react";

export default function ComputerVisionPage() {
  const applications = [
    {
      title: "Quality Control & Inspection",
      description: "Automated visual inspection systems that detect defects with higher accuracy than human inspectors.",
      icon: Target,
      benefits: ["99.9% accuracy", "24/7 operation", "Cost reduction"],
    },
    {
      title: "Retail Analytics",
      description: "Track customer behavior, optimize store layouts, and prevent theft with intelligent video analytics.",
      icon: ShoppingCart,
      benefits: ["Customer insights", "Loss prevention", "Layout optimization"],
    },
    {
      title: "Security & Surveillance",
      description: "Advanced threat detection, facial recognition, and anomaly detection for comprehensive security.",
      icon: Shield,
      benefits: ["Real-time alerts", "Facial recognition", "Anomaly detection"],
    },
    {
      title: "Medical Imaging",
      description: "Assist in diagnosis with automated analysis of X-rays, MRIs, and other medical imaging data.",
      icon: Stethoscope,
      benefits: ["Early detection", "Diagnostic support", "Workflow efficiency"],
    },
    {
      title: "Autonomous Vehicles",
      description: "Enable self-driving capabilities with real-time object detection and environmental understanding.",
      icon: Car,
      benefits: ["Safety enhancement", "Navigation accuracy", "Traffic optimization"],
    },
    {
      title: "Agriculture & Farming",
      description: "Monitor crop health, detect pests, and optimize irrigation with aerial and ground-based imaging.",
      icon: Leaf,
      benefits: ["Yield optimization", "Pest detection", "Resource efficiency"],
    },
  ];

  const technologies = [
    {
      name: "Object Detection",
      description: "Real-time identification and localization of objects in images and video streams.",
      accuracy: "95%",
    },
    {
      name: "Image Classification",
      description: "Categorize images into predefined classes with high precision.",
      accuracy: "97%",
    },
    {
      name: "Facial Recognition",
      description: "Identify and verify individuals from facial features.",
      accuracy: "99%",
    },
    {
      name: "Optical Character Recognition",
      description: "Extract text from images and documents with contextual understanding.",
      accuracy: "98%",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Background Motion */}
      <BackgroundMotion />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--bg)] overflow-hidden min-h-[90vh] flex items-center">
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
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

        {/* Main content */}
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 dark:bg-slate-700/30 border border-slate-500/20 dark:border-slate-600/30 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Visual Intelligence</span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] leading-[1.1] tracking-tighter mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Computer{' '}
                <span className="relative inline-block text-[var(--text)]">
                  Vision
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                See the world through AI eyes. Our advanced computer vision solutions transform visual data
                into actionable insights, enabling automation, analysis, and decision-making across industries.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Link href="#applications">
                  <Button className="bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 text-white px-8 py-6 text-base rounded-xl shadow-lg">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" className="px-8 py-6 text-base rounded-xl border-white/10 hover:bg-white/5">
                    View Demos
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">99%</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Accuracy</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">Real-time</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Processing</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Camera className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">24/7</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Monitoring</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section id="applications" className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industry{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Computer vision solutions tailored for diverse industry needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:scale-105 transition-all duration-300 h-full hover:shadow-xl hover:shadow-cyan-500/10 border-white/5">
                    <div className="mb-4 p-3 bg-cyan-500/10 rounded-xl inline-block group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
                      {app.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      {app.benefits.map((benefit) => (
                        <div key={benefit} className="text-sm flex items-center gap-2 text-[var(--muted)]">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Advanced computer vision capabilities with industry-leading accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center group hover:scale-105 transition-all duration-300 h-full hover:shadow-xl hover:shadow-cyan-500/10 border-white/5">
                  <div className="mb-4 p-3 bg-cyan-500/10 rounded-xl inline-block group-hover:bg-cyan-500/20 transition-colors">
                    <ScanLine className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">{tech.accuracy}</div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real-World{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              See how computer vision is transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 h-full hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="mb-4 p-3 bg-cyan-500/10 rounded-xl inline-block group-hover:bg-cyan-500/20 transition-colors">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Manufacturing Excellence</h3>
                <p className="text-[var(--muted)] mb-6 leading-relaxed">
                  Automated quality inspection reduced defect rates by 85% and improved production efficiency by 40%.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">85%</div>
                    <div className="text-sm text-[var(--muted)]">Defect Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">40%</div>
                    <div className="text-sm text-[var(--muted)]">Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 h-full hover:border-blue-500/40 transition-all duration-300 group">
                <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block group-hover:bg-blue-500/20 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Retail Intelligence</h3>
                <p className="text-[var(--muted)] mb-6 leading-relaxed">
                  Smart video analytics increased sales by 25% through optimized store layouts and personalized marketing.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">25%</div>
                    <div className="text-sm text-[var(--muted)]">Sales Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">60%</div>
                    <div className="text-sm text-[var(--muted)]">Loss Prevention</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block p-4 bg-cyan-500/10 rounded-2xl">
              <Eye className="w-12 h-12 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Vision?
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover how our computer vision solutions can revolutionize your business operations.
              Get started today with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-cyan-500/25">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 text-base rounded-xl border-white/10 hover:bg-white/5">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}