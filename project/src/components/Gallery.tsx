import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function Gallery() {
  const { ref, visible } = useReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const spanClass: Record<string, string> = {
    tall: 'row-span-2',
    wide: 'col-span-2',
    normal: '',
  };

  function next() {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % GALLERY_IMAGES.length));
  }
  function prev() {
    setLightbox((prev) => (prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Gallery"
          title={<>A Glimpse Into <span className="text-gradient-royal">Luxury Living</span></>}
          subtitle="Explore the finest interiors, exteriors, and lifestyle spaces at Piramal Vaikunth Phase 2."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4`}>
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl overflow-hidden shadow-soft cursor-pointer ${spanClass[img.span] || ''}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.url}
                alt={img.alt}
                width="800"
                height="600"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
               />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-semibold drop-shadow-lg">{img.alt}</span>
                  <div className="w-9 h-9 rounded-full glass-dark flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:bg-royal-500 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={GALLERY_IMAGES[lightbox].url}
            alt={GALLERY_IMAGES[lightbox].alt}
            width="1200"
            height="800"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:bg-royal-500 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-dark rounded-full px-5 py-2 text-white text-sm">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
