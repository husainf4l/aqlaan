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
    title: "Industrial Distributor - AP Automation",
    client: "Jordan Manufacturing",
    description: "Reduced invoice processing cycle time by 40% through automated OCR and 3-way PO matching. Processed 2,500+ monthly invoices across 3 ERP systems.",
    metrics: { cycle: 40, accuracy: 97, errors: 75 },
    image: "/case-studies/enterprise-ai.svg",
  },
  {
    title: "GCC Bank Operations - Knowledge Search",
    client: "Financial Services (GCC)",
    description: "Deployed semantic search across 80k+ documents. Reduced ticket resolution time by 60% with p95 query latency under 180ms.",
    metrics: { speed: 60, selfsvc: 55, latency: 180 },
    image: "/case-studies/healthcare-ai.svg",
  },
  {
    title: "EU FMCG Packaging - Quality Control",
    client: "Consumer Goods (EU)",
    description: "Custom YOLOv8 defect detection achieved 97% precision on production lines. Reduced rework costs by 65% within 180 days.",
    metrics: { precision: 97, cost: 65, uptime: 99 },
    image: "/case-studies/infrastructure-ai.svg",
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
        <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // Fallback gradient if image fails to load
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.className = "w-full h-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center";
                const span = document.createElement("span");
                span.className = "text-white text-4xl font-bold";
                span.textContent = study.client[0];
                parent.appendChild(span);
              }
            }}
          />
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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