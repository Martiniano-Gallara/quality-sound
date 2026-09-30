"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function ValueProposition() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#060609] border-y border-white/10">
      {/* Background Event Photography with dark overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/gallery_truss.jpg"
          alt="Estructura técnica de Quality Sound en evento"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.22] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060609] via-[#060609]/85 to-[#060609]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060609] via-transparent to-[#060609]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(230,25,25,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-red-500 mb-4">
              <span>Propuesta de valor</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white uppercase leading-[1.05]">
              TECNOLOGÍA, EXPERIENCIA Y RECURSOS PARA CADA DESAFÍO.
            </h2>

            {/* Institutional Text */}
            <p className="mt-3 text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-2xl">
              {SITE_CONFIG.institutionalText}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-end shrink-0">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Desplazar a la izquierda"
              className="p-3 rounded-xl bg-black/60 border border-white/15 text-white hover:bg-white/10 hover:border-red-500/50 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 backdrop-blur-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Desplazar a la derecha"
              className="p-3 rounded-xl bg-black/60 border border-white/15 text-white hover:bg-white/10 hover:border-red-500/50 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 backdrop-blur-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {SITE_CONFIG.values.map((val) => (
            <div
              key={val.number}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[340px] p-6 sm:p-7 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 hover:border-red-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_12px_30px_rgba(230,25,25,0.2)] snap-start flex flex-col justify-between"
            >
              <div>
                {/* Concept Number */}
                <div className="text-3xl sm:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">
                  {val.number}
                </div>

                {/* Red Accent Divider */}
                <div className="h-[2px] w-8 bg-red-600 my-4 group-hover:w-16 transition-all duration-300" />

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  {val.title}
                </h3>

                {/* Description */}
                {val.description && (
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {val.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
