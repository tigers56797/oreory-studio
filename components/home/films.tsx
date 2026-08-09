"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Section } from "@/components/ui/section";

export function Films() {
  const { dictionary } = useLocale();

  return (
    <Section id="films">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16">
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card sm:rounded-[2rem]">
            <MediaPlaceholder
              tone="film"
              alt={dictionary.films.title}
              aspectClassName="aspect-[16/11] sm:aspect-[16/10]"
            />
          </div>

          <div className="max-w-md lg:py-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
              {dictionary.films.title}
            </p>

            <h2 className="mt-4 whitespace-pre-line text-[clamp(1.55rem,2.8vw,2.15rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground">
              {dictionary.films.headline}
            </h2>

            <p className="mt-5 whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
              {dictionary.films.description}
            </p>

            <div className="mt-8">
              <Button href="/films" variant="text" className="text-[0.95rem]">
                {dictionary.films.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
