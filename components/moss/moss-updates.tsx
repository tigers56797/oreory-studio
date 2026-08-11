"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MossPhoneMock } from "@/components/moss/moss-phone-mock";
import {
  mossLinks,
  mossMedia,
  mossPartnerKeys,
  mossUpdateIds,
} from "@/lib/content/moss";

export function MossUpdates() {
  const { dictionary } = useLocale();
  const updates = dictionary.mossPage.updates;
  const partnership = dictionary.mossPage.partnership;
  const latest = updates.items.v2;

  return (
    <Section id="moss-updates">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-6">
          <div
            id="moss-partnership-left"
            className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft sm:rounded-[2rem] sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {updates.title}
              </h2>
              <a
                href={mossLinks.updates}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {updates.viewAll}
              </a>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
              <article className="rounded-[1.35rem] border border-[var(--moss-primary-muted)] bg-[var(--moss-primary-soft)] p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-base font-semibold text-foreground">
                    {latest.version}
                  </p>
                  <p className="text-[12px] text-foreground-subtle">{latest.date}</p>
                </div>
                <p className="mt-2 text-sm text-foreground-muted">{latest.summary}</p>
                <ul className="mt-4 space-y-2">
                  {latest.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--moss-primary)]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>

              <div className="mx-auto w-[168px] sm:w-[190px]">
                <MossPhoneMock
                  src={mossMedia.updatesPhone}
                  alt="MOSS 我的票券"
                  className="!w-full"
                />
              </div>
            </div>

            <ul className="mt-5 divide-y divide-border border-t border-border">
              {mossUpdateIds.slice(1).map((id) => {
                const item = updates.items[id];
                return (
                  <li
                    key={id}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.version}
                      </p>
                      <p className="mt-0.5 text-sm text-foreground-muted">
                        {item.summary}
                      </p>
                    </div>
                    <span className="shrink-0 text-[12px] text-foreground-subtle">
                      {item.date}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            id="moss-partnership"
            className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft sm:rounded-[2rem] sm:p-8"
          >
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {partnership.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {partnership.description}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {mossPartnerKeys.map((key) => {
                const item = partnership.items[key];
                return (
                  <li
                    key={key}
                    className="rounded-[1.25rem] border border-border bg-background px-4 py-4"
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="secondary">
                {partnership.consultCta}
              </Button>
              <Button href="/contact" variant="secondary">
                {partnership.businessCta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
