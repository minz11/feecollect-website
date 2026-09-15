import { ChevronDown } from "lucide-react";

export const Accordion = ({ title, children, defaultOpen, panelId }: { title: string; children: React.ReactNode; defaultOpen?: boolean; panelId?: string }) => {
  return (
    <details className="group rounded-xl border border-brand-neutral-200 bg-white open:shadow-sm transition-shadow duration-200" open={defaultOpen}>
      <summary aria-controls={panelId} className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-semibold text-brand-neutral-900">{title}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-brand-neutral-500 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div id={panelId} className="border-t border-brand-neutral-200 px-5 py-4 text-sm leading-relaxed text-brand-neutral-600">{children}</div>
    </details>
  );
};