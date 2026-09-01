import { MapPin, ArrowRight, Download, Star, ShieldCheck } from 'lucide-react';
import { PROJECT, HERO_IMAGE } from '@/lib/content';
import EnquiryForm from './EnquiryForm';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Piramal Vaikunth Phase 2 luxury apartment building"
          className="w-full h-full object-cover"
          {...({ fetchpriority: 'high' } as any)}
          loading="eager" width="800" height="600" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      <div className="relative z-10 section-pad max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 shadow-soft">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-ink-light">
                MahaRERA Registered · {PROJECT.rera}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 text-gold-700 mb-3">
              <span className="h-px w-8 bg-gold-400 opacity-60" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">By {PROJECT.builder}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] mb-4">
              {PROJECT.tagline}
            </h1>
            <p className="font-display text-2xl sm:text-3xl text-royal-600 mb-5">
              {PROJECT.name}
            </p>

            <div className="flex items-center gap-2 text-ink-muted mb-6">
              <MapPin className="w-5 h-5 text-royal-500" />
              <span className="text-base">{PROJECT.location}</span>
            </div>

            <p className="text-base md:text-lg text-ink-light leading-relaxed max-w-xl mb-8">
              {PROJECT.desc}
            </p>

            {/* Key stats row */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">Starting Price</div>
                <div className="font-display text-2xl text-ink">{PROJECT.startingPrice}</div>
              </div>
              <div className="w-px bg-cloud-300" />
              <div>
                <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">Configuration</div>
                <div className="font-display text-2xl text-ink">2 & 3 BHK</div>
              </div>
              <div className="w-px bg-cloud-300" />
              <div>
                <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">Possession</div>
                <div className="font-display text-2xl text-ink">{PROJECT.possession}</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#final-cta" className="btn-primary text-base">
                Book Free Site Visit
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#brochure" className="btn-outline text-base">
                <Download className="w-5 h-5" />
                Download Brochure
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-2 mt-6 text-sm text-ink-muted">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Zero brokerage · Direct from developer · Best price guarantee</span>
            </div>
          </div>

          {/* Right - Sticky enquiry form */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="glass-dark rounded-3xl p-7 shadow-premium-lg border border-white/60">
                <div className="text-center mb-5">
                  <h3 className="font-display text-2xl text-ink mb-1">Book Your Free Site Visit</h3>
                  <p className="text-sm text-ink-muted">Limited units available · Best price this month</p>
                </div>
                <EnquiryForm source="hero" variant="inline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
