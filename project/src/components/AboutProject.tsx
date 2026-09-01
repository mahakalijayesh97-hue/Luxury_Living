import { Check, Trees, Users, Building2 } from 'lucide-react';
import { ABOUT_IMAGE, LIFESTYLE } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

const ICON_MAP: Record<string, any> = {
  Trees,
  'Users ': Users,
  Users,
  Building2
};

export default function AboutProject() {
  const { ref, visible } = useReveal();
  
  const listItems = LIFESTYLE.filter((item: any) => item.icon && item.text);
  const descriptions = LIFESTYLE.filter((item: any) => item.desc).map((item: any) => item.desc);
  const floatingCard = LIFESTYLE.find((item: any) => item.FloatingCardPr);
  const aboutImageItem = LIFESTYLE.find((item: any) => item.ABOUT_IMAGE);
  
  const imageSrc = aboutImageItem?.ABOUT_IMAGE || ABOUT_IMAGE;
  const desc1 = descriptions[0] || "";
  const desc2 = descriptions[1] || "";
  const floatingPr = floatingCard?.FloatingCardPr || '80%';
  const floatingText = floatingCard?.FloatingCardText || 'Open Green Spaces across 32 acres';

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="section-pad max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative`}>
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg group">
              <img
                src={imageSrc}
                alt="Piramal Vaikunth Phase 2 landscaped green surroundings"
                className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
               width="800" height="600" />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900/20 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 glass-dark rounded-2xl p-5 shadow-premium-lg max-w-[200px]">
              <div className="font-display text-3xl text-royal-600 font-bold">{floatingPr}</div>
              <div className="text-sm text-ink-light mt-1">{floatingText}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="About The Project"
              title={<>A Lifestyle Designed for <span className="text-gradient-royal">Modern Luxury</span></>}
              center={false}
            />
            <p className="text-ink-light leading-relaxed mb-6 text-base md:text-lg">
              {desc1.split('.').join(' ')}
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              {desc2.split('.').join(' ')}
            </p>

            <div className="space-y-4">
              {listItems.map((item: any) => {
                const Icon = ICON_MAP[item.icon?.trim()] || Check;
                return (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-royal-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-royal-600" />
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-ink-light">{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#final-cta" className="btn-primary mt-8">
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
