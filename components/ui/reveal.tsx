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

    // Only show immediately if already clearly in the upper viewport.
    // Content near the fold waits until the user scrolls to it.
    const clearlyInView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.38 && rect.bottom > 60;
    };

    if (clearlyInView()) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -28% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
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
