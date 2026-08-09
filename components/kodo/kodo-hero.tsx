"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { KodoDeviceMock } from "@/components/kodo/kodo-device-mock";
import { kodoLinks, kodoMedia } from "@/lib/content/kodo";

export function KodoHero() {
  const { dictionary } = useLocale();
  const copy = dictionary.kodoPage.hero;

  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,var(--kodo-glow),transparent_55%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
          <div className="animate-fade-up max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--kodo-primary)] text-sm text-white">
                  ✦
                </span>
                {copy.name}
              </span>
              <span className="rounded-full bg-[var(--kodo-primary-soft)] px-3 py-1 text-[11px] font-medium text-[var(--kodo-primary)]">
                {copy.badge}
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
              {copy.headline}
            </h1>

            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href={kodoLinks.start}
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-[var(--kodo-primary)] !text-white hover:!bg-[var(--kodo-primary-hover)]"
              >
                {copy.primaryCta}
              </Button>
              <Button href={kodoLinks.features} variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>

            <p className="mt-7 text-[12px] leading-relaxed text-foreground-subtle">
              {copy.platforms}
            </p>
          </div>

          <div className="animate-fade-up relative flex justify-center [animation-delay:80ms] lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <KodoDeviceMock src={kodoMedia.heroDesktop} />
              <div className="absolute -right-1 -bottom-6 sm:right-4 sm:bottom-[-1.5rem]">
                <KodoDeviceMock variant="phone" src={kodoMedia.heroPhone} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
