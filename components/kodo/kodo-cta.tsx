"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { kodoLinks } from "@/lib/content/kodo";

export function KodoCta() {
  const { dictionary } = useLocale();
  const copy = dictionary.kodoPage.cta;

  return (
    <Section id="kodo-cta" className="!pt-4">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--kodo-primary-muted)] bg-[linear-gradient(135deg,#eef5ef_0%,#e4eee6_45%,#f5f8f5_100%)] px-6 py-12 shadow-soft sm:rounded-[2.25rem] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden
            className="absolute -right-10 -bottom-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(76,124,84,0.22),transparent_70%)] blur-xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold tracking-[-0.025em] text-foreground">
              {copy.title}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={kodoLinks.start}
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-[var(--kodo-primary)] !text-white hover:!bg-[var(--kodo-primary-hover)]"
              >
                {copy.primary}
              </Button>
              <Button href={kodoLinks.contact} variant="secondary">
                {copy.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
