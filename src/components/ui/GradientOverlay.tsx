"use client";

import { useId } from "react";

/**
 * Gradient overlay for section backgrounds - uses primary green tones
 * to match Girassol design system
 * @param variant - "light" for light sections (metrics), "dark" for dark sections (mission, CTA)
 */
export default function GradientOverlay({ variant = "light" }: { variant?: "light" | "dark" }) {
  const id = useId();
  const gradId = `girassol-grad-${id.replace(/:/g, "")}`;
  return (
    <div className="gradient-overlay">
      <svg
        className={`gradient-bg w-full h-full object-cover ${variant === "dark" ? "opacity-30" : "opacity-20"}`}
        preserveAspectRatio="none"
        viewBox="0 0 437 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="218" y1="0.5" x2="218" y2="448" gradientUnits="userSpaceOnUse">
            <stop stopColor={variant === "dark" ? "var(--color-gradient-accent)" : "var(--color-gradient-primary)"} stopOpacity={variant === "dark" ? "0.15" : "0.4"} />
            <stop offset="1" stopColor={variant === "dark" ? "var(--color-gradient-accent)" : "var(--color-gradient-primary)"} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M203.62 64.511h-58.033v64.011h58.033m0-64.011V.5C149.749.5 98.088 24.108 59.995 66.125 21.903 108.142.5 165.125.5 224.546c0 59.421 21.403 116.404 59.495 158.421 38.093 42.017 89.754 65.625 143.625 65.625v-64.011h58.032M203.62 64.511v64.011m0-64.011h58.032m-58.032 64.011v64.012l-58.033.013v64.011h58.033v64.012h58.032M203.62 128.522h58.032m0 192.048v64.011m0-64.011h58.033m-58.033 0V128.522m0 256.059v64.011h58.033v-64.011m-58.033 0h58.033m0 0h58.032V320.57h-58.032m0 64.011V320.57m0 0v-64.025l58.032.013v-64.024m0 0h-58.032v-64.012h-58.033m116.065 64.012h58.033v-64.012h-58.033v64.012Z"
          stroke={`url(#${gradId})`}
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
