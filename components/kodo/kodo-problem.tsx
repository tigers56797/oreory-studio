"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { kodoProblemKeys } from "@/lib/content/kodo";

const stepTone: Record<(typeof kodoProblemKeys)[number], string> = {
  discover: "border-border bg-surface text-foreground",
  understand: "border-border bg-surface text-foreground",
  stuck: "border-[var(--kodo-danger)]/30 bg-[#fff5f5] text-[var(--kodo-danger)]",
  delay: "border-border bg-surface text-foreground-muted",
  solve: "border-[var(--kodo-primary-muted)] bg-[var(--kodo-primary-soft)] text-[var(--kodo-primary)]",
};

export function KodoProblem() {
  const { dictionary } = useLocale();
  const copy = dictionary.kodoPage.problem;

  return (
    <Section id="kodo-problem">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.45rem,2.8vw,2.1rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground">
            {copy.title}
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {kodoProblemKeys.map((key, index) => {
            const step = copy.steps[key];
            return (
              <li key={key} className="relative">
                <article
                  className={`flex h-full flex-col items-center rounded-[1.35rem] border px-3 py-5 text-center shadow-soft ${stepTone[key]}`}
                >
                  <span className="text-[11px] font-medium tracking-[0.14em] opacity-70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 text-xl" aria-hidden>
                    {key === "discover"
                      ? "⌕"
                      : key === "understand"
                        ? "✦"
                        : key === "stuck"
                          ? "?"
                          : key === "delay"
                            ? "⌛"
                            : "✓"}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed opacity-80">
                    {step.description}
                  </p>
                </article>
                {index < kodoProblemKeys.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-2 hidden text-foreground-subtle lg:block"
                  >
                    →
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
