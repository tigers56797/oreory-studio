"use client";

import type { ComponentType, SVGProps } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { ShieldIcon, TrendIcon, WalletIcon } from "@/components/tsumu/tsumu-icons";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuProblemKeys } from "@/lib/content/tsumu";

const icons: Record<
  (typeof tsumuProblemKeys)[number],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  scattered: WalletIcon,
  growth: TrendIcon,
  risk: ShieldIcon,
};

export function TsumuProblem() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.problem;

  return (
    <Section id="tsumu-problem" className="!pt-6 sm:!pt-8">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-center lg:gap-10">
          <div className="max-w-sm">
            <h2 className="whitespace-pre-line text-[clamp(1.55rem,3vw,2.15rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-foreground">
              {copy.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              {copy.description}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {tsumuProblemKeys.map((key) => {
              const item = copy.items[key];
              const Icon = icons[key];
              return (
                <li key={key} className="min-w-0">
                  <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-surface p-5 shadow-soft sm:p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tsumu-primary-soft)] text-[var(--tsumu-primary)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[0.95rem] font-semibold tracking-tight text-foreground">
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
        </div>
      </Container>
    </Section>
  );
}
