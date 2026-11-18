/**
 * Homepage-only seasonal accents — sparse decorations for empty margins.
 */
import type { ReactNode } from "react";

function Holly({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <path
        d="M14 22c-3.2-1.2-5.8-4.2-6.4-7.8 3.6.4 7 2.2 9 5.2 1.2-3.4 3.8-5.8 7.2-6.8-1.4 3.6-1.2 7.4.6 10.6"
        fill="#3f8f5a"
      />
      <path
        d="M34 20c3-1.4 5.2-4.6 5.6-8-3.4.8-6.4 2.8-8.2 5.6-1.4-3-4-5.2-7.2-6 1.8 3.2 2 6.8.4 10"
        fill="#4fa46a"
      />
      <path
        d="M18 28c-2.8 2-4.2 5.4-3.8 8.6 3-1.2 5.4-3.4 6.8-6.2.6 3.2 2.6 5.8 5.6 7-1.8-3.2-2.4-6.8-1.4-10.2"
        fill="#3f8f5a"
      />
      <circle cx="24" cy="24" r="3.2" fill="#c04545" />
      <circle cx="19.2" cy="26.4" r="2.4" fill="#d45555" />
      <circle cx="28.4" cy="26.2" r="2.4" fill="#d45555" />
    </svg>
  );
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" fill="none" aria-hidden className={className}>
      <rect x="13" y="2" width="6" height="5" rx="1.5" fill="#c9a227" />
      <path d="M16 7v4" stroke="#c9a227" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="24" r="12" fill="#d45555" />
      <path
        d="M8 20c2.4 1.2 5.2 1.8 8 1.8s5.6-.6 8-1.8"
        stroke="#f2d28a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 26c2.6 1.4 5.4 2.1 8.5 2.1s5.9-.7 8.5-2.1"
        stroke="#f2d28a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="14.5" r="1.6" fill="#f2d28a" />
    </svg>
  );
}

function Tree({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 52" fill="none" aria-hidden className={className}>
      <path d="M20 4l10 14H10L20 4z" fill="#4fa46a" />
      <path d="M20 14l12 14H8L20 14z" fill="#3f8f5a" />
      <path d="M20 24l14 16H6L20 24z" fill="#347a4c" />
      <rect x="17" y="40" width="6" height="8" rx="1" fill="#8b5a2b" />
      <circle cx="20" cy="5" r="2.2" fill="#f2d28a" />
      <circle cx="14" cy="22" r="1.5" fill="#d45555" />
      <circle cx="26" cy="28" r="1.5" fill="#f2d28a" />
      <circle cx="17" cy="34" r="1.4" fill="#d45555" />
    </svg>
  );
}

function Gift({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden className={className}>
      <rect x="8" y="18" width="28" height="20" rx="3" fill="#d45555" />
      <rect x="6" y="14" width="32" height="8" rx="2" fill="#c04545" />
      <rect x="19.5" y="14" width="5" height="24" fill="#f2d28a" />
      <rect x="6" y="20" width="32" height="4" fill="#f2d28a" />
      <path
        d="M22 14c-3-4-7-5-9-3s0 5 3 5h6M22 14c3-4 7-5 9-3s0 5-3 5h-6"
        stroke="#f2d28a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CandyCane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 56" fill="none" aria-hidden className={className}>
      <path
        d="M10 52c0-16 0-28 0-34 0-6 4.5-10 10-10s10 4 10 9"
        stroke="#f5f5f5"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M10 52c0-16 0-28 0-34 0-6 4.5-10 10-10s10 4 10 9"
        stroke="#d45555"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="5 7"
      />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden className={className}>
      <path
        d="M18 3l3.8 9.4L32 14.2l-7.4 6.4L26.8 32 18 26.6 9.2 32l2.2-11.4L4 14.2l10.2-1.8L18 3z"
        fill="#f2d28a"
      />
    </svg>
  );
}

function Cookie({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <circle cx="20" cy="20" r="15" fill="#e8b86d" />
      <circle cx="14" cy="15" r="1.8" fill="#6b3f1d" />
      <circle cx="23" cy="13" r="1.5" fill="#6b3f1d" />
      <circle cx="26" cy="22" r="1.7" fill="#6b3f1d" />
      <circle cx="16" cy="24" r="1.4" fill="#6b3f1d" />
      <circle cx="21" cy="28" r="1.3" fill="#6b3f1d" />
    </svg>
  );
}

const flakes = [
  { left: "6%", delay: "0s", duration: "14s", size: 4, opacity: 0.55 },
  { left: "14%", delay: "2.4s", duration: "17s", size: 3, opacity: 0.4 },
  { left: "24%", delay: "5s", duration: "15s", size: 5, opacity: 0.48 },
  { left: "36%", delay: "1.2s", duration: "18s", size: 3, opacity: 0.35 },
  { left: "48%", delay: "3.8s", duration: "16s", size: 4, opacity: 0.45 },
  { left: "58%", delay: "7s", duration: "19s", size: 3, opacity: 0.32 },
  { left: "68%", delay: "6.2s", duration: "16s", size: 4, opacity: 0.42 },
  { left: "78%", delay: "0.8s", duration: "15s", size: 5, opacity: 0.5 },
  { left: "88%", delay: "4.5s", duration: "17s", size: 3, opacity: 0.36 },
  { left: "95%", delay: "8.2s", duration: "20s", size: 4, opacity: 0.4 },
];

const stickers: {
  id: string;
  top: string;
  left?: string;
  right?: string;
  rotate: string;
  size: string;
  delay: string;
  node: ReactNode;
}[] = [
  { id: "tree-l", top: "12%", left: "1.5%", rotate: "-8deg", size: "h-14 w-11", delay: "0s", node: <Tree className="h-full w-full" /> },
  { id: "star-l", top: "28%", left: "2.5%", rotate: "12deg", size: "h-8 w-8", delay: "0.6s", node: <Star className="h-full w-full" /> },
  { id: "candy-l", top: "46%", left: "1.8%", rotate: "-14deg", size: "h-16 w-8", delay: "1.2s", node: <CandyCane className="h-full w-full" /> },
  { id: "gift-l", top: "68%", left: "2%", rotate: "6deg", size: "h-11 w-11", delay: "0.3s", node: <Gift className="h-full w-full" /> },
  { id: "cookie-l", top: "86%", left: "2.8%", rotate: "-10deg", size: "h-9 w-9", delay: "1.5s", node: <Cookie className="h-full w-full" /> },
  { id: "gift-r", top: "10%", right: "1.8%", rotate: "10deg", size: "h-12 w-12", delay: "0.4s", node: <Gift className="h-full w-full" /> },
  { id: "holly-r", top: "24%", right: "2.2%", rotate: "-6deg", size: "h-11 w-11", delay: "1s", node: <Holly className="h-full w-full" /> },
  { id: "ornament-r", top: "42%", right: "2.5%", rotate: "4deg", size: "h-12 w-10", delay: "0.2s", node: <Ornament className="h-full w-full" /> },
  { id: "tree-r", top: "60%", right: "1.5%", rotate: "8deg", size: "h-14 w-11", delay: "0.8s", node: <Tree className="h-full w-full" /> },
  { id: "star-r", top: "78%", right: "2.8%", rotate: "-12deg", size: "h-8 w-8", delay: "1.4s", node: <Star className="h-full w-full" /> },
  { id: "candy-r", top: "92%", right: "2%", rotate: "16deg", size: "h-14 w-7", delay: "0.5s", node: <CandyCane className="h-full w-full" /> },
];

export function HolidayCheer() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="holiday-snow absolute inset-0">
        {flakes.map((flake, index) => (
          <span
            key={index}
            className="holiday-flake absolute top-[-12px] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 hidden xl:block">
        {stickers.map((sticker) => (
          <div
            key={sticker.id}
            className={`holiday-sticker absolute opacity-[0.78] drop-shadow-[0_8px_14px_rgba(80,50,30,0.12)] ${sticker.size}`}
            style={{
              top: sticker.top,
              left: sticker.left,
              right: sticker.right,
              transform: `rotate(${sticker.rotate})`,
              animationDelay: sticker.delay,
            }}
          >
            {sticker.node}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 xl:hidden">
        <div className="holiday-sticker absolute top-[18%] left-2 h-9 w-7 -rotate-12 opacity-70 sm:left-3 sm:h-11 sm:w-9">
          <Tree className="h-full w-full" />
        </div>
        <div className="holiday-sticker absolute top-[38%] right-2 h-8 w-8 rotate-8 opacity-70 [animation-delay:0.5s] sm:right-3 sm:h-10 sm:w-10">
          <Gift className="h-full w-full" />
        </div>
        <div className="holiday-sticker absolute top-[58%] left-2.5 h-10 w-5 -rotate-6 opacity-65 [animation-delay:1s] sm:left-4">
          <CandyCane className="h-full w-full" />
        </div>
        <div className="holiday-sticker absolute top-[76%] right-3 h-8 w-8 rotate-12 opacity-70 [animation-delay:0.8s]">
          <Star className="h-full w-full" />
        </div>
        <div className="holiday-sticker absolute top-[92%] left-3 h-8 w-8 -rotate-8 opacity-65 [animation-delay:1.3s]">
          <Holly className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export function HolidayHolly({ className = "" }: { className?: string }) {
  return <Holly className={className} />;
}

export function HolidayOrnament({ className = "" }: { className?: string }) {
  return <Ornament className={className} />;
}
