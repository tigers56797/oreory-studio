import Image from "next/image";

type MossPhoneMockProps = {
  src?: string;
  alt?: string;
  className?: string;
  tone?: "light" | "dark" | "ticket";
  /** How the screenshot fills the screen */
  fit?: "contain" | "cover";
};

/**
 * Replaceable phone frame for MOSS visuals.
 * Pass `src` when real screenshots are ready.
 */
export function MossPhoneMock({
  src,
  alt = "MOSS app",
  className = "",
  tone = "light",
  fit = "contain",
}: MossPhoneMockProps) {
  const toneClass =
    tone === "dark"
      ? "bg-[#1c1830]"
      : tone === "ticket"
        ? "bg-[#f6f1ff]"
        : "bg-[#f7f5fc]";

  return (
    <div
      className={`relative mx-auto w-[min(100%,240px)] overflow-hidden rounded-[2rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_24px_60px_rgba(40,20,90,0.18)] sm:w-[260px] ${className}`}
    >
      <div className={`relative aspect-[9/19] overflow-hidden rounded-[1.55rem] ${toneClass}`}>
        {src ? (
          <div className="absolute inset-[2%]">
            <Image
              src={src}
              alt={alt}
              fill
              className={
                fit === "cover"
                  ? "object-cover object-top"
                  : "object-contain object-center"
              }
              sizes="260px"
              priority
            />
          </div>
        ) : (
          <div className="absolute inset-0 p-4">
            <div className="mx-auto h-1.5 w-16 rounded-full bg-black/10" />
            <div className="mt-5 space-y-3">
              <div className="h-24 rounded-2xl bg-white/80 shadow-soft" />
              <div className="h-16 rounded-2xl bg-white/70 shadow-soft" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-20 rounded-2xl bg-white/75 shadow-soft" />
                <div className="h-20 rounded-2xl bg-white/75 shadow-soft" />
              </div>
              <div className="h-28 rounded-2xl bg-[linear-gradient(160deg,rgba(123,97,255,0.18),rgba(255,255,255,0.7))]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
