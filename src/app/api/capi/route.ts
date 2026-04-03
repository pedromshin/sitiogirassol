import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const API_VERSION = "v21.0";

interface CAPIEvent {
  event_name: string;
  event_id: string;
  event_time: number;
  event_source_url: string;
  action_source: "website";
  user_data: {
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string;
    fbp?: string;
  };
  custom_data?: Record<string, unknown>;
}

interface RequestBody {
  events: ReadonlyArray<{
    event_name: string;
    event_id: string;
    event_source_url: string;
    custom_data?: Record<string, unknown>;
  }>;
  fbc?: string;
  fbp?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const body = (await req.json()) as RequestBody;
  const { events, fbc, fbp } = body;

  if (!Array.isArray(events) || events.length === 0) {
    return NextResponse.json({ error: "No events" }, { status: 400 });
  }

  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "";
  const userAgent = req.headers.get("user-agent") ?? "";

  const capiEvents: ReadonlyArray<CAPIEvent> = events.map((e) => ({
    event_name: e.event_name,
    event_id: e.event_id,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: e.event_source_url,
    action_source: "website" as const,
    user_data: {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
      ...(fbc ? { fbc } : {}),
      ...(fbp ? { fbp } : {}),
    },
    ...(e.custom_data ? { custom_data: e.custom_data } : {}),
  }));

  const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: capiEvents }),
  });

  const result = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: result }, { status: response.status });
  }

  return NextResponse.json({ success: true, events_received: result.events_received });
}
