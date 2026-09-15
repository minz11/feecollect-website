type EventName = 'demo_requested' | 'tab_changed' | 'accordion_opened' | 'cta_clicked' | 'scroll_depth';

export function track(event: EventName, props?: Record<string, unknown>) {
  // Plausible / GA4 placeholder — uncomment when analytics enabled
  // if (typeof window !== 'undefined' && (window as unknown as { plausible?: (e: string, o?: { props?: Record<string, unknown> }) => void }).plausible) {
  //   (window as unknown as { plausible: (e: string, o?: { props?: Record<string, unknown> }) => void }).plausible(event, { props });
  // }
  if (import.meta.env.DEV) console.debug('[analytics]', event, props);
}
