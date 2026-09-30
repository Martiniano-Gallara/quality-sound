"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowUp } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/siteConfig";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030305] border-t border-white/10 pt-16 pb-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col items-start">
            <Link href="#inicio" className="relative h-12 w-56 mb-4 inline-block">
              <Image
                src="/images/logo.png"
                alt="Quality Sound"
                fill
                sizes="224px"
                className="object-contain object-left drop-shadow-[0_2px_12px_rgba(230,25,25,0.3)]"
              />
            </Link>
            <p className="text-base text-slate-300 font-medium max-w-md">
              {SITE_CONFIG.concept}
            </p>
            <p className="mt-2 text-sm text-slate-500 max-w-md leading-relaxed">
              Soluciones técnicas integrales en sonido, iluminación y pantallas LED para transformar cada evento en una experiencia inolvidable.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Canales de contacto
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-red-500/50 group-hover:text-red-500 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span>Instagram</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-green-500/50 group-hover:text-green-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© Quality Sound — Todos los derechos reservados.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer group"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
