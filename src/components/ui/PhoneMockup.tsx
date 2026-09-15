import type { FC } from 'react';

type Props = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  width?: number;
  height?: number;
};

export const PhoneMockup: FC<Props> = ({ src, alt, label, className, width, height }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ''}`}>
      <div className="relative w-64 lg:w-72 rounded-3xl border-8 border-brand-neutral-900 bg-brand-neutral-900 shadow-card overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-20 rounded-b-2xl bg-brand-neutral-900 z-10" aria-hidden="true" />
        <div className="aspect-[9/18.5] bg-white overflow-hidden rounded-2xl">
          {src ? (
            <img
              src={src}
              alt={alt ?? label ?? 'Mobile app screenshot'}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width={width}
              height={height}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-brand-neutral-50 p-6 text-center">
              <div className="rounded-2xl border border-dashed border-brand-neutral-300 bg-white px-4 py-6 w-full">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">{label ?? 'App preview'}</p>
                <p className="mt-1 text-xs text-brand-neutral-500">Coming soon</p>
              </div>
              <p className="text-[11px] text-brand-neutral-400">Real app screenshots coming soon</p>
            </div>
          )}
        </div>
      </div>
      {label && <p className="text-sm font-semibold text-brand-neutral-900">{label}</p>}
    </div>
  );
};