import type { LangCode } from "../i18n/languages";

export type ProjectReadme = {
  overview: string;
  features: string[];
  architecture: string;
  challenges: string[];
  results: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projectReadmes: Record<string, Record<LangCode, ProjectReadme>> = {
  "sytrac-its": {
    fr: {
      overview:
        "SYTRAC ITS est un système intelligent complet de gestion et de régulation du trafic urbain conçu pour les Smart Cities chez Innovat Electra Tech. Il intègre des capteurs IoT haute précision, le traitement de données en temps réel et des algorithmes automatisés pour réduire la congestion routière et optimiser les flux de circulation.",
      features: [
        "Régulation adaptative des feux de signalisation selon la densité du trafic en temps réel",
        "Réseau de capteurs IoT industriels pour la détection et classification des véhicules",
        "Supervision centrale et tableau de bord IoT pour l'analyse prédictive du trafic",
        "Architecture embarquée haute fiabilité avec reprise automatique en cas de panne réseau",
      ],
      architecture:
        "Architecture distribuée basée sur Linux embarqué, communication MQTT/CoAP pour la télémétrie IoT, et algorithmes de contrôle temps réel développés en C++ / Python avec supervision React.",
      challenges: [
        "Traitement en temps réel de flux de données massifs provenant de multiples intersections",
        "Garantie de faible latence pour la régulation prioritaire des véhicules d'urgence",
      ],
      results:
        "Déployé et validé avec succès pour des démonstrations Smart City, réduisant le temps d'attente moyen aux intersections de 25%.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    en: {
      overview:
        "SYTRAC ITS is a comprehensive intelligent traffic management and regulation system designed for Smart Cities at Innovat Electra Tech. It combines high-precision IoT sensors, real-time telemetry, and automated control algorithms to mitigate urban traffic congestion.",
      features: [
        "Adaptive traffic light regulation based on real-time vehicle density analysis",
        "Industrial IoT sensor array for vehicle detection and flow classification",
        "Centralized IoT supervision dashboard with predictive traffic analytics",
        "High-reliability embedded architecture featuring auto-recovery failover",
      ],
      architecture:
        "Distributed architecture running on Embedded Linux, MQTT/CoAP telemetry for IoT sensor networks, C++/Python real-time control kernels, and React supervision dashboards.",
      challenges: [
        "Low-latency processing of high-throughput sensor telemetry from multiple city intersections",
        "Failsafe priority routing for emergency response vehicles",
      ],
      results:
        "Successfully deployed and demonstrated for Smart City initiatives, achieving a 25% reduction in average intersection delay.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    ar: {
      overview:
        "SYTRAC ITS هو نظام ذكي متكامل لإدارة وتنظيم حركة المرور الحضارية مصمم للمدن الذكية في شركة Innovat Electra Tech. يدمج حساسات IoT عالية الدقة، المعالجة الآلية للبيانات في الزمن الحقيقي وألغوريثمات التحكم التلقائي للحد من الازدحام المروري.",
      features: [
        "تنظيم متكيف للإشارات الضوئية حسب كثافة السيارات في الزمن الحقيقي",
        "شبكة حساسات IoT صناعية للكشف وتصنيف التدفق المروري",
        "لوحة قيادة مركزية للإشراف الصناعي والتحليل التنبؤي للحركة",
        "بنية مدمجة عالية الاعتمادية مع استعادة ذاتية عند انقطاع الشبكة",
      ],
      architecture:
        "بنية موزعة تعتمد على اللينكس المدمج، بروتوكولات MQTT/CoAP لنقل بيانات الحساسات، ونواة تحكم في الزمن الحقيقي بلغة C++ / Python مع واجهة إشراف React.",
      challenges: [
        "معالجة تدفقات البيانات الضخمة في الزمن الحقيقي من عدة تقاطعات معًا",
        "ضمان زمن استجابة فائق السرعة لمنح الأولوية لسيارات الطوارئ",
      ],
      results:
        "تم نجاح نشره واختباره لمشاريع المدن الذكية، مما أدى إلى تقليل زمن الانتظار عند التقاطعات بنسبة 25%.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    es: {
      overview:
        "SYTRAC ITS es un sistema integral de gestión y regulación inteligente del tráfico urbano diseñado para Smart Cities en Innovat Electra Tech. Combina sensores IoT de alta precisión, telemetría en tiempo real y algoritmos de control automatizados.",
      features: [
        "Regulación adaptativa de semáforos basada en densidad vehicular en tiempo real",
        "Red de sensores IoT industriales para detección y clasificación de flujo",
        "Panel de supervisión centralizado con analítica predictiva de tráfico",
        "Arquitectura embebida de alta fiabilidad con recuperación automática ante fallos",
      ],
      architecture:
        "Arquitectura distribuida basada en Linux Embebido, comunicación MQTT/CoAP para la red de sensores IoT, núcleo de control en C++/Python y panel React.",
      challenges: [
        "Procesamiento de baja latencia de telemetría masiva proveniente de múltiples intersecciones",
        "Priorización de paso para vehículos de emergencia",
      ],
      results:
        "Desplegado con éxito para iniciativas de Smart City, reduciendo el tiempo medio de espera en intersecciones en un 25%.",
      githubUrl: "https://github.com/djidelabdelali",
    },
  },
  "delta-simulator": {
    fr: {
      overview:
        "Simulateur 3D interactif du robot parallèle de type Delta conçu lors de mon projet de fin d'études à l'USTHB. Il permet l'exploration cinématique complète, la simulation du contrôle en boucle fermée et la génération de trajectoires pour la manipulation à haute vitesse.",
      features: [
        "Calcul en temps réel de la cinématique directe et inverse (DK/IK)",
        "Playback de trajectoires exportées depuis MATLAB / Simulink",
        "Simulateur de boucle de régulation fidèle au correcteur PID physique",
        "Interface de commande 3D interactive construite avec Three.js",
      ],
      architecture:
        "Modélisation géométrique et dynamique sous Simulink (.slx) et SolidWorks, convertie en maillage 3D interactif avec moteurs de physique et d'animation Three.js.",
      challenges: [
        "Résolution des équations cinématiques inverses non linéaires en moins de 1ms pour une animation fluide 60fps",
        "Synchronisation parfaite entre le contrôleur logique et le rendu WebGL 3D",
      ],
      results:
        "Validé expérimentalement avec le prototype physique du robot Delta construit à l'USTHB.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    en: {
      overview:
        "Interactive 3D simulator of the Delta parallel robot designed during my Master's thesis at USTHB. Enables full kinematic exploration, closed-loop control simulation, and trajectory planning for high-speed pick-and-place operations.",
      features: [
        "Real-time Forward & Inverse Kinematics (FK/IK) calculation",
        "Playback of trajectory datasets exported directly from MATLAB / Simulink",
        "Closed-loop PID regulation matching the physical controller parameters",
        "Interactive WebGL 3D control console powered by Three.js",
      ],
      architecture:
        "Geometric & dynamic modeling in Simulink (.slx) and SolidWorks, mapped to a WebGL 3D physics scene driven by custom kinematic solvers in TypeScript.",
      challenges: [
        "Solving non-linear inverse kinematics under 1ms constraints for smooth 60fps WebGL rendering",
        "Aligning virtual twin joint limits with hardware physical end-stops",
      ],
      results:
        "Experimentally validated against the physical Delta robot prototype constructed at USTHB.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    ar: {
      overview:
        "محاكي ثلاثي الأبعاد تفاعلي لروبوت Delta المتوازي المصمم خلال مشروع تخرجي في جامعة USTHB. يتيح الاستكشاف الحركي الكامل، محاكاة التحكم بالحلقة المغلقة وتوليد المسارات للالتقاط والوضع عالي السرعة.",
      features: [
        "حساب الحركية المباشرة والعكسية (FK/IK) في الزمن الحقيقي",
        "إعادة تشغيل مسارات مُصدَّرة مباشرة من MATLAB / Simulink",
        "حلقة تنظيم PID مطابقة تمامًا للمتحكم الفيزيائي الحقيقي",
        "واجهة تحكم 3D تفاعلية مشغلة بواسطة Three.js",
      ],
      architecture:
        "نمذجة هندسية وديناميكية تحت Simulink وSolidWorks، محولة إلى مشهد 3D تفاعلي مع محرك حركي محلي في TypeScript.",
      challenges: [
        "حل المعادلات الحركية العكسية غير الخطية في أقل من 1 ملي ثانية لضمان سلاسة العرض 60fps",
        "مطابقة حدود زوايا المفاصل الافتراضية مع حدود المكونات الميكانيكية الفعالية",
      ],
      results:
        "تم التحقق منه تجريبيًا مع نموذج روبوت Delta الفيزيائي المصنوع في جامعة USTHB.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    es: {
      overview:
        "Simulador 3D interactivo del robot paralelo Delta diseñado durante mi trabajo de fin de máster en la USTHB. Permite la exploración cinemática completa, simulación de control en bucle cerrado y planificación de trayectorias.",
      features: [
        "Cálculo en tiempo real de cinemática directa e inversa (FK/IK)",
        "Reproducción de trayectorias exportadas desde MATLAB / Simulink",
        "Bucle de regulación PID idéntico al controlador físico",
        "Consola de control 3D interactiva desarrollada en Three.js",
      ],
      architecture:
        "Modelado geométrico en Simulink y SolidWorks, integrado en una escena 3D WebGL impulsada por algoritmos de cinemática inversa en TypeScript.",
      challenges: [
        "Resolución cinemática inversa no lineal en menos de 1ms para renderizado 60fps",
        "Sincronización exacta entre el controlador lógico y la física 3D",
      ],
      results:
        "Validado experimentalmente con el prototipo físico del robot Delta construido en la USTHB.",
      githubUrl: "https://github.com/djidelabdelali",
    },
  },
  "digital-twin-3cuves": {
    fr: {
      overview:
        "Jumeau numérique d'un système à trois cuves couplées pour la supervision et la commande de procédés hydrauliques industriels. Il offre une représentation visuelle en temps réel des niveaux de liquide, des débits de pompe et de l'état des electrovannes.",
      features: [
        "Supervision temps réel des niveaux et débits d'eau",
        "Simulation de pannes et fuites sur les conduits",
        "Algorithme de régulation de niveau en boucle fermée",
        "Graphiques de tendances historiques et logs d'alarmes",
      ],
      architecture:
        "Interface Web React alimentée par un moteur de simulation d'équations différentielles physiques en temps réel.",
      challenges: [
        "Modélisation dynamique précise du couplage non-linéaire entre les trois réservoirs",
      ],
      results:
        "Utilisé comme support pédagogique et démonstrateur de supervision industrielle Industrie 4.0.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    en: {
      overview:
        "Digital Twin of a three-tank coupled hydraulic system designed for industrial process control and supervision. Provides real-time telemetry visualization for liquid levels, pump flowrates, and solenoid valve states.",
      features: [
        "Real-time supervision of water levels and volumetric flowrates",
        "Fault and pipeline leak injection simulation",
        "Closed-loop tank level PID regulation mode",
        "Historical trend charts and real-time alarm loggers",
      ],
      architecture:
        "React UI dashboard bound to a physical differential equation simulation engine running in real time.",
      challenges: [
        "Accurate dynamic modeling of non-linear hydrodynamic coupling across tanks",
      ],
      results:
        "Serves as an educational demonstrator for Industry 4.0 industrial supervision concepts.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    ar: {
      overview:
        "توأم رقمي لنظام بثلاثة خزانات هيدروليكية مترابطة للإشراف والتحكم في العمليات الصناعية. يوفر عرضًا مباشرًا لمستويات السوائل، تدفقات المضخات وحالة الصمامات.",
      features: [
        "إشراف مباشر في الزمن الحقيقي على المستويات والتدفقات",
        "محاكاة الأعطال والتسربات في الأنابيب",
        "خوارزمية تنظيم المستوى بالحلقة المغلقة",
        "رسوم بيانية لمتابعة التغيرات التاريخية وسجل التنبيهات",
      ],
      architecture:
        "واجهة React مرتبطة بمحرك محاكاة للمعادلات تفاضلية فيزياء السوائل في الزمن الحقيقي.",
      challenges: [
        "النمذجة الديناميكية الدقيقة للترابط غير الخطي بين الخزانات الثلاثة",
      ],
      results:
        "يُستخدم كأداة تعليمية ونموذج إشراف صناعي للصناعة 4.0.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    es: {
      overview:
        "Gemelo digital de un sistema de tres tanques hidráulicos acoplados para supervisión y control de procesos industriales.",
      features: [
        "Supervisión en tiempo real de niveles y caudales de agua",
        "Simulación de fallos y fugas en tuberías",
        "Algoritmo de regulación de nivel en bucle cerrado",
        "Gráficos de tendencias históricas y registro de alarmas",
      ],
      architecture:
        "Interfaz web React alimentada por un motor de simulación de ecuaciones diferenciales en tiempo real.",
      challenges: [
        "Modelado dinámico del acoplamiento no lineal entre los tres tanques",
      ],
      results:
        "Utilizado como demostrador pedagógico para supervisión industrial Industria 4.0.",
      githubUrl: "https://github.com/djidelabdelali",
    },
  },
  "plc-sim": {
    fr: {
      overview:
        "Simulateur pédagogique d'automate programmable industriel (PLC) conforme à la norme IEC 61131-3. Il permet d'éditer des programmes en langage Ladder et Structured Text (ST), de simuler leur exécution et de contrôler des procédés virtuels en 3D.",
      features: [
        "Éditeur visuel de diagrammes Ladder avec validation en temps réel",
        "Interprète Structured Text (ST) conforme IEC 61131-3",
        "Scènes 3D interactives de procédés (convoyeurs, trieuses, ascenseurs)",
        "Table de tags et moniteur d'E/S numériques et analogiques",
      ],
      architecture:
        "Compilateur/Interprète AST léger développé en TypeScript, couplé à une scène 3D Three.js réactive aux états des bobines et contacts PLC.",
      challenges: [
        "Mise en œuvre du cycle de balayage PLC (Lecture E/S → Exécution programme → Écriture E/S) à 100Hz dans le thread JavaScript",
      ],
      results:
        "Outil interactif utilisé pour la formation pratique aux automates industriels.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    en: {
      overview:
        "Educational Programmable Logic Controller (PLC) simulator conforming to IEC 61131-3 standards. Allows editing Ladder Logic and Structured Text (ST) programs, executing scan cycles, and controlling interactive 3D virtual processes.",
      features: [
        "Visual Ladder diagram editor with real-time syntax checking",
        "Structured Text (ST) interpreter conforming to IEC 61131-3",
        "Interactive 3D animated process scenes (conveyors, elevators, sorters)",
        "Tag database editor and digital/analog I/O forcing monitor",
      ],
      architecture:
        "Custom AST compiler/interpreter in TypeScript bound to a reactive Three.js 3D environment driving physical contacts and coils.",
      challenges: [
        "Maintaining a deterministic 100Hz PLC scan cycle execution loop within JavaScript's event-driven runtime",
      ],
      results:
        "Interactive learning tool deployed for industrial automation coursework.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    ar: {
      overview:
        "محاكي تعليمي لجهاز التحكم القابل للبرمجة (PLC) متوافق مع معيار IEC 61131-3. يتيح تحرير برامج بطريقة Ladder وStructured Text (ST)، محاكاة تنفيذها والتحكم في مشاهد عمليات 3D افتراضية.",
      features: [
        "محرر مرئي لمخططات Ladder مع تحقق مباشر",
        "مترجم Structured Text (ST) متوافق مع IEC 61131-3",
        "مشاهد عمليات صناعية 3D (ناقلات، آلات فرز، مصاعد)",
        "جدول المتغيرات ومراقبة الدخل/الخرج الرقمي والتناظري",
      ],
      architecture:
        "مترجم AST خفيف في TypeScript مرتبط بمشهد Three.js ثلاثي الأبعاد ينفذ أوامر PLC.",
      challenges: [
        "ضمان دورة مسح PLC بدقة 100Hz داخل محرك متصفح الويب",
      ],
      results:
        "أداة تفاعلية مخصصة للتكوين التطبيقي في الآلية الصناعية.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    es: {
      overview:
        "Simulador pedagógico de autómata programable (PLC) conforme a la norma IEC 61131-3. Permite editar programas en Ladder y Structured Text (ST) y controlar procesos 3D.",
      features: [
        "Editor visual de esquemas Ladder con validación",
        "Intérprete Structured Text (ST) IEC 61131-3",
        "Escenas 3D de procesos industriales interactivos",
        "Tabla de variables y monitor E/S",
      ],
      architecture:
        "Compilador AST en TypeScript vinculado a un entorno 3D Three.js.",
      challenges: [
        "Ejecución determinista del ciclo de escaneo PLC a 100Hz en JavaScript",
      ],
      results:
        "Herramienta interactiva para formación en automatización industrial.",
      githubUrl: "https://github.com/djidelabdelali",
    },
  },
  "ros2-academy": {
    fr: {
      overview:
        "ROS2Academy est une plateforme web d'apprentissage autonome de ROS2 (Robot Operating System). Elle propose une roadmap structurée sur 5 niveaux, plus de 60 modules interactifs, des cas pratiques et un assistant IA dédié.",
      features: [
        "Roadmap complète de débutant à expert ROS2 (Nodes, Topics, Services, Actions, URDF, Gazebo)",
        "Plus de 60 leçons interactives avec blocs de code et commandes terminal",
        "Assistant conversationnel IA formé sur la documentation ROS2 Jazzy",
        "Suivi de progression et génération d'attestations d'apprentissage",
      ],
      architecture:
        "Application web moderne sous React/TypeScript, conçue en parallèle de mes enseignements en robotique à l'USTHB.",
      challenges: [
        "Vulgarisation de concepts complexes de middleware distribué (DDS, QoS, Executors) en modules digestes",
      ],
      results:
        "Plateforme adoptée par des dizaines d'étudiants en robotique pour leur auto-formation à ROS2.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    en: {
      overview:
        "ROS2Academy is a complete web platform for self-paced ROS2 (Robot Operating System) learning. Features a 5-level structured roadmap, over 60 interactive modules, practical challenges, and a dedicated AI tutor.",
      features: [
        "5-level roadmap from ROS2 fundamentals to advanced concepts (Nodes, Topics, Services, Actions, URDF, Nav2)",
        "60+ interactive lessons with code snippets and terminal commands",
        "Dedicated AI assistant trained on ROS2 Jazzy & Humble documentation",
        "Progress tracking and interactive code challenges",
      ],
      architecture:
        "React/TypeScript application created alongside my teaching assistant responsibilities at USTHB.",
      challenges: [
        "Structuring complex distributed middleware concepts (DDS, QoS profiles, Executors) into intuitive modules",
      ],
      results:
        "Adopted by robotics students for hands-on ROS2 mastering.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    ar: {
      overview:
        "ROS2Academy هي منصة ويب كاملة للتعلم الذاتي لنظام تشغيل الروبوتات ROS2. تضم خارطة طريق منظمة على 5 مستويات، أكثر من 60 درسًا تفاعليًا ومساعد ذكاء اصطناعي مخصص.",
      features: [
        "خارطة طريق متكاملة من البداية إلى الاحتراف في ROS2",
        "أكثر من 60 درسًا مع أمثلة برمجية وأوامر الطرفية",
        "مساعد محادثة ذكي مدرب على توثيق ROS2 Jazzy",
        "متابعة التقدم وتحديات تطبيقية",
      ],
      architecture:
        "تطبيق React مصمم بالتوازي مع تأطيري للطلبة في مادة ROS2 بجامعة USTHB.",
      challenges: [
        "تبسيط المفاهيم المعقدة لنظام DDS والـ QoS في وحدات تعليمة واضحة",
      ],
      results:
        "منصة اعتمدها طلبة الروبوتيات للتعلم الذاتي والتطبيقي لـ ROS2.",
      githubUrl: "https://github.com/djidelabdelali",
    },
    es: {
      overview:
        "ROS2Academy es una plataforma web completa para el aprendizaje autónomo de ROS2 (Robot Operating System). Incluye una hoja de ruta en 5 niveles y más de 60 módulos.",
      features: [
        "Hoja de ruta estructurada desde conceptos básicos hasta avanzados en ROS2",
        "Más de 60 lecciones interactivas con código y comandos",
        "Asistente IA dedicado entrenado en documentación ROS2 Jazzy",
        "Seguimiento de progreso y retos prácticos",
      ],
      architecture:
        "Aplicación React/TypeScript desarrollada junto a mi labor docente en la USTHB.",
      challenges: [
        "Estructurar conceptos complejos de middleware (DDS, QoS) en módulos accesibles",
      ],
      results:
        "Plataforma utilizada por estudiantes de robótica para su autoformación en ROS2.",
      githubUrl: "https://github.com/djidelabdelali",
    },
  },
};
