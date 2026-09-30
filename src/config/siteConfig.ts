export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  whatsappMessage: string;
}

export interface EventTypeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  videoUrl?: string;
  instagramUrl?: string;
}

export interface ValuePillar {
  number: string;
  title: string;
  description?: string;
}

export const SITE_CONFIG = {
  name: "Quality Sound",
  concept: "Sonido, iluminación y pantallas LED para eventos.",
  tagline: "SONIDO QUE SE SIENTE. EVENTOS QUE SE RECUERDAN.",
  heroSubtitle:
    "Sonido, iluminación y pantallas LED para eventos sociales, corporativos y shows en vivo.",
  
  description:
    "Somos una empresa que realiza el servicio de sonido e iluminación para eventos sociales y empresariales. Contamos con la más avanzada tecnología para que tu evento se haga realidad como lo soñaste.",

  institutionalText:
    "Nuestros clientes nos eligen por nuestros años de experiencia, responsabilidad y recursos disponibles acorde a cada desafío que se nos presenta. Somos uno de los principales proveedores de la zona.",

  about: {
    title: "Detrás de cada evento, hay un equipo preparado.",
    p1: "Somos una empresa dedicada al servicio de sonido e iluminación para eventos sociales y empresariales. Contamos con tecnología y recursos para adaptarnos a las necesidades de cada proyecto.",
    p2: "Nuestros clientes nos eligen por nuestra experiencia, responsabilidad y capacidad para afrontar distintos desafíos.",
    highlight: "Somos uno de los principales proveedores de la zona.",
  },

  contact: {
    // Configurable WhatsApp: can be replaced with real number anytime (format: country code + number, e.g. 549341xxxxxxx)
    whatsappPhone: "5491123456789", 
    whatsappDefaultText:
      "¡Hola Quality Sound! Quiero solicitar un presupuesto para sonido, iluminación y pantallas LED para mi evento.",
    instagramUrl: "https://instagram.com/qualitysound",
    instagramHandle: "@qualitysound",
    location: "Zona de cobertura: Eventos sociales, corporativos y festivales",
    email: "contacto@qualitysound.com",
  },

  values: [
    { number: "01", title: "EXPERIENCIA", description: "Años de trayectoria brindando respaldo técnico ininterrumpido." },
    { number: "02", title: "TECNOLOGÍA", description: "Equipamiento de última generación en audio digital, robótica y video." },
    { number: "03", title: "RESPONSABILIDAD", description: "Compromiso absoluto con los tiempos, la seguridad y el resultado." },
    { number: "04", title: "ADAPTABILIDAD", description: "Recursos técnicos y humanos a la medida de cada tipo de locación." },
  ] as ValuePillar[],

  services: [
    {
      id: "sonido-profesional",
      title: "SONIDO PROFESIONAL",
      tagline: "Potencia, definición y cobertura acústica impecable",
      description: "Sistemas de sonido adaptados al tamaño y características de cada evento.",
      image: "/images/service_sound.jpg",
      features: [
        "Sistemas Line Array de alta fidelidad",
        "Consolas digitales de última generación",
        "Microfonía inalámbrica profesional",
        "Monitoreo in-ear y de escenario",
      ],
      whatsappMessage: "¡Hola! Me gustaría consultar por el servicio de Sonido Profesional para un evento.",
    },
    {
      id: "iluminacion-profesional",
      title: "ILUMINACIÓN",
      tagline: "Atmósferas visuales, dinamismo y diseño lumínico",
      description: "Iluminación profesional para generar la atmósfera adecuada en cada espacio.",
      image: "/images/service_lighting.jpg",
      features: [
        "Cabezales móviles Beam, Spot y Wash",
        "Estructuras y trusses certificados",
        "Iluminación ambiental arquitectónica",
        "Control DMX sincronizado y efectos especiales",
      ],
      whatsappMessage: "¡Hola! Me gustaría consultar por el servicio de Iluminación Profesional para un evento.",
    },
    {
      id: "pantallas-led",
      title: "PANTALLAS LED",
      tagline: "Impacto visual de alta definición en cualquier escala",
      description: "Pantallas LED para escenarios, eventos corporativos, recitales y experiencias audiovisuales.",
      image: "/images/service_led.jpg",
      features: [
        "Pódiums y módulos de alta tasa de refresco",
        "Procesadores de video y escaladores 4K",
        "Montaje versátil para interior y exterior",
        "Visuales dinámicas y reproducción en vivo",
      ],
      whatsappMessage: "¡Hola! Me gustaría consultar por el servicio de Pantallas LED para un evento.",
    },
    {
      id: "shows-en-vivo",
      title: "SHOWS EN VIVO",
      tagline: "Infraestructura integral para producciones masivas",
      description: "Infraestructura técnica para festivales, recitales y espectáculos en vivo.",
      image: "/images/service_live_shows.jpg",
      features: [
        "Riders técnicos para bandas y artistas",
        "Técnicos y operadores de sonido y luces en vivo",
        "Sistemas de distribución y generadores",
        "Puesta en escena coordinada integral",
      ],
      whatsappMessage: "¡Hola! Me gustaría consultar por la producción técnica para Shows en Vivo.",
    },
  ] as ServiceItem[],

  eventTypes: [
    {
      id: "sociales",
      title: "EVENTOS SOCIALES",
      description: "Celebraciones y eventos particulares.",
      image: "/images/event_social.jpg",
      badge: "Sociales & Fiestas",
    },
    {
      id: "corporativos",
      title: "EVENTOS CORPORATIVOS",
      description: "Eventos empresariales, presentaciones y encuentros.",
      image: "/images/event_corporate.jpg",
      badge: "Empresas & Congresos",
    },
    {
      id: "culturales",
      title: "EVENTOS CULTURALES",
      description: "Propuestas culturales y espectáculos.",
      image: "/images/event_cultural.jpg",
      badge: "Cultura & Arte",
    },
    {
      id: "educativos",
      title: "EVENTOS EDUCATIVOS",
      description: "Actos, jornadas y encuentros educativos.",
      image: "/images/event_educational.jpg",
      badge: "Academia & Actos",
    },
    {
      id: "shows-en-vivo",
      title: "SHOWS EN VIVO",
      description: "Festivales, recitales y espectáculos.",
      image: "/images/service_live_shows.jpg",
      badge: "Festivales & Recitales",
    },
  ] as EventTypeItem[],

  gallery: [
    {
      id: "gal-1",
      title: "Pantallas LED para Eventos Escolares",
      category: "Pantallas LED",
      image: "/images/gallery_led_escolares.jpg",
      alt: "Pantalla LED Quality Sound para eventos escolares y actos institucionales",
    },
    {
      id: "gal-2",
      title: "Producción Audiovisual en Vivo — 15 Años & Fiestas",
      category: "Video en Vivo",
      image: "/images/gallery_reel_thumb.jpg",
      alt: "Resumen audiovisual de evento Quality Sound en vivo",
      videoUrl: "/videos/reel_evento.mp4",
      instagramUrl: "https://www.instagram.com/p/DXIxY7ODkPu/",
    },
    {
      id: "gal-3",
      title: "Iluminación & Estructuras Truss en Bodas",
      category: "Iluminación & Truss",
      image: "/images/gallery_boda_thumb.jpg",
      alt: "Puesta en escena de iluminación, trusses circulares y bolas de espejos para boda Quality Sound",
      videoUrl: "/videos/boda_iluminacion.mp4",
      instagramUrl: "https://www.instagram.com/p/DDht4BEvDUu/",
    },
    {
      id: "gal-4",
      title: "Consola de Mezcla Digital & Operación de Audio",
      category: "Sonido Profesional",
      image: "/images/service_sound.jpg",
      alt: "Operación de consola digital en vivo para recital masivo",
    },
    {
      id: "gal-5",
      title: "Show Robot Depredador LED & Láser para Fiestas",
      category: "Show Robot LED",
      image: "/images/gallery_robot_thumb.jpg",
      alt: "Show interactivo de Robot Depredador con armadura LED y lásers Quality Sound",
      videoUrl: "/videos/robot_depredador.mp4",
      instagramUrl: "https://www.instagram.com/p/DBwzl_ehspD/",
    },
    {
      id: "gal-6",
      title: "Sistema Line Array & Montaje de Estructuras",
      category: "Estructuras & Sonido",
      image: "/images/gallery_truss.jpg",
      alt: "Montaje técnico de sonido y truss en estadio",
    },
  ] as GalleryItem[],

  navLinks: [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ],
};

// Helper function to build WhatsApp URLs
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.contact.whatsappDefaultText;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.contact.whatsappPhone}?text=${encoded}`;
}
