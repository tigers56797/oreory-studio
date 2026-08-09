"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { mossLinks } from "@/lib/content/moss";

export function MossAnnouncement() {
  const { dictionary } = useLocale();
  const copy = dictionary.mossPage.announcement;

  return (
    <div className="border-y border-border bg-white/70">
      <Container>
        <div className="flex flex-col gap-3 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
          <p className="text-sm leading-relaxed text-foreground-muted">
            <span className="mr-2 font-semibold text-[var(--moss-primary)]">
              {copy.label}
            </span>
            {copy.text}
          </p>
          <a
            href={mossLinks.updates}
            className="shrink-0 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            {copy.cta}
          </a>
        </div>
      </Container>
    </div>
  );
}
