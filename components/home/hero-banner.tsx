"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { heroBanners } from "@/lib/content/featured";
import type { FeaturedContentConfig } from "@/lib/content/featured";

const AUTO_MS = 5500;

export function HeroBanner() {
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

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card sm:rounded-[2rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]">
        {slides.map((slide, slideIndex) => (
          <BannerSlide
            key={slide.id}
            slide={slide}
            active={slideIndex === index}
            eyebrow={dictionary.featured.eyebrow}
            title={dictionary.featured.items[slide.id].title}
            description={dictionary.featured.items[slide.id].description}
            cta={dictionary.featured.items[slide.id].cta}
          />
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 p-4 sm:p-5">
          <div className="flex items-center gap-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                onClick={() => goTo(slideIndex)}
                className={[
                  "h-1.5 rounded-full transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]",
                  slideIndex === index
                    ? "w-7 bg-white"
                    : "w-1.5 bg-white/45 hover:bg-white/70",
                ].join(" ")}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 text-foreground shadow-soft backdrop-blur-sm transition-opacity hover:opacity-80"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 text-foreground shadow-soft backdrop-blur-sm transition-opacity hover:opacity-80"
            >
              →
            </button>
          </div>
        </div>
      ) : null}

      <span className="sr-only" aria-live="polite">
        {dictionary.featured.items[active.id].title}
      </span>
    </div>
  );
}

type BannerSlideProps = {
  slide: FeaturedContentConfig;
  active: boolean;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
};

const toneGradient: Record<FeaturedContentConfig["tone"], string> = {
  moss: "bg-[linear-gradient(135deg,#dfe8dc_0%,#c5d1bf_45%,#aebdb0_100%)]",
  kodo: "bg-[linear-gradient(135deg,#dde8df_0%,#c5d4c8_45%,#a9bdae_100%)]",
  film: "bg-[linear-gradient(135deg,#e6dfd6_0%,#d4c7b8_45%,#c0b0a0_100%)]",
};

function BannerSlide({
  slide,
  active,
  eyebrow,
  title,
  description,
  cta,
}: BannerSlideProps) {
  return (
    <div
      className={[
        "absolute inset-0 transition-opacity duration-700 ease-[var(--ease-out)]",
        active ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!active}
    >
      {slide.image ? (
        <Image
          src={slide.image}
          alt={title}
          fill
          priority={active}
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className={`absolute inset-0 ${toneGradient[slide.tone]}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.55),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,0,0,0.08),transparent_50%)]" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      <div className="absolute inset-0 flex items-end p-5 pb-16 sm:p-8 sm:pb-20 lg:p-10 lg:pb-24">
        <div className="max-w-xl text-white">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-[clamp(1.85rem,4vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:text-[0.95rem] sm:leading-7">
            {description}
          </p>
          <Link
            href={slide.href}
            tabIndex={active ? 0 : -1}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-85"
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
