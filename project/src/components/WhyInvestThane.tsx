import { WHY_INVEST_THANE } from '@/lib/content';
import { getIcon } from '@/lib/icons';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function WhyInvestThane() {
  const { ref, visible } = useReveal();
  return (
    <section id="why-invest-thane" className="relative py-16 md:py-24 bg-cloud-100 overflow-hidden">
      <div className="section-pad max-w-[1400px] mx-auto relative z-10">
        <SectionHeading
          eyebrow="Investment Potential"
          title={<>Why Invest in <span className="text-gradient-royal">Thane</span></>}
          subtitle="Thane is one of MMR's fastest-growing micro-markets with exceptional appreciation potential."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-5`}>
          {WHY_INVEST_THANE.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={`${item.title}-${i}`}
                className="premium-card p-6 group"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-300 to-gold-400 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg text-ink leading-snug">{item.title}</h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
