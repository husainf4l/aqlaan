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
    <section className="relative max-w-6xl mx-auto my-32 px-6 flex items-center justify-between h-[30rem] border border-[var(--border)] bg-[var(--bg)] overflow-hidden rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-1/2 z-10 pl-10">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[var(--text)] leading-tight">
          Transform Your Vision Into{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Reality
          </span>
        </h1>
        <p className="text-[var(--muted)] mb-6 max-w-lg text-lg leading-relaxed">
          Harness the power of AI and intelligent automation to accelerate innovation, 
          optimize operations, and unlock unprecedented growth opportunities for your enterprise.
        </p>
        <div className="flex items-center gap-3">
          <Link href="/get-started">
            <Button variant="primary" className="shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow">
              Start Building Today
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="hover:border-purple-400 transition-colors">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-1/2 h-full flex items-center justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg flex items-center justify-center">
            <Zap className="w-12 h-12 text-white" />
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
                        className="absolute bg-[var(--card-bg)] backdrop-blur-sm rounded-full p-2 shadow-md border border-[var(--border)]"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
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
