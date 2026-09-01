import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-cloud-100">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently Asked <span className="text-gradient-royal">Questions</span></>}
          subtitle="Everything you need to know about Piramal Vaikunth Phase 2."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto space-y-3`}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`premium-card overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-royal-200' : ''}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink text-sm md:text-base">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-royal-500 text-white' : 'bg-royal-50 text-royal-600'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-ink-muted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-ink-muted mb-4">Still have questions? We're here to help.</p>
          <a href="#final-cta" className="btn-primary">Talk to Our Experts</a>
        </div>
      </div>
    </section>
  );
}
