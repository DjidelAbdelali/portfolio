export type LangCode = "fr" | "en" | "ar" | "es";

export type LanguageMeta = {
  code: LangCode;
  label: string; // native label shown in the switcher
  shortLabel: string; // 2-letter code shown on mobile
  dir: "ltr" | "rtl";
};

export const LANGUAGES: LanguageMeta[] = [
  { code: "fr", label: "Français", shortLabel: "FR", dir: "ltr" },
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "ar", label: "العربية", shortLabel: "AR", dir: "rtl" },
  { code: "es", label: "Español", shortLabel: "ES", dir: "ltr" },
];

export const DEFAULT_LANG: LangCode = "fr";

export function getLanguageMeta(code: LangCode): LanguageMeta {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
}
