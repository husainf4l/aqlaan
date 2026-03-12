"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedHeroBlob() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Default to light mode until mounted to match our light default theme
  const isDark = mounted && resolvedTheme === "dark";

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
          mixBlendMode: isDark ? "screen" : "multiply",
          opacity: isDark ? 0.4 : 0.25,
          filter: "blur(100px)",
        }}
      />
    </motion.div>
  );
}
