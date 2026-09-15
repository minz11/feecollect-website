type StatVariant = "default" | "positive" | "negative" | "info";

export interface StatProps {
  number: string | number;
  label: string;
  variant?: StatVariant;
  className?: string;
}

export const Stat = ({ number, label, variant = "default", className }: StatProps) => {
  const variantStyles = {
    default: "text-brand-neutral-900",
    positive: "text-success",
    negative: "text-danger",
    info: "text-info",
  };

  return (
    <dl className={`flex flex-col ${className ?? ""}`}>
      <dt className="sr-only">{label}</dt>
      <dd className={`text-3xl font-bold tracking-tight ${variantStyles[variant]}`}>{number}</dd>
      <dd className="mt-1 text-sm font-medium text-brand-neutral-600">{label}</dd>
    </dl>
  );
};