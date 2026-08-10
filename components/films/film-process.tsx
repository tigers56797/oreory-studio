"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const stepKeys = [
  "brief",
  "assets",
  "edit",
  "revise",
  "deliver",
] as const;

const stepTone = [
  {
    node: "border-[#d9c7ae] bg-[#f3ebe0] text-[#7a5c3c]",
  },
  {
    node: "border-[#d2c3b4] bg-[#f0e8df] text-[#6e5340]",
  },
  {
    node: "border-[#cbb89a] bg-[#efe4d4] text-[#614a32]",
  },
  {
    node: "border-[#c4ad8c] bg-[#ebddcb] text-[#553f28]",
  },
  {
    node: "border-[#171717]/15 bg-[#171717] text-white",
  },
] as const;

export function FilmProcess() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.process;

  return (
    <Section id="film-process" reveal={false}>
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
        </Reveal>

        <Reveal className="relative mt-10 sm:mt-12" delay={120}>
          {/* Desktop progress track */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[22px] right-0 left-0 hidden h-[2px] lg:block"
          >
            <div className="absolute inset-0 rounded-full bg-[#e8dfd2]" />
            <div className="film-process-progress absolute inset-y-0 left-0 origin-left rounded-full bg-[linear-gradient(90deg,#c4a574_0%,#946b42_70%,#171717_100%)]" />
          </div>

          {/* Mobile vertical track */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-3 bottom-3 left-[21px] w-[2px] lg:hidden"
          >
            <div className="absolute inset-0 rounded-full bg-[#e8dfd2]" />
            <div className="film-process-progress-y absolute inset-x-0 top-0 origin-top rounded-full bg-[linear-gradient(180deg,#c4a574_0%,#946b42_70%,#171717_100%)]" />
          </div>

          <ol className="relative grid gap-0 lg:grid-cols-5 lg:gap-5">
            {stepKeys.map((key, index) => {
              const step = copy.steps[key];
              const tone = stepTone[index];
              const isLast = index === stepKeys.length - 1;

              return (
                <Reveal
                  key={key}
                  as="li"
                  delay={180 + index * 110}
                  className="relative pl-14 py-5 lg:px-0 lg:pt-0 lg:pb-0 lg:pl-0"
                >
                  <div className="flex items-start gap-4 lg:block">
                    <span
                      className={[
                        "film-process-node absolute left-0 top-5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold tracking-[0.08em] shadow-soft lg:relative lg:top-0 lg:mb-6",
                        tone.node,
                      ].join(" ")}
                    >
                      {String(index + 1).padStart(2, "0")}
                      <span
                        aria-hidden
                        className={[
                          "absolute -inset-1 rounded-full opacity-0 blur-[6px] transition-opacity duration-500",
                          isLast ? "bg-black/20" : "bg-[#c4a574]/35",
                        ].join(" ")}
                      />
                    </span>

                    <div className="min-w-0 lg:pt-1">
                      <p
                        className={[
                          "text-[11px] font-semibold tracking-[0.16em]",
                          isLast ? "text-foreground" : "text-[#9a7b5c]",
                        ].join(" ")}
                      >
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}
