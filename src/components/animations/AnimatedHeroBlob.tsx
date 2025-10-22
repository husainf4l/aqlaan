"use client";
import { motion } from "framer-motion";

export function AnimatedHeroBlob() {
  return (
    <motion.div
      className="absolute inset-0 flex justify-center items-center"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 20, 0],
        filter: ["blur(100px)", "blur(120px)", "blur(100px)"],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #a78bfa, #60a5fa, #f9a8d4)",
          mixBlendMode: "screen",
          opacity: 0.4,
          filter: "blur(100px)",
        }}
      />
    </motion.div>
  );
}
