"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MossPhoneMock } from "@/components/moss/moss-phone-mock";
import { mossLinks, mossMedia } from "@/lib/content/moss";

export function MossHero() {
  const { dictionary } = useLocale();
  const copy = dictionary.mossPage;

  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,var(--moss-glow),transparent_55%)]"
      />

      <Container className="relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-[12px] text-foreground-subtle">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-foreground-muted">
                {copy.breadcrumb.home}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>{copy.breadcrumb.products}</li>
            <li aria-hidden>/</li>
            <li className="text-foreground-muted">{copy.breadcrumb.current}</li>
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="animate-fade-up max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--moss-primary-muted)] bg-white/80 px-3 py-1.5 text-[12px] font-medium text-[var(--moss-primary)] shadow-soft">
              <span
                aria-hidden
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--moss-primary)] text-[10px] text-white"
              >
                ✦
              </span>
              {copy.hero.badge}
            </div>

            <h1 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground">
              {copy.hero.headline}
            </h1>

            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
              {copy.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href={mossLinks.start}
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-[var(--moss-primary)] !text-white hover:!bg-[var(--moss-primary-hover)]"
              >
                {copy.hero.primaryCta}
              </Button>
              <Button href={mossLinks.features} variant="secondary">
                {copy.hero.secondaryCta}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[12px] text-foreground-muted">
              <span className="inline-flex items-center gap-1.5">
                <AppleGlyph />
                {copy.hero.platforms.ios}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <AndroidGlyph />
                {copy.hero.platforms.android}
              </span>
              <span className="text-foreground-subtle">{copy.hero.platforms.web}</span>
            </div>
          </div>

          <div className="animate-fade-up relative flex justify-center [animation-delay:80ms] lg:justify-end">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--moss-glow),transparent_70%)] blur-2xl"
            />
            <div className="relative flex items-end gap-[-40px]">
              <div className="relative z-10 translate-x-4 sm:translate-x-8">
                <MossPhoneMock src={mossMedia.heroPhone} alt="MOSS" />
              </div>
              <div className="absolute top-8 right-0 -z-0 hidden scale-90 opacity-50 blur-[1px] sm:block lg:right-4">
                <MossPhoneMock tone="dark" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden fill="currentColor">
      <path d="M12.2 8.3c0-1.7 1.4-2.5 1.5-2.6-.8-1.2-2.1-1.3-2.5-1.4-1.1-.1-2 .6-2.6.6-.6 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.8-1.2 2.2-.3 5.4.9 7.1.6.9 1.3 1.8 2.2 1.8.9 0 1.2-.6 2.3-.6s1.4.6 2.3.6c1 0 1.6-.9 2.2-1.7.7-1 .9-1.9.9-2 .0-.1-1.7-.7-1.7-3z" />
      <path d="M10.5 3.5c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.8 2.2.8.1 1.6-.4 2.2-1.1z" />
    </svg>
  );
}

function AndroidGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden fill="currentColor">
      <path d="M5.2 1.4 4.4.2c-.1-.1 0-.2.1-.2l1.1.8c.5-.2 1-.4 1.5-.4s1 .1 1.5.4L9.7 0c.1 0 .2.1.1.2L9 1.4c.9.5 1.5 1.4 1.6 2.5H3.6c.1-1.1.7-2 1.6-2.5zM5 3.1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm4.2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM2.8 6.2c-.5 0-.9.4-.9.9v4.2c0 .5.4.9.9.9h.4v2.1c0 .5.4.9.9.9s.9-.4.9-.9v-2.1h3.4v2.1c0 .5.4.9.9.9s.9-.4.9-.9v-2.1h.4c.5 0 .9-.4.9-.9V7.1c0-.5-.4-.9-.9-.9H2.8z" />
    </svg>
  );
}
