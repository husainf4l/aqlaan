"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedHeroBlob } from "@/components/animations/AnimatedHeroBlob";
import BackgroundMotion from "@/components/visuals/BackgroundMotion";
import { 
  Wifi, 
  Zap, 
  Activity, 
  Building2, 
  Cable, 
  Gauge, 
  Network, 
  Wind, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

export default function InfrastructureAIPage() {
  const capabilities = [
    {
      title: "Predictive Maintenance",
      description: "AI-powered prediction of equipment failures before they occur, minimizing downtime and costs.",
      icon: Activity,
      benefits: ["80% reduction in breakdowns", "50% lower maintenance costs", "30% increased uptime"],
    },
    {
      title: "Smart Grid Management",
      description: "Intelligent energy distribution and consumption optimization for power infrastructure.",
      icon: Zap,
      benefits: ["25% energy savings", "Real-time load balancing", "Predictive demand forecasting"],
    },
    {
      title: "Network Optimization",
      description: "AI-driven network traffic management and infrastructure capacity planning.",
      icon: Network,
      benefits: ["40% faster data routing", "99.9% network reliability", "Automated scaling"],
    },
    {
      title: "Environmental Monitoring",
      description: "Real-time monitoring of air quality, water systems, and environmental conditions.",
      icon: Wind,
      benefits: ["Early pollution detection", "Resource conservation", "Compliance automation"],
    },
    {
      title: "Transportation Systems",
      description: "Intelligent traffic management, route optimization, and infrastructure utilization.",
      icon: Cable,
      benefits: ["30% reduced congestion", "15% fuel savings", "Improved safety"],
    },
    {
      title: "Building Automation",
      description: "Smart building management with automated climate control and energy optimization.",
      icon: Building2,
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Wifi className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Smart Infrastructure</span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] leading-[1.1] tracking-tighter mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Infrastructure AI{' '}
                <span className="relative inline-block text-[var(--text)]">
                  Redefined
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Build smarter, more resilient infrastructure with AI-powered monitoring, optimization,
                and predictive capabilities. Transform critical systems into intelligent, self-managing networks.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Link href="#capabilities">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-500/25">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 py-6 text-base rounded-xl border-white/10 hover:bg-white/5">
                    View Case Studies
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
                    <div className="text-3xl font-bold text-[var(--text)]">80%</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Uptime Increase</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">50%</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Cost Reduction</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">24/7</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Monitoring</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI Infrastructure{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Intelligent systems that optimize performance, reduce costs, and enhance reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:scale-105 transition-all duration-300 h-full hover:shadow-xl hover:shadow-blue-500/10 border-white/5">
                    <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      {capability.benefits.map((benefit) => (
                        <div key={benefit} className="text-sm flex items-center gap-2 text-green-400">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
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

      {/* Technology Stack */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Cutting-edge technologies enabling intelligent infrastructure management.
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
                <Card className="text-center group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 border-white/5 h-full">
                  <div className="mb-4 p-3 bg-cyan-500/10 rounded-xl inline-block group-hover:bg-cyan-500/20 transition-colors">
                    <Gauge className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-3 leading-relaxed">{tech.description}</p>
                  <div className="pt-3 border-t border-white/5">
                    <div className="text-cyan-400 font-semibold text-lg">{tech.scale}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Applications */}
      <section className="py-20 px-6 bg-[var(--bg)]">
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
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              AI infrastructure solutions across critical sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.sector}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 border-white/5 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors">
                      {sector.sector}
                    </h3>
                    <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="text-green-400 font-bold text-sm">{sector.impact}</div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    {sector.applications.map((app) => (
                      <div key={app} className="text-[var(--muted)] flex items-center gap-3 group/item">
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/item:scale-125 transition-transform" />
                        <span className="text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Showcase */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Infrastructure{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              See how AI is revolutionizing critical infrastructure management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20 h-full hover:border-blue-500/40 transition-colors group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-blue-500/10 rounded-xl inline-block">
                    <Building2 className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart City Infrastructure</h3>
                  <p className="text-[var(--muted)] mb-6 leading-relaxed">
                    Integrated AI systems managing transportation, utilities, and public services across a major metropolitan area.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-blue-400 mb-1">40%</div>
                      <div className="text-sm text-[var(--muted)]">Energy Savings</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-blue-400 mb-1">60%</div>
                      <div className="text-sm text-[var(--muted)]">Response Time</div>
                    </div>
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
              <div className="relative overflow-hidden bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20 h-full hover:border-green-500/40 transition-colors group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors" />
                
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-green-500/10 rounded-xl inline-block">
                    <Activity className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Industrial IoT Network</h3>
                  <p className="text-[var(--muted)] mb-6 leading-relaxed">
                    AI-powered predictive maintenance across 50 manufacturing facilities, reducing downtime by 75%.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-green-400 mb-1">75%</div>
                      <div className="text-sm text-[var(--muted)]">Downtime Cut</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-green-400 mb-1">$50M</div>
                      <div className="text-sm text-[var(--muted)]">Annual Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-12 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-[var(--muted)] text-lg mb-8 max-w-2xl mx-auto">
                Connect with our infrastructure AI experts to discover how we can optimize your critical systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-500/25">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}