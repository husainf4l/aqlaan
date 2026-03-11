"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Bedbees" },
  { name: "gixat" },
  { name: "ovovex" },
  { name: "bokleh" },
  { name: "Laila AI" },
  { name: "rolevate" },
];

export default function Partners() {
  return (
    <section className="py-16 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-mono tracking-[2px] uppercase text-[#a3a3a3] mb-10">
          Trusted by global innovators
        </p>

        <div className="relative">
          <motion.div
            className="flex gap-6 items-center"
            animate={{ x: [0, -160 * partners.length] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" },
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="shrink-0 w-36 h-14 rounded-lg border border-white/10 bg-white/[0.02]
                           flex items-center justify-center
                           hover:border-white/20 hover:bg-white/[0.04]
                           transition-all duration-300"
              >
                <span className="text-[#a3a3a3] font-mono text-xs uppercase tracking-widest">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
