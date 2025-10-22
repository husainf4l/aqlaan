"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export function Stat({ value, label, suffix = "", prefix = "" }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {prefix}
        {isInView && <CountUp end={value} duration={2.5} />}
        {suffix}
      </motion.div>
      <p className="text-gray-400 text-sm md:text-base">{label}</p>
    </div>
  );
}