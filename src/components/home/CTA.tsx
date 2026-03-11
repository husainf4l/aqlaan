"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 border-t border-white/[0.06] bg-[#00000f]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#a3a3a3] mb-6">
          Transform Today
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Ready to Transform<br />Your Business?
        </h2>

        <p className="text-lg text-[#a3a3a3] leading-[1.6] max-w-xl mx-auto mb-10">
          Join enterprises already leveraging AQLAAN&apos;s AI and automation solutions.
          Let&apos;s accelerate your digital transformation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/get-started">
            <div className="glass-btn-wrap">
              <span className="glass-btn px-8 py-3">Start Your Journey →</span>
            </div>
          </Link>
          <Link href="/contact" className="text-btn py-3 px-2">
            Schedule Demo →
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {["No commitment required", "Free initial consultation", "Custom solutions available"].map((item) => (
            <span key={item} className="flex items-center gap-2 text-[#a3a3a3] text-xs font-mono">
              <span className="w-1 h-1 rounded-full bg-[#a3a3a3] shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
