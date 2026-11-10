"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuTestimonials } from "@/lib/content/tsumu";

export function TsumuTestimonials() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.testimonials;

  if (!tsumuTestimonials.length) return null;

  return (
    <Section id="tsumu-testimonials">
      <Container>
        <h2 className="text-[clamp(1.45rem,2.8vw,2rem)] font-semibold tracking-[-0.025em] text-foreground">
          {copy.title}
        </h2>

        <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {tsumuTestimonials.map((item) => (
            <li
              key={`${item.name}-${item.quote}`}
              className="w-[min(82vw,320px)] shrink-0 snap-start lg:w-auto"
            >
              <article className="card-lift flex h-full flex-col rounded-[1.5rem] border border-border bg-surface p-6 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  {typeof item.rating === "number" ? (
                    <p
                      className="text-[13px] text-[#c99a2e]"
                      aria-label={`${copy.ratingLabel} ${item.rating} / 5`}
                    >
                      {"★".repeat(Math.round(item.rating))}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {item.quote}
                </p>
                {item.date ? (
                  <time
                    dateTime={item.date}
                    className="mt-4 text-[12px] text-foreground-subtle"
                  >
                    {item.date.replaceAll("-", ".")}
                  </time>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
