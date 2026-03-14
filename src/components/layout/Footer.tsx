"use client";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Platform", href: "/platform" },
      { label: "Consultations", href: "/consultations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Vision", href: "/vision" },
      { label: "Contact", href: "/contact" },
      { label: "Get Started", href: "/get-started" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Partners", href: "/partners" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/aqlaan", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/aqlaan", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/aqlaan", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/aqlaan", label: "Instagram" },
  { icon: Mail, href: "mailto:contact@aqlaan.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const version = process.env.NEXT_PUBLIC_APP_VERSION || 'dev';
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section with brand and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo/aqlaa-new-logo.png"
                alt="AQLAAN Logo"
                width={140}
                height={140}
                quality={100}
                className="h-10 w-auto hover:opacity-70 transition-opacity duration-300 invert dark:invert-0"
              />
            </Link>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
              Breakthrough AI solutions transforming businesses from data to deployment with{' '}
              <span className="font-bold text-slate-900 dark:bg-gradient-to-r dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 dark:bg-clip-text dark:text-transparent">
                aqlaan
              </span>
              . Enterprise-grade technology, personalized service.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-[var(--text)] text-sm font-semibold">
                Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm bg-[var(--bg)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-[var(--text)] placeholder:text-[var(--muted)]"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[var(--text)] text-[var(--bg)] rounded-lg hover:opacity-90 transition-opacity duration-200"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[var(--text)] text-xs font-mono tracking-[1px] uppercase mb-4 font-semibold">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={`${section.title}-${i}`}>
                      <Link
                        href={link.href}
                        className="text-[var(--muted)] text-sm hover:text-[var(--text)] transition-colors duration-200 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-subtle)] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <div>
              <p className="text-[var(--muted)] text-xs font-mono">
                © {currentYear}{' '}
                <span className="text-slate-900 dark:bg-gradient-to-r dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 dark:bg-clip-text dark:text-transparent font-bold">
                  AQLAAN
                </span>
                . All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
              <span className="font-mono">v{version}</span>
              <span className="hidden md:inline">•</span>
              <span>Built with precision</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--muted)] hover:text-[var(--text)] transition-all duration-200 p-2.5 rounded-lg hover:bg-[var(--dropdown-item-hover)] group"
              >
                <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
