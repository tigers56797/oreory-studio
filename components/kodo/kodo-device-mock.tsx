import Image from "next/image";

type KodoDeviceMockProps = {
  variant?: "desktop" | "phone";
  src?: string;
  alt?: string;
  className?: string;
};

export function KodoDeviceMock({
  variant = "desktop",
  src,
  alt = "Kodo",
  className = "",
}: KodoDeviceMockProps) {
  if (variant === "phone") {
    return (
      <div
        className={`relative w-[150px] overflow-hidden rounded-[1.75rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_20px_50px_rgba(30,50,35,0.18)] sm:w-[170px] ${className}`}
      >
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.35rem] bg-[#f3f7f3]">
          {src ? (
            <Image src={src} alt={alt} fill className="object-cover object-top" sizes="170px" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-[var(--kodo-primary)] text-xl font-semibold text-[var(--kodo-primary)]">
                25:00
              </div>
              <div className="h-8 w-24 rounded-full bg-[var(--kodo-primary)]/90" />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full max-w-[520px] overflow-hidden rounded-[1.25rem] border border-border bg-[#1f1f1f] p-2 shadow-[0_24px_60px_rgba(30,50,35,0.14)] ${className}`}
    >
      <div className="overflow-hidden rounded-[0.9rem] bg-[#eef4ee]">
        <div className="relative aspect-[16/10]">
          {src ? (
            <Image src={src} alt={alt} fill className="object-cover" sizes="520px" />
          ) : (
            <div className="absolute inset-0 p-5">
              <div className="mb-4 h-3 w-28 rounded-full bg-black/10" />
              <div className="grid h-[78%] grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/80 shadow-soft" />
                <div className="rounded-2xl bg-white/70 shadow-soft" />
                <div className="rounded-2xl bg-[linear-gradient(160deg,rgba(76,124,84,0.18),rgba(255,255,255,0.8))] shadow-soft" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
