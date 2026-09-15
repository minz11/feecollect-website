import { cn } from "../../lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="status" aria-busy="true" aria-label="Loading" className={cn("animate-pulse rounded-xl bg-brand-neutral-100", className)} {...props} />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-brand-neutral-200 bg-white p-6">
      <Skeleton className="h-10 w-10 rounded-xl" />
      <Skeleton className="mt-4 h-5 w-32" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Skeleton className="mx-auto h-6 w-32 rounded-full" />
      <Skeleton className="mx-auto mt-4 h-8 w-96" />
      <Skeleton className="mx-auto mt-3 h-4 w-2/3" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <CardSkeleton /><CardSkeleton /><CardSkeleton />
      </div>
    </div>
  );
}
