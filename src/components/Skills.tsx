import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, Sparkles, Terminal, Wrench, X } from "lucide-react";
import { useState } from "react";
import { useContent } from "../i18n/LanguageContext";

export function Skills() {
  const content = useContent();
  const { sections, skills } = content;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");

  const skillGroups = skills?.groups || [
    {
      label: "Automatique & Contrôle-Commande",
      items: ["Modélisation", "Asservissement", "Commande numérique", "Filtrage de Kalman", "Optimisation"],
    },
    {
      label: "Robotique",
      items: ["ROS / ROS2", "Cinématique", "Planification de trajectoires", "Vision par ordinateur", "Navigation"],
    },
    {
      label: "Systèmes embarqués",
      items: ["STM32", "Arduino", "ESP32", "Raspberry Pi", "C/C++", "Python", "RTOS"],
    },
    {
      label: "Automatisation industrielle",
      items: ["PLC (Siemens, Schneider)", "TIA Portal", "WinCC", "Grafcet", "Bus de terrain"],
    },
  ];

  const tools = skills?.tools || [
    { id: "matlab", label: "MATLAB / Simulink" },
    { id: "solidworks", label: "SolidWorks / CAO" },
    { id: "tiaportal", label: "Siemens TIA Portal" },
    { id: "ros2", label: "ROS2 & Gazebo" },
    { id: "python", label: "Python & PyTorch" },
  ];

  const marqueeItems = [
    "Siemens TIA Portal",
    "ROS2 & Gazebo",
    "MATLAB / Simulink",
    "SolidWorks 3D",
    "C / C++",
    "Python & PyTorch",
    "STM32 & RTOS",
    "Arduino & ESP32",
    "React & TypeScript",
    "IEC 61131-3 PLC",
    "Kalman Filter",
    "Grafcet & Ladder",
  ];

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((_, idx) => idx === activeCategory);

  return (
    <section id="skills" className="relative py-20 border-t border-[var(--border-card)]">
      <div className="section-shell">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4"
        >
          <div>
            <div className="section-tag">
              <Sparkles size={14} />
              <span>02 / {(sections.skills.eyebrow || "MY SKILLS").toUpperCase()}</span>
            </div>
            <h2 className="section-title">{sections.skills.title}</h2>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="btn-primary w-fit text-sm"
          >
            <Layers size={16} />
            <span>View All Tech Stack</span>
          </button>
        </motion.div>

        {/* Walidozich Infinite Marquee Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-10 overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] py-3.5 shadow-sm"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg-card)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg-card)] to-transparent z-10" />
          
          <div className="animate-marquee flex gap-4 items-center">
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 rounded-xl bg-[var(--accent-bg)] px-4 py-2 text-xs font-mono-code font-bold text-[var(--accent)] border border-[var(--accent-border)] shrink-0 transition-transform hover:scale-105"
              >
                <Terminal size={14} />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-bold font-mono-code transition-all ${
              activeCategory === "all"
                ? "bg-[var(--accent)] text-white shadow-gold"
                : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-card)] hover:border-[var(--accent-border)] hover:text-[var(--text-heading)]"
            }`}
          >
            All Categories
          </button>
          {skillGroups.map((group, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCategory(idx)}
              className={`rounded-full px-4 py-2 text-xs font-bold font-mono-code transition-all ${
                activeCategory === idx
                  ? "bg-[var(--accent)] text-white shadow-gold"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-card)] hover:border-[var(--accent-border)] hover:text-[var(--text-heading)]"
              }`}
            >
              {group.label}
            </button>
          ))}
        </motion.div>

        {/* Skill Category Cards Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, index) => (
              <motion.div
                key={group.label}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="w-card p-6 border border-[var(--border-card)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]">
                    <Cpu size={20} />
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-[var(--text-heading)]">
                    {group.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {group.items.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-body)] px-3 py-1.5 text-xs font-medium text-[var(--text-main)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)] shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Industrial Tools Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 w-card p-6 border border-[var(--border-card)]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Wrench size={18} className="text-[var(--accent)]" />
            <h3 className="font-serif-display font-bold text-lg text-[var(--text-heading)]">
              {skills?.toolsTitle || "Tools & Platforms"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-body)] p-3 text-sm font-semibold text-[var(--text-main)] shadow-sm hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-bg)] text-[var(--accent)]">
                  <Terminal size={16} />
                </div>
                <span className="truncate">{tool.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Slide-over Skills Drawer / Sheet */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-lg bg-[var(--bg-body)] h-full overflow-y-auto p-6 sm:p-8 shadow-2xl border-l border-[var(--border-card)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[var(--border-card)]">
                  <div>
                    <h3 className="font-serif-display font-bold text-2xl text-[var(--text-heading)]">
                      Full Tech Stack
                    </h3>
                    <p className="font-mono-code text-xs text-[var(--accent)] mt-1">
                      Complete breakdown of technical competencies
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-card)] text-[var(--text-main)] hover:bg-[var(--accent-bg)] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-6">
                  {skillGroups.map((group, idx) => (
                    <div key={idx} className="w-card p-5 border border-[var(--border-card)]">
                      <h4 className="font-serif-display font-bold text-base text-[var(--accent)] mb-3">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item, iIdx) => (
                          <span
                            key={iIdx}
                            className="rounded-md border border-[var(--border-card)] bg-[var(--bg-body)] px-2.5 py-1 text-xs text-[var(--text-main)] font-mono-code"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-card)] mt-8">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="btn-secondary w-full justify-center"
                >
                  Close Drawer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
