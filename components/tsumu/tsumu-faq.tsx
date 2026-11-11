"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { ChevronIcon } from "@/components/tsumu/tsumu-icons";
import { tsumuFaqKeys } from "@/lib/content/tsumu";

export function TsumuFaq() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.faq;

  return (
    <div id="tsumu-faq" className="min-w-0">
      <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {copy.title}
      </h2>

      <ul className="mt-5 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-soft">
        {tsumuFaqKeys.map((key) => {
          const item = copy.items[key];
          return (
            <li key={key}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[0.95rem] font-medium text-foreground transition-colors hover:bg-[var(--tsumu-primary-soft)]/50 sm:px-6 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronIcon
                    direction="down"
                    className="h-4 w-4 shrink-0 text-foreground-subtle transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-7 text-foreground-muted sm:px-6">
                  {item.answer}
                </p>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
