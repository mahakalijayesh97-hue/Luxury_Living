import { PIRAMAL_STATS, PIRAMAL_IMAGE, TRUST } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';
import { getIcon } from '@/lib/icons';

export default function AboutPiramal() {
  const { ref, visible } = useReveal();
  return (
    <section id="about-piramal" className="py-16 md:py-24 bg-white">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="About Piramal Realty"
          title={<>A Legacy of <span className="text-gradient-royal">Trust & Excellence</span></>}
          subtitle="Four decades of building iconic landmarks and delivering on every promise."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative`}>
            <div className="rounded-3xl overflow-hidden shadow-premium-lg group">
              <img
                src={PIRAMAL_IMAGE}
                alt="Piramal Realty premium residential development"
                className="w-full h-[380px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
               width="800" height="600" />
            </div>
            <div className="absolute -top-5 -left-5 glass-dark rounded-2xl p-5 shadow-premium-lg hidden md:block">
              <div className="font-display text-3xl text-gold-700 font-bold">40+</div>
              <div className="text-xs text-ink-light">Years of Legacy</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-ink-light leading-relaxed mb-6 text-base md:text-lg">
              {PIRAMAL_STATS.find(s => s.desc)?.desc || "Piramal Realty is one of India's most respected real estate developers, backed by the Piramal Group's 40+ year legacy of trust. With a commitment to quality, transparency, and on-time delivery, Piramal Realty has transformed the Mumbai Metropolitan Region's skyline with landmark residential and commercial developments."}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {PIRAMAL_STATS.filter(s => s.value && s.label).map((stat) => (
                <div key={stat.label as string} className="text-center p-4 rounded-2xl bg-cloud-100 border border-cloud-200">
                  <div className="font-display text-2xl md:text-3xl text-royal-600 font-bold">{stat.value}</div>
                  <div className="text-xs text-ink-muted mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {TRUST.filter(t => t.label && t.text).map(({ icon, label, text }) => {
                const isSvg = typeof icon === 'string' && icon.trim().startsWith('<svg');
                const IconComponent = !isSvg ? getIcon(icon as string) : null;
                
                return (
                  <div key={label as string} className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gold-50 flex items-center justify-center">
                      {isSvg ? (
                        <div dangerouslySetInnerHTML={{ __html: icon as string }} className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-gold-700 flex items-center justify-center" />
                      ) : (
                        IconComponent && <IconComponent className="w-5 h-5 text-gold-700" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">{label}</div>
                      <div className="text-xs text-ink-muted leading-relaxed">{text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
