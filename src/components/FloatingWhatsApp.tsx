"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/siteConfig";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(
    "¡Hola Quality Sound! Quisiera solicitar un presupuesto para mi evento."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-semibold tracking-wide border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        ¡Escribinos por WhatsApp!
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}
