import type { LangCode } from "./languages";
import type { Content } from "./types";
import { fr } from "./translations/fr";
import { en } from "./translations/en";
import { ar } from "./translations/ar";
import { es } from "./translations/es";

export const translations: Record<LangCode, Content> = { fr, en, ar, es };

export type { Content };
