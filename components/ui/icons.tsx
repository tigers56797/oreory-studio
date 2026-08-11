import Image from "next/image";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({
  className = "",
  title = "Oreory Studio",
}: BrandMarkProps) {
  return (
    <Image
      src="/images/home/logo0811-transparent.png"
      alt={title}
      width={64}
      height={64}
      className={`object-contain ${className}`}
      priority
    />
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      {...props}
    >
      <title>{title}</title>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 0 1-.63-.629V8.108c0-.345.281-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-.63.629.63.63 0 0 1-.63-.629V8.108c0-.27.173-.51.43-.595.064-.022.133-.032.2-.032.211 0 .391.09.51.25l2.443 3.317V8.108c0-.345.281-.63.63-.63.348 0 .629.285.629.63v4.771zm-5.741 0c0 .345-.281.629-.63.629-.345 0-.63-.284-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.771zm-2.466.629H4.917c-.345 0-.63-.284-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
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
