import { NextResponse } from "next/server";
import { fetchBlockedDates } from "@/lib/ical";
import { listingConfig } from "@/data/listing.config";

/**
 * Proxies iCal fetch server-side to avoid CORS when client fetches Airbnb calendar.
 */
export async function GET() {
  const url = listingConfig.calendar.airbnbIcalUrl;
  if (!url) {
    return NextResponse.json({ dates: [] });
  }
  try {
    const dates = await fetchBlockedDates(url);
    return NextResponse.json({
      dates: dates.map((d) => d.toISOString()),
    });
  } catch {
    return NextResponse.json({ dates: [] });
  }
}
