import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';

type Props = {
  href: string;
  label: string;
};

export const SectionTransition: FC<Props> = ({ href, label }) => (
  <div className="w-full max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-center gap-3 py-6" aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-neutral-200" />
      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-neutral-200" />
    </div>
    <div className="flex justify-center -mt-3 mb-3">
      <a
        href={href}
        className="group inline-flex items-center gap-1.5 py-2 px-3 text-xs font-semibold text-brand-neutral-400 hover:text-brand-neutral-900 transition-colors"
      >
        {label}
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  </div>
);
