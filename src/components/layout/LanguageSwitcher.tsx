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
    <div className="flex items-center gap-3">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => router.replace(pathname, { locale: code })}
          aria-label={code === "en" ? "English" : code === "pt" ? "Português" : "Español"}
          aria-current={locale === code ? "true" : undefined}
          className={`text-xs font-medium transition ${
            locale === code ? "text-warm-gold font-bold" : "text-white/60 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
