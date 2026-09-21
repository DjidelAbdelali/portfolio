import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LANG, getLanguageMeta, type LangCode } from "./languages";
import { translations } from "./translations";

const STORAGE_KEY = "portfolio-lang";

type LanguageContextValue = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): LangCode {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const stored = window.localStorage.getItem(STORAGE_KEY) as LangCode | null;
  if (stored && stored in translations) return stored;

  const browserLang = window.navigator.language?.slice(0, 2).toLowerCase();
  if (browserLang && browserLang in translations) return browserLang as LangCode;

  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(detectInitialLang);

  const meta = getLanguageMeta(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.documentElement.classList.toggle("font-arabic", lang === "ar");
    const content = translations[lang];
    document.title = content.meta.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", content.meta.description);
  }, [lang, meta.dir]);

  function setLang(next: LangCode) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const value = useMemo(() => ({ lang, setLang, dir: meta.dir }), [lang, meta.dir]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}

export function useContent() {
  const { lang } = useLanguage();
  return translations[lang];
}
