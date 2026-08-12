"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { filmHeroMedia } from "@/lib/content/films";

type HeadlinePart = {
  text: string;
  hot: boolean;
  tone: number;
};

function splitEmphasis(text: string, words: string[]): HeadlinePart[] {
  const sorted = [...words].sort((a, b) => b.length - a.length);
  const parts: HeadlinePart[] = [];
  let index = 0;
  let tone = 0;

  while (index < text.length) {
    const rest = text.slice(index);
    const restLower = rest.toLowerCase();
    const match = sorted.find(
      (word) => rest.startsWith(word) || restLower.startsWith(word.toLowerCase()),
    );

    if (match) {
      parts.push({
        text: rest.slice(0, match.length),
        hot: true,
        tone: tone++ % 4,
      });
      index += match.length;
      continue;
    }

    let cursor = index + 1;
    while (cursor < text.length) {
      const next = text.slice(cursor);
      const nextLower = next.toLowerCase();
      if (
        sorted.some(
          (word) => next.startsWith(word) || nextLower.startsWith(word.toLowerCase()),
        )
      ) {
        break;
      }
      cursor += 1;
    }

    parts.push({ text: text.slice(index, cursor), hot: false, tone: 0 });
    index = cursor;
  }

  return parts;
}

function FlickerChars({
  text,
  lineOffset,
}: {
  text: string;
  lineOffset: number;
}) {
  return (
    <>
      {Array.from(text).map((char, index) => {
        const delay = lineOffset + index * 0.28 + (index % 4) * 0.12;
        const duration = 5.8 + (index % 5) * 0.7 + (index % 3) * 0.35;

        return (
          <span
            key={`${index}-${char}`}
            className="film-hero-char"
            style={
              {
                "--char-delay": `${delay}s`,
                "--char-duration": `${duration}s`,
              } as CSSProperties
            }
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </>
  );
}

function HeadlineLine({
  text,
  words,
  lineOffset = 0,
  flicker = true,
}: {
  text: string;
  words: string[];
  lineOffset?: number;
  flicker?: boolean;
}) {
  const parts = splitEmphasis(text, words);
  let offset = lineOffset;

  return (
    <span className="block">
      {parts.map((part, partIndex) => {
        const node = part.hot ? (
          <span
            key={`${partIndex}-${part.text}`}
            className={
              flicker
                ? `film-hero-emphasis film-hero-emphasis--${part.tone}`
                : undefined
            }
          >
            {flicker ? (
              <FlickerChars text={part.text} lineOffset={offset} />
            ) : (
              part.text
            )}
          </span>
        ) : flicker ? (
          <FlickerChars key={`${partIndex}-${part.text}`} text={part.text} lineOffset={offset} />
        ) : (
          <span key={`${partIndex}-${part.text}`}>{part.text}</span>
        );

        offset += Array.from(part.text).length * 0.08;
        return node;
      })}
    </span>
  );
}

export function FilmsHero() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.hero;
  const headlineLines = [copy.headlineLine1, ...copy.headlineLine2.split("\n")];
  const headline = headlineLines.join("");
  const words = copy.emphasis;

  return (
    <section id="top" className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          <div className="animate-fade-up max-w-[32rem]">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
              {copy.eyebrow}
            </p>

            <h1
              className="film-hero-headline hero-headline relative mt-5 font-display text-[clamp(2rem,4.2vw,3.35rem)] font-semibold leading-[1.14] tracking-[-0.03em] text-foreground sm:mt-6"
              aria-label={headline}
            >
              <span className="relative z-0" aria-hidden="true">
                {headlineLines.map((line, index) => (
                  <HeadlineLine
                    key={`base-${line}`}
                    text={line}
                    words={words}
                    lineOffset={index * 0.45}
                  />
                ))}
              </span>
              <span
                aria-hidden
                className="film-hero-shine-layer absolute inset-0 z-10"
              >
                {headlineLines.map((line, index) => (
                  <HeadlineLine
                    key={`shine-${line}`}
                    text={line}
                    words={words}
                    lineOffset={index * 0.45}
                    flicker={false}
                  />
                ))}
              </span>
            </h1>

            <p className="mt-5 max-w-[26rem] whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:mt-6 sm:text-base sm:leading-8">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Button href="#film-contact" className="min-w-[10rem]">
                {copy.primaryCta}
              </Button>
              <Button href="#film-works" variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="animate-fade-up w-full max-w-[40rem] justify-self-center lg:max-w-none lg:justify-self-end [animation-delay:80ms]">
            <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                {filmHeroMedia.image ? (
                  <Image
                    src={filmHeroMedia.image}
                    alt={copy.eyebrow}
                    fill
                    priority
                    className="film-hero-media object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div
                    className="film-hero-media absolute inset-0 bg-[#ddd6cd]"
                    role="img"
                    aria-label={copy.eyebrow}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,rgba(255,255,255,0.55),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_70%,rgba(90,70,50,0.18),transparent_52%)]" />
                    <div className="absolute inset-[18%] rounded-[40%] bg-[linear-gradient(145deg,rgba(255,255,255,0.28),rgba(160,140,120,0.18))] opacity-60 blur-[1px]" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/[0.12] to-transparent" />
                  </div>
                )}

                {filmHeroMedia.duration ? (
                  <span className="absolute right-4 bottom-4 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white sm:right-5 sm:bottom-5">
                    {filmHeroMedia.duration}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
