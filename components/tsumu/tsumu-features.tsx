"use client";

import type { ComponentType, SVGProps } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import {
  CompassIcon,
  GrowthIcon,
  SproutIcon,
  WalletIcon,
} from "@/components/tsumu/tsumu-icons";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuFeatureKeys } from "@/lib/content/tsumu";

const icons: Record<
  (typeof tsumuFeatureKeys)[number],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  netWorth: WalletIcon,
  growth: GrowthIcon,
  compass: CompassIcon,
  companion: SproutIcon,
};

const tones: Record<(typeof tsumuFeatureKeys)[number], string> = {
  netWorth: "bg-[var(--tsumu-primary-soft)] text-[var(--tsumu-primary)]",
  growth: "bg-[var(--tsumu-primary-soft)] text-[var(--tsumu-primary)]",
  compass: "bg-[var(--tsumu-sky)] text-[#2f6f95]",
  companion: "bg-[var(--tsumu-butter)] text-[#9a7420]",
};

export function TsumuFeatures() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.features;

  return (
    <Section id="tsumu-features">
      <Container>
        <h2 className="text-center text-[clamp(1.45rem,2.8vw,2rem)] font-semibold tracking-[-0.025em] text-foreground">
          {copy.title}
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {tsumuFeatureKeys.map((key) => {
            const item = copy.items[key];
            const Icon = icons[key];
            return (
              <li key={key} className="min-w-0">
                <article className="card-lift flex h-full flex-col rounded-[1.5rem] border border-border bg-surface p-6 shadow-soft sm:rounded-[1.75rem]">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${tones[key]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
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
