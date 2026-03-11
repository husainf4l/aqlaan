"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    title: string;
    items: { label: string; href: string; description?: string }[];
  };
}

const navItems: NavItem[] = [
  { label: "Platform", href: "/platform" },
  {
    label: "Solutions",
    dropdown: {
      title: "AI Solutions",
      items: [
        { label: "Enterprise Automation", href: "/solutions/enterprise-automation", description: "Scale operations with intelligent automation" },
        { label: "Computer Vision", href: "/solutions/computer-vision", description: "Advanced visual intelligence" },
        { label: "Language Intelligence", href: "/solutions/language-intelligence", description: "Natural language processing at scale" },
        { label: "Healthcare AI", href: "/solutions/healthcare-ai", description: "Medical intelligence solutions" },
        { label: "Infrastructure AI", href: "/solutions/infrastructure-ai", description: "Smart infrastructure monitoring" },
      ],
    },
  },
  { label: "Products", href: "/products" },
  {
    label: "Resources",
    dropdown: {
      title: "Learn & Explore",
      items: [
        { label: "Blog", href: "/blog", description: "Latest insights and updates" },
        { label: "Case Studies", href: "/case-studies", description: "Success stories from our clients" },
        { label: "Documentation", href: "/docs", description: "Technical documentation" },
        { label: "Press & Media", href: "/press", description: "Media resources and coverage" },
      ],
    },
  },
  {
    label: "Company",
    dropdown: {
      title: "About AQLAAN",
      items: [
        { label: "About Us", href: "/about", description: "Our mission and vision" },
        { label: "Careers", href: "/careers", description: "Join our team" },
        { label: "Vision", href: "/vision", description: "Our future roadmap" },
        { label: "Partners", href: "/partners", description: "Strategic partnerships" },
      ],
    },
  },
  { label: "Consultations", href: "/consultations" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#00000f]/90 backdrop-blur-md border-b border-white/[0.08]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/aqlaa-new-logo.png"
              alt="AQLAAN Logo"
              width={120}
              height={120}
              quality={100}
              priority
              className="h-8 w-auto hover:opacity-70 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 ml-12">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#a3a3a3] hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="text-[#a3a3a3] hover:text-white transition-colors duration-300 flex items-center gap-1 text-sm">
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-72 bg-[#0a0a0f] border border-white/10 rounded-xl shadow-xl p-4"
                    >
                      <p className="text-[10px] font-mono tracking-[1.5px] uppercase text-[#a3a3a3] mb-3 px-2">
                        {item.dropdown.title}
                      </p>
                      <div className="space-y-0.5">
                        {item.dropdown.items.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-2 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors duration-200 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="text-white text-sm font-medium group-hover:text-white">
                              {dropdownItem.label}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-[#a3a3a3] text-xs mt-0.5 leading-relaxed">
                                {dropdownItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link href="/demo" className="text-[#a3a3a3] hover:text-white transition-colors duration-300 text-sm">
              Book a Demo
            </Link>
            <Link href="/get-started">
              <div className="p-[1px] rounded-full bg-gradient-to-br from-[#9a9a9a] via-[#1a1a1a] to-[#6a6a6a]">
                <span className="glass-btn text-sm">
                  Get Started
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#a3a3a3] hover:text-white transition-colors duration-300 p-2 ml-auto"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Backdrop for dropdowns */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
