import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "footer";
  /** Scroll reveal for section content (default true) */
  reveal?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
  reveal = true,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`scroll-mt-32 py-[var(--section-y)] ${className}`}
    >
      {reveal ? <Reveal>{children}</Reveal> : children}
    </Tag>
  );
}
