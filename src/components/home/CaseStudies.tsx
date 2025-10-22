"use client";
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
    title: "Enterprise AI Implementation",
    client: "TechCorp Inc.",
    description: "Reduced operational costs by 40% through automated data processing.",
    metrics: { cost: 40, time: 60, accuracy: 95 },
    image: "/case1.jpg",
  },
  {
    title: "Healthcare Intelligence Platform",
    client: "MedTech Solutions",
    description: "Improved diagnostic accuracy and patient outcomes with AI insights.",
    metrics: { accuracy: 92, patients: 50000, efficiency: 75 },
    image: "/case2.jpg",
  },
  {
    title: "Smart Infrastructure Monitoring",
    client: "CityGrid Systems",
    description: "Enhanced city infrastructure monitoring with predictive analytics.",
    metrics: { uptime: 99, alerts: 85, savings: 30 },
    image: "/case3.jpg",
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
      <Card className="group hover:scale-105 transition-transform duration-300">
        <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">{study.client[0]}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
          {study.title}
        </h3>
        <p className="text-blue-400 font-medium mb-3">{study.client}</p>
        <p className="text-gray-400 mb-6">{study.description}</p>

        <div ref={ref} className="grid grid-cols-3 gap-4">
          {Object.entries(study.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {isInView && <CountUp end={value as number} duration={2} />}
                {key === "cost" || key === "time" || key === "accuracy" || key === "patients" || key === "efficiency" || key === "uptime" || key === "alerts" || key === "savings" ? "%" : ""}
              </div>
              <div className="text-sm text-gray-400 capitalize">{key}</div>
            </div>
          ))}
        </div>
      </Card>
    </FadeIn>
  );
}