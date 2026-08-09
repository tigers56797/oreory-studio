import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "text";
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-[var(--accent)] !text-white hover:bg-[#2a2a2a] shadow-soft",
  secondary:
    "bg-surface text-foreground border border-border hover:border-border-strong shadow-soft",
  ghost: "bg-transparent text-foreground-muted hover:text-foreground",
  text: "bg-transparent px-0 py-0 text-foreground hover:opacity-70 rounded-none shadow-none",
} as const;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-sm font-medium tracking-wide transition-[color,background-color,border-color,opacity,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    className,
  ].join(" ");

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
