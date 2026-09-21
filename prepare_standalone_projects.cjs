const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const standaloneDir = path.join(rootDir, 'standalone_projects');
const demosDir = path.join(__dirname, 'src', 'assets', 'demos');

const projects = [
  {
    demoId: 'delta-simulator',
    repoName: 'delta-simulator',
    title: 'ASSEMBLY_1 — Simulateur du Robot Delta 3D',
    fileName: 'delta-simulator.html',
    description: 'Simulateur 3D interactif du robot parallèle Delta de mon PFE, reconstruit à partir des fichiers .slx Simulink : exploration cinématique manuelle, playback de trajectoires exportées, boucle fermée fidèle au correcteur réel et console de commandes intégrée.',
    tech: ['Three.js', 'Cinématique Inverse', 'MATLAB/Simulink', 'Commande en boucle fermée']
  },
  {
    demoId: 'digital-twin-3cuves',
    repoName: 'digital-twin-3cuves',
    title: 'Jumeau Numérique — Système 3 Cuves',
    fileName: 'digital-twin-3cuves.html',
    description: 'Application web de supervision d\'un procédé industriel à trois cuves : visualisation temps réel des niveaux et débits, et interface de pilotage pensée comme un jumeau numérique pédagogique.',
    tech: ['React', 'Simulation temps réel', 'Supervision industrielle', 'SVG Interactif']
  },
  {
    demoId: 'plc-sim',
    repoName: 'plc-sim',
    title: 'Simulateur Pédagogique d\'Automate Programmable (PLC)',
    fileName: 'plcsim-standalone.html',
    description: 'Simulateur d\'automate programmable pensé comme outil pédagogique : éditeur Ladder, moteur Structured Text conforme IEC 61131-3, scènes de procédés animées en 3D et gestion des tags en temps réel.',
    tech: ['TypeScript', 'IEC 61131-3', 'Three.js', 'Éditeur Ladder', 'ST Engine']
  },
  {
    demoId: 'crm-tickets',
    repoName: 'crm-tickets',
    title: 'CRM Local — Tickets, Caisse & Crédits',
    fileName: 'crm-tickets.html',
    description: 'Système de gestion locale pour commerce (tickets, caisse, paye, crédits), stockage 100% navigateur (IndexedDB) et export Excel. Déployé en production avec un service Windows auto-résilient.',
    tech: ['JavaScript', 'IndexedDB', 'Service Windows (NSSM)', 'Export Excel']
  },
  {
    demoId: 'robot-knn',
    repoName: 'robot-knn',
    title: 'Comparateur de Navigation Autonome par Classification (KNN)',
    fileName: 'robot-knn.html',
    description: 'Banc de comparaison d\'algorithmes de navigation autonome par classification de données capteurs (dont KNN) pour la prise de décision en temps réel, avec un mode permettant d\'implémenter et de tester son propre algorithme.',
    tech: ['KNN', 'Classification IA', 'Capteurs', 'Systèmes Intelligents']
  },
  {
    demoId: 'balance-table',
    repoName: 'balance-table',
    title: 'Table d\'Équilibre Autonome — Simulateur PID 3D',
    fileName: 'balance-table.html',
    description: 'Contrôle en boucle fermée pour la stabilisation d\'une plateforme mobile 3D avec régulation PID interactive et visualisation de l\'asservissement.',
    tech: ['Asservissement', 'PID', 'Three.js', 'Capteurs & Actionneurs']
  },
  {
    demoId: 'robot-arm-3axis',
    repoName: 'robot-arm-3axis',
    title: 'Bras Manipulateur 3 Axes (ARM-3DOF)',
    fileName: 'robot-arm-3axis.html',
    description: 'Simulateur 3D du bras robotisé 3 axes (ARM-3DOF) : contrôle articulaire interactif pensé comme complément au pilotage physique par joystick.',
    tech: ['Arduino', 'Servomoteurs', 'Robotique 3D', 'Three.js']
  },
  {
    demoId: 'elevator',
    repoName: 'elevator',
    title: 'Commande d\'Ascenseur avec Automates Siemens',
    fileName: 'elevator.html',
    description: 'Programmation et simulation d\'un système séquentiel de commande d\'ascenseur basé sur la logique des automates industriels Siemens (Ladder, Grafcet).',
    tech: ['Siemens PLC', 'Ladder', 'LIST', 'Grafcet']
  },
  {
    demoId: 'color-sort',
    repoName: 'color-sort',
    title: 'Tri Automatisé par Couleur — Convoyeur & Bras Robotisé',
    fileName: 'color-sort.html',
    description: 'Développement d\'un système automatisé avec convoyeur et bras robotisé pour trier des objets par couleur à l\'aide de capteurs optiques et de contrôle embarqué.',
    tech: ['Capteurs', 'Robotique', 'Automatisation', 'Arduino']
  },
  {
    demoId: 'ros2-academy',
    repoName: 'ros2-academy',
    title: 'ROS2Academy — Plateforme d\'Apprentissage ROS2',
    fileName: 'ros2-academy.html',
    description: 'Plateforme web complète pour apprendre ROS2 en autonomie : roadmap progressive en 5 niveaux, plus de 60 modules avec exemples de code, challenges pratiques et suivi de progression.',
    tech: ['ROS2 Jazzy', 'Pédagogie Robotique', 'React', 'Interactive Tutorials']
  }
];

if (!fs.existsSync(standaloneDir)) {
  fs.mkdirSync(standaloneDir, { recursive: true });
}

console.log('Preparing 10 standalone projects in:', standaloneDir);

projects.forEach((proj) => {
  const projFolder = path.join(standaloneDir, proj.repoName);
  if (!fs.existsSync(projFolder)) {
    fs.mkdirSync(projFolder, { recursive: true });
  }

  // Read HTML source
  const srcHtmlPath = path.join(demosDir, proj.fileName);
  let htmlContent = fs.readFileSync(srcHtmlPath, 'utf8');

  // Inject header bar script if not already present
  const headerScript = `
<!-- Standalone Navigation Header Injection -->
<script>
  (function() {
    if (window.self === window.top) {
      document.addEventListener("DOMContentLoaded", function() {
        if (document.getElementById("portfolio-standalone-nav")) return;
        var nav = document.createElement("div");
        nav.id = "portfolio-standalone-nav";
        nav.style.cssText = "background:#0a0e17; color:#94a3b8; padding:10px 20px; display:flex; justify-content:space-between; align-items:center; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; font-size:13px; border-bottom:1px solid #1e293b; position:sticky; top:0; z-index:999999; box-shadow:0 4px 12px rgba(0,0,0,0.5);";
        nav.innerHTML = '<div style="display:flex; align-items:center; gap:12px;">' +
          '<a href="https://djidelabdelali.github.io/portfolio/" style="color:#38bdf8; text-decoration:none; font-weight:600; display:flex; align-items:center; gap:6px; transition:color 0.2s;" onmouseover="this.style.color=\\'#7dd3fc\\'" onmouseout="this.style.color=\\'#38bdf8\\'">' +
            '&#8592; Portfolio — DJIDEL Abdelali Rayan' +
          '</a>' +
          '<span style="color:#334155;">|</span>' +
          '<span style="color:#f8fafc; font-weight:500;">${proj.title.replace(/'/g, "\\'")}</span>' +
        '</div>' +
        '<div style="display:flex; align-items:center; gap:12px;">' +
          '<a href="https://github.com/DjidelAbdelali/${proj.repoName}" target="_blank" rel="noopener noreferrer" style="color:#e2e8f0; background:#1e293b; padding:5px 12px; border-radius:6px; text-decoration:none; font-size:12px; font-weight:600; display:flex; align-items:center; gap:6px; border:1px solid #334155; transition:background 0.2s;" onmouseover="this.style.background=\\'#334155\\'" onmouseout="this.style.background=\\'#1e293b\\'">' +
            '<svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>' +
            'GitHub Repository' +
          '</a>' +
        '</div>';
        document.body.insertBefore(nav, document.body.firstChild);
      });
    }
  })();
</script>
`;

  if (!htmlContent.includes('id="portfolio-standalone-nav"')) {
    if (htmlContent.includes('</head>')) {
      htmlContent = htmlContent.replace('</head>', `${headerScript}\n</head>`);
    } else {
      htmlContent = headerScript + htmlContent;
    }
  }

  // Save index.html
  fs.writeFileSync(path.join(projFolder, 'index.html'), htmlContent, 'utf8');

  // Save README.md
  const readmeContent = `# ${proj.title}

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Interactive-brightgreen?style=for-the-badge&logo=googlechrome)](https://djidelabdelali.github.io/${proj.repoName}/)
[![Portfolio](https://img.shields.io/badge/Portfolio-DJIDEL%20Abdelali%20Rayan-blue?style=for-the-badge&logo=react)](https://djidelabdelali.github.io/portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/DjidelAbdelali/${proj.repoName})

## 📌 Présentation

${proj.description}

Ce projet fait partie du portfolio technique de **DJIDEL Abdelali Rayan** (Ingénieur en Automatique et Systèmes).

---

## 🚀 Démo en direct

Une démo web interactive est disponible sans aucune installation requise :
🔗 **[Accéder à la démo interactive](https://djidelabdelali.github.io/${proj.repoName}/)**

---

## 🛠️ Technologies & Outils

${proj.tech.map(t => `- **${t}**`).join('\n')}

---

## 🔗 Liens Utiles

- 🌐 **Portfolio principal** : [djidelabdelali.github.io/portfolio](https://djidelabdelali.github.io/portfolio/)
- 💻 **Profil GitHub** : [github.com/DjidelAbdelali](https://github.com/DjidelAbdelali)
- 💼 **LinkedIn** : [DJIDEL Abdelali Rayan](https://linkedin.com/in/djidel-abdelali-rayan-814b25207)
`;

  fs.writeFileSync(path.join(projFolder, 'README.md'), readmeContent, 'utf8');

  // Save .gitignore
  const gitignoreContent = `.DS_Store
node_modules/
dist/
*.log
`;
  fs.writeFileSync(path.join(projFolder, '.gitignore'), gitignoreContent, 'utf8');

  // Initialize git repo locally
  try {
    execSync('git init -b main', { cwd: projFolder, stdio: 'ignore' });
    execSync('git config user.name "DJIDEL Abdelali Rayan"', { cwd: projFolder, stdio: 'ignore' });
    execSync('git config user.email "djidelabdelali@gmail.com"', { cwd: projFolder, stdio: 'ignore' });
    execSync('git add .', { cwd: projFolder, stdio: 'ignore' });
    execSync(`git commit -m "Initial release of ${proj.title}"`, { cwd: projFolder, stdio: 'ignore' });
    
    // Set remote URL
    const remoteUrl = `https://github.com/DjidelAbdelali/${proj.repoName}.git`;
    try {
      execSync(`git remote add origin ${remoteUrl}`, { cwd: projFolder, stdio: 'ignore' });
    } catch (e) {
      execSync(`git remote set-url origin ${remoteUrl}`, { cwd: projFolder, stdio: 'ignore' });
    }

    console.log(`✓ Git repo initialized for ${proj.repoName} -> ${remoteUrl}`);
  } catch (err) {
    console.error(`Error initializing git in ${proj.repoName}:`, err.message);
  }
});

// Also initialize Git in the main portfolio folder
try {
  const mainPortfolioFolder = path.join(__dirname);
  execSync('git init -b main', { cwd: mainPortfolioFolder, stdio: 'ignore' });
  execSync('git config user.name "DJIDEL Abdelali Rayan"', { cwd: mainPortfolioFolder, stdio: 'ignore' });
  execSync('git config user.email "djidelabdelali@gmail.com"', { cwd: mainPortfolioFolder, stdio: 'ignore' });
  execSync('git add .', { cwd: mainPortfolioFolder, stdio: 'ignore' });
  execSync('git commit -m "Initial release of Portfolio Application"', { cwd: mainPortfolioFolder, stdio: 'ignore' });
  
  const mainRemoteUrl = 'https://github.com/DjidelAbdelali/portfolio.git';
  try {
    execSync(`git remote add origin ${mainRemoteUrl}`, { cwd: mainPortfolioFolder, stdio: 'ignore' });
  } catch (e) {
    execSync(`git remote set-url origin ${mainRemoteUrl}`, { cwd: mainPortfolioFolder, stdio: 'ignore' });
  }
  console.log(`✓ Git repo initialized for main portfolio -> ${mainRemoteUrl}`);
} catch (err) {
  console.error('Error initializing git in main portfolio:', err.message);
}

console.log('All 10 standalone project folders & git repositories successfully prepared!');
