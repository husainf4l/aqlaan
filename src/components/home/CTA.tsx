"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="relative py-32 text-center bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.p
            className="text-blue-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of enterprises already leveraging AQLAAN&apos;s AI and automation solutions.
            Let&apos;s discuss how we can accelerate your digital transformation.
          </motion.p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100 text-lg px-8 py-4 shadow-xl">
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <motion.p
            className="text-blue-200 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            No commitment required • Free initial consultation • Custom solutions available
          </motion.p>
        </FadeIn>
      </div>
    </section>
  );
}