"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, Database, Eye, Zap, Shield, TrendingUp,
  Building2, HeartPulse, Building, Microscope, MessageSquare, Cpu 
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    desc: "Expert guidance to align your AI roadmap with your business goals. We help you identify high-impact opportunities.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Database,
    title: "Data Labeling & Curation",
    desc: "High-quality labeled datasets tailored to your needs. Scale annotation pipelines with precision and speed.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Eye,
    title: "Vision Intelligence",
    desc: "Cutting-edge computer vision models for object detection, segmentation, and tracking in real-world scenarios.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized inference pipelines that deliver results in milliseconds. Built for production at any scale.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Your data never leaves your infrastructure. SOC2 compliant, end-to-end encryption, full audit trails.",
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    desc: "Models that improve over time with active learning loops. Adapt to changing data distributions automatically.",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-500",
  },
];

const solutions = [
  {
    icon: Building2,
    title: "Enterprise Automation",
    desc: "Deploy large-scale AI systems that transform productivity. Automate complex workflows end-to-end.",
    href: "/solutions/enterprise-automation",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Intelligence",
    desc: "Improve diagnosis and outcomes through contextual AI insights. Built for clinical precision.",
    href: "/solutions/healthcare-ai",
    gradient: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-500",
  },
  {
    icon: Building,
    title: "Smart Infrastructure",
    desc: "Enable predictive analytics for safer, smarter cities. Monitor, adapt, and respond in real time.",
    href: "/solutions/infrastructure-ai",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: Microscope,
    title: "Computer Vision",
    desc: "Advanced visual recognition systems that see and understand. From quality control to autonomous systems.",
    href: "/solutions/computer-vision",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: MessageSquare,
    title: "Language Intelligence",
    desc: "Natural language processing that understands context and intent. Power conversations at scale.",
    href: "/solutions/language-intelligence",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    desc: "Deploy AI models at the edge for ultra-low latency. Real-time decisions where they matter most.",
    href: "/solutions/edge-ai",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-500",
  },
];

export default function CapabilitiesAndSolutions() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-xs font-medium tracking-wider uppercase text-purple-500 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Platform
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[var(--text)] leading-[1.1] tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything You Need to Build AI
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            From core capabilities to industry-specific solutions—all in one platform.
          </motion.p>
        </motion.div>

        {/* Core Capabilities Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
              Core Capabilities
            </h3>
            <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto">
              Everything you need to build, scale, and operate AI systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full p-5 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className={`w-5 h-5 ${item.iconColor} group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h4 className="text-base font-semibold text-[var(--text)] mb-2 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {item.desc}
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

        {/* Built for Every Industry Section */}
        <div>
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
              Built for Every Industry
            </h3>
            <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto">
              Tailored systems that bridge human expertise and AI precision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link href={item.href} className="block h-full">
                  <div className="relative h-full p-5 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <item.icon className={`w-5 h-5 ${item.iconColor} group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h4 className="text-base font-semibold text-[var(--text)] mb-2 group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center text-xs font-medium text-[var(--muted)] group-hover:text-white transition-colors duration-300">
                        Learn more 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
