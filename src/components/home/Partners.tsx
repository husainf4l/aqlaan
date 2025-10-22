"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "OpenAI", logo: "openai" },
  { name: "Google", logo: "google" },
  { name: "AWS", logo: "aws" },
  { name: "Microsoft", logo: "microsoft" },
  { name: "Meta", logo: "meta" },
  { name: "Tesla", logo: "tesla" },
  { name: "Apple", logo: "apple" },
  { name: "Netflix", logo: "netflix" },
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-gray-500 text-lg">Trusted by global innovators</p>
          </div>
        </FadeIn>

        {/* Auto-scrolling container */}
        <div className="relative">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -100 * partners.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <PartnerLogo
                key={`${partner.logo}-${index}`}
                partner={partner}
                isHovered={hoveredIndex === index % partners.length}
                onHover={() => setHoveredIndex(index % partners.length)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ partner, isHovered, onHover, onLeave }: { partner: Partner; isHovered: boolean; onHover: () => void; onLeave: () => void }) {
  return (
    <motion.div
      className="shrink-0 w-32 h-16 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center cursor-pointer transition-all duration-300"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      animate={{
        filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
        opacity: isHovered ? 1 : 0.7,
      }}
    >
      <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider">
        {partner.logo}
      </span>
    </motion.div>
  );
}