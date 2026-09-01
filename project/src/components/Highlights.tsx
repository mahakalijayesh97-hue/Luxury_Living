import { HIGHLIGHTS } from '@/lib/content';
import { getIcon } from '@/lib/icons';
import { useReveal } from '@/lib/hooks';

export default function Highlights() {
  const { ref, visible } = useReveal();
  return (
    <section id="highlights" className="py-16 md:py-24 bg-cloud-100">
      <div className="section-pad max-w-[1400px] mx-auto">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-12 max-w-2xl mx-auto`}
        >
          <div className="inline-flex items-center gap-2 text-gold-700 mb-3">
            <span className="h-px w-8 bg-gold-400 opacity-60" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Project Highlights</span>
            <span className="h-px w-8 bg-gold-400 opacity-60" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">Everything You Need to Know</h2>
          <p className="text-ink-muted">Key details of {`Piramal Vaikunth Phase 2`} at a glance.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-5">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.label}
                className="premium-card p-5 md:p-6 flex items-center gap-4 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gradient-to-br from-royal-50 to-royal-100 flex items-center justify-center group-hover:from-royal-500 group-hover:to-royal-600 transition-all duration-500">
                  <Icon className="w-6 h-6 text-royal-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-display text-base md:text-lg text-ink font-semibold leading-tight">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
