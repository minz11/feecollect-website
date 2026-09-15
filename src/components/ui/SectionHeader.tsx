import { Badge } from './Badge';

type SectionVariant = 'standard' | 'minimal' | 'cta';

type Props = {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  variant?: SectionVariant;
  trustIndicators?: React.ReactNode;
  className?: string;
};

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  align = 'center',
  variant = 'standard',
  trustIndicators,
  className,
}: Props) {
  const showBadge = variant !== 'minimal';
  const showDescription = variant !== 'minimal';

  return (
    <div className={`space-y-2 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'} ${className ?? ''}`}>
      {showBadge && badge && (
        <Badge>
          {badgeIcon}
          {badge}
        </Badge>
      )}
      <h2 className="text-section-title font-bold tracking-tight text-brand-neutral-900 leading-tight" style={{ textWrap: 'balance' }}>
        {title}
      </h2>
      {showDescription && description && <p className="text-base sm:text-body-l leading-relaxed text-brand-neutral-600 max-w-[65ch] mx-auto">{description}</p>}
      {variant === 'cta' && trustIndicators && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">{trustIndicators}</div>
      )}
    </div>
  );
}