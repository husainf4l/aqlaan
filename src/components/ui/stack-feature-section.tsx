"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  Code,
  Cloud,
  Box,
  Server,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Chrome,
  Smartphone,
  Facebook,
  Globe,
  Zap,
  Database,
  Cpu,
} from "lucide-react";

const iconConfigs = [
  { Icon: Code, color: "#61DAFB" },
  { Icon: Cloud, color: "#FF9900" },
  { Icon: Box, color: "#2496ED" },
  { Icon: Server, color: "#339933" },
  { Icon: Cpu, color: "#000000" },
  { Icon: Database, color: "#764ABC" },
  { Icon: Zap, color: "#3178C6" },
  { Icon: Github, color: "#181717" },
  { Icon: Twitter, color: "#1DA1F2" },
  { Icon: Linkedin, color: "#0077B5" },
  { Icon: Instagram, color: "#E1306C" },
  { Icon: Chrome, color: "#DB4437" },
  { Icon: Smartphone, color: "#000000" },
  { Icon: Facebook, color: "#1877F2" },
  { Icon: Globe, color: "#8350e8" },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-16 md:my-32 px-4 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between h-auto md:h-[30rem] border border-[var(--border)] bg-[var(--bg)] overflow-hidden rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 pl-4 md:pl-6 lg:pl-10 pb-6 md:pb-8 lg:pb-0 pr-4 md:pr-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-[var(--text)] leading-tight">
          Ready to get started?
        </h1>
        <p className="text-[var(--muted)] mb-4 md:mb-6 max-w-lg text-base md:text-lg leading-relaxed">
          Join thousands of professionals getting expert AI guidance. Transform your organization with personalized consultations from industry leaders.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Link href="/get-started">
            <Button variant="primary" className="shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow w-full sm:w-auto text-sm md:text-base">
              Start Building Today
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="hover:border-purple-400 transition-colors w-full sm:w-auto text-sm md:text-base">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-full md:w-1/2 h-[16rem] sm:h-[18rem] md:h-[20rem] lg:h-full flex items-center justify-center md:justify-start overflow-hidden mt-4 md:mt-0">
        <div className="relative w-[24rem] sm:w-[28rem] md:w-[30rem] lg:w-[50rem] h-[24rem] sm:h-[28rem] md:h-[30rem] lg:h-[50rem] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg flex items-center justify-center">
            <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 text-white" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-[var(--border)]"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = (50 + 50 * Math.cos(angle)).toFixed(2);
                    const y = (50 + 50 * Math.sin(angle)).toFixed(2);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-[var(--card-bg)] backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-md border border-[var(--border)]"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
