import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ShieldCheck, Check } from 'lucide-react';
import { NAV_LINKS, PROJECT, SOCIAL, FOOTER_LINKS } from '@/lib/content';

const ICON_MAP: Record<string, any> = {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ShieldCheck,
  Check
};

export default function Footer() {
  return (
    <footer className="bg-cloud-100 pt-16 pb-8">
      <div className="section-pad max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center shadow-premium">
                <span className="font-display text-white text-lg font-bold">P</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-ink text-base font-bold">Piramal Vaikunth</div>
                <div className="text-[10px] text-gold-700 font-semibold uppercase tracking-widest">Phase 2</div>
              </div>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed mb-5">
              {/* Premium 2 & 3 BHK residences in Balkum, Thane West by Piramal Realty. Luxury living
              reimagined across 32 acres of green landscapes. */}
              {FOOTER_LINKS[0].desc}
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon, label, href }) => {
                const Icon = ICON_MAP[icon?.trim()] || Check;
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white border border-cloud-200 flex items-center justify-center text-ink-muted hover:bg-royal-500 hover:text-white hover:border-royal-500 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-ink mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-muted hover:text-royal-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-ink mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PROJECT.phoneRaw}`} className="flex items-start gap-3 text-sm text-ink-muted hover:text-royal-600 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-royal-500" />
                  {PROJECT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${PROJECT.email}`} className="flex items-start gap-3 text-sm text-ink-muted hover:text-royal-600 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-royal-500" />
                  {PROJECT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-royal-500" />
                {PROJECT.address}
              </li>
            </ul>
            <a
              href="#final-cta"
              className="btn-primary text-sm mt-5 py-2.5 px-5"
            >
              Book Free Site Visit
            </a>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-display text-lg text-ink mb-4">Find Us</h4>
            <div className="rounded-2xl overflow-hidden shadow-soft h-40">
              <iframe
                title="Piramal Vaikunth Phase 2 location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120647.8!2d72.95!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6303b1ba8b5%3A0x6c5e5b8b8b8b8b8b!2sBalkum%20Thane%20West!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* RERA Disclaimer */}
        <div className="rounded-2xl bg-white border border-cloud-200 p-5 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <ShieldCheck className="w-5 h-5 text-royal-500 shrink-0 mt-0.5" />
            <h5 className="font-semibold text-ink text-sm">MahaRERA Disclaimer</h5>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            {FOOTER_LINKS[1].desc
              ?.replace('{PROJECT.rera}', PROJECT.rera)
              ?.replace('{ PROJECT.builder }', PROJECT.builder)
              ?.replace('{ PROJECT.location }', PROJECT.location)
              ?.replace('{ PROJECT.possession }', PROJECT.possession)}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-cloud-200">
          <p className="text-xs text-ink-muted text-center md:text-left">
            © {new Date().getFullYear()} {PROJECT.builder}. {FOOTER_LINKS[2].BottomLeft}
          </p>
          <p className="text-xs text-ink-muted">
            {FOOTER_LINKS[3].BottomRight}
          </p>
        </div>
      </div>
    </footer>
  );
}
