"use client";
import dynamic from "next/dynamic";
import Partners from "@/components/home/Partners";
import Features from "@/components/home/Features";
import Solutions from "@/components/home/Solutions";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

// Lazy load Three.js component - only loads on home page
const HeroAICanvas = dynamic(() => import("@/components/HeroAICanvas"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-blue-400">Loading...</div>
    </div>
  ),
});

export default function HomePage() {
  return (
    <>
      <HeroAICanvas />
      <Partners />
      <Features />
      <Solutions />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
}
