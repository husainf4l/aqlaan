"use client";
import { motion } from "framer-motion";
import { Sparkles as SparklesIcon } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import { useTheme } from "@/hooks/useTheme";

const partners = [
  { name: "Bedbees", industry: "Hospitality" },
  { name: "gixat", industry: "Technology" },
  { name: "ovovex", industry: "E-commerce" },
  { name: "bokleh", industry: "Retail" },
  { name: "Laila AI", industry: "AI Research" },
  { name: "rolevate", industry: "HR Tech" },
];

export default function Partners() {
  const { theme } = useTheme();
  
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Sparkles Animation - Covering entire section */}
      <div className="absolute inset-0">
        <Sparkles
          density={1200}
          className="absolute inset-0 w-full h-full"
          color={theme === "dark" ? "#ffffff" : "#8350e8"}
          size={1.2}
          speed={0.8}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 pointer-events-auto max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <SparklesIcon className="w-4 h-4 text-purple-500" strokeWidth={2} />
            <p className="text-sm font-medium tracking-wider uppercase text-purple-500">
              Trusted Partners
            </p>
            <SparklesIcon className="w-4 h-4 text-purple-500" strokeWidth={2} />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[var(--text)] leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted by Global Innovators
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[var(--muted)] mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Leading companies worldwide rely on our AI solutions to drive innovation
          </motion.p>
        </motion.div>

        {/* Infinite scrolling partners */}
        <div className="relative pointer-events-auto">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-6 items-center"
            animate={{ x: [0, -200 * partners.length] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="group relative shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-52 h-32 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6">
                    <span className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {partner.name}
                    </span>
                    <span className="text-xs text-[var(--muted)] font-medium uppercase tracking-wider group-hover:text-white/80 transition-colors duration-300">
                      {partner.industry}
                    </span>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
