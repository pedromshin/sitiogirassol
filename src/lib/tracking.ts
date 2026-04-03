/**
 * Lightweight event tracking for GA4 and Meta Pixel.
 * Fires both platforms when available; no-ops gracefully if scripts haven't loaded.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type TrackingEvent =
  | "whatsapp_click"
  | "airbnb_click"
  | "calendar_view"
  | "cta_click";

interface EventParams {
  location?: string;
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(event: TrackingEvent, params: EventParams = {}): void {
  // GA4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }

  // Meta Pixel — map to standard events for ad optimization
  if (typeof window !== "undefined" && window.fbq) {
    const fbEventMap: Record<TrackingEvent, { event: string; defaults: Record<string, string> }> = {
      whatsapp_click: { event: "Contact", defaults: { content_name: "Sítio Girassol" } },
      airbnb_click: { event: "Schedule", defaults: { content_name: "Sítio Girassol — Reserva" } },
      calendar_view: { event: "ViewContent", defaults: { content_name: "Sítio Girassol — Calendário" } },
      cta_click: { event: "Lead", defaults: { content_name: "Sítio Girassol" } },
    };
    const mapped = fbEventMap[event];
    window.fbq("track", mapped.event, { ...mapped.defaults, ...params });
  }
}
