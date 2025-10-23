"use client";
import Partners from "@/components/home/Partners";
import Features from "@/components/home/Features";
import Solutions from "@/components/home/Solutions";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

import HeroAICanvas from "@/components/HeroAICanvas";

export default function HomeClient() {
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