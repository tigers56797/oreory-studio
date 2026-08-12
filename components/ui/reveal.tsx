"use client";

import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay in ms after entering view */
  delay?: number;
  /** Once visible, stay visible (default true) */
  once?: boolean;
  as?: "div" | "span" | "article" | "li";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    // Show immediately if already in (or near) the viewport.
    const clearlyInView = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      return rect.top < vh * 0.92 && rect.bottom > 0;
    };

    if (clearlyInView()) {
      setVisible(true);
      return;
    }

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
    };

    // Mobile Safari can be flaky with high thresholds / large negative rootMargin.
    // Keep this lenient so sections never stay stuck at opacity: 0.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          show();
          if (once) observer.disconnect();
        } else if (!once) {
          shown = false;
          setVisible(false);
        }
      },
      { threshold: [0, 0.05, 0.1], rootMargin: "80px 0px -8% 0px" },
    );

    observer.observe(el);

    // Safety net: if the block is near the fold but observer never fires, reveal it.
    const fallback = window.setTimeout(() => {
      if (clearlyInView()) show();
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      className={["reveal", visible ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
