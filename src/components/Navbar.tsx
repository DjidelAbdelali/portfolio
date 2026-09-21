import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import { useContent } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const content = useContent();

  const navLinks = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.skills, href: "#skills" },
    { label: content.nav.projects, href: "#projects" },
    { label: content.nav.experience, href: "#experience" },
    { label: content.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-card)] bg-[var(--bg-nav)] backdrop-blur-xl transition-colors duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] font-serif-display text-lg font-bold text-white shadow-gold transition-transform group-hover:scale-105">
            R
          </span>
          <span className="font-serif-display text-xl font-bold tracking-tight text-[var(--text-heading)]">
            Rayan<span className="text-[var(--accent)]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions (4-Language Switcher, Theme Toggle, Contact CTA) */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <a href="#contact" className="btn-primary py-2 px-4 text-sm">
            <Send size={15} />
            <span>{content.nav.contact}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-main)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-[var(--border-card)] bg-[var(--bg-body)] px-4 py-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-3">
            <div className="mb-2 flex items-center justify-between border-b border-[var(--border-card)] pb-3">
              <span className="text-xs font-semibold text-[var(--text-muted)] font-mono-code">
                {content.languageSwitcher?.label || "LANGUAGE"}
              </span>
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-[var(--text-main)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center py-2.5"
            >
              <Send size={16} />
              <span>{content.nav.contact}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
