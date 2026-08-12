import { splitEmphasis } from "@/lib/text/emphasis";

export function EmphasisLine({
  text,
  words,
  toneStart = 0,
}: {
  text: string;
  words: string[];
  toneStart?: number;
}) {
  const parts = splitEmphasis(text, words, toneStart);

  return (
    <span className="block">
      {parts.map((part, index) =>
        part.hot ? (
          <span
            key={`${index}-${part.text}`}
            className={`film-hero-emphasis film-hero-emphasis--${part.tone}`}
          >
            {part.text}
          </span>
        ) : (
          <span key={`${index}-${part.text}`}>{part.text}</span>
        ),
      )}
    </span>
  );
}
