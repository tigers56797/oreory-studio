"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteContact } from "@/lib/contact";

export function Collaboration() {
  const { dictionary } = useLocale();

  return (
    <Section id="collaboration">
      <Container>
        <div className="card-lift rounded-[1.75rem] border border-border bg-surface px-6 py-10 shadow-card sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-tight tracking-[-0.025em] text-foreground">
              {dictionary.collaboration.headline}
            </h2>

            <p className="mx-auto mt-5 max-w-xl whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
              {dictionary.collaboration.description}
            </p>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-y-2 text-sm text-foreground-muted sm:mt-9 sm:text-[0.95rem]">
              {dictionary.collaboration.points.map((point, index) => (
                <li key={point} className="inline-flex items-center">
                  {index > 0 ? (
                    <span aria-hidden className="mx-3 text-foreground/25 sm:mx-3.5">
                      ·
                    </span>
                  ) : null}
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 sm:mt-10">
              <Button href={siteContact.mailto} className="min-w-[10rem]">
                {dictionary.collaboration.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
