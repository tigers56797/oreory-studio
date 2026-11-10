"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { ChevronIcon } from "@/components/tsumu/tsumu-icons";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuFaqKeys } from "@/lib/content/tsumu";

export function TsumuFaq() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.faq;

  return (
    <Section id="tsumu-faq" className="!pt-4 sm:!pt-6">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-10">
          <h2 className="text-[clamp(1.45rem,2.8vw,2rem)] font-semibold tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>

          <ul className="divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-soft">
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
      </Container>
    </Section>
  );
}
