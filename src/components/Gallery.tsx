"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Play, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const images = SITE_CONFIG.gallery;

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  }, [selectedImageIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  }, [selectedImageIndex, images.length]);

  // Pause inline video if lightbox is opened
  useEffect(() => {
    if (selectedImageIndex !== null) {
      setPlayingVideoId(null);
    }
  }, [selectedImageIndex]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <section id="galeria" className="py-16 sm:py-24 relative bg-[#040407] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">
            <span>Galería visual</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white uppercase">
            ASÍ SE VIVE QUALITY SOUND
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Escenarios, estructuras, luces robóticas, pantallas y sonido profesional en acción.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-[#8b5cf6] via-[#e61919] to-transparent rounded-full" />
          </div>
        </div>

        {/* Gallery Grid: 2 columns in mobile phone format, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {images.map((item, idx) => {
            const isPlaying = playingVideoId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isPlaying) return;
                  if (item.videoUrl) {
                    setPlayingVideoId(item.id);
                  } else {
                    setSelectedImageIndex(idx);
                  }
                }}
                className={`group relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0c0c14] border transition-all duration-300 shadow-md ${
                  isPlaying
                    ? "border-red-500/80 shadow-[0_0_30px_rgba(230,25,25,0.4)] ring-1 ring-red-500/50"
                    : "border-white/10 hover:border-violet-500/50 hover:shadow-2xl cursor-pointer"
                }`}
              >
                {isPlaying && item.videoUrl ? (
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <video
                      src={item.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      onEnded={() => setPlayingVideoId(null)}
                      className="w-full h-full object-contain bg-black"
                    />

                    {/* Quick controls on top right */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageIndex(idx);
                        }}
                        className="p-1.5 sm:p-2 rounded-full bg-black/80 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-lg"
                        title="Ampliar en visor"
                        aria-label="Ampliar en visor"
                      >
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingVideoId(null);
                        }}
                        className="p-1.5 sm:p-2 rounded-full bg-black/80 hover:bg-red-600 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-lg"
                        title="Cerrar video"
                        aria-label="Cerrar video"
                      >
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    {/* Video Badge */}
                    {item.videoUrl && (
                      <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 px-2 py-0.5 rounded-md bg-black/75 border border-white/20 text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span>VIDEO</span>
                      </div>
                    )}

                    {/* Play Button for Video Cards */}
                    {item.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideoId(item.id);
                          }}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600/95 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(230,25,25,0.7)] group-hover:scale-110 transition-all duration-300 pl-0.5 cursor-pointer"
                          aria-label="Reproducir video"
                        >
                          <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-white text-white" />
                        </button>
                      </div>
                    )}

                    {/* Hover overlay with maximize icon */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(idx);
                      }}
                      className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 z-10"
                      title="Ver en grande"
                      aria-label="Ver en grande"
                    >
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>

                    {/* Title & Category on bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 transform translate-y-0.5 group-hover:translate-y-0 transition-transform z-10">
                      <span className="text-[9px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-red-400 block truncate">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-base font-heading font-bold text-white tracking-wide mt-0.5 sm:mt-1 line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95"
            aria-label="Cerrar visor"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {images[selectedImageIndex].videoUrl ? (
              <div className="relative w-full max-w-4xl h-[60vh] sm:h-[72vh] flex items-center justify-center rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black">
                <video
                  src={images[selectedImageIndex].videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src={images[selectedImageIndex].image}
                  alt={images[selectedImageIndex].alt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            )}

            {/* Caption */}
            <div className="mt-4 text-center flex flex-col items-center">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500">
                {images[selectedImageIndex].category} ({selectedImageIndex + 1} / {images.length})
              </span>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-1">
                {images[selectedImageIndex].title}
              </h3>
              {images[selectedImageIndex].instagramUrl && (
                <a
                  href={images[selectedImageIndex].instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#833ab4]/80 via-[#fd1d1d]/80 to-[#fcb045]/80 hover:opacity-90 border border-white/20 transition-all shadow-md active:scale-95"
                >
                  <span>Ver en Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
