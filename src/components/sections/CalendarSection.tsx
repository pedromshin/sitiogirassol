"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { listingConfig } from "@/data/listing.config";
import { calculateTotalPrice } from "@/lib/pricing";
import { addDays, format } from "date-fns";

export default function CalendarSection() {
  const t = useTranslations("Calendar");
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: "selection",
  });
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  useEffect(() => {
    if (listingConfig.calendar.airbnbIcalUrl) {
      import("@/lib/ical").then(({ fetchBlockedDates }) => {
        fetchBlockedDates(listingConfig.calendar.airbnbIcalUrl!).then(setDisabledDates);
      });
    } else if (listingConfig.calendar.blockedDates?.length) {
      setDisabledDates(
        listingConfig.calendar.blockedDates.map((d) => new Date(d))
      );
    }
  }, []);

  const price = calculateTotalPrice(
    listingConfig.pricing,
    dateRange.startDate!,
    dateRange.endDate!
  );

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
      className="py-12 px-6 md:px-20"
      style={{ backgroundColor: "#141E19" }}
      id="availability"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy + Legend */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-display text-white leading-tight">
            {t("titleLine1")}
            <span className="italic" style={{ color: "#d4af37" }}>
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-md font-light leading-relaxed">
            {t("description")}
          </p>
          <div className="flex gap-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/40">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#d4af37" }}
              />
              {t("reserved")}
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/40">
              <span className="w-2 h-2 rounded-full border border-white/20" />
              {t("available")}
            </div>
          </div>
        </div>

        {/* Right: Calendar + Pricing */}
        <div className="backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl" style={{ backgroundColor: "rgba(26, 38, 32, 0.5)" }}>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "#1A2620" }}>
            <DateRange
              ranges={[dateRange]}
              onChange={(r: RangeKeyDict) =>
                setDateRange(r.selection as Range)
              }
              disabledDates={disabledDates}
              minDate={new Date()}
              rangeColors={["#d4af37"]}
              showDateDisplay={false}
              direction="horizontal"
            />
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">
                  {t("selectedPeriod")}
                </p>
                <p className="text-lg font-display text-white">{formatPeriod()}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-white/60">
                <span>
                  R$ {listingConfig.pricing.nightlyRate} x {price.nights} {t("nights")}
                </span>
                <span>R$ {price.subtotal}</span>
              </div>
              {price.discountApplied !== "none" && (
                <div className="text-sm" style={{ color: "#d4af37" }}>
                  {price.discountApplied === "weekly" && t("weeklyDiscount")}
                  {price.discountApplied === "monthly" && t("monthlyDiscount")}
                </div>
              )}
              <hr className="border-t border-white/10" />
              <div className="flex justify-between font-bold text-lg text-white">
                <span>{t("total")}</span>
                <span>R$ {price.total}</span>
              </div>
            </div>
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center rounded-full py-4 font-bold transition shadow-lg"
              style={{
                backgroundColor: "#d4af37",
                color: "#141E19",
                boxShadow: "0 10px 15px -3px rgba(212, 175, 55, 0.2)",
              }}
            >
              {t("bookNow")}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
