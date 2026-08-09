"use client";

import { featuredCatalog, featuredContent } from "@/lib/content/featured";
import { useLocale } from "@/components/providers/locale-provider";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import type { FeaturedContentConfig } from "@/lib/content/featured";

type FeaturedCardProps = {
  item?: FeaturedContentConfig;
  className?: string;
  /** Optional real image path for the featured visual */
  imageSrc?: string;
};

/**
 * Extensible featured surface for the hero.
 * Pass a different `item` (or update `featuredContent` in lib/content/featured.ts)
 * to switch between MOSS / Kodo / Film without rewriting the hero layout.
 */
export function FeaturedCard({
  item = featuredContent,
  className = "",
  imageSrc,
}: FeaturedCardProps) {
  const { dictionary } = useLocale();
  const copy = dictionary.featured.items[item.id];

  return (
    <a
      href={item.href}
      className={[
        "group relative block overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card sm:rounded-[2rem]",
        "transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)]",
        "hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(23,23,23,0.08)]",
        className,
      ].join(" ")}
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]">
          <MediaPlaceholder
            tone={item.tone}
            src={imageSrc}
            alt={copy.title}
            aspectClassName="aspect-[4/5]"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent p-4 pt-24 sm:p-5 sm:pt-28">
          <div className="rounded-2xl bg-white px-4 py-4 shadow-soft sm:px-5 sm:py-5">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground-subtle">
              {dictionary.featured.eyebrow}
            </p>
            <h2 className="mt-2 text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-[1.85rem]">
              {copy.title}
            </h2>
            <p className="mt-1 text-sm text-foreground-muted">{copy.description}</p>
            <p className="mt-3 text-[13px] font-medium tracking-wide text-foreground">
              {copy.cta}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

/** Helper for future carousels / selectors — keeps catalog typed and centralized. */
export function getFeaturedById(id: FeaturedContentConfig["id"]) {
  return featuredCatalog.find((item) => item.id === id) ?? featuredContent;
}
