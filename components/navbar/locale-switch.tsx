"use client";

import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/lib/i18n";

export function LocaleSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale, dictionary } = useLocale();

  const options: { value: Locale; label: string }[] = [
    { value: "zh-TW", label: dictionary.locale.zh },
    { value: "en", label: dictionary.locale.en },
  ];

  return (
    <div
      className={`inline-flex items-center gap-1 text-[13px] tracking-wide text-foreground-muted ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((option, index) => {
        const active = locale === option.value;
        return (
          <span key={option.value} className="inline-flex items-center gap-1">
            {index > 0 ? (
              <span className="text-foreground-subtle/70" aria-hidden>
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLocale(option.value)}
              className={[
                "rounded-full px-1.5 py-0.5 transition-colors duration-[var(--duration-fast)]",
                active
                  ? "text-foreground"
                  : "text-foreground-subtle hover:text-foreground-muted",
              ].join(" ")}
              aria-pressed={active}
            >
              {option.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
