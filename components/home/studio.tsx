"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Studio() {
  const { dictionary } = useLocale();

  return (
    <Section id="studio">
      <Container>
        <div className="mb-7 sm:mb-9">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
            {dictionary.studio.title}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 xl:gap-24">
          <div className="max-w-2xl">
            <h3 className="text-[clamp(1.6rem,3vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground">
              {dictionary.studio.headline}
            </h3>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
              {dictionary.studio.description}
            </p>
          </div>

          <ul className="flex flex-col justify-center gap-4 border-l border-border pl-6 sm:pl-8 lg:gap-5">
            {dictionary.studio.points.map((point) => (
              <li
                key={point}
                className="text-[0.95rem] tracking-wide text-foreground-muted sm:text-base"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
