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

  // Meta Pixel — map to standard events where possible
  if (typeof window !== "undefined" && window.fbq) {
    const fbEventMap: Record<TrackingEvent, string> = {
      whatsapp_click: "Contact",
      airbnb_click: "Lead",
      calendar_view: "ViewContent",
      cta_click: "Lead",
    };
    window.fbq("track", fbEventMap[event], params);
  }
}
