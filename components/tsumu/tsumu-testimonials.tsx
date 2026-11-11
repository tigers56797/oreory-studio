"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { siteContact } from "@/lib/contact";
import {
  tsumuLinks,
  tsumuMedia,
  tsumuReviewSummary,
  tsumuTestimonials,
  type TsumuTestimonial,
} from "@/lib/content/tsumu";

const VISIBLE_COUNT = 3;

const avatarTones = [
  "bg-[var(--tsumu-primary-soft)] text-[var(--tsumu-primary)]",
  "bg-[var(--tsumu-sky)] text-[#2f6f95]",
  "bg-[#fbe4ea] text-[#b4546d]",
];

function Stars({ rating, label }: { rating: number; label: string }) {
  const filled = Math.round(rating);
  return (
    <span
      className="inline-flex text-[11px] leading-none tracking-[0.05em]"
      role="img"
      aria-label={`${label} ${rating} / 5`}
    >
      <span className="text-[#f2b61f]">{"★".repeat(filled)}</span>
      <span className="text-foreground/15">{"★".repeat(5 - filled)}</span>
    </span>
  );
}

function ReviewCard({
  item,
  index,
  ratingLabel,
}: {
  item: TsumuTestimonial;
  index: number;
  ratingLabel: string;
}) {
  return (
    <article className="card-lift flex h-full flex-col rounded-[1.25rem] border border-border bg-surface p-4 shadow-soft">
      <div className="flex items-center gap-2.5">
        {item.avatar ? (
          <Image
            src={item.avatar}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarTones[index % avatarTones.length]}`}
          >
            {item.name.slice(0, 1).toUpperCase()}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-foreground">{item.name}</p>
          {typeof item.rating === "number" ? (
            <Stars rating={item.rating} label={ratingLabel} />
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-foreground-muted">
        {item.quote}
      </p>
      {item.date ? (
        <time dateTime={item.date} className="mt-auto pt-3 text-[11px] text-foreground-subtle">
          {item.date.replaceAll("-", ".")}
        </time>
      ) : null}
    </article>
  );
}

export function TsumuTestimonials() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.testimonials;
  const [expanded, setExpanded] = useState(false);
  const canExpand = tsumuTestimonials.length > VISIBLE_COUNT;
  const visible = expanded ? tsumuTestimonials : tsumuTestimonials.slice(0, VISIBLE_COUNT);

  return (
    <div id="tsumu-testimonials" className="flex min-w-0 flex-col">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {copy.title}
          </h2>
          {tsumuReviewSummary ? (
            <p className="inline-flex items-center gap-1.5 text-sm text-foreground-muted">
              <span aria-hidden className="text-base leading-none text-[#f2b61f]">★</span>
              <span className="font-semibold text-foreground">
                {tsumuReviewSummary.rating.toFixed(1)}
              </span>
              <span>/ 5.0</span>
              <span className="text-[12px] text-foreground-subtle">
                ({tsumuReviewSummary.total.toLocaleString()} {copy.totalLabel})
              </span>
            </p>
          ) : null}
        </div>
        {canExpand ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {expanded ? copy.collapse : copy.viewAll}
          </button>
        ) : null}
      </div>

      {visible.length ? (
        <ul className="-mx-5 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pt-1 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
          {visible.map((item, index) => (
            <li
              key={`${item.name}-${item.quote}`}
              className="w-[min(70vw,240px)] shrink-0 snap-start sm:w-auto"
            >
              <ReviewCard item={item} index={index} ratingLabel={copy.ratingLabel} />
            </li>
          ))}
        </ul>
      ) : (
        <article className="relative mt-5 flex flex-1 flex-col overflow-hidden rounded-[1.5rem] border border-border bg-[linear-gradient(160deg,var(--tsumu-primary-soft)_0%,#ffffff_55%,var(--tsumu-butter)_100%)] p-6 pb-32 shadow-soft sm:p-7">
          <div className="relative z-10 max-w-[19rem]">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {copy.emptyTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-foreground-muted">
              {copy.emptyDescription}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={`${siteContact.mailto}?subject=${encodeURIComponent(copy.shareSubject)}`}
                className="inline-flex items-center rounded-full bg-[var(--tsumu-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--tsumu-primary-hover)]"
              >
                {copy.shareCta}
              </a>
              <Link
                href={tsumuLinks.support}
                className="text-sm font-medium text-[var(--tsumu-primary)] transition-opacity hover:opacity-70"
              >
                {copy.feedbackCta}
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-3 -bottom-3 aspect-square w-[38%] max-w-[170px] opacity-95">
            <Image
              src={tsumuMedia.mascotExplorer}
              alt=""
              fill
              className="object-contain drop-shadow-[0_14px_22px_rgba(40,60,40,0.16)]"
              sizes="170px"
            />
          </div>
        </article>
      )}
    </div>
  );
}
