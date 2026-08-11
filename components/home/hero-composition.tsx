"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import type { FeaturedContentConfig } from "@/lib/content/featured";
import { kodoMedia } from "@/lib/content/kodo";
import { mossMedia } from "@/lib/content/moss";

type FloatCardProps = {
  label: string;
  value: string;
  className?: string;
  delayClass?: string;
  compact?: boolean;
};

function FloatCard({
  label,
  value,
  className = "",
  delayClass = "",
  compact = false,
}: FloatCardProps) {
  return (
    <div
      className={[
        "hero-float-card border border-white/60 bg-white/55 shadow-[0_8px_24px_rgba(23,23,23,0.05)] backdrop-blur-md",
        compact
          ? "rounded-xl px-2.5 py-1.5 sm:rounded-[0.9rem] sm:px-3 sm:py-2"
          : "rounded-2xl px-3.5 py-2.5 sm:rounded-[1.25rem] sm:px-4 sm:py-3",
        delayClass,
        className,
      ].join(" ")}
    >
      <p
        className={[
          "font-medium tracking-wide text-foreground-muted",
          compact ? "text-[10px]" : "text-[11px]",
        ].join(" ")}
      >
        {label}
      </p>
      <p
        className={[
          "font-semibold tracking-tight text-foreground",
          compact ? "mt-0.5 text-[12px]" : "mt-0.5 text-sm",
        ].join(" ")}
      >
        {value}
      </p>
    </div>
  );
}

function AuroraWash({ tone }: { tone: FeaturedContentConfig["tone"] }) {
  if (tone === "moss") {
    return (
      <>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 h-[70%] w-[75%] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,181,255,0.42),transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[-10%] h-[55%] w-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(186,205,255,0.35),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[35%] right-[10%] h-[40%] w-[45%] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,214,180,0.32),transparent_70%)] blur-3xl"
        />
      </>
    );
  }

  if (tone === "kodo") {
    return (
      <>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-8 right-4 h-[65%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(183,212,188,0.45),transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-4 left-0 h-[50%] w-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,224,210,0.5),transparent_70%)] blur-3xl"
        />
      </>
    );
  }

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 h-[60%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,199,180,0.4),transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[50%] w-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(230,220,208,0.45),transparent_70%)] blur-3xl"
      />
    </>
  );
}

function MossComposition() {
  const { dictionary } = useLocale();
  const labels = dictionary.hero.floatLabels;

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[36rem] sm:h-[480px] lg:mx-0 lg:h-[560px] lg:max-w-none">
      <AuroraWash tone="moss" />

      {/* Soft orb accents */}
      <span
        aria-hidden
        className="hero-float-orb absolute top-[12%] right-[8%] hidden h-16 w-16 rounded-full border border-white/50 bg-white/30 shadow-soft backdrop-blur-sm sm:block"
      />
      <span
        aria-hidden
        className="hero-float-orb absolute bottom-[18%] left-[4%] h-10 w-10 rounded-full border border-white/40 bg-[rgba(196,181,255,0.25)] backdrop-blur-sm [animation-delay:1.2s]"
      />

      <div className="absolute top-1/2 left-1/2 z-20 w-[min(70%,280px)] -translate-x-1/2 -translate-y-1/2 sm:w-[300px] lg:w-[320px]">
        <div className="hero-float-mock relative mx-auto aspect-square w-full">
          <Image
            src={mossMedia.heroLogo}
            alt="MOSS"
            fill
            priority
            className="object-contain drop-shadow-[0_24px_48px_rgba(40,20,90,0.16)]"
            sizes="(max-width: 1024px) 70vw, 320px"
          />
        </div>
      </div>

      <FloatCard
        label={labels.ip.label}
        value={labels.ip.value}
        className="absolute top-[8%] left-[2%] z-30 hidden sm:block"
        delayClass="[animation-delay:0.2s]"
      />
      <FloatCard
        label={labels.planet.label}
        value={labels.planet.value}
        className="absolute top-[14%] right-[0%] z-30 sm:right-[2%]"
        delayClass="[animation-delay:0.8s]"
      />
      <FloatCard
        label={labels.anniversary.label}
        value={labels.anniversary.value}
        className="absolute bottom-[22%] left-[0%] z-30 hidden md:block"
        delayClass="[animation-delay:1.4s]"
      />
      <FloatCard
        label={labels.bottle.label}
        value={labels.bottle.value}
        className="absolute right-[2%] bottom-[12%] z-30 sm:bottom-[16%]"
        delayClass="[animation-delay:1.9s]"
      />
    </div>
  );
}

function KodoComposition() {
  const { dictionary } = useLocale();
  const labels = dictionary.hero.kodoLabels;

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[38rem] overflow-visible sm:h-[480px] lg:mx-0 lg:h-[540px] lg:max-w-none">
      <AuroraWash tone="kodo" />

      {/* Soft UI chip */}
      <div
        aria-hidden
        className="hero-float-card absolute top-[10%] right-[6%] z-10 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-white/45 shadow-[0_8px_20px_rgba(23,23,23,0.04)] backdrop-blur-md sm:flex [animation-delay:0.6s]"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#4c7c54]/70 text-[10px] font-semibold text-[#4c7c54]">
          25
        </span>
      </div>

      {/* Mascots — horizontal center row, staggered bounce */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-1 sm:px-3">
        <div className="flex w-full max-w-[34rem] items-end justify-center gap-1 sm:gap-2 lg:gap-3">
          {kodoMedia.mascots.map((mascot, index) => (
            <div
              key={mascot.src}
              className="hero-bounce relative aspect-square w-[23%] max-w-[160px] min-w-[72px]"
              style={{
                animationDelay: `${index * 0.7}s`,
                animationDuration: `${3.1 + index * 0.55}s`,
              }}
            >
              <Image
                src={mascot.src}
                alt={mascot.alt}
                fill
                className="object-contain drop-shadow-[0_18px_28px_rgba(30,50,35,0.14)]"
                sizes="160px"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>

      <FloatCard
        compact
        label={labels.status.label}
        value={labels.status.value}
        className="absolute top-[12%] left-[2%] z-40 hidden sm:block lg:left-[-2%]"
        delayClass="[animation-delay:0.25s]"
      />
      <FloatCard
        compact
        label={labels.focus.label}
        value={labels.focus.value}
        className="absolute top-[14%] right-[2%] z-40 sm:right-[4%] lg:right-[0%]"
        delayClass="[animation-delay:0.7s]"
      />
      <FloatCard
        compact
        label={labels.actions.label}
        value={labels.actions.value}
        className="absolute bottom-[10%] left-1/2 z-40 -translate-x-1/2"
        delayClass="[animation-delay:1.3s]"
      />
    </div>
  );
}

function FilmComposition({ image }: { image?: string }) {
  const { dictionary } = useLocale();
  const copy = dictionary.featured.items.film;

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[36rem] sm:h-[480px] lg:mx-0 lg:h-[560px] lg:max-w-none">
      <AuroraWash tone="film" />
      <div className="absolute top-1/2 left-1/2 z-20 w-[min(88%,420px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
        <div className="hero-float-mock relative aspect-[4/3]">
          {image ? (
            <Image
              src={image}
              alt={copy.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          ) : (
            <div className="absolute inset-0 bg-[#e6dfd6]" />
          )}
        </div>
      </div>
      <div className="hero-float-card absolute top-[12%] right-[4%] z-30 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-md">
        <p className="text-[11px] font-medium text-foreground-muted">{copy.title}</p>
        <p className="mt-0.5 text-sm font-semibold text-foreground">{copy.description}</p>
      </div>
    </div>
  );
}

type HeroCompositionProps = {
  slide: FeaturedContentConfig;
  active: boolean;
};

export function HeroComposition({ slide, active }: HeroCompositionProps) {
  return (
    <div
      className={[
        "absolute inset-0 transition-opacity duration-700 ease-[var(--ease-out)]",
        active ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!active}
    >
      {slide.tone === "moss" ? (
        <MossComposition />
      ) : slide.tone === "kodo" ? (
        <KodoComposition />
      ) : (
        <FilmComposition image={slide.image} />
      )}
    </div>
  );
}
