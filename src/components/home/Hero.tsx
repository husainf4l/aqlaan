"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedHeroBlob } from "@/components/animations/AnimatedHeroBlob";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <AnimatedHeroBlob />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 py-20 max-w-7xl mx-auto">
        {/* Hero Content - Centered */}
        <div className="text-center space-y-16 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-tight bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight"
          >
            Breakthrough AI from<br />Data to Deployment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge AI solutions that deliver real results. 
            From intelligent automation to predictive analytics, we power the future of enterprise.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-3 md:grid-cols-3 gap-8 lg:gap-12 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-extralight text-white">12+</div>
              <div className="text-sm text-gray-400 font-light">Enterprise Clients</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-extralight text-white">99%</div>
              <div className="text-sm text-gray-400 font-light">Accuracy Rate</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-extralight text-white">24/7</div>
              <div className="text-sm text-gray-400 font-light">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}