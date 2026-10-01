"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles, Send } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl, assetPath } from "@/config/siteConfig";

export default function FinalCta() {
  const [selectedEventType, setSelectedEventType] = useState("Social");
  const [eventDetails, setEventDetails] = useState("");

  const eventOptions = [
    { label: "Evento Social", value: "Social" },
    { label: "Evento Corporativo", value: "Corporativo" },
    { label: "Show en Vivo / Festival", value: "Show en Vivo" },
    { label: "Evento Cultural / Educativo", value: "Cultural o Educativo" },
  ];

  const buildCustomWhatsAppMessage = () => {
    let msg = `¡Hola Quality Sound! Tengo un evento en mente (${selectedEventType}).`;
    if (eventDetails.trim()) {
      msg += ` Detalles: ${eventDetails.trim()}`;
    } else {
      msg += ` Quisiera recibir asesoramiento y solicitar un presupuesto para sonido, iluminación y pantallas LED.`;
    }
    return getWhatsAppUrl(msg);
  };

  const defaultWhatsAppLink = getWhatsAppUrl(
    "¡Hola Quality Sound! Tengo un evento en mente y quiero solicitar presupuesto."
  );

  return (
    <section id="contacto" className="relative py-28 sm:py-36 overflow-hidden bg-[#030305]">
      {/* Background Stage Photography with Red/Blue/Violet Lighting Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/gallery_laser.jpg")}
          alt="Concierto con iluminación y pantallas Quality Sound"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.22] contrast-[1.25] scale-105"
        />

        {/* Dynamic stage spotlight gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/80 to-[#030305]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-transparent to-[#030305]" />
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-xs font-semibold tracking-widest uppercase text-red-400 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span>Comencemos a planear tu evento</span>
        </div>

        {/* Section Title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-white uppercase leading-[0.98]">
          ¿TENÉS UN EVENTO EN MENTE?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-2xl text-slate-300 font-normal max-w-2xl leading-relaxed">
          Contanos qué estás preparando y encontremos la solución audiovisual adecuada.
        </p>

        {/* Interactive Quick Event Configurator Card */}
        <div className="mt-10 w-full max-w-2xl p-6 sm:p-8 rounded-2xl bg-[#0a0a12]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] text-left">
          <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-3">
            Tipo de evento:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
            {eventOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelectedEventType(opt.value)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                  selectedEventType === opt.value
                    ? "bg-red-600 text-white border-red-500 shadow-[0_0_15px_rgba(230,25,25,0.4)]"
                    : "bg-white/5 text-slate-300 border-white/10 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Detalles opcionales (fecha, lugar, cantidad estimada de personas):
          </label>
          <input
            type="text"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            placeholder="Ej: Boda en noviembre para 180 personas..."
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors mb-6"
          />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={buildCustomWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-speak-whatsapp"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#e61919] via-[#cc1414] to-[#991b1b] hover:from-[#ff2b2b] hover:to-[#e61919] transition-all duration-300 shadow-[0_0_30px_rgba(230,25,25,0.45)] hover:shadow-[0_0_40px_rgba(230,25,25,0.7)] hover:-translate-y-0.5 active:translate-y-0 border border-red-500/40"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>HABLAR POR WHATSAPP</span>
              <Send className="w-4 h-4 ml-1 opacity-90" />
            </a>

            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-request-budget"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md transition-colors"
            >
              <span>Solicitar presupuesto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Small reassurance note */}
        <p className="mt-6 text-xs text-slate-500 font-mono tracking-wider uppercase">
          Respuesta rápida • Asesoramiento técnico personalizado
        </p>
      </div>
    </section>
  );
}
