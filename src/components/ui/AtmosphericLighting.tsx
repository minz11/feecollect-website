import type { FC } from 'react';

type LightingVariant = 'hero' | 'transformation' | 'pricing' | 'modules' | 'showcase' | 'implementation' | 'faq' | 'contact';

const variantConfig: Record<LightingVariant, { left: string; right: string }> = {
  hero: {
    left: 'absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl',
    right: 'absolute right-0 top-0 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl',
  },
  transformation: {
    left: 'absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl',
    right: 'absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl',
  },
  pricing: {
    left: 'absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl',
    right: 'absolute left-0 top-10 h-64 w-64 rounded-full bg-yellow-100/40 blur-3xl',
  },
  modules: {
    left: 'absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl',
    right: 'absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl',
  },
  showcase: {
    left: 'absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl',
    right: 'absolute right-0 top-24 h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl',
  },
  implementation: {
    left: 'absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl',
    right: 'absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl',
  },
  faq: {
    left: 'absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl',
    right: 'absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl',
  },
  contact: {
    left: 'absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl',
    right: 'absolute right-0 top-24 h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl',
  },
};

export const AtmosphericLighting: FC<{ variant: LightingVariant }> = ({ variant }) => {
  const { left, right } = variantConfig[variant];

  return (
    <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
      <div className={left} />
      <div className={right} />
    </div>
  );
};