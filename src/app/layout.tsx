import type { Metadata } from "next";
import { Rajdhani, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/siteConfig";

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qualitysound.com.ar"),
  title: "Quality Sound | Sonido, Iluminación y Pantallas LED",
  description:
    "Quality Sound ofrece servicios de sonido, iluminación y pantallas LED para eventos sociales, corporativos, culturales, educativos y shows en vivo.",
  keywords: [
    "Quality Sound",
    "sonido profesional",
    "iluminación para eventos",
    "pantallas LED",
    "shows en vivo",
    "eventos corporativos",
    "eventos sociales",
    "alquiler sonido e iluminación",
    "truss y escenarios",
  ],
  authors: [{ name: "Quality Sound" }],
  creator: "Quality Sound",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://qualitysound.com.ar",
    siteName: "Quality Sound",
    title: "Quality Sound | Sonido, Iluminación y Pantallas LED",
    description:
      "Quality Sound ofrece servicios de sonido, iluminación y pantallas LED para eventos sociales, corporativos, culturales, educativos y shows en vivo.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Quality Sound - Escenario y Producción Audiovisual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Sound | Sonido, Iluminación y Pantallas LED",
    description:
      "Servicios profesionales de sonido, iluminación y pantallas LED para eventos.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${rajdhani.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050507] text-[#e2e8f0] font-sans antialiased selection:bg-[#e61919] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
