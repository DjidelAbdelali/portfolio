import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, X, Github, Cpu, Wrench, CheckCircle2, Sparkles, BookOpen, Layers } from "lucide-react";
import { useLanguage, useContent } from "../i18n/LanguageContext";
import { projectReadmes, type ProjectReadme } from "../data/projectReadmes";
import { projectArt } from "./ProjectArt";
import { ProjectVideo } from "./ProjectVideo";

type ProjectModalProps = {
  project: any;
  onClose: () => void;
  onOpenDemo?: (demoId: string) => void;
};

export function ProjectModal({ project, onClose, onOpenDemo }: ProjectModalProps) {
  const { lang } = useLanguage();
  const content = useContent();
  const { ui } = content;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const projectId = project.id || project.image || "default";
  const readme: ProjectReadme | undefined = projectReadmes[projectId]?.[lang] || projectReadmes[projectId]?.fr;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const imageKey = project.image || project.id;
  const Art = imageKey ? projectArt[imageKey] : undefined;

  return (
    <AnimatePresence>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl rounded-2xl border border-[var(--border-card)] bg-[var(--bg-body)] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[var(--border-card)] px-6 py-4 bg-[var(--bg-card)]">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)] font-mono-code font-bold text-xs">
                PROJ
              </span>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-[var(--text-heading)] line-clamp-1">
                  {project.title}
                </h3>
                <p className="font-mono-code text-[11px] text-[var(--accent)]">
                  {ui?.readOverview || "README Documentation"}
                </p>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-card)] text-[var(--text-main)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] transition-colors"
              aria-label={ui?.close || "Close"}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Top Media Banner */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)]">
              {Art ? <Art /> : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-body)] p-6 text-center">
                  <span className="font-serif-display font-bold text-2xl text-[var(--accent)]">{project.title}</span>
                </div>
              )}
              {imageKey && (
                <div className="absolute inset-0 z-10">
                  <ProjectVideo videoKey={imageKey} />
                </div>
              )}
            </div>

            {/* Quick Action Badges & Demo Launch Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-card)] pb-6">
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--accent-bg)] px-3 py-1 text-xs font-semibold text-[var(--accent)] border border-[var(--accent-border)] font-mono-code"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.demoId && onOpenDemo && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenDemo(project.demoId);
                    }}
                    className="btn-primary py-2.5 px-5 text-xs shadow-gold animate-pulse"
                  >
                    <Play size={16} className="fill-current" />
                    <span>{ui?.launchDemo || "Start Interactive Demo"}</span>
                  </button>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-4 text-xs"
                  >
                    <ExternalLink size={14} />
                    <span>Full Live Demo</span>
                  </a>
                )}

                <a
                  href={project.githubUrl || readme?.githubUrl || "https://github.com/DjidelAbdelali"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2.5 px-4 text-xs"
                >
                  <Github size={15} />
                  <span>{ui?.viewCode || "View Code"}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Structured README Markdown Content */}
            <div className="space-y-6 text-[var(--text-main)]">
              {/* Overview */}
              <section className="w-card p-6 border border-[var(--border-card)]">
                <div className="flex items-center gap-2 mb-3 text-[var(--accent)]">
                  <BookOpen size={18} />
                  <h4 className="font-serif-display font-bold text-base text-[var(--text-heading)] uppercase tracking-wider">
                    Overview & Purpose
                  </h4>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--text-main)]">
                  {readme?.overview || project.description}
                </p>
              </section>

              {/* Features List */}
              {readme?.features && (
                <section className="w-card p-6 border border-[var(--border-card)]">
                  <div className="flex items-center gap-2 mb-4 text-[var(--accent)]">
                    <Sparkles size={18} />
                    <h4 className="font-serif-display font-bold text-base text-[var(--text-heading)] uppercase tracking-wider">
                      Key Technical Features
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {readme.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-main)]">
                        <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Architecture & Stack Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {readme?.architecture && (
                  <section className="w-card p-6 border border-[var(--border-card)]">
                    <div className="flex items-center gap-2 mb-3 text-[var(--accent)]">
                      <Cpu size={18} />
                      <h4 className="font-serif-display font-bold text-base text-[var(--text-heading)] uppercase tracking-wider">
                        Architecture
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                      {readme.architecture}
                    </p>
                  </section>
                )}

                <section className="w-card p-6 border border-[var(--border-card)]">
                  <div className="flex items-center gap-2 mb-3 text-[var(--accent)]">
                    <Layers size={18} />
                    <h4 className="font-serif-display font-bold text-base text-[var(--text-heading)] uppercase tracking-wider">
                      Technologies & Tools
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.technologies?.map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--border-card)] bg-[var(--bg-body)] px-2.5 py-1 text-xs font-mono-code text-[var(--text-main)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Engineering Challenges */}
              {readme?.challenges && (
                <section className="w-card p-6 border border-[var(--border-card)]">
                  <div className="flex items-center gap-2 mb-3 text-[var(--accent)]">
                    <Wrench size={18} />
                    <h4 className="font-serif-display font-bold text-base text-[var(--text-heading)] uppercase tracking-wider">
                      Engineering Challenges & Solutions
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
                    {readme.challenges.map((chal, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-bold">•</span>
                        <span>{chal}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between border-t border-[var(--border-card)] px-6 py-4 bg-[var(--bg-card)]">
            <span className="font-mono-code text-xs text-[var(--text-muted)]">
              DJIDEL Abdelali Rayan — Technical Documentation
            </span>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary py-1.5 px-4 text-xs"
            >
              {ui?.close || "Close"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
