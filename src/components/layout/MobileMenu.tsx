"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/Button";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    title: string;
    items: { label: string; href: string; description?: string }[];
  };
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  const menuVariants = {
    closed: {
      x: 400,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900 border-l border-gray-800 z-50 p-6 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center" onClick={onClose}>
                <Image
                  src="/logo/aqlaa-new-logo.png"
                  alt="AQLAAN Logo"
                  width={96}
                  height={96}
                  quality={100}
                  className="h-6 w-auto"
                />
              </Link>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors p-2"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Items */}
            <motion.nav variants={containerVariants} className="space-y-4">
              {navItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block text-xl text-white hover:text-blue-400 transition-colors py-3 border-b border-gray-800"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full text-xl text-white hover:text-blue-400 transition-colors py-3 border-b border-gray-800"
                      >
                        {item.label}
                        {expandedDropdown === item.label ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedDropdown === item.label && item.dropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="py-4 space-y-3 pl-4 border-l-2 border-blue-400 ml-4">
                              {item.dropdown.items.map((dropdownItem, dropdownIndex) => (
                                <motion.div
                                  key={dropdownItem.href}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: dropdownIndex * 0.05 }}
                                >
                                  <Link
                                    href={dropdownItem.href}
                                    onClick={onClose}
                                    className="block text-gray-300 hover:text-white transition-colors py-2"
                                  >
                                    <div className="font-medium">{dropdownItem.label}</div>
                                    {dropdownItem.description && (
                                      <div className="text-sm text-gray-500 mt-1">
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
                  )}
                </motion.div>
              ))}
            </motion.nav>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-8 border-t border-gray-800 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Theme</span>
                <ThemeToggle />
              </div>

              <div className="space-y-3">
                <Link href="/demo" onClick={onClose}>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    Book a Demo
                  </Button>
                </Link>
                <Link href="/get-started" onClick={onClose}>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}