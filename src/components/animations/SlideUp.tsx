"use client";
import { motion } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function SlideUp({ children, delay = 0, duration = 0.6 }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}