const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const publicDir = path.join(__dirname, "public");
const tempHtmlDir = path.join(__dirname, "temp_cv_html");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(tempHtmlDir)) {
  fs.mkdirSync(tempHtmlDir, { recursive: true });
}

// Find Headless Browser executable (Edge or Chrome)
function getBrowserExecutable() {
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

  if (fs.existsSync(edgePath)) return edgePath;
  if (fs.existsSync(chromePath)) return chromePath;
  throw new Error("Neither Microsoft Edge nor Google Chrome executable was found.");
}

const cvData = {
  fr: {
    filename: "cv-fr.pdf",
    htmlFilename: "cv-fr.html",
    lang: "fr",
    dir: "ltr",
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
    name: "DJIDEL Abdelali Rayan",
    title: "Ingénieur en Automatique & Systèmes",
    specialties: "Robotique · Automatique Industrielle · Systèmes Intelligents · Industrie 4.0",
    contact: "Alger, Algérie | +213 555 662 744 | djidelabdelali@gmail.com | linkedin.com/in/djidel-abdelali-rayan-814b25207",
    summaryTitle: "PROFIL PROFESSIONNEL",
    summary:
      "Diplômé en Automatique et Systèmes de l'USTHB, passionné par la robotique, les systèmes automatisés et l'intelligence artificielle appliquée à l'industrie et aux technologies émergentes. Mon objectif est de contribuer à des projets innovants dans la robotique, les systèmes intelligents, l'automobile, l'aéronautique et l'Industrie 4.0.",
    experienceTitle: "EXPÉRIENCE PROFESSIONNELLE",
    experiences: [
      {
        role: "Enseignant vacataire — Département Électronique et Automatique",
        company: "USTHB (Université des Sciences et de la Technologie Houari Boumediene)",
        period: "Oct. 2025 – Juin 2026",
        details: "Encadrement des étudiants en asservissement échantillonné, automates industriels (PLC) et ROS2. Direction de projets pratiques et travaux dirigés.",
      },
      {
        role: "Responsable R&D / Ingénieur Systèmes Embarqués",
        company: "Innovat Electra Tech",
        period: "2025 – Présent",
        details: "Développement du système SYTRAC (SYTRAC ITS) pour la régulation intelligente du trafic urbain et Smart Cities : intégration de capteurs IoT, contrôle embarqué temps réel et supervision automatisée.",
      },
      {
        role: "Agent technique SAV & Maintenance",
        company: "EURL Electromax",
        period: "Sept. 2025 – Oct. 2025",
        details: "Diagnostic, réparation et maintenance d'équipements électroniques, bancs de test et cartes d'asservissement embarquées.",
      },
    ],
    educationTitle: "FORMATION & DIPLÔMES",
    education: [
      {
        degree: "Master en Automatique et Systèmes",
        school: "USTHB — Université des Sciences et de la Technologie Houari Boumediene",
        period: "2023 – 2025",
        details: "Projet de Fin d'Études: Conception, réalisation et commande d'un robot parallèle de type Delta. Modélisation cinématique, simulation Simulink et commande en boucle fermée.",
      },
      {
        degree: "Licence en Automatique",
        school: "USTHB",
        period: "2021 – 2023",
        details: "Projet académique: Étude et conception d'un convoyeur automatisé pour le tri électrostatique de matériaux précieux.",
      },
    ],
    skillsTitle: "COMPÉTENCES TECHNIQUES",
    skills: [
      { category: "Robotique", items: "ROS2, Robot Delta, Cinématique Directe/Inverse, Trajectoires 3D" },
      { category: "Automatique", items: "Siemens TIA Portal, PLC, Ladder, PID, Grafcet, Systèmes Échantillonnés" },
      { category: "Embarqué", items: "C/C++, Python, STM32, Arduino, Linux Embarqué, IoT, Capteurs Intelligents" },
      { category: "Simulation & CAO", items: "MATLAB/Simulink, SolidWorks 3D, Three.js, Gazebo, Proteus" },
    ],
  },
  en: {
    filename: "cv-en.pdf",
    htmlFilename: "cv-en.html",
    lang: "en",
    dir: "ltr",
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
    name: "DJIDEL Abdelali Rayan",
    title: "Control & Systems Engineer",
    specialties: "Robotics · Industrial Automation · Intelligent Systems · Industry 4.0",
    contact: "Algiers, Algeria | +213 555 662 744 | djidelabdelali@gmail.com | linkedin.com/in/djidel-abdelali-rayan-814b25207",
    summaryTitle: "PROFESSIONAL SUMMARY",
    summary:
      "Master's graduate in Control and Systems Engineering from USTHB, passionate about robotics, automated systems, and applied AI in industry and emerging technologies. My goal is to contribute to innovative projects in robotics, intelligent systems, automotive, aerospace, and Industry 4.0.",
    experienceTitle: "PROFESSIONAL EXPERIENCE",
    experiences: [
      {
        role: "Teaching Assistant — Electronics & Control Department",
        company: "USTHB (University of Sciences and Technology Houari Boumediene)",
        period: "Oct. 2025 – June 2026",
        details: "Supervising coursework in sampled-data control systems, PLCs, and ROS2 robotics. Mentoring practical engineering student projects.",
      },
      {
        role: "Head of R&D / Embedded Systems Engineer",
        company: "Innovat Electra Tech",
        period: "2025 – Present",
        details: "Development of SYTRAC (SYTRAC ITS) intelligent traffic regulation and Smart City solution: IoT sensor integration, real-time embedded control, and automated supervision.",
      },
      {
        role: "After-Sales Technical Specialist",
        company: "EURL Electromax",
        period: "Sept. 2025 – Oct. 2025",
        details: "Diagnostics, maintenance, and repair of electronic equipment, testing benches, and embedded control circuit boards.",
      },
    ],
    educationTitle: "EDUCATION & DEGREES",
    education: [
      {
        degree: "Master's Degree in Control & Systems Engineering",
        school: "USTHB — University of Sciences and Technology Houari Boumediene",
        period: "2023 – 2025",
        details: "Master's Thesis: Design, construction, and control of a Delta parallel robot. Kinematic modeling, Simulink simulation, and closed-loop control.",
      },
      {
        degree: "Bachelor's Degree in Control Engineering",
        school: "USTHB",
        period: "2021 – 2023",
        details: "Academic Project: Study and design of an automated conveyor system for electrostatic sorting of precious materials.",
      },
    ],
    skillsTitle: "TECHNICAL SKILLS",
    skills: [
      { category: "Robotics", items: "ROS2, Delta Parallel Robot, Forward/Inverse Kinematics, 3D Motion Planning" },
      { category: "Automation", items: "Siemens TIA Portal, Industrial PLCs, Ladder Logic, PID Tuning, Grafcet" },
      { category: "Embedded Systems", items: "C/C++, Python, STM32, Arduino, Embedded Linux, IoT, Smart Sensors" },
      { category: "Simulation & CAD", items: "MATLAB/Simulink, SolidWorks 3D, Three.js, Gazebo, Proteus" },
    ],
  },
  ar: {
    filename: "cv-ar.pdf",
    htmlFilename: "cv-ar.html",
    lang: "ar",
    dir: "rtl",
    fontFamily: "'Tajawal', 'Segoe UI', sans-serif",
    name: "جيدل عبد العالي ريان",
    title: "مهندس في الآلية والأنظمة",
    specialties: "الروبوتيات · الآلية الصناعية · الأنظمة الذكية · الصناعة 4.0",
    contact: "الجزائر العاصمة، الجزائر | +213 555 662 744 | djidelabdelali@gmail.com | linkedin.com/in/djidel-abdelali-rayan-814b25207",
    summaryTitle: "الملف الشخصي",
    summary:
      "حاصل على شهادة في الآلية والأنظمة من جامعة USTHB، شغوف بالروبوتيات والأنظمة الآلية والذكاء الاصطناعي التطبيقي في الصناعة والتقنيات الناشئة. هدفي هو المساهمة في مشاريع مبتكرة في مجالات الروبوتيات والأنظمة الذكية والسيارات والطيران والصناعة 4.0.",
    experienceTitle: "الخبرة المهنية",
    experiences: [
      {
        role: "أستاذ متعاون — قسم الإلكترونيك والآلية",
        company: "جامعة العلوم والتكنولوجيا هواري بومدين (USTHB)",
        period: "أكتوبر 2025 – جوان 2026",
        details: "تأطير الطلبة في التحكم المعاين، الأجهزة المبرمجة الصناعية (PLC)، والروبوتيات (ROS2). الإشراف على المشاريع التطبيقية والمهام التقنية.",
      },
      {
        role: "مسؤول البحث والتطوير / مهندس الأنظمة المدمجة",
        company: "Innovat Electra Tech",
        period: "2025 – حاليًا",
        details: "تطوير نظام SYTRAC ITS لإدارة حركة المرور الذكية والمدن الذكية: دمج حساسات IoT، التحكم في الزمن الحقيقي، والرقابة التلقائية.",
      },
      {
        role: "تقني صيانة وخدمات ما بعد البيع",
        company: "EURL Electromax",
        period: "سبتمبر 2025 – أكتوبر 2025",
        details: "تشخيص وصيانة المعدات الإلكترونية، بطاقات التحكم المدمجة، وأجهزة الاختبار.",
      },
    ],
    educationTitle: "المسار الدراسي والشهادات",
    education: [
      {
        degree: "ماستر في الآلية والأنظمة",
        school: "جامعة العلوم والتكنولوجيا هواري بومدين — USTHB",
        period: "2023 – 2025",
        details: "مشروع التخرج: تصميم وإنجاز والتحكم في روبوت متوازي من نوع Delta. نمذجة سينماتيكية، محاكاة في Simulink، والتحكم في الحلقة المغلقة.",
      },
      {
        degree: "ليسانس في الآلية",
        school: "جامعة العلوم والتكنولوجيا هواري بومدين — USTHB",
        period: "2021 – 2023",
        details: "مشروع أكاديمي: دراسة وتصميم ناقل آلي لفرز المواد الثمينة كهروستاتيكيًا.",
      },
    ],
    skillsTitle: "المهارات التقنية",
    skills: [
      { category: "الروبوتيات", items: "ROS2، الروبوت المتوازي Delta، السينماتيك المباشر والعكسي، مسارات 3D" },
      { category: "الآلية الصناعية", items: "Siemens TIA Portal، PLCs، لغة Ladder، تحكم PID، مخطط Grafcet" },
      { category: "الأنظمة المدمجة", items: "C/C++، Python، STM32، Arduino، Linux Embarqué، IoT، الحساسات الذكية" },
      { category: "المحاكاة والتصميم", items: "MATLAB/Simulink، SolidWorks 3D، Three.js، Gazebo، Proteus" },
    ],
  },
  es: {
    filename: "cv-es.pdf",
    htmlFilename: "cv-es.html",
    lang: "es",
    dir: "ltr",
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
    name: "DJIDEL Abdelali Rayan",
    title: "Ingeniero de Sistemas de Control y Automatización",
    specialties: "Robótica · Automatización Industrial · Sistemas Inteligentes · Industria 4.0",
    contact: "Argel, Argelia | +213 555 662 744 | djidelabdelali@gmail.com | linkedin.com/in/djidel-abdelali-rayan-814b25207",
    summaryTitle: "PERFIL PROFESIONAL",
    summary:
      "Graduado de Máster en Ingeniería de Control y Sistemas por la USTHB, apasionado por la robótica, los sistemas automatizados y la inteligencia artificial aplicada en la industria y tecnologías emergentes. Mi objetivo es contribuir en proyectos innovadores en robótica, sistemas inteligentes, automoción, aeronáutica e Industria 4.0.",
    experienceTitle: "EXPERIENCIA PROFESIONAL",
    experiences: [
      {
        role: "Profesor Ayudante — Departamento de Electrónica y Automatización",
        company: "USTHB (Universidad de Ciencias y Tecnología Houari Boumediene)",
        period: "Oct. 2025 – Junio 2026",
        details: "Supervisión de trabajos prácticos en control discreto, PLCs industriales y robótica ROS2. Tutoría de proyectos técnicos estudiantiles.",
      },
      {
        role: "Responsable de I+D / Ingeniero de Sistemas Embebidos",
        company: "Innovat Electra Tech",
        period: "2025 – Presente",
        details: "Desarrollo del sistema SYTRAC (SYTRAC ITS) para regulación inteligente de tráfico urbano y Smart Cities: integración de sensores IoT y control en tiempo real.",
      },
      {
        role: "Especialista Técnico Posventa y Mantenimiento",
        company: "EURL Electromax",
        period: "Sept. 2025 – Oct. 2025",
        details: "Diagnóstico, mantenimiento y reparación de equipos electrónicos y placas de control embebidas.",
      },
    ],
    educationTitle: "EDUCACIÓN Y TÍTULOS",
    education: [
      {
        degree: "Máster en Ingeniería de Control y Sistemas",
        school: "USTHB — Universidad de Ciencias y Tecnología Houari Boumediene",
        period: "2023 – 2025",
        details: "Proyecto de Fin de Máster: Diseño, construcción y control de un robot paralelo tipo Delta. Modelado cinemático, simulación en Simulink y control en bucle cerrado.",
      },
      {
        degree: "Grado en Ingeniería de Automatización",
        school: "USTHB",
        period: "2021 – 2023",
        details: "Proyecto académico: Estudio y diseño de un transportador automatizado para clasificación electrostática.",
      },
    ],
    skillsTitle: "HABILIDADES TÉCNICAS",
    skills: [
      { category: "Robótica", items: "ROS2, Robot Paralelo Delta, Cinemática Directa e Inversa, Planificación 3D" },
      { category: "Automatización", items: "Siemens TIA Portal, PLCs Industriales, Lenguaje Ladder, Control PID, Grafcet" },
      { category: "Sistemas Embebidos", items: "C/C++, Python, STM32, Arduino, Linux Embebido, IoT, Sensores Inteligentes" },
      { category: "Simulación y Diseño", items: "MATLAB/Simulink, SolidWorks 3D, Three.js, Gazebo, Proteus" },
    ],
  },
};

function generateHtml(data) {
  const isRtl = data.dir === "rtl";
  return `<!DOCTYPE html>
<html lang="${data.lang}" dir="${data.dir}">
<head>
  <meta charset="UTF-8">
  <title>${data.name} — CV</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: ${data.fontFamily};
      background: #ffffff;
      color: #1f2937;
      padding: 38px 46px;
      width: 210mm;
      min-height: 297mm;
      font-size: 13.5px;
      line-height: 1.6;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    /* Header Section */
    .header {
      border-bottom: 2px solid #f3f4f6;
      padding-bottom: 16px;
      margin-bottom: 20px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .name-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #d97706;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .name-badge::before {
      content: "—";
      color: #d97706;
      font-weight: 800;
    }
    .main-title {
      font-size: 30px;
      font-weight: 800;
      color: #111827;
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .main-title .dot {
      color: #d97706;
    }
    .specialties {
      font-size: 13px;
      font-weight: 600;
      color: #d97706;
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .contact-bar {
      font-size: 11.5px;
      color: #6b7280;
      font-weight: 500;
      background: #fdfbf7;
      border: 1px solid #fef3c7;
      padding: 6px 14px;
      border-radius: 8px;
      display: inline-block;
    }

    /* Section Component */
    .section {
      margin-bottom: 20px;
    }
    .section-title {
      font-size: 13px;
      font-weight: 800;
      color: #d97706;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-bottom: 1.5px solid #d97706;
      padding-bottom: 4px;
      margin-bottom: 12px;
    }

    /* Summary Card */
    .summary-text {
      font-size: 13.5px;
      color: #4b5563;
      line-height: 1.75;
      background: #faf8f5;
      border-${isRtl ? "right" : "left"}: 4px solid #d97706;
      padding: 12px 16px;
      border-radius: ${isRtl ? "0 8px 8px 0" : "8px 0 0 8px"};
    }

    /* Experience & Education Items */
    .item-card {
      margin-bottom: 14px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 3px;
    }
    .item-role {
      font-size: 14px;
      font-weight: 700;
      color: #111827;
    }
    .item-company {
      font-weight: 600;
      color: #d97706;
    }
    .item-period {
      font-size: 11.5px;
      font-weight: 600;
      color: #6b7280;
      background: #f3f4f6;
      padding: 2px 8px;
      border-radius: 999px;
      white-space: nowrap;
    }
    .item-details {
      font-size: 12.5px;
      color: #4b5563;
      line-height: 1.6;
    }

    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .skill-box {
      background: #faf8f5;
      border: 1px solid #fef3c7;
      border-radius: 8px;
      padding: 10px 14px;
    }
    .skill-category {
      font-size: 12px;
      font-weight: 800;
      color: #d97706;
      margin-bottom: 2px;
      text-transform: uppercase;
    }
    .skill-items {
      font-size: 12px;
      color: #374151;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div class="header">
    <div class="name-badge">${data.name}</div>
    <div class="main-title">${data.title}<span class="dot">.</span></div>
    <div class="specialties">${data.specialties}</div>
    <div class="contact-bar">${data.contact}</div>
  </div>

  <!-- Summary Section -->
  <div class="section">
    <div class="section-title">${data.summaryTitle}</div>
    <div class="summary-text">${data.summary}</div>
  </div>

  <!-- Experience Section -->
  <div class="section">
    <div class="section-title">${data.experienceTitle}</div>
    ${data.experiences
      .map(
        (exp) => `
      <div class="item-card">
        <div class="item-header">
          <div class="item-role">${exp.role}</div>
          <div class="item-period">${exp.period}</div>
        </div>
        <div class="item-details">${exp.details}</div>
      </div>
    `
      )
      .join("")}
  </div>

  <!-- Education Section -->
  <div class="section">
    <div class="section-title">${data.educationTitle}</div>
    ${data.education
      .map(
        (edu) => `
      <div class="item-card">
        <div class="item-header">
          <div class="item-role">${edu.degree} — <span class="item-company">${edu.school}</span></div>
          <div class="item-period">${edu.period}</div>
        </div>
        <div class="item-details">${edu.details}</div>
      </div>
    `
      )
      .join("")}
  </div>

  <!-- Skills Section -->
  <div class="section">
    <div class="section-title">${data.skillsTitle}</div>
    <div class="skills-grid">
      ${data.skills
        .map(
          (sk) => `
        <div class="skill-box">
          <div class="skill-category">${sk.category}</div>
          <div class="skill-items">${sk.items}</div>
        </div>
      `
        )
        .join("")}
    </div>
  </div>
</body>
</html>`;
}

async function main() {
  const browserPath = getBrowserExecutable();
  console.log(`Using browser executable: ${browserPath}`);

  for (const langKey of Object.keys(cvData)) {
    const item = cvData[langKey];
    const htmlContent = generateHtml(item);
    const htmlPath = path.join(tempHtmlDir, item.htmlFilename);
    const pdfPath = path.join(publicDir, item.filename);

    fs.writeFileSync(htmlPath, htmlContent, "utf8");

    const fileUrl = `file:///${htmlPath.replace(/\\/g, "/")}`;
    const cmd = `"${browserPath}" --headless --no-pdf-header-footer --print-to-pdf="${pdfPath.replace(
      /\\/g,
      "/"
    )}" "${fileUrl}"`;

    execSync(cmd);
    console.log(`Successfully compiled ${item.filename} via Headless Printing`);
  }
}

main().catch(console.error);
