"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FilmsHero() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.hero;

  return (
    <section id="top" className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <div className="animate-fade-up max-w-[34rem] pb-1 lg:pb-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
              {copy.eyebrow}
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground sm:mt-6">
              <span className="block">{copy.headlineLine1}</span>
              <span className="block">{copy.headlineLine2}</span>
            </h1>

            <p className="mt-5 max-w-[28rem] whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:mt-6 sm:text-base sm:leading-8">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Button href="#film-contact" className="min-w-[10rem]">
                {copy.primaryCta}
              </Button>
              <Button href="#film-works" variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="animate-fade-up w-full overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card [animation-delay:80ms]">
            <Image
              src="/images/video/video-01.png"
              alt={copy.eyebrow}
              width={1254}
              height={1254}
              priority
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
