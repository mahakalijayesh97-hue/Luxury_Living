import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { MASTER_PLAN, MASTER_PLAN_IMAGE } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function MasterPlan() {
  const { ref, visible } = useReveal();
  const [zoom, setZoom] = useState(false);

  return (
    <section id="master-plan" className="py-16 md:py-24 bg-white">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Master Plan"
          title={<>A Visionary <span className="text-gradient-royal">Master Plan</span></>}
          subtitle={MASTER_PLAN.subtitle}
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative group rounded-3xl overflow-hidden shadow-premium-lg cursor-pointer`}>
          <img
            src={MASTER_PLAN.image}
            alt="Piramal Vaikunth Phase 2 master plan aerial view"
            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
           width="800" height="600" />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900/30 via-transparent to-transparent" />
          <button
            onClick={() => setZoom(true)}
            className="absolute bottom-6 right-6 glass-dark rounded-full p-4 shadow-premium-lg flex items-center gap-2 text-ink font-semibold hover:scale-110 transition-transform"
            aria-label="Zoom master plan"
          >
            <ZoomIn className="w-5 h-5" />
            <span className="text-sm">Click to Zoom</span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {zoom && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setZoom(false)}
        >
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <img
            src={MASTER_PLAN_IMAGE}
            alt="Piramal Vaikunth Phase 2 master plan - full view"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
           loading="lazy" width="800" height="600" />
        </div>
      )}
    </section>
  );
}
