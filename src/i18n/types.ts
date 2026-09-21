export type ProjectCategoryId = "all" | "robotics" | "automation" | "industry" | "simulation" | "smart-systems";

export type Project = {
  id: string;
  title: string;
  image?: string;
  categoryId: ProjectCategoryId;
  tags: string[];
  description: string;
  technologies: string[];
  featured?: boolean;
  demoId?: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  description?: string;
  project: string;
  highlights: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  items: string[];
};

export type Internship = {
  company: string;
  title: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ToolItem = {
  id: string;
  label: string;
};

export type LanguageItem = {
  language: string;
  level: string;
};

export type AssociationItem = {
  id: string;
  title: string;
  items: string[];
};

export type ContactItem = {
  id: "email" | "phone" | "linkedin" | "location" | "languages" | "education";
  label: string;
  value: string;
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    education: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  identity: {
    name: string;
    title: string;
    specialties: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    summary: string;
  };
  hero: {
    eyebrow: string;
    summaryExtra: string;
    viewProjects: string;
    downloadCv: string;
  };
  sections: {
    about: { eyebrow: string; title: string };
    education: { eyebrow: string; title: string };
    experience: { eyebrow: string; title: string };
    projects: { eyebrow: string; title: string };
    skills: { eyebrow: string; title: string };
    languagesAssoc: { eyebrow: string; title: string };
    contact: { eyebrow: string; title: string };
  };
  about: {
    text: string;
    focus: string[];
  };
  education: EducationItem[];
  educationProjectLabel: string;
  experience: {
    items: ExperienceItem[];
    internshipsTitle: string;
    internships: Internship[];
  };
  projects: {
    categories: { id: ProjectCategoryId; label: string }[];
    items: Project[];
    viewDemo: string;
  };
  skills: {
    groups: SkillGroup[];
    toolsTitle: string;
    tools: ToolItem[];
  };
  languagesAssoc: {
    languagesTitle: string;
    languages: LanguageItem[];
    associations: AssociationItem[];
  };
  contact: {
    items: ContactItem[];
    emailCta: string;
    whatsappCta: string;
    whatsappMessage: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      defaultSubject: string;
      mailBodyName: string;
    };
  };
  demoModal: {
    title: string;
    close: string;
    loading: string;
    error: string;
  };
  footer: {
    rights: string;
  };
  languageSwitcher: {
    label: string;
  };
  ui?: {
    viewProject: string;
    readOverview: string;
    launchDemo: string;
    viewCode: string;
    close: string;
    printCv: string;
    allCategories: string;
  };
};
