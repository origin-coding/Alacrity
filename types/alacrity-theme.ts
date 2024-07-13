// Original theme definition.
export const AlacrityThemes = {
  light: "light",
  dark: "dark",
  system: "system",
} as const;

// Exported theme type.
export type AlacrityThemeType = keyof typeof AlacrityThemes;

// Exported theme list.
export const AlacrityThemeList: Array<AlacrityThemeType> = Object.keys(
  AlacrityThemes,
) as Array<AlacrityThemeType>;
