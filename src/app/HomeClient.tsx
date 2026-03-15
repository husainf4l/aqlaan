"use client";
import dynamic from 'next/dynamic';
import Partners from "@/components/home/Partners";
import CapabilitiesAndSolutions from "@/components/home/CapabilitiesAndSolutions";
import CTA from "@/components/home/CTA";

// Lazy load heavy 3D canvas component (saves ~800KB on initial load)
const HeroAICanvas = dynamic(() => import("@/components/HeroAICanvas"), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/10 animate-pulse" />
  )
});

export default function HomeClient() {
  return (
    <>
      <HeroAICanvas />
      <Partners />
      <CapabilitiesAndSolutions />
      <CTA />
    </>
  );
}