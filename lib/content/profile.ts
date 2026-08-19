/**
 * Studio principal profile — media path is replaceable.
 */
export const profileMedia = {
  photo: "/images/home/logo0819.png",
  hasPhoto: true,
  monogram: "O",
} as const;

export const profileSkillKeys = [
  "insight",
  "business",
  "systems",
  "product",
  "learning",
  "execution",
] as const;

export type ProfileSkillKey = (typeof profileSkillKeys)[number];
