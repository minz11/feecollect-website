import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variants: primary, secondary, ghost, danger, icon, dark */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "icon" | "dark";
  /** Sizes: sm (36px), md (44px), lg (52px) — all meet 44px touch target */
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  /** Optional icons — passed as React nodes from lucide-react */
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Button — reusable component with Tailwind + cn() composition.
 * Animation: CSS transitions only. Framer Motion reserved for complex sequences.
 */
export function Button({
  variant = "primary",
  size = "md",
  loading,
  leftIcon,
  rightIcon,
  fullWidth,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "h-9 px-3 text-sm"
      : size === "lg"
        ? "h-13 px-6 text-base"
        : "h-11 px-4 text-sm"; // md = 44px

  const variantClasses =
    variant === "primary"
      ? "bg-brand-yellow text-brand-neutral-900 hover:bg-brand-yellow-hover"
      : variant === "secondary"
        ? "border border-brand-neutral-200 bg-white text-brand-neutral-900 hover:bg-brand-neutral-50"
        : variant === "ghost"
          ? "text-brand-neutral-700 hover:bg-brand-neutral-100"
          : variant === "danger"
            ? "bg-danger text-white hover:bg-danger/90"
            : variant === "dark"
              ? "bg-brand-neutral-900 text-white hover:bg-brand-neutral-800"
              : variant === "icon"
                ? "p-2"
                : "";

  const loadingClasses = loading ? "relative overflow-hidden" : "";

  const spinner = loading ? (
    <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <svg className="h-5 w-5 animate-spin text-brand-neutral-600" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" fill="none" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
  ) : null;

  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/20 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] hover:shadow-sm",
        sizeClasses,
        variantClasses,
        loadingClasses,
        fullWidth ? "w-full" : "",
        className
      )}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {spinner}
      {!loading && leftIcon && <span className="flex flex-shrink-0 h-5 w-5">{leftIcon}</span>}
      {loading ? (
        <span className="sr-only">Loading...</span>
      ) : (
        <span className="line-clamp-1">{children}</span>
      )}
      {!loading && rightIcon && <span className="flex flex-shrink-0 h-5 w-5">{rightIcon}</span>}
    </button>
  );
}
