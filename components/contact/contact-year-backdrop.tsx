"use client";

import type { CSSProperties } from "react";

const WORD_GLYPHS = [
  {
    text: "DESIGN",
    className: "top-[5%] left-[-3%] text-[clamp(4.2rem,12vw,9rem)]",
    delay: "0.2s",
    duration: "6.4s",
  },
  {
    text: "FILM",
    className: "top-[16%] right-[-2%] text-[clamp(4.5rem,13vw,9.5rem)]",
    delay: "1.1s",
    duration: "7.2s",
  },
  {
    text: "EDIT",
    className: "top-[40%] left-[1%] text-[clamp(5rem,14vw,10.5rem)]",
    delay: "0.6s",
    duration: "5.8s",
  },
  {
    text: "STORY",
    className: "top-[55%] right-[-1%] text-[clamp(3.8rem,11vw,8rem)]",
    delay: "1.8s",
    duration: "6.9s",
  },
  {
    text: "CREATE",
    className: "bottom-[16%] left-[4%] text-[clamp(4rem,12vw,8.5rem)]",
    delay: "0.9s",
    duration: "7.8s",
  },
  {
    text: "STUDIO",
    className: "bottom-[2%] right-[3%] text-[clamp(4.5rem,12vw,9rem)]",
    delay: "2.2s",
    duration: "6.1s",
  },
] as const;

/**
 * Decorative oversized word glyphs for the Contact page backdrop.
 */
export function ContactYearBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {WORD_GLYPHS.map((glyph, index) => (
        <span
          key={`${glyph.text}-${index}`}
          className={`contact-year-glyph absolute font-semibold tracking-[-0.04em] ${glyph.className}`}
          style={
            {
              "--year-delay": glyph.delay,
              "--year-duration": glyph.duration,
            } as CSSProperties
          }
        >
          {glyph.text}
        </span>
      ))}
    </div>
  );
}
