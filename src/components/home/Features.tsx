"use client";
import { motion } from "framer-motion";
import { Brain, Database, Eye, Zap, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Strategy",
    text: "Integrate intelligent automation into your core workflows. Design, deploy, and iterate at enterprise velocity.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Database,
    title: "Data Labeling",
    text: "High-quality datasets built for precision and scalability. Human-in-the-loop pipelines that power state-of-the-art models.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Eye,
    title: "Vision Intelligence",
    text: "Real-time visual models that understand context and action. From detection to segmentation — production-ready.",
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    text: "Optimized inference pipelines that deliver millisecond response times. Scale from prototype to production seamlessly.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    text: "Bank-level encryption and compliance frameworks. Your data stays yours with SOC 2 Type II certification.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    text: "Models that evolve with your data. Automated retraining and performance monitoring built-in.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-500",
  },
];

export default function Features() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-sm font-medium tracking-wider uppercase text-purple-500 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Capabilities
          </motion.p>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-[var(--text)] leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Core Capabilities
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Everything you need to build, scale, and operate AI systems with confidence.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className={`w-7 h-7 ${feature.iconColor} group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-[var(--text)] mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
