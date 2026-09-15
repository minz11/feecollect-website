import { cn } from '../../lib/utils';

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-brand-neutral-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-neutral-600',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
