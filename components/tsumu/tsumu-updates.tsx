"use client";

import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuReleases, type TsumuRelease } from "@/lib/content/tsumu";

const COLLAPSED_COUNT = 3;

function ReleaseDetails({ release }: { release: TsumuRelease }) {
  const { dictionary } = useLocale();
  const labels = dictionary.tsumuPage.updates.labels;
  const groups = (["added", "improved", "fixed"] as const).filter(
    (key) => release[key]?.length,
  );

  if (!groups.length) {
    return release.summary ? (
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
        {release.summary}
      </p>
    ) : null;
  }

  return (
    <dl className="mt-3 space-y-2.5">
      {groups.map((key) => (
        <div key={key} className="flex gap-3">
          <dt className="mt-0.5 shrink-0 rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-medium text-[var(--tsumu-primary)]">
            {labels[key]}
          </dt>
          <dd className="min-w-0 space-y-1 text-sm leading-relaxed text-foreground-muted">
            {release[key]?.map((line) => <p key={line}>{line}</p>)}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ReleaseHeading({ release }: { release: TsumuRelease }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 className="flex min-w-0 items-center gap-2 text-[0.95rem] font-semibold text-foreground">
        {release.version ? (
          <span className="shrink-0 text-foreground-subtle">v{release.version}</span>
        ) : null}
        <span className="min-w-0">{release.title}</span>
      </h3>
      <time dateTime={release.date} className="shrink-0 text-[12px] text-foreground-subtle">
        {release.date.replaceAll("-", ".")}
      </time>
    </div>
  );
}

export function TsumuUpdates() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.updates;
  const [expanded, setExpanded] = useState(false);
  const [latest, ...rest] = tsumuReleases;
  const visibleRest = expanded ? rest : rest.slice(0, COLLAPSED_COUNT - 1);
  const canExpand = tsumuReleases.length > COLLAPSED_COUNT;

  return (
    <Section id="tsumu-updates">
      <Container>
        <div className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft sm:rounded-[2rem] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {copy.title}
            </h2>
            {canExpand ? (
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {expanded ? copy.collapse : copy.viewAll}
              </button>
            ) : null}
          </div>

          {latest ? (
            <>
              <article className="mt-6 rounded-[1.35rem] border border-[var(--tsumu-primary-muted)] bg-[var(--tsumu-primary-soft)] p-5">
                <span className="mb-2 inline-flex rounded-full bg-[var(--tsumu-primary)] px-2.5 py-0.5 text-[11px] font-medium text-white">
                  {copy.latest}
                </span>
                <ReleaseHeading release={latest} />
                <ReleaseDetails release={latest} />
              </article>

              {visibleRest.length ? (
                <ul className="mt-4 divide-y divide-border border-t border-border">
                  {visibleRest.map((release) => (
                    <li key={`${release.date}-${release.title}`} className="py-4">
                      <ReleaseHeading release={release} />
                      {expanded ? <ReleaseDetails release={release} /> : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          ) : (
            <p className="mt-6 rounded-[1.35rem] border border-dashed border-border px-5 py-8 text-center text-sm text-foreground-subtle">
              {copy.empty}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
