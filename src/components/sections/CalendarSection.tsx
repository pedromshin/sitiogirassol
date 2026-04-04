"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { listingConfig } from "@/data/listing.config";
import { trackEvent } from "@/lib/tracking";
import { addDays, differenceInDays, format } from "date-fns";

const MOBILE_BREAKPOINT = 768;

export default function CalendarSection() {
  const t = useTranslations("Calendar");
  const [isMobile, setIsMobile] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: "selection",
  });
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (listingConfig.calendar.airbnbIcalUrl) {
      fetch("/api/calendar/blocked")
        .then((res) => res.json())
        .then(({ dates }: { dates: string[] }) => {
          setDisabledDates(dates.map((d) => new Date(d)));
        })
        .catch(() => setDisabledDates([]));
    } else if (listingConfig.calendar.blockedDates?.length) {
      setDisabledDates(
        listingConfig.calendar.blockedDates.map((d) => new Date(d))
      );
    }
  }, []);

  // Patch react-date-range accessibility: add aria-labels to prev/next buttons and select elements
  useEffect(() => {
    const el = calendarRef.current;
    if (!el) return;
    const patch = () => {
      const prev = el.querySelector<HTMLButtonElement>(".rdrPprevButton");
      const next = el.querySelector<HTMLButtonElement>(".rdrNextButton");
      if (prev && !prev.getAttribute("aria-label")) prev.setAttribute("aria-label", "Mês anterior");
      if (next && !next.getAttribute("aria-label")) next.setAttribute("aria-label", "Próximo mês");
      el.querySelectorAll<HTMLSelectElement>("select").forEach((sel) => {
        if (!sel.getAttribute("aria-label")) {
          sel.setAttribute("aria-label", sel.options[sel.selectedIndex]?.text ?? "Selecionar");
        }
      });
    };
    patch();
    const observer = new MutationObserver(patch);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const nights = dateRange.startDate && dateRange.endDate
    ? differenceInDays(dateRange.endDate, dateRange.startDate)
    : 0;

  const formatPeriod = () => {
    if (dateRange.startDate && dateRange.endDate) {
      return `${format(dateRange.startDate, "d MMM")} — ${format(dateRange.endDate, "d MMM")}`;
    }
    return "";
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 sm:px-6 md:px-20 bg-forest-dark overflow-x-hidden"
      id="availability"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Copy + Legend */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display text-white leading-tight">
            {t("titleLine1")}
            <span className="italic text-accent-gold">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-md font-light leading-relaxed">
            {t("description")}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/70">
              <span className="w-2 h-2 rounded-full bg-accent-gold" />
              {t("reserved")}
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/70">
              <span className="w-2 h-2 rounded-full border border-white/20" />
              {t("available")}
            </div>
          </div>
        </div>

        {/* Right: Calendar + Pricing */}
        <div className="backdrop-blur-md p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden" style={{ backgroundColor: "var(--color-calendar-backdrop)" }}>
          <div ref={calendarRef} className="rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-forest-mid [&_.rdrCalendarWrapper]:!max-w-full">
            <DateRange
              ranges={[dateRange]}
              onChange={(r: RangeKeyDict) => {
                const sel = r.selection as Range;
                setDateRange(sel);
                if (sel.startDate && sel.endDate && sel.startDate.getTime() !== sel.endDate.getTime()) {
                  trackEvent("date_selected", {
                    nights: differenceInDays(sel.endDate, sel.startDate),
                    location: "calendar",
                  });
                }
              }}
              disabledDates={disabledDates}
              minDate={new Date()}
              rangeColors={["var(--color-accent-gold)"]}
              showDateDisplay={false}
              direction={isMobile ? "vertical" : "horizontal"}
              months={isMobile ? 1 : 2}
            />
          </div>

          <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs-caps text-white/70 uppercase font-black tracking-widest mb-1">
                  {t("selectedPeriod")}
                </p>
                <p className="text-lg font-display text-white">{formatPeriod()}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-white/70">
                <span>
                  {nights} {t("nights")}
                </span>
              </div>
              <hr className="border-t border-white/10" />
              <p className="text-sm text-white/70">
                {t("checkPricesOnAirbnb")}
              </p>
            </div>
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("airbnb_click", { location: "calendar" })}
              className="mt-6 block w-full text-center rounded-full py-4 font-bold transition shadow-lg bg-accent-gold text-forest-dark shadow-accent-gold"
            >
              {t("bookNow")}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
