import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock, Tag, Check } from 'lucide-react';
import { PROJECT, HERO_IMAGE, FINAL_CTA_DATA } from '@/lib/content';
import EnquiryForm from './EnquiryForm';

const ICON_MAP: Record<string, any> = {
  Tag,
  ShieldCheck,
  Clock
};

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" loading="lazy"  width="800" height="600" />
        <div className="absolute inset-0 bg-gradient-to-br from-royal-700/95 via-royal-600/90 to-royal-800/95" />
      </div>

      <div className="relative z-10 section-pad max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold-300 opacity-60" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">Limited Units Available</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
              {FINAL_CTA_DATA.title}
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              {FINAL_CTA_DATA.description}
            </p>

            {/* Trust badges */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {FINAL_CTA_DATA.icons.map(({ icon, text: label, sub }) => {
                const Icon = ICON_MAP[icon?.trim()] || Check;
                return (
                  <div key={label} className="glass rounded-2xl p-4">
                    <Icon className="w-6 h-6 text-gold-300 mb-2" />
                    <div className="text-sm font-semibold text-white">{label}</div>
                    <div className="text-xs text-white/70">{sub}</div>
                  </div>
                );
              })}
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a href={`tel:${PROJECT.phoneRaw}`} className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-semibold">{PROJECT.phone}</span>
              </a>
              <a href={`mailto:${PROJECT.email}`} className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-semibold">{PROJECT.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{PROJECT.address}</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div>
            <div className="glass-dark rounded-3xl p-7 shadow-premium-lg">
              <div className="text-center mb-5">
                <h3 className="font-display text-2xl text-ink mb-1">Get the Best Offer Now</h3>
                <p className="text-sm text-ink-muted">Fill the form and our team will call you back</p>
              </div>
              <EnquiryForm source="final_cta" variant="inline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
