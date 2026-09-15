import type { ContactFormValues } from "./validations";

type CrmResult = { ok: boolean; error?: string };

/**
 * Demo request → CRM abstraction.
 * Reads VITE_CRM_ENDPOINT and VITE_CRM_PROVIDER if set.
 * Falls back to local success (no backend) for preview/dev.
 * Replace endpoint with HubSpot/Zoho/custom webhook.
 */
export async function submitDemoRequest(data: ContactFormValues): Promise<CrmResult> {
  const endpoint = import.meta.env.VITE_CRM_ENDPOINT as string | undefined;

  // No endpoint configured → simulate success in dev/preview
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 900));
    if (import.meta.env.DEV) console.debug("[crm] demo payload (no endpoint)", data);
    return { ok: true };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        source: "feecollect.io/promo-website",
        timestamp: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, error: text || `Request failed (${res.status})` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error. Please try again." };
  }
}
