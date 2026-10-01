"use client";

import Image from "next/image";
import { ShieldCheck, Award, Wrench, CheckCircle } from "lucide-react";
import { SITE_CONFIG, assetPath } from "@/config/siteConfig";

export default function About() {
  const values = [
    { title: "Experiencia", icon: Award },
    { title: "Responsabilidad", icon: ShieldCheck },
    { title: "Tecnología", icon: Wrench },
    { title: "Profesionalismo", icon: CheckCircle },
    { title: "Capacidad de adaptación", icon: CheckCircle },
    { title: "Recursos técnicos", icon: Wrench },
    { title: "Compromiso", icon: ShieldCheck },
    { title: "Calidad", icon: Award },
  ];

  return (
    <section id="nosotros" className="py-24 sm:py-32 relative bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={assetPath("/images/service_sound.jpg")}
                alt="Equipo técnico y equipamiento Quality Sound"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />
            </div>

            {/* Ambient Red Glow behind card */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Exact Institutional Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-red-500 mb-6 w-fit">
              <span>Sobre Nosotros</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase leading-[1.05]">
              {SITE_CONFIG.about.title}
            </h2>

            <div className="mt-8 space-y-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              <p>{SITE_CONFIG.about.p1}</p>
              <p>{SITE_CONFIG.about.p2}</p>
            </div>

            {/* Closing statement highlighted */}
            <div className="mt-8 p-5 rounded-xl bg-white/5 border-l-4 border-red-600 backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-heading font-bold text-white tracking-wide">
                {SITE_CONFIG.about.highlight}
              </p>
            </div>

            {/* Values Grid */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                Valores fundamentales
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 hover:border-red-500/30 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-200 truncate">
                        {v.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
