"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/aqlaan-logo.webp"
                  alt="Aqlaan"
                  width={120}
                  height={40}
                  className="h-8 w-auto transition-all duration-300 hover:scale-105 cursor-pointer"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/enterprise" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Enterprise
            </Link>
            <Link href="/public-sector" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Government
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Blog
            </Link>
            <Link href="/aqlanai">
              <button className="bg-white hover:bg-gray-100 text-black font-medium py-2.5 px-6 rounded-md transition-all duration-200 text-sm">
                Ask Aqlaan
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
            <Link 
              href="/enterprise"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Enterprise
            </Link>
            <Link 
              href="/public-sector"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Government
            </Link>
            <Link 
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-800/30">
              <Link href="/aqlanai">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-white hover:bg-gray-100 text-black font-medium py-2.5 px-6 rounded-md transition-all duration-200 text-sm"
                >
                  Ask Aqlaan
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
