import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function Testimonials() {
  const { ref, visible } = useReveal();
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Happy <span className="text-gradient-royal">Homeowners</span> Speak</>}
          subtitle="Real stories from families who chose Piramal Vaikunth as their home."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid sm:grid-cols-2 lg:grid-cols-4 gap-5`}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="premium-card p-6 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-cloud-300" />
              </div>
              <p className="text-sm text-ink-light leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cloud-200">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-royal-400 to-royal-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-ink-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
