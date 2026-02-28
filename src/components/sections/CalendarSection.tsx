"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { listingConfig } from "@/data/listing.config";
import { calculateTotalPrice } from "@/lib/pricing";
import { addDays } from "date-fns";

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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 bg-accent-light/20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-8 text-center"
        >
          {t("title")}
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div className="rounded-2xl overflow-hidden border border-primary-light/20 bg-white shadow-sm">
            <DateRange
              ranges={[dateRange]}
              onChange={(r: RangeKeyDict) =>
                setDateRange(r.selection as Range)
              }
              disabledDates={disabledDates}
              minDate={new Date()}
              rangeColors={["#1c3b33"]}
              showDateDisplay={false}
              direction="horizontal"
            />
          </div>

          <div className="w-full lg:w-80 rounded-2xl border border-primary-light/20 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between text-text-muted">
                <span>R$ {listingConfig.pricing.nightlyRate} x {price.nights} {t("nights")}</span>
                <span>R$ {price.subtotal}</span>
              </div>
              {price.discountApplied !== "none" && (
                <div className="text-accent text-sm">
                  {price.discountApplied === "weekly" && t("weeklyDiscount")}
                  {price.discountApplied === "monthly" && t("monthlyDiscount")}
                </div>
              )}
              {listingConfig.pricing.cleaningFee ? (
                <div className="flex justify-between text-text-muted">
                  <span>Cleaning fee</span>
                  <span>R$ {listingConfig.pricing.cleaningFee}</span>
                </div>
              ) : null}
              {listingConfig.pricing.serviceFee ? (
                <div className="flex justify-between text-text-muted">
                  <span>Service fee</span>
                  <span>R$ {listingConfig.pricing.serviceFee}</span>
                </div>
              ) : null}
              <hr className="border-primary-light/20" />
              <div className="flex justify-between font-bold text-lg">
                <span>{t("total")}</span>
                <span>R$ {price.total}</span>
              </div>
            </div>
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center rounded-xl bg-primary py-4 text-white font-semibold hover:bg-primary-mid transition"
            >
              {t("bookNow")}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
