"use client";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Products", href: "/products" },
      { label: "Solutions", href: "/solutions/enterprise-automation" },
      { label: "Consultations", href: "/consultations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Get Started", href: "/get-started" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:contact@aqlaan.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const version = process.env.NEXT_PUBLIC_APP_VERSION || 'dev';

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo/aqlaa-new-logo.png"
                alt="AQLAAN Logo"
                width={120}
                height={120}
                quality={100}
                className="h-8 w-auto hover:opacity-70 transition-opacity duration-300"
              />
            </Link>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Breakthrough AI solutions transforming businesses from data to deployment.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[var(--text)] text-xs font-mono tracking-[1px] uppercase mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={`${section.title}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted)] text-sm hover:text-[var(--text)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-subtle)] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[var(--muted)] text-xs font-mono">
              © {currentYear} AQLAAN. All rights reserved.
            </p>
            <p className="text-[var(--muted)] text-xs font-mono mt-1">
              v{version}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-300 p-2 rounded-lg hover:bg-[var(--dropdown-item-hover)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
