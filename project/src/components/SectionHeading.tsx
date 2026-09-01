import type { ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }: SectionHeadingProps) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${light ? 'text-gold-300' : 'text-gold-700'}`}>
          <span className="h-px w-8 bg-current opacity-60" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">{eyebrow}</span>
          <span className="h-px w-8 bg-current opacity-60" />
        </div>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-white/80' : 'text-ink-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
