import React, { useState } from "react";

// ==========================================
// DATA STRUCTURES (DICTIONARIES FOR EN / ES)
// ==========================================
const content = {
  es: {
    nav: {
      about: "Sobre Mí",
      tech: "Tecnologías",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Paraguay • Especialista Backend • Alta Disponibilidad",
      headline: "Construyendo sistemas resilientes ",
      headlineGradient: "donde fallar no es una opción.",
      sub: "Ingeniero de Sistemas y desarrollador backend senior enfocado en sistemas transaccionales, procesamiento de pagos y liderazgo técnico. Diseñado para soportar la presión del mundo real.",
      ctaPrimary: "Ver Proyectos",
      ctaSecondary: "Ver LinkedIn",
      focusTitle: "Enfoque Actual",
      focusDesc: "Liderazgo Técnico y Arquitectura Backend",
    },
    about: {
      tag: "Filosofía",
      title: "Ingeniero, arquitecto y solucionador de problemas.",
      desc: "Ingeniero en Informática con énfasis en sistemas por la Universidad Autónoma de Asunción. Especializado en el diseño de ecosistemas de software robustos, mitigación de fallos bajo entornos críticos y dirección técnica de equipos de ingeniería.",
    },
    techTitle: "Ecosistema de Ingeniería",
    experienceTitle: "Trayectoria Profesional",
    projectsTitle: "Sistemas Reales. Impacto Real.",
    contact: {
      title: "Construyamos algo excepcional.",
      sub: "Abierto a oportunidades de consultoría, arquitectura de sistemas y roles directivos de ingeniería.",
      btn: "Contactar por Email",
    },
    terminal: {
      tab1: "arquitectura_sistema.sh",
      tab2: "metricas_rendimiento.json",
      line1: "Initializing payment gateway infrastructure...",
      line2: "Status: OPERATIONAL | Cluster Nodes: ACTIVE",
      line3: "ISO-8583 parsing engine loaded successfully.",
    },
  },
  en: {
    nav: {
      about: "About",
      tech: "Technologies",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Paraguay • Backend Specialist • High Availability",
      headline: "Building resilient systems ",
      headlineGradient: "where failure is not an option.",
      sub: "Systems Engineer and senior backend developer focused on transactional switches, payment processing, and technical leadership. Engineered to survive mission-critical production pressure.",
      ctaPrimary: "View Projects",
      ctaSecondary: "View LinkedIn",
      focusTitle: "Current Focus",
      focusDesc: "Technical Leadership & Backend Architecture",
    },
    about: {
      tag: "Philosophy",
      title: "Engineer, architect, and pragmatic problem solver.",
      desc: "Systems Engineer from Universidad Autónoma de Asunción. Specialized in designing robust software ecosystems, mitigating architectural single points of failure, and mentoring engineering teams.",
    },
    techTitle: "Engineering Stack & Tooling",
    experienceTitle: "Professional Timeline",
    projectsTitle: "Production Systems. Measurable Impact.",
    contact: {
      title: "Let's build something exceptional.",
      sub: "Open to core backend engineering, systems design, and technical management roles.",
      btn: "Get In Touch",
    },
    terminal: {
      tab1: "system_architecture.sh",
      tab2: "performance_metrics.json",
      line1: "Initializing payment gateway infrastructure...",
      line2: "Status: OPERATIONAL | Cluster Nodes: ACTIVE",
      line3: "ISO-8583 parsing engine loaded successfully.",
    },
  },
};

const technologies = [
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "jPOS",
      "Node.js",
      "Express",
      "NestJS",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "ISO-8583",
      "HSM",
    ],
  },
  {
    category: "DevOps & Ops",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "ELK Stack",
      "CI/CD",
      "Linux",
      "GitHub Actions",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "DB2 (AS400)", "SQL Server", "Oracle", "MySQL"],
  },
  {
    category: "Architecture",
    items: [
      "Microservices",
      "Distributed Systems",
      "Clean Architecture",
      "High Availability",
      "Team Leadership",
    ],
  },
];

const historyData = {
  es: [
    {
      role: "Desarrollador Senior / Tech Lead Interino",
      company: "BEPSA S.A.E.C.A",
      period: "Diciembre 2022 - Actualidad",
      desc: "Liderazgo de iniciativas técnicas backend y mentoría de ingenieros. Arquitectura y optimización de switches transaccionales financieros en Java (jPOS) bajo estándares ISO-8583 e integraciones criptográficas HSM Thales 9000. Orquestación e integración continua mediante Docker, Kubernetes, Jenkins y observabilidad con ELK Stack. Migración de microservicios utilizando Node.js con NestJS y bases de datos relacionales críticas (PostgreSQL y DB2 sobre AS400).",
    },
    {
      role: "Desarrollador Pleno / Semi-Senior",
      company: "I.T ALIANZA S.A",
      period: "Noviembre 2021 - Diciembre 2022",
      desc: "Desarrollo backend de procesos transaccionales de misión crítica para el proyecto integral de reingeniería de la arquitectura transaccional de BEPSA S.A.E.C.A utilizando Java y jPOS.",
    },
    {
      role: "Desarrollador Full Stack",
      company: "KONECTA S.A",
      period: "Marzo 2021 - Noviembre 2021",
      desc: "Diseño e implementación de sistemas Full Stack mediante Java con Spring Framework, Javascript, servidores de aplicaciones WildFly y JBoss para cuentas institucionales de alta envergadura como Núcleo Personal y ANEAES.",
    },
  ],
  en: [
    {
      role: "Senior Backend Engineer / Interim Tech Lead",
      company: "BEPSA S.A.E.C.A",
      period: "December 2022 - Present",
      desc: "Leading backend initiatives and mentoring core developers. Architecture and optimization of financial transactional switches in Java (jPOS) conforming to ISO-8583 standards and HSM Thales 9000 cryptographic processes. Container orchestration and CI/CD pipelines through Docker, Kubernetes, and Jenkins; system logging and performance observability via ELK Stack. Orchestrated modern microservices with Node.js, NestJS, TypeScript, and high-volume data persistence layers including PostgreSQL and IBM i DB2.",
    },
    {
      role: "Mid-Senior Backend Engineer",
      company: "I.T ALIANZA S.A",
      period: "November 2021 - December 2022",
      desc: "Engineered critical transactional routing backend mechanisms for the baseline infrastructural re-engineering core project of BEPSA S.A.E.C.A leveraging Java and framework adapters.",
    },
    {
      role: "Full Stack Developer",
      company: "KONECTA S.A",
      period: "March 2021 - November 2021",
      desc: "Full Stack engineering utilizing Java, Spring Framework, Javascript, and application servers like WildFly and JBoss for enterprise accounts including Personal Paraguay and ANEAES.",
    },
  ],
};

const projectsData = {
  es: [
    {
      title: "Plataforma Core & Switch Transaccional",
      stack: "Java • jPOS • ISO-8583 • HSM",
      desc: "Desarrollo de integraciones críticas para cajeros automáticos (ATMs Recicladores, transacciones en USD) y terminales POS en la red Dinelco. Implementación de criptografía simétrica en Hardware Security Modules (HSM).",
    },
    {
      title: "Ecosistema de Pagos QR e Integraciones",
      stack: "NestJS • TypeScript • PostgreSQL • Prisma",
      desc: "Arquitectura del módulo transaccional para la generación, procesamiento y reversión automática de pagos con código QR integrados directamente en portales comerciales y ATMs dinámicos.",
    },
    {
      title: "Investigación IA y Procesamiento de Imágenes",
      stack: "Python • Machine Learning • Multispectral Data",
      desc: "Investigación académica avanzada enfocada en el análisis avanzado de imágenes multiespectrales de alta resolución y modelos predictivos para la detección automatizada de plagas agrícolas.",
    },
    {
      title: "Servicios de Automatización e Ingesta de Datos",
      stack: "Node.js • Express • Buffer Pipelines • SQL",
      desc: "Creación de motores distribuidos de procesamiento batch de archivos Excel de alta densidad con sincronización ACID a sistemas legados DB2 en AS400.",
    },
  ],
  en: [
    {
      title: "Core Transactional Switch Architecture",
      stack: "Java • jPOS • ISO-8583 • HSM Thales",
      desc: "Engineered financial switch features for automated teller machines (Recycler ATMs, USD processing) and POS terminals on the Dinelco Network. Handled hardware security module cryptographic processing layers.",
    },
    {
      title: "QR Payment & Merchant Gateways",
      stack: "NestJS • TypeScript • PostgreSQL • Prisma",
      desc: "Designed modern merchant integration endpoints for high-throughput QR code payment generation, callback verification pipelines, and transactional safety nets.",
    },
    {
      title: "AI & Multispectral Imagery Analytics",
      stack: "Python • Machine Learning • Multispectral Data",
      desc: "Academic and scientific research utilizing computer vision pipelines and deep learning algorithms over high-resolution data to automate crop pest identification.",
    },
    {
      title: "Enterprise Ingestion & Streaming Pipelines",
      stack: "Node.js • Express • Stream Buffers • IBM DB2",
      desc: "Asynchronous streaming microservices engineered to ingest high-volume datasets from structured files down to legacy relational databases (DB2 on AS400 Systems).",
    },
  ],
};

export default function JosePanzaPortfolio() {
  const [lang, setLang] = useState("es");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#030611] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black antialiased">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#030611]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">
              JOSE PANZA
            </h1>
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Jose Panza"
            />
            <p className="text-xs text-cyan-400 font-mono">
              SYSTEMS_ENGINEER // LEAD_BE
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              {t.nav.about}
            </a>
            <a href="#tech" className="hover:text-cyan-400 transition-colors">
              {t.nav.tech}
            </a>
            <a
              href="#experience"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.experience}
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Switcher Button */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/40 text-xs font-mono text-cyan-400 hover:border-cyan-400 transition-all uppercase tracking-wider"
          >
            {lang === "es" ? "🌐 EN" : "🌐 ES"}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-mono text-xs tracking-wide">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            {t.hero.badge}
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            {t.hero.headline}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              {t.hero.headlineGradient}
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 font-bold transition-all shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 text-sm"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="https://www.linkedin.com/in/jose-panza/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold transition-all text-sm bg-slate-900/20"
            >
              {t.hero.ctaSecondary}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Jose_Panza_CV.pdf`}
              download="Jose_Panza_CV.pdf"
              className="px-4 py-2 border border-cyan-500 text-cyan-400 text-xs rounded"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>

        {/* System Terminal Widget */}
        <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 font-mono text-xs shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/40" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <span className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="text-slate-500 ml-2 font-mono text-[11px]">
                {t.terminal.tab1}
              </span>
            </div>
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="space-y-3 text-slate-400">
            <p className="text-cyan-500">~ {t.terminal.line1}</p>
            <p className="text-emerald-400">✔ {t.terminal.line2}</p>
            <p className="text-slate-500">~ {t.terminal.line3}</p>
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/60 mt-4">
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-sans font-bold mb-1">
                {t.hero.focusTitle}
              </p>
              <p className="text-sm font-sans font-bold text-white">
                {t.hero.focusDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900"
      >
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              // {t.about.tag}
            </p>
            <h3 className="text-3xl font-black text-white tracking-tight">
              {t.about.title}
            </h3>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center">
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.about.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section
        id="tech"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900"
      >
        <div className="mb-12">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            // Stack
          </p>
          <h3 className="text-3xl font-black text-white tracking-tight">
            {t.techTitle}
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((cat, i) => (
            <div
              key={i}
              className="bg-slate-900/20 border border-slate-800/60 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900"
      >
        <div className="mb-12">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            // Journey
          </p>
          <h3 className="text-3xl font-black text-white tracking-tight">
            {t.experienceTitle}
          </h3>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:right-auto before:left-4 before:w-px before:bg-slate-800">
          {historyData[lang].map((exp, i) => (
            <div key={i} className="relative pl-10 group">
              <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors z-10" />
              <div className="bg-slate-900/10 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-all max-w-4xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-sm text-cyan-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900"
      >
        <div className="mb-12">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            // Portfolio
          </p>
          <h3 className="text-3xl font-black text-white tracking-tight">
            {t.projectsTitle}
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData[lang].map((proj, i) => (
            <div
              key={i}
              className="bg-slate-900/10 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest">
                    SYSTEM_MODULE_0{i + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-60 group-hover:scale-150 transition-transform" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-900/40 px-2 py-1 rounded inline-block mb-4">
                  {proj.stack}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // IPC_CONNECTION
          </p>
          <h3 className="text-4xl font-black text-white tracking-tight">
            {t.contact.title}
          </h3>
          <p className="text-slate-400 text-base">{t.contact.sub}</p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:josepanza1@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/5"
            >
              {t.contact.btn}
            </a>
            <a
              href="https://github.com/josepanz"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold text-sm bg-slate-900/40 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900/60 py-8 text-center text-xs text-slate-500 font-mono">
        <p>
          © 2026 Jose Panza. Built with React + TailwindCSS. Controlled
          redundancy environment.
        </p>
      </footer>
    </div>
  );
}
