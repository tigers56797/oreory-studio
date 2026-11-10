"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { CheckCircleIcon } from "@/components/tsumu/tsumu-icons";
import { TsumuPhoneFrame } from "@/components/tsumu/tsumu-phone-frame";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { tsumuLinks, tsumuMedia } from "@/lib/content/tsumu";

export function TsumuHero() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.hero;

  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] bg-[radial-gradient(ellipse_at_78%_22%,var(--tsumu-glow),transparent_55%),radial-gradient(ellipse_at_12%_80%,rgba(251,226,160,0.22),transparent_45%)]"
      />

      <Container className="relative">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="animate-fade-up min-w-0 max-w-xl">
            <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground">
              <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
                <Image
                  src={tsumuMedia.logo}
                  alt=""
                  width={36}
                  height={36}
                  priority
                  className="h-7 w-7 object-contain"
                />
              </span>
              {copy.name}
            </span>

            <h1 className="product-hero-shine relative mt-6 text-[clamp(1.65rem,6.6vw,2.6rem)] font-semibold lg:text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.2] tracking-[-0.03em] text-foreground">
              <span className="relative z-0 whitespace-pre-line">
                {copy.headline}
              </span>
              <span
                aria-hidden
                className="product-hero-shine-layer absolute inset-0 whitespace-pre-line"
              >
                {copy.headline}
              </span>
            </h1>

            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {tsumuLinks.app ? (
                <Button
                  href={tsumuLinks.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!bg-[var(--tsumu-primary)] !text-white hover:!bg-[var(--tsumu-primary-hover)]"
                >
                  {copy.primaryCta}
                </Button>
              ) : (
                <Button
                  disabled
                  title={copy.primaryPending}
                  className="!cursor-not-allowed !bg-[var(--tsumu-primary)] !text-white opacity-60"
                >
                  {copy.primaryCta}
                </Button>
              )}
              <Button href={tsumuLinks.features} variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>

            {!tsumuLinks.app ? (
              <p className="mt-3 text-[12px] text-foreground-subtle">
                {copy.primaryPending}
              </p>
            ) : null}

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {copy.highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-[13px] text-foreground-muted"
                >
                  <CheckCircleIcon className="h-4 w-4 text-[var(--tsumu-primary)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-up relative min-w-0 px-2 pb-10 [animation-delay:80ms] sm:px-6 lg:px-0">
            <div className="relative aspect-[1448/1086] w-full overflow-hidden rounded-[2rem] border border-white/70 shadow-card sm:rounded-[2.5rem]">
              <Image
                src={tsumuMedia.heroWorld}
                alt={copy.worldAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 620px"
              />
            </div>

            <div className="soft-float absolute bottom-0 right-0 w-[27%] max-w-[170px] sm:right-2 lg:-right-4">
              <TsumuPhoneFrame
                src={tsumuMedia.heroScreen}
                alt="TSUMU App"
                pendingLabel={copy.screenPending}
                sizes="170px"
                priority
              />
            </div>

            <div className="absolute bottom-0 left-0 aspect-square w-[28%] max-w-[180px] sm:-left-2 lg:-left-6">
              <Image
                src={tsumuMedia.mascotExplorer}
                alt={copy.mascotAlt}
                fill
                className="object-contain drop-shadow-[0_16px_24px_rgba(40,60,40,0.18)]"
                sizes="180px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
