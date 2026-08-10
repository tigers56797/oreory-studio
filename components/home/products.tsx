"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Section } from "@/components/ui/section";

const products = [
  {
    key: "moss" as const,
    href: "/moss",
    tone: "moss" as const,
    image: "/images/moss/mosscover.png",
  },
  {
    key: "kodo" as const,
    href: "/kodo",
    tone: "kodo" as const,
    image: "/images/kodo/maincover2.png",
  },
];

export function Products() {
  const { dictionary } = useLocale();

  return (
    <Section id="products">
      <Container>
        <div className="mb-7 sm:mb-9">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
            {dictionary.products.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {products.map((product) => {
            const copy = dictionary.products.items[product.key];
            return (
              <a
                key={product.key}
                href={product.href}
                className="card-lift group overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card sm:rounded-[2rem]"
                aria-label={copy.name}
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]">
                    <MediaPlaceholder
                      tone={product.tone}
                      src={product.image}
                      alt={copy.name}
                      aspectClassName="aspect-[5/4] sm:aspect-[4/3]"
                    />
                  </div>
                </div>
                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
                    {copy.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                    {copy.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
