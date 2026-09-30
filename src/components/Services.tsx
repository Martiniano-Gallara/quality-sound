"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/siteConfig";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const total = SITE_CONFIG.services.length;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    // Detect active card
    const cardWidth = el.scrollWidth / total;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }, [total]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / total;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / total;
    const next = Math.max(0, Math.min(total - 1, activeIndex + dir));
    el.scrollTo({ left: cardWidth * next, behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 relative bg-[#050507] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
              <span>Servicios de alto nivel</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-white uppercase whitespace-nowrap">
              Todo lo que tu evento necesita
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
              Soluciones audiovisuales adaptadas a cada evento y a cada desafío.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-16 bg-gradient-to-r from-[#e61919] via-[#8b5cf6] to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* Carousel wrapper with nav arrows */}
        <div className="relative group/carousel">

          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Servicio anterior"
            className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full border backdrop-blur-md transition-all duration-200 shadow-xl
              ${canScrollLeft
                ? "bg-black/70 border-white/20 text-white hover:bg-red-600 hover:border-red-500 cursor-pointer active:scale-95"
                : "bg-black/30 border-white/5 text-white/20 cursor-default"
              }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Siguiente servicio"
            className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full border backdrop-blur-md transition-all duration-200 shadow-xl
              ${canScrollRight
                ? "bg-black/70 border-white/20 text-white hover:bg-red-600 hover:border-red-500 cursor-pointer active:scale-95"
                : "bg-black/30 border-white/5 text-white/20 cursor-default"
              }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 sm:px-16 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`.services-track::-webkit-scrollbar { display: none; }`}</style>

            {SITE_CONFIG.services.map((service, index) => {
              const serviceWhatsappUrl = getWhatsAppUrl(service.whatsappMessage);
              return (
                <div
                  key={service.id}
                  className="group relative rounded-xl overflow-hidden bg-[#0c0c12] border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(230,25,25,0.2)] flex flex-col justify-between
                    snap-center
                    flex-shrink-0
                    w-[80vw] sm:w-[46vw] lg:w-[calc(25%-1rem)]
                    min-w-[270px] max-w-[360px]"
                >
                  {/* Image Container */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-[#0c0c12]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c12]/50 to-transparent" />
                    {/* Card number */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-widest bg-black/70 border border-white/10 text-white backdrop-blur-md">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between -mt-6 relative z-10">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-black text-white tracking-wide uppercase group-hover:text-red-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                        {service.tagline}
                      </p>
                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                        {service.description}
                      </p>
                      {/* Features list */}
                      <ul className="mt-3.5 space-y-1.5 border-t border-white/5 pt-3">
                        {service.features.map((feat, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* CTA Button */}
                    <div className="mt-5 pt-3 border-t border-white/10">
                      <a
                        href={serviceWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-white/5 group-hover:bg-red-600/90 border border-white/10 group-hover:border-red-500 transition-all duration-200"
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Consultar</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-10 sm:w-14 bg-gradient-to-r from-[#050507] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-4 w-10 sm:w-14 bg-gradient-to-l from-[#050507] to-transparent pointer-events-none z-10" />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {SITE_CONFIG.services.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Ir al servicio ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-red-500"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
