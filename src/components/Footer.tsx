import { ArrowUp } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";

export function Footer() {
  const content = useContent();
  const { identity, footer } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-card)] bg-[var(--bg-body)] py-12 transition-colors duration-300">
      <div className="section-shell py-0 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left Brand info */}
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] font-serif-display text-sm font-bold text-white shadow-gold">
              R
            </span>
            <span className="font-serif-display text-lg font-bold tracking-tight text-[var(--text-heading)]">
              {identity.name}<span className="text-[var(--accent)]">.</span>
            </span>
          </div>
          <p className="mt-1 text-xs font-mono-code text-[var(--text-muted)]">
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs font-mono-code text-[var(--text-muted)] hidden sm:block">
            {identity.title}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-heading)] transition-all hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] shadow-sm"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
