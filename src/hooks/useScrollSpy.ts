import { useState, useEffect, useCallback } from 'react';

type ScrollSpyOptions = {
  /** Section IDs to observe (without #) */
  sectionIds: string[];
  /** Offset from top for intersection (e.g., navbar height) */
  rootMargin?: string;
};

/**
 * Hook to detect which section is currently in view.
 * Returns the active section ID (without #).
 */
export function useScrollSpy({
  sectionIds,
  rootMargin = '-20% 0px -70% 0px',
}: ScrollSpyOptions): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find the entry that's intersecting with the highest ratio
      let bestEntry: IntersectionObserverEntry | null = null;
      let bestRatio = 0;

      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
          bestRatio = entry.intersectionRatio;
          bestEntry = entry;
        }
      }

      if (bestEntry) {
        const id = bestEntry.target.id;
        if (id && sectionIds.includes(id)) {
          setActiveId(id);
        }
      }
    },
    [sectionIds]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });

    // Observe all section elements
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [handleIntersection, sectionIds, rootMargin]);

  return activeId;
}