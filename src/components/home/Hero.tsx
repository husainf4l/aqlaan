"use client";
import React from "react";
import { SunsetHero } from "@/components/ui/aurora-hero-bg-1";

export default function Hero() {
  return (
    <SunsetHero className="bg-[var(--bg)] text-[var(--text)]">
      <div className="min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 py-20 max-w-7xl mx-auto">
        {/* Hero Content - Centered */}
        <div className="text-center space-y-16 w-full">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-tight bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight"
          >
            Breakthrough AI from<br />Data to Deployment
          </h1>

          <p
            className="text-lg md:text-xl text-[var(--muted)] font-light max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge AI solutions that deliver real results. 
            From intelligent automation to predictive analytics, we power the future of enterprise.
          </p>

          {/* Stats Section */}
          <div
            className="grid grid-cols-3 md:grid-cols-3 gap-8 lg:gap-12 pt-8"
          >
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-extralight text-[var(--text)]">12+</div>
              <div className="text-sm text-[var(--muted)] font-light">Enterprise Clients</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-extralight text-[var(--text)]">99%</div>
              <div className="text-sm text-[var(--muted)] font-light">Accuracy Rate</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-extralight text-[var(--text)]">24/7</div>
              <div className="text-sm text-[var(--muted)] font-light">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </SunsetHero>
  );
}