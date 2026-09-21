import {
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Cpu,
  Factory,
  FileCode2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Settings2,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const identity = {
  name: "DJIDEL Abdelali Rayan",
  title: "Ingénieur en Automatique et Systèmes",
  specialties: "Robotique · Automatisation industrielle · Systèmes intelligents · Industrie 4.0",
  location: "Alger, Algérie",
  phone: "+213 555 662 744",
  email: "djidelabdelali@gmail.com",
  linkedin: "linkedin.com/in/djidel-abdelali-rayan-814b25207",
  summary:
    "Diplômé en Automatique et Systèmes de l'USTHB, passionné par la robotique, les systèmes automatisés, l'intelligence artificielle appliquée à l'industrie et les technologies émergentes.",
};

export const navItems = [
  ["Accueil", "accueil"],
  ["À propos", "apropos"],
  ["Formation", "formation"],
  ["Expérience", "experience"],
  ["Projets", "projets"],
  ["Compétences", "competences"],
  ["Contact", "contact"],
] as const;

export const about =
  "Je suis diplômé d'un Master en Automatique et Systèmes à l'Université des Sciences et de la Technologie Houari Boumediene. Mon parcours combine des compétences en automatique, contrôle-commande, instrumentation, robotique, systèmes embarqués, modélisation, simulation et automatisation industrielle. Je m'intéresse particulièrement aux systèmes intelligents, à la robotique industrielle, aux technologies immersives, aux jumeaux numériques, à l'IA industrielle et aux systèmes embarqués appliqués aux secteurs automobile et aéronautique.";

export const education = [
  {
    degree: "Master en Automatique et Systèmes",
    school: "Université des Sciences et de la Technologie Houari Boumediene - USTHB",
    period: "2023 - 2025",
    description:
      "Formation orientée vers l'analyse, la commande, la modélisation et l'automatisation des systèmes industriels.",
    project: "Conception, réalisation et commande d'un robot parallèle de type Delta.",
    highlights: [
      "Modélisation cinématique",
      "Commande avancée",
      "Conception mécanique",
      "Validation expérimentale",
      "MATLAB/Simulink",
      "SolidWorks",
      "Arduino",
    ],
  },
  {
    degree: "Licence en Automatique",
    school: "Université des Sciences et de la Technologie Houari Boumediene - USTHB",
    period: "2021 - 2023",
    project: "Étude et conception d'un convoyeur pour le tri électrostatique de matériaux précieux.",
    highlights: ["Automatisation", "Conception mécanique", "Procédés industriels"],
  },
  {
    degree: "Baccalauréat série Mathématiques",
    school: "Lycée Mohammed Bedjaoui",
    period: "2019 - 2020",
    highlights: ["Base scientifique", "Mathématiques", "Rigueur analytique"],
  },
];

export const experience = [
  {
    role: "Enseignant vacataire - Département Électronique et Automatique",
    company: "USTHB",
    period: "Octobre 2025 - Juin 2026",
    items: [
      "Encadrement d'étudiants dans les modules liés à l'automatique et aux systèmes industriels.",
      "Modules: asservissement échantillonné, automates programmables industriels, ROS2.",
      "Préparation et accompagnement des travaux pratiques.",
      "Encadrement de projets techniques en robotique, contrôle-commande et automatisation.",
    ],
  },
  {
    role: "Responsable R&D / Ingénieur Systèmes Embarqués",
    company: "Innovat Electra Tech",
    period: "2025 - Présent",
    items: [
      "Développement du système SYTRAC (SYTRAC ITS) — Solution globale de gestion intelligente du trafic et Smart City.",
      "Conception et intégration des cartes électroniques, capteurs intelligents IoT, contrôle-commande et supervision en temps réel.",
      "Analyse des besoins techniques, architectures embarquées et déploiement de solutions Smart City & automatisation.",
    ],
  },
  {
    role: "Agent technique SAV",
    company: "EURL Electromax",
    period: "Septembre 2025 - Octobre 2025",
    items: [
      "Diagnostic et maintenance de systèmes électroniques.",
      "Assistance technique et support après-vente.",
      "Identification de pannes et vérification de fonctionnement.",
    ],
  },
];

export const internships: Array<[string, string, string, string]> = [
  ["Sonatrach", "Stage de découverte des unités de raffinerie", "Juillet 2024", "Procédés industriels, instrumentation, contrôle, supervision et sécurité."],
  ["SARL Les Techniciens Conseil - LTC", "Conception d'armoires électriques industrielles", "Mars 2023 - Avril 2023", "Lecture de schémas électriques et découverte des composants industriels."],
  ["Organisation Internationale pour les Migrations - OIM", "Suivi et évaluation de projets", "Mars 2023 - Juillet 2023", "Organisation, communication professionnelle et coordination."],
  ["Faïenceries Algériennes", "Stage d'initiation à l'automatisme", "Juillet 2022 - Août 2022", "Découverte des équipements de production et automatismes industriels."],
];

export const projectCategories = ["Tous", "Robotique", "Automatique", "Industrie", "Simulation", "Systèmes intelligents"];

type Project = {
  id?: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  technologies: string[];
  featured?: boolean;
  demoId?: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "sytrac-its",
    title: "SYTRAC ITS — Système Intelligent de Gestion du Trafic & Smart City",
    image: "sytrac-its",
    category: "Systèmes intelligents",
    tags: ["Innovat Electra Tech", "Smart City", "Systèmes Embarqués", "IoT"],
    description:
      "Solution globale de gestion intelligente du trafic urbain et régulation pour Smart Cities développée chez Innovat Electra Tech (SYTRAC ITS) : intégration de capteurs intelligents IoT, contrôle embarqué temps réel et supervision automatisée.",
    technologies: ["Linux Embarqué", "IoT", "C/C++", "Python", "Smart City", "Capteurs Intelligents"],
    featured: true,
    githubUrl: "https://github.com/DjidelAbdelali/portfolio",
    liveUrl: "https://djidelabdelali.github.io/portfolio/",
  },
  {
    title: "ASSEMBLY_1 — Simulateur du robot Delta",
    image: "delta-simulator",
    category: "Robotique",
    tags: ["ROS2 / Three.js", "Commande avancée", "Démo interactive"],
    description:
      "Simulateur 3D interactif du robot parallèle Delta de mon PFE, reconstruit à partir des fichiers .slx Simulink : exploration cinématique manuelle, playback de trajectoires exportées, boucle fermée fidèle au correcteur réel et console de commandes intégrée.",
    technologies: ["Three.js", "Cinématique inverse", "MATLAB/Simulink", "Commande en boucle fermée"],
    featured: true,
    demoId: "delta-simulator",
    githubUrl: "https://github.com/DjidelAbdelali/delta-robot-simulator",
    liveUrl: "https://djidelabdelali.github.io/delta-robot-simulator/",
  },
  {
    title: "Jumeau numérique — Système 3 cuves",
    image: "digital-twin-3cuves",
    category: "Simulation",
    tags: ["Digital twin", "Démo interactive"],
    description:
      "Application web de supervision d'un procédé industriel à trois cuves : visualisation temps réel des niveaux et débits, et interface de pilotage pensée comme un jumeau numérique pédagogique.",
    technologies: ["React", "Simulation temps réel", "Supervision industrielle"],
    featured: true,
    demoId: "digital-twin-3cuves",
    githubUrl: "https://github.com/DjidelAbdelali/industrial-3tank-digital-twin",
    liveUrl: "https://djidelabdelali.github.io/industrial-3tank-digital-twin/",
  },
  {
    title: "Simulateur pédagogique d'automate (PLC)",
    image: "plc-sim",
    category: "Automatique",
    tags: ["Ladder / ST", "Démo interactive"],
    description:
      "Simulateur d'automate programmable pensé comme outil pédagogique : éditeur Ladder, moteur Structured Text conforme IEC 61131-3, scènes de procédés animées en 3D et gestion des tags en temps réel.",
    technologies: ["React", "TypeScript", "IEC 61131-3", "Three.js", "Éditeur Ladder"],
    featured: true,
    demoId: "plc-sim",
    githubUrl: "https://github.com/DjidelAbdelali/plc-ladder-st-simulator",
    liveUrl: "https://djidelabdelali.github.io/plc-ladder-st-simulator/",
  },
  {
    title: "CRM local — Tickets, Caisse & Crédits",
    image: "crm-tickets",
    category: "Industrie",
    tags: ["Full-stack", "Démo interactive"],
    description:
      "Système de gestion locale pour commerce (tickets, caisse, paye, crédits), stockage 100% navigateur (IndexedDB) et export Excel. Déployé en production avec un service Windows auto-résilient qui redémarre seul en cas de coupure réseau ou de panne — la version présentée ici est la déclinaison web sans le module OCR/appairage mobile.",
    technologies: ["JavaScript", "IndexedDB", "Service Windows (NSSM)", "Export Excel"],
    featured: true,
    demoId: "crm-tickets",
    githubUrl: "https://github.com/DjidelAbdelali/smart-crm-pos-system",
    liveUrl: "https://djidelabdelali.github.io/smart-crm-pos-system/",
  },
  {
    title: "Convoyeur de tri électrostatique",
    image: "conveyor",
    category: "Industrie",
    tags: ["Automatisation industrielle"],
    description: "Étude et conception d'un convoyeur intelligent pour le tri automatisé de matériaux précieux.",
    technologies: ["Automatisation", "Conception mécanique", "Procédés industriels"],
    githubUrl: "https://github.com/DjidelAbdelali/portfolio",
    liveUrl: "https://djidelabdelali.github.io/portfolio/",
  },
  {
    title: "Tri automatisé par couleur",
    image: "color-sort",
    category: "Robotique",
    tags: ["Vision", "Automatisation", "Démo interactive"],
    description:
      "Développement d'un système automatisé avec convoyeur et bras robotisé pour trier des objets par couleur à l'aide d'un capteur.",
    technologies: ["Capteurs", "Robotique", "Automatisation", "Arduino"],
    featured: true,
    demoId: "color-sort",
    githubUrl: "https://github.com/DjidelAbdelali/automated-color-sorting-robot",
    liveUrl: "https://djidelabdelali.github.io/automated-color-sorting-robot/",
  },
  {
    title: "Comparateur de navigation autonome par classification",
    image: "robot-knn",
    category: "Systèmes intelligents",
    tags: ["IA", "Navigation", "Démo interactive"],
    description:
      "Banc de comparaison d'algorithmes de navigation autonome par classification de données capteurs (dont KNN) pour la prise de décision en temps réel, avec un mode permettant d'implémenter et de tester son propre algorithme.",
    technologies: ["KNN", "Classification", "Capteurs", "Systèmes intelligents"],
    featured: true,
    demoId: "robot-knn",
    githubUrl: "https://github.com/DjidelAbdelali/autonomous-robot-knn-navigation",
    liveUrl: "https://djidelabdelali.github.io/autonomous-robot-knn-navigation/",
  },
  {
    title: "Commande d'ascenseur avec automates Siemens",
    image: "elevator",
    category: "Automatique",
    tags: ["Ladder", "Grafcet", "Démo interactive"],
    description: "Programmation d'un système séquentiel de commande d'ascenseur avec automates Siemens.",
    technologies: ["Siemens PLC", "Ladder", "LIST", "Grafcet"],
    featured: true,
    demoId: "elevator",
    githubUrl: "https://github.com/DjidelAbdelali/siemens-plc-elevator-control",
    liveUrl: "https://djidelabdelali.github.io/siemens-plc-elevator-control/",
  },
  {
    title: "Table d'équilibre autonome",
    image: "balance-table",
    category: "Automatique",
    tags: ["Asservissement", "Régulation", "Démo interactive"],
    description: "Contrôle en boucle fermée pour la stabilisation d'une plateforme mobile.",
    technologies: ["Asservissement", "PID", "Capteurs", "Actionneurs"],
    featured: true,
    demoId: "balance-table",
    githubUrl: "https://github.com/DjidelAbdelali/self-balancing-table-pid",
    liveUrl: "https://djidelabdelali.github.io/self-balancing-table-pid/",
  },
  {
    title: "ROS2Academy — Plateforme d'apprentissage ROS2",
    image: "ros2-academy",
    category: "Robotique",
    tags: ["ROS2", "Plateforme pédagogique", "Démo interactive"],
    description:
      "Plateforme web complète pour apprendre ROS2 en autonomie : roadmap progressive en 5 niveaux (Fondations → Expert), plus de 60 modules avec exemples de code, challenges pratiques, suivi de progression et assistant conversationnel dédié. Conçue en lien avec mes enseignements ROS2 à l'USTHB.",
    technologies: ["React", "ROS2", "Jazzy", "Pédagogie"],
    featured: true,
    demoId: "ros2-academy",
    githubUrl: "https://github.com/DjidelAbdelali/ros2-learning-academy",
    liveUrl: "https://djidelabdelali.github.io/ros2-learning-academy/",
  },
  {
    title: "Bras manipulateur 3 axes",
    image: "robot-arm-3axis",
    category: "Robotique",
    tags: ["Embarqué", "Démo interactive"],
    description:
      "Simulateur 3D du bras robotisé 3 axes (ARM-3DOF) : contrôle articulaire interactif pensé comme complément au pilotage physique par joystick.",
    technologies: ["Arduino", "Servomoteurs", "Joystick", "Robotique", "Three.js"],
    featured: true,
    demoId: "robot-arm-3axis",
    githubUrl: "https://github.com/DjidelAbdelali/3dof-robotic-arm-simulator",
    liveUrl: "https://djidelabdelali.github.io/3dof-robotic-arm-simulator/",
  },
];

export const skills: Array<[string, string[]]> = [
  ["Automatique et contrôle", ["Automatique continue", "Automatique échantillonnée", "Asservissement", "Régulation PID", "Modélisation des systèmes dynamiques", "Analyse de stabilité", "Boucle fermée", "Grafcet", "Réseaux de Petri"]],
  ["Automatisation industrielle", ["Automates programmables industriels", "Siemens TIA Portal", "Ladder", "LIST", "Supervision industrielle", "Capteurs et actionneurs", "Instrumentation industrielle", "Diagnostic de systèmes automatisés"]],
  ["Robotique et systèmes intelligents", ["Robotique industrielle", "Robot parallèle Delta", "Robot mobile autonome", "Bras manipulateur", "ROS2", "Cinématique", "Modélisation mécanique", "Systèmes embarqués"]],
  ["Simulation et conception", ["MATLAB", "Simulink", "SolidWorks", "Proteus", "Tinkercad", "Modélisation 3D", "Simulation de systèmes dynamiques"]],
  ["Électronique et embarqué", ["Arduino", "Microcontrôleurs", "Capteurs analogiques et numériques", "Intégration capteurs/actionneurs", "Prototypage"]],
  ["Documentation et gestion", ["Microsoft Word", "Excel", "PowerPoint", "Overleaf / LaTeX", "Notion", "Rédaction technique", "Organisation de projets"]],
];

export const tools: Array<[string, LucideIcon]> = [
  ["MATLAB / Simulink", Settings2],
  ["Siemens TIA Portal", Factory],
  ["SolidWorks", Wrench],
  ["Arduino IDE", Cpu],
  ["Proteus", FileCode2],
  ["Tinkercad", Bot],
  ["ROS2", Bot],
  ["Microsoft Office", BookOpen],
  ["Overleaf", FileCode2],
  ["Notion", BriefcaseBusiness],
];

export const languages: Array<[string, string]> = [
  ["Arabe", "Langue maternelle"],
  ["Français", "Courant - C1"],
  ["Anglais", "Technique et académique"],
];

export const associations = [
  {
    title: "Secrétaire Général Assistant - Micro Club USTHB",
    icon: Users,
    items: [
      "Organisation et gestion d'événements scientifiques et techniques.",
      "Coordination d'activités étudiantes.",
      "Communication, leadership et travail en équipe.",
    ],
  },
  {
    title: "Membre - CELEC",
    icon: Cpu,
    items: [
      "Participation à des activités liées à l'électronique et aux microcontrôleurs.",
      "Développement de compétences pratiques en électronique et programmation.",
    ],
  },
];

export const contactItems: Array<[string, string, LucideIcon]> = [
  ["Email", identity.email, Mail],
  ["Téléphone", identity.phone, Phone],
  ["LinkedIn", identity.linkedin, BriefcaseBusiness],
  ["Localisation", identity.location, MapPin],
  ["Langues", "AR · FR C1 · EN technique", Languages],
  ["Formation", "Master Automatique et Systèmes", GraduationCap],
];
