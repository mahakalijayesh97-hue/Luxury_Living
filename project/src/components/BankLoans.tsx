import { BANKS } from '@/lib/content';
import { getIcon } from '@/lib/icons';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';
import { Handshake, CheckCircle2 } from 'lucide-react';

export default function BankLoans() {
  const { ref, visible } = useReveal();
  return (
    <section id="bank-loans" className="py-16 md:py-24 bg-white">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Home Loan Assistance"
          title={<>Easy Home Loans from <span className="text-gradient-royal">Leading Banks</span></>}
          subtitle="We partner with India's most trusted banks to get you the best interest rates and fastest approvals."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Bank cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-10">
            {BANKS.map((bank, i) => {
              const Icon = getIcon(bank.icon);
              return (
                <div
                  key={bank.name}
                  className="premium-card p-6 flex flex-col items-center justify-center text-center group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-cloud-100 flex items-center justify-center mb-3 group-hover:bg-royal-50 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-royal-600" />
                  </div>
                  <span className="font-display text-lg text-ink font-bold">{bank.name}</span>
                  <span className="text-xs text-ink-muted mt-1">Approved Partner</span>
                </div>
              );
            })}
          </div>

          {/* Assistance banner */}
          <div className="rounded-3xl bg-gradient-to-r from-royal-500 to-royal-600 p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10" />
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="relative z-10 grid md:grid-cols-[1fr_auto] items-center gap-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl mb-2">Dedicated Loan Assistance</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                    Our team handles the entire loan process end-to-end — from documentation to
                    approval — so you can focus on your new home. Get pre-approved in 48 hours.
                  </p>
                </div>
              </div>
              <a href="#final-cta" className="bg-white text-royal-600 font-bold px-7 py-3.5 rounded-full hover:bg-cloud-100 transition-colors whitespace-nowrap flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Get Pre-Approved
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
