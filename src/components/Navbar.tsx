"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050507]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
          : "bg-gradient-to-b from-[#050507]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
            aria-label="Quality Sound - Inicio"
          >
            <div className="relative h-11 w-48 sm:h-12 sm:w-56">
              <Image
                src="/images/logo.png"
                alt="Quality Sound - Sonido, Iluminación y Pantallas LED"
                fill
                priority
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left drop-shadow-[0_2px_12px_rgba(230,25,25,0.3)]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md transition-colors duration-200 hover:bg-white/5 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#e61919] to-[#8b5cf6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 active:scale-95 transition-colors"
              aria-label="Menú principal"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090e]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-500">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
