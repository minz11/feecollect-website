import { Badge } from "./Badge";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { ArrowRight } from "lucide-react";

type CTAVariant = "primary" | "secondary" | "ghost";

export interface CTABannerProps {
  title: string;
  subtitle?: string;
  actionText: string;
  actionOnClick: () => void;
  variant?: CTAVariant;
  badge?: string;
}

export const CTABanner = ({
  title,
  subtitle,
  actionText,
  actionOnClick,
  variant = "primary",
  badge,
}: CTABannerProps) => {
  const buttonVariant = variant === "secondary" ? "ghost" : variant;

  return (
    <div className="rounded-2xl border border-brand-neutral-200 bg-white p-6 md:p-8 shadow-sm">
      <Badge>{badge || "New"}</Badge>
      <h3 className="mt-3 text-xl font-bold text-brand-neutral-900">{title}</h3>
      {subtitle && <p className="mt-2 text-sm leading-relaxed text-brand-neutral-600">{subtitle}</p>}
      <Button variant={buttonVariant} onClick={actionOnClick} className="mt-5" rightIcon={<Icon aria-hidden="true"><ArrowRight className="h-4 w-4" /></Icon>}>
        {actionText}
      </Button>
    </div>
  );
};