"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="relative py-20 text-center bg-slate-950 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,192,255,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <FadeIn>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-xs font-normal tracking-widest mb-3 uppercase">Transform Today</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white leading-tight">
              Ready to Transform Your Business?
            </h2>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <motion.p
            className="text-gray-400 mb-2 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Join hundreds of enterprises already leveraging AQLAAN&apos;s AI and automation solutions.
          </motion.p>
          <motion.p
            className="text-gray-500 mb-8 text-sm md:text-base max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s discuss how we can accelerate your digital transformation.
          </motion.p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/get-started">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Demo
              </Button>
            </Link>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600 text-xs md:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-0.5 h-0.5 bg-blue-400 rounded-full"></span>
              <span className="font-light">No commitment required</span>
            </span>
            <span className="hidden sm:flex w-0.5 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="flex items-center gap-1.5">
              <span className="w-0.5 h-0.5 bg-blue-400 rounded-full"></span>
              <span className="font-light">Free initial consultation</span>
            </span>
            <span className="hidden sm:flex w-0.5 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="flex items-center gap-1.5">
              <span className="w-0.5 h-0.5 bg-blue-400 rounded-full"></span>
              <span className="font-light">Custom solutions available</span>
            </span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}