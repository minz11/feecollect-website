import type { FC } from "react";
import { cn } from "../../lib/utils";

/**
 * Icon — wrapper for lucide-react components.
 * Ensures consistent sizing, stroke width, and color across the product.
 * Replaces direct <LucideIcon /> imports throughout the codebase.
 *
 * Usage:
 *   <Icon size="md" />       // 20px default
 *   <Icon size="lg" />       // 28px
 *   <Icon size="sm" />       // 16px
 *   <Icon />                 // default md (20px)
 */
export const Icon: FC<{
  size?: "sm" | "md" | "lg" | "xl";
  strokeWidth?: 1.5 | 2;
  className?: string;
  children: React.ReactNode;
}> = ({ size = "md", strokeWidth = 2, className, children }) => {
  const sizeMap = {
    sm: "h-4 w-4", // 16px
    md: "h-5 w-5 text-brand-neutral-700", // 20px default
    lg: "h-6 w-6", // 24px
    xl: "h-7 w-7", // 28px
  };

  const strokeClass = strokeWidth === 1.5 ? "stroke-[1.5]" : strokeWidth === 2 ? "stroke-2" : undefined;
  return (
    <span
      className={cn(
        "inline-block",
        sizeMap[size],
        strokeClass,
        className
      )}
      style={strokeWidth ? { strokeWidth } as React.CSSProperties : undefined}
    >
      {children}
    </span>
  );
};