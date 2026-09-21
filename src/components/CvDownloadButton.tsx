import { useState, useRef, useEffect } from "react";
import { Download, ChevronDown, Check, FileText } from "lucide-react";
import { useLanguage, useContent } from "../i18n/LanguageContext";
import { LANGUAGES, type LangCode } from "../i18n/languages";

export function CvDownloadButton() {
  const { lang } = useLanguage();
  const content = useContent();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCvPath = (code: LangCode) => {
    return `/cv-${code}.pdf`;
  };

  return (
    <div className="relative inline-flex z-30" ref={dropdownRef}>
      {/* Primary Action Button: Native anchor download */}
      <a
        href={getCvPath(lang)}
        download={`CV_DJIDEL_Abdelali_Rayan_${lang.toUpperCase()}.pdf`}
        className="btn-secondary rounded-r-none border-r-0 inline-flex items-center gap-2"
        title={`Download CV (${lang.toUpperCase()})`}
      >
        <Download size={18} />
        <span>{content.hero?.downloadCv || "Download CV"}</span>
        <span className="rounded bg-[var(--accent-bg)] px-1.5 py-0.5 font-mono-code text-[10px] font-bold text-[var(--accent)] uppercase border border-[var(--accent-border)]">
          {lang.toUpperCase()}
        </span>
      </a>

      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="btn-secondary rounded-l-none px-2.5 hover:bg-[var(--accent-bg)] transition-colors"
        aria-label="Select CV language"
      >
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Language Selection Menu */}
      {open && (
        <div className="absolute top-full mt-2 left-0 z-50 min-w-[210px] rounded-xl border border-[var(--border-card)] bg-[var(--bg-body)] p-1.5 shadow-2xl backdrop-blur-xl">
          <div className="px-3 py-1.5 text-[10px] font-mono-code font-bold uppercase text-[var(--text-muted)] border-b border-[var(--border-card)] mb-1">
            Download CV (PDF)
          </div>
          {LANGUAGES.map((item) => (
            <a
              key={item.code}
              href={getCvPath(item.code as LangCode)}
              download={`CV_DJIDEL_Abdelali_Rayan_${item.code.toUpperCase()}.pdf`}
              onClick={() => setOpen(false)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                lang === item.code
                  ? "bg-[var(--accent-bg)] text-[var(--accent)]"
                  : "text-[var(--text-main)] hover:bg-[var(--bg-card)] hover:text-[var(--text-heading)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText size={14} className="text-[var(--accent)]" />
                <span>{item.label} (PDF)</span>
              </span>
              {lang === item.code && <Check size={14} className="text-[var(--accent)]" />}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
