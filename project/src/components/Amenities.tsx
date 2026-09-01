import { AMENITIES } from '@/lib/content';
import { getIcon } from '@/lib/icons';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function Amenities() {
  const { ref, visible } = useReveal();
  return (
    <section id="amenities" className="py-16 md:py-24 bg-cloud-100">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="World-Class Amenities"
          title={<>16+ Premium Amenities for a <span className="text-gradient-royal">Life Well-Lived</span></>}
          subtitle="Every amenity is designed to elevate your everyday — from wellness to recreation to community."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5`}>
          {AMENITIES.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.name}
                className="premium-card p-5 md:p-6 flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-royal-50 to-cloud-200 flex items-center justify-center mb-4 group-hover:from-royal-500 group-hover:to-royal-600 transition-all duration-500 shadow-soft">
                  <Icon className="w-7 h-7 text-royal-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-sm md:text-base font-semibold text-ink leading-tight">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
