import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.heroSubtitle,
    url: "https://qualitysound.com.ar",
    logo: "https://qualitysound.com.ar/images/logo.png",
    image: "https://qualitysound.com.ar/images/hero.jpg",
    telephone: SITE_CONFIG.contact.whatsappPhone,
    areaServed: "Provincial y Nacional",
    serviceType: [
      "Sonido Profesional",
      "Iluminación Profesional",
      "Pantallas LED",
      "Producción de Shows en Vivo",
      "Eventos Corporativos",
      "Eventos Sociales",
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
