"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => router.replace(pathname, { locale: code })}
          className={`rounded px-2 py-1 text-sm font-medium transition ${
            locale === code
              ? "bg-[#8ebea8] text-[#1a2f28]"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
