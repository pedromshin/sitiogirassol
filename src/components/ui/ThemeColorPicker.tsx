"use client";

import { useState } from "react";
import { themeColorEntries } from "@/lib/theme-colors";

type ColorEntry = { path: string; value: string };

type ThemeColorPickerProps = {
  /** Compact inline swatches, or full panel */
  variant?: "compact" | "panel";
  /** Override entries (default: all theme colors) */
  entries?: ColorEntry[];
  /** Callback when a color is selected (hex value) */
  onSelect?: (hex: string, path: string) => void;
};

export default function ThemeColorPicker({
  variant = "panel",
  entries = themeColorEntries,
  onSelect,
}: ThemeColorPickerProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleClick = (value: string, path: string) => {
    navigator.clipboard.writeText(value);
    setCopied(path);
    setTimeout(() => setCopied(null), 1200);
    onSelect?.(value, path);
  };

  const baseClass =
    variant === "compact"
      ? "flex flex-wrap gap-2"
      : "inline-flex flex-col gap-3 p-4 rounded-xl border border-primary/20 bg-surface";

  return (
    <div className={baseClass}>
      {entries.map(({ path, value }) => (
        <button
          key={path}
          type="button"
          onClick={() => handleClick(value, path)}
          className={`
            flex items-center gap-2 rounded-lg border border-primary/10 transition
            hover:border-primary/30 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50
            ${variant === "compact" ? "p-1.5" : "p-2 w-full text-left"}
          `}
          title={`Copy ${value}`}
        >
          <span
            className="shrink-0 rounded-md border border-black/10"
            style={{
              width: variant === "compact" ? 24 : 32,
              height: variant === "compact" ? 24 : 32,
              backgroundColor: value,
            }}
          />
          {variant === "panel" && (
            <span className="flex-1 min-w-0">
              <span className="font-mono text-sm text-text">{path}</span>
              <span className="ml-2 text-sm text-muted">{value}</span>
            </span>
          )}
          {copied === path && (
            <span className="text-xs text-accent font-medium">Copied!</span>
          )}
        </button>
      ))}
    </div>
  );
}
