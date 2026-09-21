import { Cpu, Factory, Layers, Sparkles, Workflow } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";

export function About() {
  const content = useContent();
  const { sections, about, education, identity } = content;

  const focusIcons = [
    { label: about.focus?.[0] || "Industrial Robotics", icon: Cpu },
    { label: about.focus?.[1] || "Embedded Systems", icon: Layers },
    { label: about.focus?.[2] || "Digital Twins", icon: Workflow },
    { label: about.focus?.[3] || "Industry 4.0", icon: Factory },
  ];

  const mainEducation = education?.[0];

  return (
    <section id="about" className="relative py-20 border-t border-[var(--border-card)]">
      <div className="section-shell">
        {/* Section Header with Monospaced Tag */}
        <div className="mb-12">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>01 / {(sections.about.eyebrow || "ABOUT").toUpperCase()}</span>
          </div>
          <h2 className="section-title">{sections.about.title}</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Biography Text Column */}
          <div className="lg:col-span-7 w-card p-8 sm:p-10 border border-[var(--border-card)]">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-main)]">
              {about.text}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--border-card)] pt-6">
              <div>
                <span className="font-mono-code text-xs text-[var(--accent)] uppercase tracking-wider">
                  {sections.education.title}
                </span>
                <div className="font-serif-display font-bold text-base sm:text-lg text-[var(--text-heading)] mt-1 line-clamp-2">
                  {mainEducation?.degree || "Master"}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  {mainEducation?.school || "USTHB"}
                </div>
              </div>
              <div>
                <span className="font-mono-code text-xs text-[var(--accent)] uppercase tracking-wider">
                  {sections.skills.eyebrow}
                </span>
                <div className="font-serif-display font-bold text-base sm:text-lg text-[var(--text-heading)] mt-1 line-clamp-2">
                  {identity.title}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5 truncate">
                  {identity.specialties}
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {focusIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="w-card p-5 flex items-center gap-4 border border-[var(--border-card)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="font-serif-display font-bold text-base text-[var(--text-heading)]">
                      {item.label}
                    </div>
                    <div className="font-mono-code text-xs text-[var(--text-muted)] mt-0.5">
                      {sections.about.eyebrow}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
