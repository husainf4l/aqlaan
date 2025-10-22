"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="relative py-40 text-center bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,192,255,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4 uppercase">Transform Today</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your Business?
            </h2>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.p
            className="text-gray-300 mb-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of enterprises already leveraging AQLAAN&apos;s AI and automation solutions.
          </motion.p>
          <motion.p
            className="text-gray-400 mb-12 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
          >
            Let&apos;s discuss how we can accelerate your digital transformation.
          </motion.p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all">
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-500/50 text-gray-200 hover:bg-blue-500/10 hover:border-blue-400 text-lg px-10 py-4 transition-all"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
              No commitment required
            </span>
            <span className="hidden sm:flex w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
              Free initial consultation
            </span>
            <span className="hidden sm:flex w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
              Custom solutions available
            </span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}