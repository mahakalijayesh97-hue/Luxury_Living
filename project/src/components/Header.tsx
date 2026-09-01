import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PROJECT } from '@/lib/content';
import { NAV_LINKS } from '@/lib/content';
import { useScrollPosition } from '@/lib/hooks';

// const NAV_LINKS = [
//   { label: 'Overview', href: '#highlights' },
//   { label: 'Pricing', href: '#pricing' },
//   { label: 'Amenities', href: '#amenities' },
//   { label: 'Floor Plans', href: '#floor-plans' },
//   { label: 'Gallery', href: '#gallery' },
//   { label: 'Location', href: '#location' },
//   { label: 'FAQ', href: '#faq' },
// ];

export default function Header() {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="section-pad max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center shadow-premium">
            <span className="font-display text-white text-lg font-bold">P</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-ink text-base font-bold">Piramal Vaikunth</div>
            <div className="text-[10px] text-gold-700 font-semibold uppercase tracking-widest">Phase 2</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light hover:text-royal-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PROJECT.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-royal-600 hover:text-royal-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PROJECT.phone}
          </a>
          <a href="#final-cta" className="btn-primary text-sm py-2.5 px-5">
            Book Site Visit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-dark mx-4 mt-2 rounded-2xl shadow-premium-lg p-5 animate-slide-down">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3 px-3 rounded-xl text-ink-light hover:bg-royal-50 hover:text-royal-600 transition-colors"
              >
                {link.label}
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-cloud-200 flex flex-col gap-3">
            <a href={`tel:${PROJECT.phoneRaw}`} className="btn-outline text-sm">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a href="#final-cta" onClick={() => setOpen(false)} className="btn-primary text-sm">
              Book Free Site Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
