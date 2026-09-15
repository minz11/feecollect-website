import { cn } from '../../lib/utils';

type CardVariant = 'default' | 'muted' | 'highlighted' | 'interactive' | 'elevated';
type CardPadding = 'compact' | 'default' | 'spacious';

export function Card({
  className,
  variant = 'default',
  padding = 'default',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: CardVariant; padding?: CardPadding }) {
  const variantClasses =
    variant === 'muted'
      ? 'bg-brand-neutral-50 border-brand-neutral-200'
      : variant === 'highlighted'
        ? 'bg-brand-yellow-light border-brand-yellow/20'
        : variant === 'interactive'
          ? 'bg-white border-brand-neutral-200 shadow-sm hover:-translate-y-1 hover:shadow-card hover:border-brand-neutral-300 transition-[transform,box-shadow,border-color] duration-200'
          : variant === 'elevated'
            ? 'bg-white border-brand-neutral-200 shadow-card'
            : 'bg-white border-brand-neutral-200 shadow-sm';

  const paddingClasses =
    padding === 'compact'
      ? 'p-4 md:p-5'
      : padding === 'spacious'
        ? 'p-6 md:p-8'
        : 'p-5 md:p-6';

  return <div className={cn('rounded-2xl border', variantClasses, paddingClasses, className)} {...props} />;
}