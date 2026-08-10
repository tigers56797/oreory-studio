"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  kodoAudienceKeys,
  kodoEnterpriseKeys,
  kodoLinks,
} from "@/lib/content/kodo";

export function KodoTeams() {
  const { dictionary } = useLocale();
  const copy = dictionary.kodoPage.teams;

  return (
    <Section id="kodo-teams">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.55rem,3vw,2.25rem)] font-semibold tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
          <p className="mt-3 text-[0.95rem] leading-7 text-foreground-muted sm:text-base">
            {copy.description}
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5 sm:mt-10">
          {kodoAudienceKeys.map((key) => (
            <li
              key={key}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground-muted shadow-soft"
            >
              {copy.audiences[key]}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            href={kodoLinks.contact}
            className="!bg-[var(--kodo-primary)] !text-white hover:!bg-[var(--kodo-primary-hover)]"
          >
            {copy.consultCta}
          </Button>
          <Button href={kodoLinks.contact} variant="secondary">
            {copy.contactCta}
          </Button>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {kodoEnterpriseKeys.map((key) => {
            const item = copy.enterprise[key];
            return (
              <li key={key}>
                <article className="card-lift h-full rounded-[1.5rem] border border-border bg-surface px-5 py-6 shadow-soft sm:rounded-[1.75rem]">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--kodo-primary-muted)] bg-[var(--kodo-primary-soft)] text-[var(--kodo-primary)]">
                    {key === "enterprise" ? "⌂" : key === "integration" ? "⧉" : "↗"}
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
