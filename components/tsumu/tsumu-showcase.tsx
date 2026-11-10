"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { ChevronIcon } from "@/components/tsumu/tsumu-icons";
import { TsumuPhoneFrame } from "@/components/tsumu/tsumu-phone-frame";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuMedia, tsumuShowcaseKeys } from "@/lib/content/tsumu";

export function TsumuShowcase() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.showcase;
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  const controlClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition-[opacity,border-color] hover:border-border-strong disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <Section id="tsumu-showcase">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-center lg:gap-10">
          <div className="max-w-sm">
            <h2 className="whitespace-pre-line text-[clamp(1.5rem,2.7vw,2.15rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-foreground">
              {copy.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              {copy.description}
            </p>
            <div className="mt-6 hidden gap-2 sm:flex">
              <button
                type="button"
                className={controlClass}
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label={copy.prev}
              >
                <ChevronIcon direction="left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                className={controlClass}
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label={copy.next}
              >
                <ChevronIcon direction="right" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <ul
            ref={trackRef}
            onScroll={updateEdges}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {tsumuShowcaseKeys.map((key) => {
              const item = copy.items[key];
              return (
                <li
                  key={key}
                  className="w-[min(64vw,210px)] shrink-0 snap-start sm:w-[200px]"
                >
                  <article className="flex h-full flex-col items-center rounded-[1.5rem] border border-border bg-surface px-4 pt-4 pb-5 text-center shadow-soft">
                    <span className="rounded-full bg-[var(--tsumu-primary-soft)] px-3 py-1 text-[11px] font-medium text-[var(--tsumu-primary)]">
                      {item.title}
                    </span>
                    <TsumuPhoneFrame
                      src={tsumuMedia.showcase[key]}
                      alt={item.title}
                      pendingLabel={copy.pending}
                      sizes="200px"
                      className="mt-4 w-full max-w-[150px]"
                    />
                    <p className="mt-4 text-[13px] leading-relaxed text-foreground-muted">
                      {item.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
