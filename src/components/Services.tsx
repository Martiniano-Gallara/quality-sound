"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/siteConfig";

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-24 relative bg-[#050507]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

        {/* Compact 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SITE_CONFIG.services.map((service, index) => {
            const serviceWhatsappUrl = getWhatsAppUrl(service.whatsappMessage);
            return (
              <div
                key={service.id}
                className="group relative rounded-xl overflow-hidden bg-[#0c0c12] border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(230,25,25,0.2)] flex flex-col justify-between"
              >
                {/* Image Container with Zoom & Ambient Overlay */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  />
                  {/* Gradient overlays to blend into the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-[#0c0c12]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c12]/50 to-transparent" />

                  {/* Card Number & Category Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-widest bg-black/70 border border-white/10 text-white backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
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

                  {/* Interactive Button */}
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
      </div>
    </section>
  );
}
