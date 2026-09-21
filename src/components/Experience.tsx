import { Briefcase, Calendar, GraduationCap, Sparkles } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";

export function Experience() {
  const content = useContent();
  const { sections, experience, education } = content;

  return (
    <section id="experience" className="relative py-20 border-t border-[var(--border-card)]">
      <div className="section-shell">
        {/* Section Header */}
        <div className="mb-12">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>04 / EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className="section-title">{sections.experience.title}</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Experience Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]">
                <Briefcase size={20} />
              </div>
              <h3 className="font-serif-display font-bold text-2xl text-[var(--text-heading)]">
                {sections.experience.title}
              </h3>
            </div>

            <div className="relative border-l-2 border-[var(--accent-border)] ml-4 pl-6 space-y-8">
              {experience.items.map((item, idx) => (
                <div key={idx} className="relative w-card p-6 border border-[var(--border-card)]">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-6 h-4 w-4 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-body)] shadow-gold" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono-code text-xs font-semibold text-[var(--accent)] inline-flex items-center gap-1.5">
                      <Calendar size={13} /> {item.period}
                    </span>
                    <span className="rounded-md bg-[var(--accent-bg)] px-2.5 py-0.5 text-xs font-bold text-[var(--accent)] font-mono-code">
                      {item.company}
                    </span>
                  </div>

                  <h4 className="font-serif-display font-bold text-lg text-[var(--text-heading)] mt-3">
                    {item.role}
                  </h4>

                  <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                    {item.items.map((mission, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Background Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-serif-display font-bold text-2xl text-[var(--text-heading)]">
                {sections.education.title}
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="w-card p-6 border border-[var(--border-card)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-code text-xs font-semibold text-[var(--accent)]">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="font-serif-display font-bold text-lg text-[var(--text-heading)] mt-2">
                    {edu.degree}
                  </h4>

                  <p className="text-xs font-semibold text-[var(--accent-light)] mt-1">
                    {edu.school}
                  </p>

                  {edu.project && (
                    <div className="mt-4 rounded-lg bg-[var(--bg-body)] p-3 border border-[var(--border-card)]">
                      <span className="font-mono-code text-[11px] font-bold text-[var(--accent)] uppercase">
                        Degree Project:
                      </span>
                      <p className="text-xs text-[var(--text-main)] mt-1">{edu.project}</p>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="rounded-md border border-[var(--border-card)] bg-[var(--bg-body)] px-2 py-0.5 text-[10px] font-mono-code text-[var(--text-muted)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
