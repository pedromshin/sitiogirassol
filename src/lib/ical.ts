/**
 * Fetch and parse iCal from Airbnb to get blocked dates.
 * Add airbnbIcalUrl to listing.config.ts calendar section.
 */

export async function fetchBlockedDates(icalUrl: string): Promise<Date[]> {
  try {
    const res = await fetch(icalUrl, { next: { revalidate: 3600 } });
    const text = await res.text();
    return parseIcalBlockedDates(text);
  } catch {
    return [];
  }
}

function parseIcalBlockedDates(icalContent: string): Date[] {
  const blocked: Date[] = [];
  const lines = icalContent.split(/\r?\n/);
  let inEvent = false;
  let dtStart = "";
  let dtEnd = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("BEGIN:VEVENT")) {
      inEvent = true;
      dtStart = "";
      dtEnd = "";
    } else if (line.startsWith("END:VEVENT")) {
      inEvent = false;
      if (dtStart && dtEnd) {
        const start = parseIcalDate(dtStart);
        const end = parseIcalDate(dtEnd);
        if (start && end) {
          for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
            blocked.push(new Date(d));
          }
        }
      }
    } else if (inEvent) {
      if (line.startsWith("DTSTART")) {
        dtStart = line.replace("DTSTART:", "").replace("DTSTART;VALUE=DATE:", "").trim().slice(0, 8);
      } else if (line.startsWith("DTEND")) {
        dtEnd = line.replace("DTEND:", "").replace("DTEND;VALUE=DATE:", "").trim().slice(0, 8);
      }
    }
  }

  return blocked;
}

function parseIcalDate(str: string): Date | null {
  if (str.length >= 8) {
    const y = parseInt(str.slice(0, 4), 10);
    const m = parseInt(str.slice(4, 6), 10) - 1;
    const d = parseInt(str.slice(6, 8), 10);
    const date = new Date(y, m, d);
    return isNaN(date.getTime()) ? null : date;
  }
  return null;
}
