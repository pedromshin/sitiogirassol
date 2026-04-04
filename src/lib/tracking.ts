/**
 * Lightweight event tracking for GA4, Meta Pixel, and Meta Conversions API.
 * Fires all platforms when available; no-ops gracefully if scripts haven't loaded.
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
  | "cta_click"
  | "date_selected"
  | "map_click"
  | "nearby_place_click"
  | "faq_open"
  | "gallery_filter"
  | "amenity_search";

interface EventParams {
  location?: string;
  [key: string]: string | number | boolean | undefined;
}

function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match?.[2];
}

function sendToCAPI(eventName: string, eventId: string, customData?: Record<string, unknown>): void {
  const payload = {
    events: [
      {
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        ...(customData ? { custom_data: customData } : {}),
      },
    ],
    fbc: getCookie("_fbc"),
    fbp: getCookie("_fbp"),
  };

  fetch("/api/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // Silent fail — pixel is the primary, CAPI is supplementary
  });
}

type FbEventConfig = { event: string; defaults: Record<string, string>; sendCAPI: boolean };

const fbEventMap: Record<TrackingEvent, FbEventConfig> = {
  whatsapp_click:     { event: "Contact",          defaults: { content_name: "Sítio Girassol" },               sendCAPI: true },
  airbnb_click:       { event: "Schedule",          defaults: { content_name: "Sítio Girassol — Reserva" },     sendCAPI: true },
  calendar_view:      { event: "ViewContent",       defaults: { content_name: "Sítio Girassol — Calendário" },  sendCAPI: true },
  cta_click:          { event: "Lead",              defaults: { content_name: "Sítio Girassol" },               sendCAPI: true },
  date_selected:      { event: "Search",            defaults: { content_name: "Sítio Girassol — Datas" },       sendCAPI: true },
  map_click:          { event: "FindLocation",      defaults: { content_name: "Sítio Girassol — Mapa" },        sendCAPI: false },
  nearby_place_click: { event: "FindLocation",      defaults: { content_name: "Sítio Girassol — Local" },       sendCAPI: false },
  faq_open:           { event: "ViewContent",       defaults: { content_type: "faq" },                          sendCAPI: false },
  gallery_filter:     { event: "CustomizeProduct",  defaults: { content_name: "Sítio Girassol — Galeria" },     sendCAPI: false },
  amenity_search:     { event: "Search",            defaults: { content_name: "Sítio Girassol — Amenities" },   sendCAPI: false },
};

export function trackEvent(event: TrackingEvent, params: EventParams = {}): void {
  const eventId = generateEventId();

  // GA4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }

  // Meta Pixel — map to standard events for ad optimization
  if (typeof window !== "undefined" && window.fbq) {
    const mapped = fbEventMap[event];
    const eventData = { ...mapped.defaults, ...params };

    // Pass event_id for deduplication with CAPI
    window.fbq("track", mapped.event, eventData, { eventID: eventId });

    // Mirror high-value events to Conversions API
    if (mapped.sendCAPI) {
      sendToCAPI(mapped.event, eventId, eventData);
    }
  }
}

/**
 * Track PageView via CAPI (called once after pixel fires PageView).
 */
export function trackPageViewCAPI(): void {
  const eventId = generateEventId();

  // Fire pixel PageView with event_id
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView", {}, { eventID: eventId });
  }

  sendToCAPI("PageView", eventId);
}
