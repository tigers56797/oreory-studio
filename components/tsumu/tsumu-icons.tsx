import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ className = "", children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H17v3" />
      <rect x="4" y="7.5" width="16" height="11.5" rx="2.5" />
      <path d="M16 13.25h1.5" />
    </Svg>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 19V14M10 19V10M15 19V12M20 19V6" />
    </Svg>
  );
}

export function TrendIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 17l5-5 4 3 7-8" />
      <path d="M15 7h5v5" />
    </Svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5l7 2.75v5.5c0 4.25-3 7.5-7 8.75-4-1.25-7-4.5-7-8.75v-5.5L12 3.5z" />
      <path d="M12 9v3.5M12 15.5h.01" />
    </Svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </Svg>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 20v-8" />
      <path d="M12 12c0-3.5 2.5-6 6.5-6 0 3.75-2.5 6-6.5 6z" />
      <path d="M12 14.5c0-2.75-2-4.75-5.5-4.75 0 3 2 4.75 5.5 4.75z" />
    </Svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.25l2.25 2.25 4.75-4.75" />
    </Svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V16h0.5A2.5 2.5 0 0 1 5 13.5v-7z" />
      <path d="M9 10h.01M12 10h.01M15 10h.01" />
    </Svg>
  );
}

export function ChevronIcon({
  direction = "right",
  ...props
}: IconProps & { direction?: "left" | "right" | "down" }) {
  const d =
    direction === "left"
      ? "M14.5 6l-6 6 6 6"
      : direction === "down"
        ? "M6 9.5l6 6 6-6"
        : "M9.5 6l6 6-6 6";
  return (
    <Svg {...props}>
      <path d={d} />
    </Svg>
  );
}
