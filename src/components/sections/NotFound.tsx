import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { SearchX } from "lucide-react";

export function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-neutral-200 bg-brand-neutral-50">
          <Icon size="lg"><SearchX className="h-7 w-7" /></Icon>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-brand-neutral-900">Page not found</h1>
        <p className="mt-3 text-base leading-relaxed text-brand-neutral-600">
          The page you’re looking for doesn’t exist or was moved. Try searching or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="primary" onClick={() => (window.location.hash = "")}>Back to Home</Button>
          <Button variant="secondary" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Book a Demo</Button>
        </div>
      </div>
    </section>
  );
}
