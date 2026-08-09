"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Section } from "@/components/ui/section";
import { filmPricingImages } from "@/lib/content/films";

export function FilmPricing() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.pricing;

  return (
    <Section id="film-pricing">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.55rem,3vw,2.25rem)] font-semibold tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
          <p className="mt-3 text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft sm:rounded-[2rem]">
            <MediaPlaceholder
              tone="film"
              src={filmPricingImages.left.src}
              alt={copy.leftAlt}
              aspectClassName="aspect-[4/5] sm:aspect-[3/4]"
            />
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft sm:rounded-[2rem]">
            <MediaPlaceholder
              tone="neutral"
              src={filmPricingImages.right.src}
              alt={copy.rightAlt}
              aspectClassName="aspect-[4/5] sm:aspect-[3/4]"
            />
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <Button href="/contact">{copy.cta}</Button>
        </div>
      </Container>
    </Section>
  );
}
