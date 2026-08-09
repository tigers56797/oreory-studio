"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { mossLinks } from "@/lib/content/moss";

export function MossCta() {
  const { dictionary } = useLocale();
  const copy = dictionary.mossPage.cta;

  return (
    <Section id="moss-cta" className="!pt-4">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--moss-primary-muted)] bg-[linear-gradient(135deg,#f4f0ff_0%,#ebe4ff_45%,#f7f5ff_100%)] px-6 py-12 shadow-soft sm:rounded-[2.25rem] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden
            className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.25),transparent_70%)] blur-xl sm:h-56 sm:w-56"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold tracking-[-0.025em] text-foreground">
              {copy.title}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={mossLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-[var(--moss-primary)] !text-white hover:!bg-[var(--moss-primary-hover)]"
              >
                {copy.primary}
              </Button>
              <Button href={mossLinks.features} variant="secondary">
                {copy.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
