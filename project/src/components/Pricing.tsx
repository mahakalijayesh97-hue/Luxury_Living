import { Check, Star, ArrowRight } from 'lucide-react';
import { PRICING } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function Pricing() {
  const { ref, visible } = useReveal();
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Price List"
          title={<>Premium Homes at <span className="text-gradient-royal">Unbeatable Value</span></>}
          subtitle="Transparent pricing with flexible payment plans. No hidden charges."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto`}>
          {PRICING.map((plan, i) => (
            <div
              key={plan.config}
              className={`premium-card p-7 md:p-8 relative overflow-hidden ${
                i === 0 ? 'ring-2 ring-royal-200' : ''
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className={`px-4 py-1.5 text-xs font-bold text-white rounded-bl-2xl ${
                    i === 0 ? 'bg-royal-500' : 'bg-gold-400'
                  }`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl text-ink mb-2">{plan.config}</h3>
                <p className="text-sm text-ink-muted">{plan.carpetArea}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-cloud-200">
                <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">Starting Price</div>
                <div className="font-display text-4xl text-royal-600 font-bold">{plan.price}</div>
                <div className="text-xs text-ink-muted mt-1">All-inclusive · No hidden charges</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-ink-light">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#final-cta" className="btn-primary w-full">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </a>

              {i === 0 && (
                <div className="flex items-center justify-center gap-1 mt-4 text-xs text-ink-muted">
                  <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
                  <span>Most booked configuration this month</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-ink-muted mt-8 max-w-2xl mx-auto">
          *Prices are indicative and subject to change. Contact our sales team for the latest pricing,
          floor-wise availability, and special early-bird offers.
        </p>
      </div>
    </section>
  );
}
