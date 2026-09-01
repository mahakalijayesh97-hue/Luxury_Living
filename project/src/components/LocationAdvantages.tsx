import { LOCATION_ADVANTAGES, PROJECT } from '@/lib/content';
import { getIcon } from '@/lib/icons';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function LocationAdvantages() {
  const { ref, visible } = useReveal();
  return (
    <section id="location" className="py-16 md:py-24 bg-cloud-100">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Location Advantages"
          title={<>Exceptional <span className="text-gradient-royal">Connectivity</span> & Convenience</>}
          subtitle="Everything you need is just minutes away — schools, hospitals, malls, metro, and major business hubs."
        />

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-premium-lg h-[400px] md:h-[500px]">
            <iframe
              title="Piramal Vaikunth Phase 2 Location Map - Balkum Thane West"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120647.8!2d72.95!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6303b1ba8b5%3A0x6c5e5b8b8b8b8b8b!2sBalkum%20Thane%20West%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location list */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} space-y-3`}>
            {LOCATION_ADVANTAGES.map((loc, i) => {
              const Icon = getIcon(loc.icon);
              return (
                <div
                  key={loc.name}
                  className="premium-card p-4 md:p-5 flex items-center gap-4 group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-royal-50 flex items-center justify-center group-hover:bg-royal-500 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-royal-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink">{loc.name}</div>
                  </div>
                  <div className="shrink-0">
                    <div className="glass rounded-full px-3 py-1.5 text-xs font-bold text-royal-600">
                      {loc.time}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="pt-2">
              <a href="#final-cta" className="btn-primary w-full text-sm">
                Book Site Visit to See the Location
              </a>
              <p className="text-center text-xs text-ink-muted mt-3">
                {PROJECT.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
