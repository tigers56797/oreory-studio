export type EmphasisPart = {
  text: string;
  hot: boolean;
  tone: number;
};

export function splitEmphasis(
  text: string,
  words: string[],
  toneStart = 0,
): EmphasisPart[] {
  const sorted = [...words].sort((a, b) => b.length - a.length);
  const parts: EmphasisPart[] = [];
  let index = 0;
  let tone = toneStart;

  while (index < text.length) {
    const rest = text.slice(index);
    const restLower = rest.toLowerCase();
    const match = sorted.find(
      (word) => rest.startsWith(word) || restLower.startsWith(word.toLowerCase()),
    );

    if (match) {
      parts.push({
        text: rest.slice(0, match.length),
        hot: true,
        tone: tone++ % 4,
      });
      index += match.length;
      continue;
    }

    let cursor = index + 1;
    while (cursor < text.length) {
      const next = text.slice(cursor);
      const nextLower = next.toLowerCase();
      if (
        sorted.some(
          (word) => next.startsWith(word) || nextLower.startsWith(word.toLowerCase()),
        )
      ) {
        break;
      }
      cursor += 1;
    }

    parts.push({ text: text.slice(index, cursor), hot: false, tone: 0 });
    index = cursor;
  }

  return parts;
}
