"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PlayIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { filmWorks } from "@/lib/content/films";

export function FilmWorks() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.works;

  return (
    <Section id="film-works">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-[clamp(1.55rem,3vw,2.25rem)] font-semibold tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
          <p className="mt-3 text-[0.95rem] leading-7 text-foreground-muted sm:text-base">
            {copy.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filmWorks.map((work) => {
            const title = copy.items[work.titleKey];
            const category = copy.categories[work.category];

            return (
              <li key={work.id}>
                <article className="group overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-soft sm:rounded-[1.75rem]">
                  <div className="relative overflow-hidden">
                    <div className="motion-safe-scale transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]">
                      <MediaPlaceholder
                        tone="film"
                        src={work.image}
                        alt={title}
                        aspectClassName="aspect-video"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/90 text-foreground shadow-soft backdrop-blur-sm">
                        <PlayIcon className="h-5 w-5" />
                      </span>
                    </div>

                    <span className="absolute top-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white">
                      {work.duration}
                    </span>
                  </div>

                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-[11px] font-medium tracking-[0.14em] text-foreground-subtle">
                      {category}
                    </p>
                    <h3 className="mt-1.5 text-[0.95rem] font-semibold tracking-tight text-foreground sm:text-base">
                      {title}
                    </h3>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
