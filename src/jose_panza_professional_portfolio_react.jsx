export default function JosePanzaPortfolio() {
  const technologies = {
    backend: [
      'Java',
      'Spring Boot',
      'jPOS',
      'Node.js',
      'Express',
      'NestJS',
      'TypeScript',
      'JavaScript',
      'REST APIs',
      'ISO-8583',
      'HSM Integrations',
    ],
    devops: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'ELK Stack',
      'CI/CD',
      'Linux',
      'GitHub Actions',
    ],
    databases: ['PostgreSQL', 'DB2', 'SQL Server', 'MySQL', 'Knex.js'],
    architecture: [
      'Microservices',
      'Scalable Systems',
      'Clean Architecture',
      'Team Leadership',
      'Distributed Systems',
    ],
  };

  const achievements = [
    {
      title: 'Transactional Systems & Payment Processing',
      description:
        'Development and maintenance of high-availability transactional systems with integrations based on ISO-8583 standards, HSM communication and payment processing.',
    },
    {
      title: 'Backend Leadership & Architecture',
      description:
        'Leading technical initiatives, mentoring developers and designing maintainable backend architectures focused on scalability, performance and long-term sustainability.',
    },
    {
      title: 'Modern API Ecosystems',
      description:
        'Building robust APIs using Node.js, Express, NestJS and Java ecosystems with strong engineering practices and business-oriented design.',
    },
    {
      title: 'DevOps & Cloud Readiness',
      description:
        'Containerization, orchestration and observability using Docker, Kubernetes, Jenkins and ELK for modern deployment pipelines.',
    },
  ];

  const projects = [
    {
      title: 'Payment Link Platform',
      stack: 'NestJS • TypeScript • PostgreSQL • REST APIs',
      description:
        'Architecture and migration of payment link services, checkout integrations and transactional flows for commerce platforms.',
    },
    {
      title: 'Transactional Switch Integrations',
      stack: 'Java • jPOS • ISO-8583 • HSM',
      description:
        'Integration and maintenance of critical financial communication systems with high reliability and secure message processing.',
    },
    {
      title: 'AI & Multispectral Image Research',
      stack: 'Machine Learning • Image Processing • Research',
      description:
        'Academic research focused on pest detection in crops using multispectral and high-resolution imaging combined with machine learning.',
    },
    {
      title: 'Backend Automation & Excel Services',
      stack: 'Node.js • Express • Multer • Excel Processing',
      description:
        'Development of import/export automation services with transactional database synchronization and external API integrations.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_35%)]" />

      <header className="relative border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Jose Panza</h1>
            <p className="text-sm text-slate-400">
              Senior Backend Engineer • Team / Tech Lead • Systems Engineer
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            Paraguay • Backend Specialist • High Availability Systems
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            Building resilient systems
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              where failure is not an option.
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Senior backend engineer focused on transactional systems, payment
            processing, scalable architectures and technical leadership. Passionate
            about designing software that survives real-world pressure — clean,
            maintainable and engineered for growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all font-semibold shadow-2xl shadow-cyan-500/30"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-slate-400 text-sm">Current Focus</p>
                <h3 className="text-2xl font-bold">Senior Backend & Tech Leadership</h3>
              </div>

              <div className="h-4 w-4 rounded-full bg-green-400 animate-pulse" />
            </div>

            <div className="space-y-5">
              <div className="bg-black/30 rounded-2xl p-5 border border-white/5">
                <p className="text-sm text-slate-400 mb-2">Primary Stack</p>
                <p className="font-semibold leading-relaxed">
                  Java • Spring • jPOS • Node.js • NestJS • TypeScript
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-5 border border-white/5">
                <p className="text-sm text-slate-400 mb-2">Specialization</p>
                <p className="font-semibold leading-relaxed">
                  High-volume transactional systems, payment processing,
                  scalable APIs and software architecture.
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-5 border border-white/5">
                <p className="text-sm text-slate-400 mb-2">Mindset</p>
                <p className="font-semibold leading-relaxed">
                  Clean code. Real scalability. Long-term maintainability.
                  Engineering with intention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            About Me
          </p>

          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Engineer, architect and problem solver.
          </h3>

          <p className="text-slate-300 max-w-4xl text-lg leading-relaxed">
            Systems Engineer from the Universidad Autónoma de Asunción with
            strong experience in backend engineering, critical transactional
            systems and technical leadership. Experienced in designing reliable
            software ecosystems, mentoring teams and solving complex technical
            challenges under demanding environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5 text-cyan-300 font-black text-xl">
                0{index + 1}
              </div>

              <h4 className="text-xl font-bold mb-4">{achievement.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Experience
            </p>

            <h3 className="text-4xl md:text-5xl font-black">
              Technologies & Engineering Stack
            </h3>
          </div>

          <p className="text-slate-400 max-w-xl">
            Focused on scalable backend ecosystems, financial systems,
            observability and production-grade engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h4 className="text-2xl font-bold capitalize mb-6">
                {category}
              </h4>

              <div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm hover:border-cyan-400 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Projects & Highlights
          </p>

          <h3 className="text-4xl md:text-5xl font-black">
            Real systems. Real impact.
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-cyan-300 font-semibold">
                  Project 0{index + 1}
                </span>

                <div className="h-3 w-3 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
              </div>

              <h4 className="text-2xl font-black mb-4">{project.title}</h4>
              <p className="text-sm text-cyan-300 mb-6">{project.stack}</p>
              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-[40px] p-10 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.6),transparent_30%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                Professional Vision
              </p>

              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Technology should solve problems,
                not create more of them.
              </h3>

              <p className="text-slate-300 leading-relaxed text-lg">
                I enjoy building systems that are resilient, elegant and capable
                of evolving over time. My focus goes beyond writing code — it is
                about engineering sustainable solutions, empowering teams and
                delivering measurable value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-black/30 border border-white/10 rounded-3xl p-6">
                <h4 className="text-4xl font-black mb-3">Senior</h4>
                <p className="text-slate-400 text-sm">
                  Backend engineering and architecture experience.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-3xl p-6">
                <h4 className="text-4xl font-black mb-3">API</h4>
                <p className="text-slate-400 text-sm">
                  Robust integrations and scalable service design.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-3xl p-6">
                <h4 className="text-4xl font-black mb-3">CI/CD</h4>
                <p className="text-slate-400 text-sm">
                  Modern deployment pipelines and operational maturity.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-3xl p-6">
                <h4 className="text-4xl font-black mb-3">Lead</h4>
                <p className="text-slate-400 text-sm">
                  Mentorship, ownership and technical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Contact
          </p>

          <h3 className="text-5xl font-black mb-8">
            Let's build something exceptional.
          </h3>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Open to backend engineering, architecture and technical leadership
            opportunities where performance, scalability and innovation matter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="px-6 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all font-semibold"
            >
              Contact Me
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="px-6 py-4 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-slate-500 text-sm">
        <p>
          Designed & engineered by Jose Panza • Built for GitHub Pages • React
          + TailwindCSS
        </p>
      </footer>

      {/*
        ==============================================================
        DEPLOYMENT GUIDE
        ==============================================================

        1. Create project:
           npm create vite@latest jose-portfolio -- --template react

        2. Install dependencies:
           npm install
           npm install tailwindcss @tailwindcss/vite

        3. Configure TailwindCSS for Vite.

        4. Replace App.jsx with this file.

        5. Run locally:
           npm run dev

        6. Deploy to GitHub Pages:
           npm install gh-pages --save-dev

           package.json:
           "homepage": "https://YOUR_GITHUB_USERNAME.github.io/jose-portfolio"

           scripts:
           "predeploy": "npm run build",
           "deploy": "gh-pages -d dist"

        7. Deploy:
           npm run deploy

        ==============================================================
        IMPORTANT TODOs
        ==============================================================

        - Replace YOUR_LINKEDIN
        - Replace YOUR_GITHUB
        - Replace YOUR_EMAIL
        - Add real company names and work timeline
        - Add GitHub repositories
        - Add certifications if available
        - Add profile image/avatar if desired

        ==============================================================
        EXTENSIVE PROMPT FOR ANOTHER AI AGENT
        ==============================================================

        Create a world-class professional portfolio website for a senior backend engineer and systems architect named Jose Panza.

        The website must be built using modern frontend engineering best practices with:

        - React + Vite
        - TailwindCSS
        - Responsive design
        - Clean Architecture principles
        - Reusable components
        - Semantic HTML
        - Performance optimization
        - Accessibility best practices
        - Professional animations
        - Maintainable folder structure
        - Production-ready code quality

        DESIGN REQUIREMENTS:

        - Dark modern cyber-professional style
        - Elegant gradients and glassmorphism
        - Premium UI feeling
        - Minimalist but powerful visual identity
        - Strong engineering aesthetic
        - Smooth transitions and hover states
        - Mobile-first responsiveness
        - Strong typography hierarchy
        - Sections clearly separated
        - No visual clutter

        PERSONAL PROFILE:

        Name: Jose Panza
        Country: Paraguay
        Profession: Systems Engineer
        Role: Senior Backend Engineer / Team Lead / Tech Lead

        BACKGROUND:

        Jose is a senior backend engineer with strong experience in:

        - Java
        - Spring Boot
        - jPOS
        - Node.js
        - Express
        - NestJS
        - TypeScript
        - JavaScript
        - SQL
        - PostgreSQL
        - DB2
        - Docker
        - Kubernetes
        - Jenkins
        - ELK Stack
        - ISO-8583
        - HSM integrations
        - Transactional switches
        - Payment processing
        - High-availability systems
        - Scalable APIs
        - Technical leadership
        - Team mentoring
        - Backend architecture
        - CI/CD
        - Distributed systems

        PERSONALITY & PROFESSIONAL IDENTITY:

        - Analytical thinker
        - Strong problem solver
        - Engineering mindset
        - Leadership-oriented
        - Clean code advocate
        - Scalability-focused
        - Business-aware engineer
        - Proactive and self-taught
        - Professional and modern
        - Architect mentality

        WEBSITE SECTIONS:

        1. Hero Section
           - Powerful headline
           - Professional subtitle
           - Strong call-to-action buttons
           - Animated visual presentation
           - Links to LinkedIn/GitHub

        2. About Section
           - Professional story
           - Engineering philosophy
           - Leadership mindset
           - Systems thinking approach

        3. Technologies Section
           - Backend technologies
           - DevOps stack
           - Databases
           - Architecture tools
           - Modern badges/cards

        4. Experience Section
           - Senior backend experience
           - Team leadership
           - Payment systems
           - Transactional environments
           - Scalable architecture projects

        5. Projects Section
           Include projects related to:
           - Payment links
           - Transactional systems
           - ISO-8583 integrations
           - AI image processing research
           - API integrations
           - Automation systems
           - Backend platforms

        6. Contact Section
           - Professional CTA
           - Email button
           - LinkedIn button
           - GitHub button

        7. Footer
           - Professional branding
           - Built with React + Tailwind

        TECHNICAL REQUIREMENTS:

        - Use reusable arrays and mapping for dynamic rendering
        - Avoid duplicated JSX
        - Use clean component separation
        - Maintain consistent spacing system
        - Use Tailwind utility best practices
        - Add subtle animations
        - Optimize for Lighthouse score
        - Follow modern frontend architecture standards
        - Code must be readable and production-ready
        - Add comments only where truly necessary

        EXTRA IDEAS:

        - Add animated background
        - Add terminal-style engineering widgets
        - Add scrolling reveal effects
        - Add dynamic tech cards
        - Add professional stats section
        - Add downloadable CV button
        - Add language switcher EN/ES
        - Add GitHub contribution integration
        - Add timeline visualization

        FINAL GOAL:

        The final result must feel like the portfolio of a senior engineer who:

        - Builds critical systems
        - Understands architecture deeply
        - Leads teams
        - Designs scalable solutions
        - Works in high-impact environments
        - Has strong technical authority

        The website must look premium, modern, technically sophisticated and recruiter-impressive.
      */}
    </div>
  );
}
