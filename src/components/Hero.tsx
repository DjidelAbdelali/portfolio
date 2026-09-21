import { motion } from "framer-motion";
import { ArrowDownRight, Award, Briefcase, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import { CvDownloadButton } from "./CvDownloadButton";

export function Hero() {
  const content = useContent();
  const { identity, hero } = content;

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 flex items-center">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 hero-glow-bg pointer-events-none" />

      <div className="section-shell relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Status Pill Indicator */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-4 py-1.5 text-xs font-semibold text-[var(--accent)] w-fit shadow-sm">
              <span className="status-dot-pulse" />
              <span>{identity.location} · {identity.title}</span>
            </div>

            {/* Monospaced Name Subtitle */}
            <p className="font-mono-code text-sm font-semibold tracking-wider text-[var(--accent)] uppercase mb-2">
              — {identity.name}
            </p>

            {/* Main Serif Title (Walidozich format) */}
            <h1 className="font-serif-display text-4xl font-bold tracking-tight text-[var(--text-heading)] sm:text-6xl lg:text-7xl leading-[1.08]">
              {identity.title}<span className="text-[var(--accent)]">.</span>
            </h1>

            {/* Specialties & Summary */}
            <p className="mt-4 font-mono-code text-sm sm:text-base font-medium text-[var(--accent-light)]">
              {identity.specialties}
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--text-muted)] max-w-2xl">
              {identity.summary} {hero.summaryExtra}
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a href="#contact" className="btn-primary">
                <Mail size={18} />
                <span>{content.nav.contact}</span>
              </a>

              <a href="#projects" className="btn-secondary">
                <span>{hero.viewProjects}</span>
                <ArrowDownRight size={18} />
              </a>

              <CvDownloadButton />
            </div>

            {/* Location & Quick Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono-code text-[var(--text-muted)] border-t border-[var(--border-card)] pt-6">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-[var(--accent)]" /> {identity.location}
              </span>
              <a href={`mailto:${identity.email}`} className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
                <Mail size={15} className="text-[var(--accent)]" /> {identity.email}
              </a>
            </div>
          </motion.div>

          {/* Right Hero Column: Profile Frame & Quick Stats (Walidozich style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-[var(--accent-border)] opacity-60 animate-pulse pointer-events-none" />

              {/* Main Avatar Frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-[var(--accent-border)] bg-[var(--bg-card)] shadow-gold">
                {/* Fallback Initials Badge (Clean, no text overlap) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-body)] text-center p-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[var(--accent-bg)] border border-[var(--accent-border)] text-3xl font-serif-display font-bold text-[var(--accent)] shadow-gold">
                    DAR
                  </div>
                </div>

                <img
                  src="/profile.jpg"
                  alt={identity.name}
                  className="absolute inset-0 h-full w-full object-cover z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-body)] via-transparent to-transparent opacity-40 z-20" />
              </div>

              {/* Quick Stat Badge 1 (Floating top-left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-4 -left-4 z-30 w-card p-3 flex items-center gap-3 border border-[var(--accent-border)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-bg)] text-[var(--accent)]">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="font-serif-display text-lg font-bold text-[var(--text-heading)]">1+ Years</div>
                  <div className="font-mono-code text-[10px] text-[var(--text-muted)] uppercase">Field Exp.</div>
                </div>
              </motion.div>

              {/* Quick Stat Badge 2 (Floating bottom-right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-30 w-card p-3 flex items-center gap-3 border border-[var(--accent-border)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-bg)] text-[var(--accent)]">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-serif-display text-lg font-bold text-[var(--text-heading)]">10+ Projects</div>
                  <div className="font-mono-code text-[10px] text-[var(--text-muted)] uppercase">Industrial & 3D</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
