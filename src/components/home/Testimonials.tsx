"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const testimonials = [
  {
    name: "Operations Director",
    role: "Industrial Distribution (Jordan)",
    quote: "AQLAAN automated our invoice processing workflow. We reduced cycle time from 8-12 days to 4-6 days within 60 days. The accuracy improvements on GL code assignment eliminated most manual corrections.",
    company: "MENA Distribution",
  },
  {
    name: "Head of Operations",
    role: "Banking (GCC)",
    quote: "Semantic search across 80k documents transformed our support operations. Resolution time dropped from 45-90 minutes to 15-30 minutes. Self-service rate increased by 35 percentage points.",
    company: "Financial Services",
  },
  {
    name: "Quality Manager",
    role: "FMCG Packaging (EU)",
    quote: "The custom defect detection model achieved 97% precision on our production lines. Rework costs dropped from €12k/month to €4k/month within six months of deployment.",
    company: "Consumer Goods",
  },
  {
    name: "CTO",
    role: "Healthcare Technology",
    quote: "AQLAAN's AI platform reduced our diagnostic time by 60% while maintaining 98% accuracy. The integration with our existing EMR system was seamless and required minimal training.",
    company: "MediTech Solutions",
  },
  {
    name: "VP of Engineering",
    role: "Manufacturing Automation",
    quote: "Implementing AQLAAN Edge AI on our factory floor eliminated 85% of quality control bottlenecks. Real-time defect detection improved our overall yield by 12%.",
    company: "Smart Manufacturing",
  },
  {
    name: "Data Science Lead",
    role: "Retail Analytics",
    quote: "The Language AI platform transformed our customer feedback analysis. We now process 10x more data with insights that drive 25% higher customer satisfaction scores.",
    company: "Retail Intelligence",
  },
  {
    name: "Chief Information Officer",
    role: "Logistics & Supply Chain",
    quote: "AQLAAN Vision AI revolutionized our warehouse operations. Automated inventory counting reduced errors by 94% and cut monthly audit time from 40 hours to just 4 hours.",
    company: "Global Logistics",
  },
  {
    name: "Product Manager",
    role: "E-commerce Platform",
    quote: "The Language AI chatbot increased our conversion rate by 23% and reduced support tickets by 45%. Customers love the instant, intelligent responses available 24/7.",
    company: "E-commerce Solutions",
  },
  {
    name: "Director of Innovation",
    role: "Energy & Utilities",
    quote: "AQLAAN Edge AI enabled predictive maintenance across 200+ remote sites. We prevented 78% of potential equipment failures and reduced downtime costs by $2.3M annually.",
    company: "Energy Corp",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentIndex * cardsPerView;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + cardsPerView);

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">
              Real stories from organizations transforming their operations with AQLAAN.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
                  <blockquote className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold text-base mb-1">{testimonial.name}</p>
                    <p className="text-blue-400 text-sm mb-1">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}