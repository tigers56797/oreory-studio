"use client";

import { useEffect, useState } from "react";
import { HeroComposition } from "@/components/home/hero-composition";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { heroBanners } from "@/lib/content/featured";

const AUTO_MS = 7000;

export function Hero() {
  const { dictionary } = useLocale();
  const slides = heroBanners;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  const active = slides[index] ?? slides[0];
  const slideCopy = dictionary.hero.slides[active.id];
  const featured = dictionary.featured.items[active.id];

  return (
    <section
      id="top"
      className="relative overflow-x-clip pt-20 pb-10 sm:pt-24 sm:pb-14 lg:min-h-[680px] lg:pt-[5.25rem] lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(196,181,255,0.14),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,rgba(232,214,180,0.12),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-6 xl:gap-4">
          {/* Left copy */}
          <div className="animate-fade-up relative z-10 max-w-xl lg:py-2">
            <div
              key={active.id}
              className="transition-opacity duration-500 ease-[var(--ease-out)]"
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
                {slideCopy.eyebrow}
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.35rem,5.1vw,3.9rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:mt-5">
                <span className="block">{slideCopy.headlineLine1}</span>
                {slideCopy.headlineLine2.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-5 max-w-[28rem] whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:mt-6 sm:text-base sm:leading-8">
                {slideCopy.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
                <Button href={slideCopy.primaryHref} className="min-w-[9.5rem]">
                  {slideCopy.primaryCta}
                </Button>
                <Button href="#studio" variant="secondary">
                  {dictionary.hero.secondaryCta}
                </Button>
              </div>
            </div>

            {/* Carousel controls */}
            <div
              className="mt-10 flex items-center justify-between gap-4 sm:mt-12"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex items-center gap-2">
                {slides.map((slide, slideIndex) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`${dictionary.featured.items[slide.id].title}`}
                    aria-current={slideIndex === index}
                    onClick={() => goTo(slideIndex)}
                    className={[
                      "h-2 rounded-full transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]",
                      slideIndex === index
                        ? "w-7 bg-foreground"
                        : "w-2 bg-foreground/20 hover:bg-foreground/40",
                    ].join(" ")}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => goTo(index - 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition-colors hover:border-border-strong"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => goTo(index + 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition-colors hover:border-border-strong"
                >
                  →
                </button>
              </div>
            </div>

            <p className="mt-3 text-[11px] tracking-wide text-foreground-subtle">
              {featured.title}
              <span className="mx-1.5 text-foreground/25">·</span>
              {featured.description}
            </p>
          </div>

          {/* Right creative composition — can break past content edge */}
          <div
            className="relative z-0 min-h-[420px] w-full overflow-visible sm:min-h-[480px] lg:min-h-[540px] lg:-mr-10 lg:w-[calc(100%+2.5rem)] xl:-mr-16 xl:w-[calc(100%+4rem)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((slide, slideIndex) => (
              <HeroComposition
                key={slide.id}
                slide={slide}
                active={slideIndex === index}
              />
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {featured.title}
      </span>
    </section>
  );
}
