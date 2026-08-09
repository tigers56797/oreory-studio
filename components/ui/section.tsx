import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "footer";
};

export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`scroll-mt-32 py-[var(--section-y)] ${className}`}
    >
      {children}
    </Tag>
  );
}
