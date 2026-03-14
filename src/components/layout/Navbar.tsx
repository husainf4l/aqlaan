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
  {
    label: "Solutions",
    dropdown: {
      title: "AI Solutions",
      items: [
        { label: "Enterprise Automation", href: "/solutions/enterprise-automation", description: "Scale operations with intelligent automation" },
        { label: "Computer Vision", href: "/solutions/computer-vision", description: "Advanced visual intelligence" },
        { label: "Infrastructure AI", href: "/solutions/infrastructure-ai", description: "Smart infrastructure monitoring" },
      ],
    },
  },
  {
    label: "Company",
    dropdown: {
      title: "About AQLAAN",
      items: [
        { label: "About Us", href: "/about", description: "Our mission and vision" },
        { label: "Contact", href: "/contact", description: "Get in touch" },
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
            ? "border-b border-gray-200 dark:border-white/10 shadow-sm"
            : ""
        }`}
        style={{ 
          ['--tw-bg-opacity' as string]: '1',
          backgroundColor: 'var(--nav-bg)'
        }}
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
              style={{
                filter: 'var(--logo-filter)'
              }}
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
                    className="text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-200 transition-colors duration-300 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-200 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
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
                      className="absolute top-full left-0 mt-3 w-72 border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl p-4"
                      style={{ backgroundColor: 'var(--dropdown-bg)' }}
                    >
                      <p className="text-[10px] font-mono tracking-[1.5px] uppercase text-gray-500 dark:text-white/70 mb-3 px-2">
                        {item.dropdown.title}
                      </p>
                      <div className="space-y-0.5">
                        {item.dropdown.items.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-2 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="text-gray-900 dark:text-white text-sm font-medium transition-colors duration-200">
                              {dropdownItem.label}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-gray-500 dark:text-gray-300 text-xs mt-0.5 leading-relaxed transition-colors duration-200">
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
            <Link href="/get-started">
              <div className="p-[1px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 dark:from-[#9a9a9a] dark:via-[#1a1a1a] dark:to-[#6a6a6a]">
                <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white dark:bg-white/[0.04] backdrop-blur-sm text-gray-900 dark:text-white text-sm font-medium cursor-pointer border-none whitespace-nowrap transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  Get Started
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Theme + Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-200 transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
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
