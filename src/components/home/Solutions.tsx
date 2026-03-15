"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, HeartPulse, Building, Microscope, MessageSquare, Cpu } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Enterprise Automation",
    desc: "Deploy large-scale AI systems that transform productivity. Automate complex workflows end-to-end.",
    href: "/solutions/enterprise-automation",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-500",
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
    icon: Cpu,
    title: "Edge Computing",
    desc: "Deploy AI models at the edge for ultra-low latency. Real-time decisions where they matter most.",
    href: "/solutions/edge-ai",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-500",
  },
];

export default function Solutions() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
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
            className="text-sm font-medium tracking-wider uppercase text-blue-500 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Solutions
          </motion.p>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-[var(--text)] leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Built for Every Industry
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Tailored systems that bridge human expertise and AI precision.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
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
                <div className="relative h-full p-8 rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className={`w-7 h-7 ${item.iconColor} group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-semibold text-[var(--text)] mb-3 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {item.desc}
                    </p>

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
    </section>
  );
}
