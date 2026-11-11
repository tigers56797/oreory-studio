export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
        {eyebrow}
      </p>
      <h2 className="mt-2 whitespace-pre-line text-[clamp(1.45rem,2.6vw,2rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-foreground">
        {title}
      </h2>
    </div>
  );
}
