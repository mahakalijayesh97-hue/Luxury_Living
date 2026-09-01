import { Download, Maximize2, X } from 'lucide-react';
import { FLOOR_PLANS } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';
import { useState } from 'react';

export default function FloorPlans() {
  const { ref, visible } = useReveal();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="floor-plans" className="py-16 md:py-24 bg-cloud-100">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Floor Plans"
          title={<>Thoughtfully Designed <span className="text-gradient-royal">Floor Plans</span></>}
          subtitle="Intelligent layouts that maximize space, light, and ventilation in every home."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid md:grid-cols-2 gap-6 lg:gap-8`}>
          {FLOOR_PLANS.map((plan, i) => (
            <div
              key={plan.config}
              className="premium-card overflow-hidden group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={plan.image}
                  alt={`${plan.config} floor plan - Piramal Vaikunth Phase 2`}
                  className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                 width="800" height="600" />
                <button
                  onClick={() => setLightbox(plan.image)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-ink hover:bg-royal-500 hover:text-white transition-all"
                  aria-label={`Zoom ${plan.config} floor plan`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 glass-dark rounded-xl px-4 py-2">
                  <span className="font-display text-lg text-ink font-bold">{plan.config}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">Carpet Area</div>
                    <div className="font-display text-xl text-ink font-bold">{plan.area}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {plan.details.map((d:string) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-ink-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-royal-500" />
                      {d}
                    </div>
                  ))}
                </div>

                <a href="#final-cta" className="btn-outline w-full text-sm">
                  <Download className="w-4 h-4" />
                  Download Floor Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <img src={lightbox} alt="Floor plan full view" className="max-w-full max-h-[90vh] rounded-2xl object-contain"  loading="lazy" width="800" height="600" />
        </div>
      )}
    </section>
  );
}
