"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/Button";

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
    label: "Platform",
    href: "/platform",
  },
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
  {
    label: "Products",
    href: "/products",
  },
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
  {
    label: "Consultations",
    href: "/consultations",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 80;

      setIsScrolled(scrolled);
      setIsVisible(true); // Keep navbar always visible
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-lg"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/aqlaa-new-logo.png"
              alt="AQLAAN Logo"
              width={120}
              height={120}
              quality={100}
              priority
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 relative group">
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl p-6"
                    >
                      <h3 className="text-white font-semibold mb-4">{item.dropdown.title}</h3>
                      <div className="space-y-3">
                        {item.dropdown.items.map((dropdownItem, index) => (
                          <motion.div
                            key={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-gray-800 transition-colors group"
                            >
                              <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                {dropdownItem.label}
                              </div>
                              {dropdownItem.description && (
                                <div className="text-gray-400 text-sm mt-1">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/get-started">
              <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}