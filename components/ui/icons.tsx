import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export function BrandMark({ className = "", title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <ellipse
        cx="24"
        cy="24"
        rx="16.5"
        ry="16.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="8"
        ry="16.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M8 24h32M10.5 16.5h27M10.5 31.5h27"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M24 11.5 L25.35 21.15 L34.5 24 L25.35 26.85 L24 36.5 L22.65 26.85 L13.5 24 L22.65 21.15 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon({ className = "", title = "Email", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      {...props}
    >
      <title>{title}</title>
      <rect
        x="3.25"
        y="5.25"
        width="17.5"
        height="13.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7.5 12 13.25 20 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LineIcon({ className = "", title = "LINE", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      {...props}
    >
      <title>{title}</title>
      <path
        d="M18.8 4.4C17.1 3.2 14.7 2.5 12 2.5 6.75 2.5 2.5 5.95 2.5 10.2c0 3.85 3.4 7.08 8 7.7v2.85c0 .28.32.45.55.3 1.55-.95 4.05-2.65 5.55-3.75 1.55.2 2.95-.05 4.05-.7C22.55 15.4 23.5 13 23.5 10.2c0-2.35-1.25-4.45-3.45-5.8Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M8.1 9.15v4.2M11.05 9.15v4.2M11.05 11.25h1.85c.85 0 1.45-.5 1.45-1.25s-.6-1.25-1.45-1.25h-1.85ZM15.55 13.35V9.15h2.35"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ className = "", title = "Play", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      {...props}
    >
      <title>{title}</title>
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 8.8v6.4l5.2-3.2L10 8.8Z" fill="currentColor" />
    </svg>
  );
}

/** Thin-line service icons for the films page */
export function FilmLongformIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.45" />
      <path d="M8 6.5V5.75a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.75" stroke="currentColor" strokeWidth="1.45" />
      <path d="M7.5 10.5h9M7.5 13.5h6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

export function FilmContentIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <rect x="5" y="4.5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.45" />
      <rect x="3.5" y="8" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.45" />
      <path d="M7 13h7" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

export function FilmEventIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M12 4.5 13.2 9.4 18 12 13.2 14.6 12 19.5 10.8 14.6 6 12l4.8-2.6L12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d="M18.5 5.5v3M20 7h-3M5.5 16v2.5M6.75 17.25h-2.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

export function FilmBrandIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <rect x="4.5" y="5.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.45" />
      <path d="M4.5 9.5h15" stroke="currentColor" strokeWidth="1.45" />
      <circle cx="7.5" cy="7.5" r="0.7" fill="currentColor" />
      <circle cx="10" cy="7.5" r="0.7" fill="currentColor" />
      <path d="M9 13.5h6M9 16h4" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

export function FilmOtherIcon({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M8.5 6.5 6 9l2.5 2.5M15.5 6.5 18 9l-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 17.5h5" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      <path d="M12 11.5v6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      <circle cx="12" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.45" />
    </svg>
  );
}
