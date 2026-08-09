import Image from "next/image";

type MediaPlaceholderProps = {
  label?: string;
  tone?: "moss" | "kodo" | "film" | "neutral";
  className?: string;
  aspectClassName?: string;
  /** When ready, pass a real asset path — component keeps the same outer structure. */
  src?: string;
  alt?: string;
};

const toneStyles: Record<
  NonNullable<MediaPlaceholderProps["tone"]>,
  string
> = {
  moss: "bg-[#dfe8dc]",
  kodo: "bg-[#dde2df]",
  film: "bg-[#e6dfd6]",
  neutral: "bg-[#e4e0da]",
};

const toneAccents: Record<
  NonNullable<MediaPlaceholderProps["tone"]>,
  { orb: string; wash: string; grain: string }
> = {
  moss: {
    orb: "bg-[radial-gradient(circle_at_center,rgba(120,145,118,0.45),transparent_68%)]",
    wash: "bg-[linear-gradient(145deg,rgba(255,255,255,0.55)_0%,transparent_42%,rgba(90,110,85,0.12)_100%)]",
    grain: "from-[#c5d1bf] via-[#b7c6b0] to-[#a8b9a2]",
  },
  kodo: {
    orb: "bg-[radial-gradient(circle_at_center,rgba(110,120,115,0.4),transparent_68%)]",
    wash: "bg-[linear-gradient(145deg,rgba(255,255,255,0.5)_0%,transparent_42%,rgba(70,80,75,0.12)_100%)]",
    grain: "from-[#c5cbc7] via-[#b8bfbb] to-[#aab2ad]",
  },
  film: {
    orb: "bg-[radial-gradient(circle_at_center,rgba(150,130,110,0.4),transparent_68%)]",
    wash: "bg-[linear-gradient(145deg,rgba(255,255,255,0.5)_0%,transparent_40%,rgba(90,75,60,0.14)_100%)]",
    grain: "from-[#d4c7b8] via-[#c7b8a7] to-[#b8a794]",
  },
  neutral: {
    orb: "bg-[radial-gradient(circle_at_center,rgba(130,125,115,0.35),transparent_68%)]",
    wash: "bg-[linear-gradient(145deg,rgba(255,255,255,0.55)_0%,transparent_45%,rgba(80,75,65,0.1)_100%)]",
    grain: "from-[#d8d3cb] via-[#ccc6bc] to-[#beb8ae]",
  },
};

/**
 * Structured media slot for future photography / product art.
 * Prefer `src` when assets arrive; otherwise renders an editorial placeholder visual.
 */
export function MediaPlaceholder({
  label,
  tone = "neutral",
  className = "",
  aspectClassName = "aspect-[4/5]",
  src,
  alt,
}: MediaPlaceholderProps) {
  const accents = toneAccents[tone];

  return (
    <div
      className={`relative overflow-hidden ${aspectClassName} ${src ? "bg-surface-muted" : toneStyles[tone]} ${className}`}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : (label ?? alt ?? "Media placeholder")}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <>
          <div
            aria-hidden
            className={`absolute -top-[18%] -right-[12%] h-[70%] w-[70%] rounded-full blur-2xl ${accents.orb}`}
          />
          <div
            aria-hidden
            className={`absolute -bottom-[22%] -left-[18%] h-[65%] w-[65%] rounded-full opacity-80 blur-3xl ${accents.orb}`}
          />
          <div aria-hidden className={`absolute inset-0 ${accents.wash}`} />
          <div
            aria-hidden
            className={`absolute inset-[18%] rounded-[42%] bg-gradient-to-br opacity-50 blur-[1px] ${accents.grain}`}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35] mix-blend-soft-light [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]"
          />
        </>
      )}
    </div>
  );
}
