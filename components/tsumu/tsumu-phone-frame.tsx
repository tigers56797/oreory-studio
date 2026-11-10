import Image from "next/image";
import { tsumuMedia } from "@/lib/content/tsumu";

type TsumuPhoneFrameProps = {
  src?: string | null;
  alt: string;
  /** Shown while the real screenshot is pending */
  pendingLabel: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Phone frame for TSUMU app screenshots.
 * Renders a neutral placeholder until a real screenshot `src` is provided.
 */
export function TsumuPhoneFrame({
  src,
  alt,
  pendingLabel,
  sizes,
  priority = false,
  className = "",
}: TsumuPhoneFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] border-[5px] border-[#1f2a24] bg-[#1f2a24] shadow-[0_24px_50px_rgba(30,60,45,0.18)] ${className}`}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.2rem] bg-[linear-gradient(170deg,var(--tsumu-sky)_0%,#ffffff_55%,var(--tsumu-primary-soft)_100%)]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-contain object-top"
            sizes={sizes}
          />
        ) : (
          <div className="absolute inset-3 flex flex-col items-center justify-center gap-2 rounded-[0.9rem] border border-dashed border-[var(--tsumu-primary-muted)] text-center">
            <Image
              src={tsumuMedia.logo}
              alt=""
              width={44}
              height={44}
              className="h-9 w-9 object-contain opacity-80 sm:h-11 sm:w-11"
            />
            <span className="px-2 text-[11px] leading-snug text-foreground-subtle">
              {pendingLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
