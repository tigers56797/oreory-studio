"use client";

import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "@/components/home/section-heading";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  homeProducts,
  homeTestimonials,
  type HomeProductId,
} from "@/lib/content/home";

const tones: Record<HomeProductId, { label: string; quote: string; avatar: string }> = {
  moss: {
    label: "text-[#7b61ff]",
    quote: "text-[#7b61ff]/20",
    avatar: "bg-[linear-gradient(140deg,#efe9ff,#dcd3ff)] text-[#5b45d6]",
  },
  kodo: {
    label: "text-[#e07a2e]",
    quote: "text-[#f29a4a]/30",
    avatar: "bg-[linear-gradient(140deg,#fff1e3,#ffd9b8)] text-[#b85b17]",
  },
  tsumu: {
    label: "text-[#3f9a4f]",
    quote: "text-[#3f9a4f]/20",
    avatar: "bg-[linear-gradient(140deg,#e8f6ea,#cdeccf)] text-[#2f6b4f]",
  },
};

function KodoGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 text-[#e07a2e]">
      {[3, 7, 11, 15, 19].map((x, i) => {
        const h = [6, 12, 18, 10, 5][i];
        return (
          <rect key={x} x={x - 1} y={12 - h / 2} width="2" height={h} rx="1" fill="currentColor" />
        );
      })}
    </svg>
  );
}

function ProductBadge({ product }: { product: HomeProductId }) {
  const logo = homeProducts.find((item) => item.id === product)?.logo;
  if (!logo) return <KodoGlyph />;
  return (
    <span className="relative h-7 w-7 shrink-0">
      <Image src={logo} alt="" fill className="object-contain" sizes="28px" />
    </span>
  );
}

export function Testimonials() {
  const { dictionary, locale } = useLocale();
  const copy = dictionary.home.testimonials;
  const trackRef = useRef<HTMLUListElement>(null);

  if (!homeTestimonials.length) return null;

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const controlClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition-colors hover:border-border-strong";

  return (
    <Section id="testimonials">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-0">
            <SectionHeading eyebrow={copy.eyebrow} title={copy.title} className="sm:pr-10" />
            <p className="max-w-md whitespace-pre-line text-sm leading-relaxed text-foreground-muted sm:border-l sm:border-foreground/10 sm:pl-10">
              {copy.description}
            </p>
          </div>
          {homeTestimonials.length > 3 ? (
            <div className="hidden gap-2 sm:flex">
              <button type="button" aria-label={copy.prev} className={controlClass} onClick={() => scrollByCard(-1)}>
                ←
              </button>
              <button type="button" aria-label={copy.next} className={controlClass} onClick={() => scrollByCard(1)}>
                →
              </button>
            </div>
          ) : null}
        </div>

        <ul
          ref={trackRef}
          className="-mx-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pt-1 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {homeTestimonials.map((item) => {
            const tone = tones[item.product];
            const role = item.role?.[locale];
            return (
              <li
                key={`${item.product}-${item.name}`}
                className="w-[min(84vw,360px)] shrink-0 snap-start lg:w-[calc((100%-2rem)/3)]"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface p-6 shadow-soft transition-[transform,box-shadow] duration-300 ease-[var(--ease-out)] motion-safe:hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center gap-2.5">
                    <ProductBadge product={item.product} />
                    <p className={`text-[1.05rem] font-semibold tracking-tight ${tone.label}`}>
                      {dictionary.home.products.items[item.product].name.split(" ")[0]}
                    </p>
                  </div>
                  <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                    「{item.quote[locale]}」
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-semibold ${tone.avatar}`}
                    >
                      {item.avatar ? (
                        <Image src={item.avatar} alt="" fill className="object-cover" sizes="44px" />
                      ) : (
                        <span aria-hidden>{item.name.slice(0, 1)}</span>
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-foreground">{item.name}</p>
                      {role ? <p className="text-[12px] text-foreground-subtle">{role}</p> : null}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute right-6 bottom-2 font-serif text-[5.5rem] leading-none ${tone.quote}`}
                  >
                    ”
                  </span>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
