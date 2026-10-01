"use client";

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

        {/* Official WhatsApp Logo */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 relative z-10 drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* White speech bubble */}
          <path
            d="M12.04 21.785h-.002c-1.758 0-3.483-.473-4.992-1.368l-.358-.212-3.712.973.99-3.618-.233-.37a9.92 9.92 0 0 1-1.517-5.263c0-5.485 4.464-9.949 9.954-9.949 2.658 0 5.157 1.035 7.034 2.913a9.89 9.89 0 0 1 2.91 7.034c0 5.488-4.465 9.953-9.954 9.953z"
            fill="#FFFFFF"
          />
          {/* Green phone receiver */}
          <path
            d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.245-.589-.494-.509-.678-.519-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.145 4.547.719.31 1.28.495 1.718.635.722.23 1.378.197 1.898.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.125-.276-.2-.577-.351z"
            fill="#25D366"
          />
        </svg>
      </a>
    </div>
  );
}
