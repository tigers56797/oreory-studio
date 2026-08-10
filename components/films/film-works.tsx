"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { filmPortfolioUrl } from "@/lib/content/films";

export function FilmWorks() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.works;
  const href = filmPortfolioUrl || "/contact";
  const isExternal = href.startsWith("http");

  return (
    <Section id="film-works">
      <Container>
        <div className="flex flex-col gap-6 rounded-[1.75rem] border border-border bg-surface px-6 py-10 shadow-soft card-lift sm:rounded-[2rem] sm:px-10 sm:py-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[clamp(1.55rem,3vw,2.25rem)] font-semibold tracking-[-0.025em] text-foreground">
              {copy.title}
            </h2>
            <p className="mt-3 text-[0.95rem] leading-7 text-foreground-muted sm:text-base">
              {copy.description}
            </p>
          </div>

          <Button
            href={href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {copy.cta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
