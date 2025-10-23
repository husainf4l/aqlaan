"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

interface CaseStudy {
  title: string;
  client: string;
  description: string;
  metrics: Record<string, number>;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Travel Website - AI-Powered Booking Optimization",
    client: "Bedbees",
    description: "Revolutionized travel booking with AI-driven personalization and dynamic pricing. Increased conversion rates by 45% through intelligent recommendations and automated customer support.",
    metrics: { conversion: 45, bookings: 78, satisfaction: 92 },
    image: "/case-studies/travel-ai.svg",
  },
  {
    title: "AI Job Interviewer - Talent Assessment Platform",
    client: "Rolovate",
    description: "Built an AI-powered interview platform that conducts initial screenings and technical assessments. Reduced hiring time by 60% while improving candidate quality scores by 35%.",
    metrics: { hiring: 60, quality: 35, interviews: 500 },
    image: "/case-studies/hr-ai.svg",
  },
  {
    title: "Accounting Company - Automated Financial Processing",
    client: "Ovovex",
    description: "Implemented AI-driven accounting automation for invoice processing and financial reconciliation. Achieved 85% reduction in manual data entry while maintaining 99.5% accuracy.",
    metrics: { automation: 85, accuracy: 99.5, savings: 200 },
    image: "/case-studies/finance-ai.svg",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real results from organizations transforming their operations with AQLAAN&apos;s AI solutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <FadeIn delay={index * 0.2}>
      <Card className="group hover:scale-105 transition-transform duration-300 overflow-hidden">
        <div className="aspect-video bg-linear-to-br from-blue-600 to-purple-600 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
          <div className="text-white text-4xl md:text-5xl font-bold tracking-wider opacity-90 group-hover:scale-110 transition-transform duration-300 z-10">
            {study.client}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
          {study.title}
        </h3>
        <p className="text-gray-400 mb-6">{study.description}</p>

        <div ref={ref} className="grid grid-cols-3 gap-4">
          {Object.entries(study.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {isInView && <CountUp end={value as number} duration={2} />}
                {key === "conversion" || key === "bookings" || key === "satisfaction" || key === "hiring" || key === "quality" || key === "automation" || key === "accuracy" ? "%" : 
                 key === "savings" ? "k" : ""}
              </div>
              <div className="text-sm text-gray-400 capitalize">{key}</div>
            </div>
          ))}
        </div>
      </Card>
    </FadeIn>
  );
}