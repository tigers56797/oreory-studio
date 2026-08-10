"use client";

import type { ComponentType, SVGProps } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import {
  FilmBrandIcon,
  FilmContentIcon,
  FilmEventIcon,
  FilmLongformIcon,
  FilmOtherIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type IconProps = SVGProps<SVGSVGElement>;

const serviceKeys = [
  "longform",
  "content",
  "event",
  "brand",
  "other",
] as const;

const serviceIcons: Record<
  (typeof serviceKeys)[number],
  ComponentType<IconProps>
> = {
  longform: FilmLongformIcon,
  content: FilmContentIcon,
  event: FilmEventIcon,
  brand: FilmBrandIcon,
  other: FilmOtherIcon,
};

const serviceTone: Record<
  (typeof serviceKeys)[number],
  { icon: string; accent: string }
> = {
  longform: {
    icon: "border-[#e4d9c8] bg-[#f4efe6] text-[#6b5340]",
    accent: "text-[#9a7b5c]",
  },
  content: {
    icon: "border-[#d7e3dc] bg-[#eef5f0] text-[#3f5c4c]",
    accent: "text-[#5f8570]",
  },
  event: {
    icon: "border-[#e8d5d0] bg-[#f7eeeb] text-[#8a4f3d]",
    accent: "text-[#b06b55]",
  },
  brand: {
    icon: "border-[#d5dcea] bg-[#eef1f8] text-[#3f4a62]",
    accent: "text-[#627090]",
  },
  other: {
    icon: "border-[#e0ddd4] bg-[#f2f0ea] text-[#5c574e]",
    accent: "text-[#8a8478]",
  },
};

export function FilmServices() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.services;

  return (
    <Section id="film-services" reveal={false}>
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="whitespace-pre-line text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
          <p className="mt-5 whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
            {copy.description}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {serviceKeys.map((key, index) => {
            const item = copy.items[key];
            const Icon = serviceIcons[key];
            const tone = serviceTone[key];

            return (
              <Reveal key={key} as="li" delay={80 + index * 90}>
                <article className="film-service-card card-lift group flex h-full flex-col rounded-[1.5rem] border border-border bg-surface px-5 py-6 shadow-soft sm:rounded-[1.75rem] sm:px-5 sm:py-7">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-110 group-hover:-rotate-3 ${tone.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`text-[11px] font-medium tracking-[0.14em] transition-colors duration-300 ${tone.accent}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[0.95rem] font-semibold tracking-tight text-foreground sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
