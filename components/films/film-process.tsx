"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const stepKeys = [
  "brief",
  "assets",
  "edit",
  "revise",
  "deliver",
] as const;

export function FilmProcess() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.process;

  return (
    <Section id="film-process">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
        </div>

        <ol className="mt-10 grid gap-0 border-l border-border sm:mt-12 lg:grid-cols-5 lg:gap-6 lg:border-l-0 lg:border-t lg:pt-0">
          {stepKeys.map((key, index) => {
            const step = copy.steps[key];
            return (
              <li
                key={key}
                className="relative py-6 pl-6 lg:border-t-0 lg:px-0 lg:pt-8 lg:pb-0 lg:pl-0"
              >
                <span
                  aria-hidden
                  className="absolute top-8 -left-[5px] h-2.5 w-2.5 rounded-full border border-border bg-background lg:top-0 lg:left-0 lg:-translate-y-1/2"
                />
                <p className="text-[12px] font-medium tracking-[0.14em] text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
