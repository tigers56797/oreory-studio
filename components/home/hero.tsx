"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroComposition } from "@/components/home/hero-composition";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { homeHeroSlides, homeLinks, homeProducts, type HomeProductId } from "@/lib/content/home";

const AUTO_MS = 7000;

const slideDot: Record<HomeProductId, string> = {
  moss: "bg-[#8b74ff]",
  kodo: "bg-[#f29a4a]",
  tsumu: "bg-[#4f9a6e]",
};

function HighlightedLine({ text, highlight }: { text: string; highlight: string }) {
  const index = highlight ? text.indexOf(highlight) : -1;
  if (index < 0) return <span className="block">{text}</span>;

  return (
    <span className="block">
      {text.slice(0, index)}
      <span className="bg-[linear-gradient(transparent_62%,rgba(255,206,120,0.55)_62%)] px-0.5">
        {highlight}
      </span>
      {text.slice(index + highlight.length)}
    </span>
  );
}

export function Hero() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.hero;
  const slides = homeHeroSlides;
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

  const activeId = slides[index] ?? slides[0];
  const activeCopy = dictionary.home.products.items[activeId];
  const activeHref = homeProducts.find((product) => product.id === activeId)?.href ?? "/";

  return (
    <section
      id="top"
      className="relative overflow-x-clip pt-[5.25rem] pb-8 sm:pt-24 sm:pb-12 lg:pt-28"
    >
      <div className="relative mx-auto w-full max-w-[80rem] px-4 sm:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 shadow-card sm:rounded-[2.5rem]">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 right-[8%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(196,181,255,0.45),transparent_70%)] blur-2xl" />
            <div className="absolute top-[30%] right-[30%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,206,160,0.4),transparent_70%)] blur-2xl" />
            <div className="absolute -bottom-20 right-[-4%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(170,220,185,0.42),transparent_70%)] blur-2xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,236,200,0.5),transparent_70%)] blur-2xl" />
            <span className="hero-float-orb absolute top-[14%] left-[46%] hidden h-6 w-6 rounded-full bg-[linear-gradient(135deg,#d9ccff,#fbd9c0)] opacity-80 lg:block" />
            <span className="hero-float-orb absolute bottom-[12%] left-[40%] hidden h-4 w-4 rounded-full bg-[linear-gradient(135deg,#c8ead4,#fff1c9)] opacity-90 [animation-delay:1.4s] lg:block" />
          </div>

          <div className="grid items-center gap-2 px-6 pt-10 pb-6 sm:px-10 sm:pt-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-4 lg:py-6 lg:pl-14 lg:pr-6">
            <div className="animate-fade-up relative z-10 max-w-xl lg:py-8">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-foreground-subtle">
                {copy.eyebrow}
              </p>

              <h1 className="mt-4 text-[clamp(1.9rem,4.6vw,3.35rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-foreground sm:mt-5">
                {copy.headline.split("\n").map((line) => (
                  <HighlightedLine key={line} text={line} highlight={copy.highlight} />
                ))}
              </h1>

              <p className="mt-5 max-w-[28rem] text-[0.95rem] leading-7 text-foreground-muted sm:mt-6 sm:text-base sm:leading-8">
                {copy.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={homeLinks.products} className="min-w-[9rem]">
                  {copy.primaryCta}
                </Button>
                <Button href={homeLinks.studio} variant="secondary">
                  {copy.secondaryCta}
                </Button>
              </div>

              <div
                className="mt-10 flex flex-wrap items-center justify-between gap-4"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="flex flex-wrap items-center gap-1.5">
                  {slides.map((id, slideIndex) => {
                    const current = slideIndex === index;
                    return (
                      <button
                        key={id}
                        type="button"
                        aria-current={current ? "true" : undefined}
                        onClick={() => goTo(slideIndex)}
                        className={[
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors duration-[var(--duration-base)]",
                          current
                            ? "bg-foreground text-white"
                            : "text-foreground-muted hover:bg-foreground/[0.05] hover:text-foreground",
                        ].join(" ")}
                      >
                        <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${slideDot[id]}`} />
                        {dictionary.home.products.items[id].name}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={copy.prev}
                    onClick={() => goTo(index - 1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition-colors hover:border-border-strong"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label={copy.next}
                    onClick={() => goTo(index + 1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition-colors hover:border-border-strong"
                  >
                    →
                  </button>
                </div>
              </div>

              <p className="mt-3 text-[12px] tracking-wide text-foreground-subtle">
                {activeCopy.tagline}
                <span className="mx-1.5 text-foreground/25">·</span>
                <Link
                  href={activeHref}
                  className="font-medium text-foreground-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {copy.visit} {activeCopy.name} →
                </Link>
              </p>
            </div>

            <div
              className="relative z-0 min-h-[400px] w-full sm:min-h-[460px] lg:min-h-[540px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {slides.map((id, slideIndex) => (
                <HeroComposition key={id} tone={id} active={slideIndex === index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {activeCopy.name}
      </span>
    </section>
  );
}
