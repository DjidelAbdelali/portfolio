import { Globe, Heart, Sparkles, Users } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";

export function LanguagesAssociations() {
  const content = useContent();
  const { languagesAssoc } = content;

  const langList = languagesAssoc?.languages || [
    { language: "Français", level: "Bilingue / Courant" },
    { language: "Anglais", level: "Technique / Professionnel" },
    { language: "Arabe", level: "Langue maternelle" },
    { language: "Espagnol", level: "Notions de base" },
  ];

  return (
    <section className="relative py-16 border-t border-[var(--border-card)]">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Languages Box */}
          <div className="lg:col-span-5 w-card p-6 border border-[var(--border-card)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]">
                <Globe size={20} />
              </div>
              <h3 className="font-serif-display font-bold text-xl text-[var(--text-heading)]">
                {languagesAssoc?.languagesTitle || "Spoken Languages"}
              </h3>
            </div>

            <div className="space-y-4">
              {langList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-[var(--border-card)] pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-serif-display font-bold text-base text-[var(--text-heading)]">
                    {item.language}
                  </span>
                  <span className="font-mono-code text-xs font-semibold text-[var(--accent)] rounded-md bg-[var(--accent-bg)] px-2.5 py-1 border border-[var(--accent-border)]">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering & Leadership Box */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="w-card p-6 border border-[var(--border-card)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)] mb-4">
                <Users size={20} />
              </div>
              <h3 className="font-serif-display font-bold text-lg text-[var(--text-heading)]">
                Scientific Club & Robotics
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Active member and mentor in university robotics competitions (MicroMouse, Line Follower, Autonomous Drones).
              </p>
            </div>

            <div className="w-card p-6 border border-[var(--border-card)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)] mb-4">
                <Heart size={20} />
              </div>
              <h3 className="font-serif-display font-bold text-lg text-[var(--text-heading)]">
                Community & Workshops
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Organizer of technical workshops on Arduino, STM32 programming, ROS2 integration, and open-source hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
