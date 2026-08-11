"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  kodoLinks,
  kodoMedia,
  kodoRoadmapKeys,
  kodoUpdateIds,
} from "@/lib/content/kodo";
import { KodoDeviceMock } from "@/components/kodo/kodo-device-mock";

export function KodoUpdates() {
  const { dictionary } = useLocale();
  const copy = dictionary.kodoPage.updates;
  const featured = copy.items.focus;

  return (
    <Section id="kodo-updates" className="!pt-4 sm:!pt-6">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft sm:rounded-[2rem] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {copy.title}
              </h2>
              <a
                href={kodoLinks.updates}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {copy.viewAll}
              </a>
            </div>

            <article className="mt-6 overflow-hidden rounded-[1.35rem] border border-[var(--kodo-primary-muted)] bg-[var(--kodo-primary-soft)]">
              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_120px] sm:items-center">
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {featured.version}
                    </h3>
                    <span className="text-[12px] text-foreground-subtle">
                      {featured.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {featured.summary}
                  </p>
                </div>
                <div className="mx-auto w-[110px]">
                  <KodoDeviceMock
                    variant="phone"
                    src={kodoMedia.updateFeatured}
                    alt="Kodo 專注模式"
                    className="!w-full"
                  />
                </div>
              </div>
            </article>

            <ul className="mt-4 divide-y divide-border border-t border-border">
              {kodoUpdateIds.slice(1).map((id) => {
                const item = copy.items[id];
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

          <div className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft sm:rounded-[2rem] sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {copy.roadmapTitle}
            </h2>

            <ol className="relative mt-8 space-y-0 border-l border-[var(--kodo-primary-muted)] pl-6">
              {kodoRoadmapKeys.map((key) => {
                const item = copy.roadmap[key];
                return (
                  <li key={key} className="relative pb-8 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute top-1.5 -left-[1.9rem] h-2.5 w-2.5 rounded-full border border-[var(--kodo-primary)] bg-[var(--kodo-primary-soft)]"
                    />
                    <p className="text-[12px] font-medium tracking-[0.12em] text-[var(--kodo-primary)]">
                      {item.quarter}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
