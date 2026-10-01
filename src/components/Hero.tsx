"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl, assetPath } from "@/config/siteConfig";

export default function Hero() {
  const whatsappBudgetUrl = getWhatsAppUrl(
    "¡Hola Quality Sound! Quisiera solicitar un presupuesto para mi evento."
  );

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 md:py-32"
    >
      {/* Background Image with Dark Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/hero.jpg")}
          alt="Producción audiovisual Quality Sound en escenario"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform duration-1000 ease-out brightness-[0.45] contrast-[1.15]"
        />

        {/* Multi-layered dark gradients for readability and cinematic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/65 to-[#050507]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-transparent to-[#050507]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,25,25,0.12)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.1)_0%,transparent_60%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Equalizer & Identity Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          <div className="flex items-end gap-[3px] h-3.5 w-5">
            <span className="w-1 bg-[#e61919] rounded-full eq-bar" />
            <span className="w-1 bg-white rounded-full eq-bar" />
            <span className="w-1 bg-[#8b5cf6] rounded-full eq-bar" />
            <span className="w-1 bg-[#3b82f6] rounded-full eq-bar" />
          </div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-slate-300">
            {SITE_CONFIG.concept}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight uppercase leading-[0.95] max-w-5xl">
          <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            SONIDO QUE SE SIENTE.
          </span>
          <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#cbd5e1] drop-shadow-[0_0_30px_rgba(230,25,25,0.35)]">
            EVENTOS QUE SE RECUERDAN.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed text-balance">
          {SITE_CONFIG.heroSubtitle}
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
          <a
            href={whatsappBudgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#e61919] via-[#cc1414] to-[#991b1b] hover:from-[#ff2e2e] hover:to-[#e61919] transition-all duration-300 shadow-[0_0_24px_rgba(230,25,25,0.4)] hover:shadow-[0_0_32px_rgba(230,25,25,0.65)] hover:-translate-y-0.5 active:translate-y-0 border border-red-500/40 group"
          >
            <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
            <span>Solicitar presupuesto</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <Link
            href="#servicios"
            id="hero-cta-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
          >
            <span>Ver nuestros servicios</span>
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 opacity-60 hover:opacity-100 transition-opacity">
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
