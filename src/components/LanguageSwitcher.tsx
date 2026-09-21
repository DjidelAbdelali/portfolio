import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES, type LangCode } from "../i18n/languages";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher-bar">
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code as LangCode)}
          className={`lang-btn ${lang === item.code ? "active" : ""}`}
          title={item.label}
          aria-label={item.label}
        >
          {item.shortLabel}
        </button>
      ))}
    </div>
  );
}
