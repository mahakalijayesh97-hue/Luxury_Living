import { WHY_CHOOSE } from '@/lib/content';
import { getIcon } from '@/lib/icons';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function WhyChoose() {
  const { ref, visible } = useReveal();
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-cloud-100">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Why Choose <span className="text-gradient-royal">Piramal Vaikunth</span></>}
          subtitle="Eight compelling reasons that make this the most sought-after address in Thane."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid sm:grid-cols-2 lg:grid-cols-4 gap-5`}>
          {WHY_CHOOSE.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="premium-card p-6 group"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-500 to-royal-600 flex items-center justify-center mb-5 shadow-premium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg text-ink mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
