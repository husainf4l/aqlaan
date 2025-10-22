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
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">
              Real stories from organizations transforming their operations with AQLAAN.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-blue-400 mb-6 opacity-50" />
              <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-blue-400">{testimonials[currentIndex].role}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
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