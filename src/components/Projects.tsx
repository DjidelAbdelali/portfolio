import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Sparkles, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projects as staticProjects } from "../data/portfolioData";
import { useContent } from "../i18n/LanguageContext";
import { DemoModal } from "./DemoModal";
import { ProjectModal } from "./ProjectModal";
import { projectArt } from "./ProjectArt";
import { ProjectVideo } from "./ProjectVideo";

export function Projects() {
  const content = useContent();
  const { sections, projects: i18nProjects, ui } = content;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openDemoId, setOpenDemoId] = useState<string | null>(null);
  const [selectedProjectForReadme, setSelectedProjectForReadme] = useState<any | null>(null);

  const categories = i18nProjects?.categories || [
    { id: "all", label: "All Projects" },
    { id: "robotics", label: "Robotics" },
    { id: "automation", label: "Automation" },
    { id: "industry", label: "Industry 4.0" },
    { id: "simulation", label: "Simulations" },
    { id: "smart-systems", label: "Smart Systems" },
  ];

  // Merge static project video/demo references with translated items
  const projectList = useMemo(() => {
    const items = i18nProjects?.items || staticProjects;
    return items.filter((p: any) => {
      if (activeCategory === "all") return true;
      const categoryMatch = p.categoryId === activeCategory || p.category === activeCategory;
      const tagMatch = p.tags?.some((t: string) => t.toLowerCase().includes(activeCategory.toLowerCase()));
      return categoryMatch || tagMatch;
    });
  }, [activeCategory, i18nProjects?.items]);

  return (
    <section id="projects" className="relative py-20 border-t border-[var(--border-card)]">
      <div className="section-shell">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-tag">
            <Sparkles size={14} />
            <span>03 / {(sections.projects.eyebrow || "FEATURED PROJECTS").toUpperCase()}</span>
          </div>
          <h2 className="section-title">{sections.projects.title}</h2>
        </motion.div>

        {/* Filter Category Tabs with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-bold font-mono-code transition-all ${
                activeCategory === cat.id
                  ? "bg-[var(--accent)] text-white shadow-gold"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-card)] hover:border-[var(--accent-border)] hover:text-[var(--text-heading)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid Cards with Layout & PopLayout Motion */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projectList.map((project: any, index: number) => {
              const imageKey = project.image || project.id;
              const Art = imageKey ? projectArt[imageKey] : undefined;

              return (
                <motion.article
                  key={project.id || project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="w-card overflow-hidden flex flex-col justify-between border border-[var(--border-card)] group cursor-pointer"
                  onClick={() => setSelectedProjectForReadme(project)}
                >
                  <div>
                    {/* Card Media Banner with Zoom on Hover */}
                    <div className="relative aspect-video overflow-hidden bg-[var(--bg-body)] border-b border-[var(--border-card)]">
                      <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                        {Art ? <Art /> : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-body)] p-6 text-center">
                            <span className="font-serif-display font-bold text-lg text-[var(--accent)]">{project.title}</span>
                          </div>
                        )}
                        {imageKey && (
                          <div className="absolute inset-0 z-10">
                            <ProjectVideo videoKey={imageKey} />
                          </div>
                        )}
                      </div>

                      {project.featured && (
                        <span className="absolute top-3 left-3 z-20 rounded-md bg-[var(--accent)] px-2.5 py-1 text-[10px] font-bold font-mono-code uppercase text-white shadow-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[var(--accent-bg)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--accent)] border border-[var(--accent-border)] font-mono-code"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title with Gold Hover */}
                      <h3 className="font-serif-display font-bold text-xl text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies?.map((tech: string) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[var(--border-card)] bg-[var(--bg-body)] px-2 py-0.5 text-[11px] font-mono-code text-[var(--text-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons: View Overview & GitHub Repo */}
                  <div className="p-6 pt-0 border-t border-transparent flex gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProjectForReadme(project);
                      }}
                      className="btn-primary flex-1 justify-center text-xs py-2.5 group/btn"
                    >
                      <BookOpen size={15} />
                      <span>{ui?.viewProject || "Overview"}</span>
                      <ArrowUpRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-secondary px-3 py-2.5 text-xs inline-flex items-center justify-center"
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Demo Modal */}
      {openDemoId && <DemoModal demoId={openDemoId} onClose={() => setOpenDemoId(null)} />}

      {/* Project README Explanatory Page Modal */}
      {selectedProjectForReadme && (
        <ProjectModal
          project={selectedProjectForReadme}
          onClose={() => setSelectedProjectForReadme(null)}
          onOpenDemo={(demoId) => setOpenDemoId(demoId)}
        />
      )}
    </section>
  );
}
