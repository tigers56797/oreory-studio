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

export function FilmServices() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.services;

  return (
    <Section id="film-services">
      <Container>
        <div className="max-w-2xl">
          <h2 className="whitespace-pre-line text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
          <p className="mt-5 whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
            {copy.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {serviceKeys.map((key, index) => {
            const item = copy.items[key];
            const Icon = serviceIcons[key];

            return (
              <li key={key}>
                <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-surface px-5 py-6 shadow-soft transition-[box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-card sm:rounded-[1.75rem] sm:px-5 sm:py-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.14em] text-foreground-subtle">
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
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
