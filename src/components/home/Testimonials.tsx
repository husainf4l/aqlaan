"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "AQLAAN automated our invoice processing workflow. We reduced cycle time from 8-12 days to 4-6 days within 60 days. The accuracy improvements eliminated most manual corrections.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    name: "Sarah Johnson",
    role: "Operations Director",
  },
  {
    text: "Semantic search across 80k documents transformed our support operations. Resolution time dropped from 45-90 minutes to 15-30 minutes. Self-service rate increased by 35%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    name: "Michael Chen",
    role: "Head of Operations",
  },
  {
    text: "The custom defect detection model achieved 97% precision on our production lines. Rework costs dropped from €12k/month to €4k/month within six months of deployment.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    name: "Emily Rodriguez",
    role: "Quality Manager",
  },
  {
    text: "AQLAAN's AI platform reduced our diagnostic time by 60% while maintaining 98% accuracy. The integration with our existing EMR system was seamless and required minimal training.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    name: "David Thompson",
    role: "CTO Healthcare",
  },
  {
    text: "Implementing AQLAAN Edge AI on our factory floor eliminated 85% of quality control bottlenecks. Real-time defect detection improved our overall yield by 12%.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    name: "Lisa Anderson",
    role: "VP of Engineering",
  },
  {
    text: "The Language AI platform transformed our customer feedback analysis. We now process 10x more data with insights that drive 25% higher customer satisfaction scores.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    name: "James Wilson",
    role: "Data Science Lead",
  },
  {
    text: "AQLAAN Vision AI revolutionized our warehouse operations. Automated inventory counting reduced errors by 94% and cut monthly audit time from 40 hours to just 4 hours.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    name: "Rachel Martinez",
    role: "Chief Information Officer",
  },
  {
    text: "The Language AI chatbot increased our conversion rate by 23% and reduced support tickets by 45%. Customers love the instant, intelligent responses available 24/7.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    name: "Alex Kumar",
    role: "Product Manager",
  },
  {
    text: "AQLAAN Edge AI enabled predictive maintenance across 200+ remote sites. We prevented 78% of potential equipment failures and reduced downtime costs by $2.3M annually.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    name: "Jennifer Lee",
    role: "Director of Innovation",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-[var(--bg)] py-24 relative">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-[var(--border)] py-1 px-4 rounded-lg bg-[var(--surface)] text-[var(--text)]">
              Testimonials
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-[var(--text)]">
            What our users say
          </h2>
          <p className="text-center mt-5 text-[var(--muted)]">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}