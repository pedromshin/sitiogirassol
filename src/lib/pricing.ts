import { differenceInDays } from "date-fns";
import type { ListingConfig } from "@/data/listing.config";

export function calculateTotalPrice(
  config: ListingConfig["pricing"],
  startDate: Date,
  endDate: Date
): {
  nights: number;
  nightlyRate: number;
  subtotal: number;
  cleaningFee: number;
  serviceFee: number;
  total: number;
  discountApplied: "none" | "weekly" | "monthly";
} {
  const nights = differenceInDays(endDate, startDate) || 1;

  let nightlyRate = config.nightlyRate;
  let discountApplied: "none" | "weekly" | "monthly" = "none";

  if (nights >= 28 && config.monthlyDiscountPercent) {
    discountApplied = "monthly";
    const fullPrice = config.nightlyRate * nights;
    nightlyRate = (fullPrice * (1 - config.monthlyDiscountPercent / 100)) / nights;
  } else if (nights >= 7 && config.weeklyDiscountPercent) {
    discountApplied = "weekly";
    const fullPrice = config.nightlyRate * nights;
    nightlyRate = (fullPrice * (1 - config.weeklyDiscountPercent / 100)) / nights;
  }

  const subtotal = Math.round(nightlyRate * nights);
  const cleaningFee = config.cleaningFee ?? 0;
  const serviceFee = config.serviceFee ?? 0;
  const total = subtotal + cleaningFee + serviceFee;

  return {
    nights,
    nightlyRate: Math.round(nightlyRate),
    subtotal,
    cleaningFee,
    serviceFee,
    total,
    discountApplied,
  };
}
