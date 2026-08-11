"use client";

import { useEffect, useState } from "react";
import { LineIcon } from "@/components/ui/icons";
import { siteContact } from "@/lib/contact";

const SHOW_AFTER_PX = 420;

function getScrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(getScrollY() > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";

    window.scrollTo({ top: 0, behavior });
    document.documentElement.scrollTo({ top: 0, behavior });
    document.body.scrollTo({ top: 0, behavior });
  };

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-5 z-[70] flex flex-col items-center gap-2.5 sm:right-6 sm:bottom-7">
      <a
        href={siteContact.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="透過 LINE 聯絡我們"
        className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#06C755]/25 bg-[#06C755] text-white shadow-[0_10px_28px_rgba(6,199,85,0.28)] transition-[transform,opacity] hover:opacity-90 active:scale-[0.96]"
      >
        <LineIcon className="h-5 w-5" />
      </a>

      <button
        type="button"
        aria-label="回到頁面頂端"
        onClick={scrollToTop}
        className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/90 text-foreground shadow-nav backdrop-blur-md transition-[transform,opacity,background-color] hover:bg-white active:scale-[0.96]"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
          <path
            d="M12 5.5v13M6.8 10.2L12 5.5l5.2 4.7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
