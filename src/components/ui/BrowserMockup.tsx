import type { FC } from 'react';

type Props = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  kpi?: string;
  annotation?: string;
  width?: number;
  height?: number;
  isFirstTab?: boolean;
};

export const BrowserMockup: FC<Props> = ({ src, alt, label, className, kpi, annotation, width, height, isFirstTab }) => {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-brand-neutral-200 bg-white shadow-card transition-shadow duration-250 hover:shadow-card-hover ${className ?? ''}`}
    >
      <div className="flex items-center gap-1.5 border-b border-brand-neutral-700 bg-brand-neutral-900 px-4 py-3" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-traffic-red border border-brand-neutral-700" />
        <span className="h-3 w-3 rounded-full bg-traffic-yellow border border-brand-neutral-700" />
        <span className="h-3 w-3 rounded-full bg-traffic-green border border-brand-neutral-700" />
        {label && <span className="ml-3 text-xs font-medium text-brand-neutral-300 truncate">{label}</span>}
      </div>
      <div className="relative aspect-[16/10] lg:aspect-[16/9] min-h-[180px] lg:min-h-[320px] bg-brand-neutral-50 flex items-center justify-center overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={alt ?? label ?? 'Product screenshot'}
            className="h-full w-full object-cover"
            loading={isFirstTab ? "eager" : "lazy"}
            fetchPriority={isFirstTab ? "high" : undefined}
            decoding="async"
            width={width}
            height={height}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 p-6 text-center">
            <div className="rounded-xl border border-dashed border-brand-neutral-300 bg-white px-5 py-6 w-full max-w-sm">
              <p className="text-sm font-semibold text-brand-neutral-900">{label ?? 'Screenshot placeholder'}</p>
              <p className="mt-1 text-xs text-brand-neutral-400">Add real capture to /public/screenshots — {alt ?? 'module screenshot'}</p>
              {kpi && <p className="mt-3 inline-flex rounded-full bg-brand-yellow-light px-3 py-1 text-xs font-semibold text-brand-neutral-900">{kpi}</p>}
            </div>
          </div>
        )}
        {annotation && (
          <span className="absolute bottom-3 left-3 rounded-full bg-brand-neutral-900 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {annotation}
          </span>
        )}
        {kpi && (
          <span className="absolute top-3 right-3 rounded-full border border-brand-yellow/30 bg-brand-yellow-light px-3 py-1 text-xs font-semibold text-brand-neutral-900 shadow-sm">
            {kpi}
          </span>
        )}
      </div>
    </div>
  );
};