export type ProjectCategory = "client" | "apps" | "hardware" | "study";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  techTags: string[];
  imageUrl?: string;
  // Shown on a pixel tile when there is no screenshot
  placeholderLabel?: string;
  // Public repo link; leave out for private repos
  githubLink?: string;
  liveLink?: string;
  liveLabel?: string;
  // e.g. "Private repo", "In progress", "Collaboration"
  status?: string;
  featured?: boolean;
};

export const categories: {
  id: ProjectCategory;
  title: string;
  lead: string;
}[] = [
  {
    id: "client",
    title: "Client Work",
    lead: "Websites and systems built for real businesses, most of them through Save Point.",
  },
  {
    id: "apps",
    title: "Apps & Products",
    lead: "Full-stack web, mobile and desktop apps, from AI-powered study tools to food safety compliance.",
  },
  {
    id: "hardware",
    title: "Hardware & IoT",
    lead: "Raspberry Pi builds, self-hosted infrastructure and on-device AI.",
  },
  {
    id: "study",
    title: "University & Study",
    lead: "Coursework and practice projects from my Bachelor of ICT and beyond.",
  },
];

export const projects: Project[] = [
  // ── Client work ──
  {
    slug: "save-point-website",
    title: "Save Point Website",
    category: "client",
    description:
      "The website for my own company, Save Point. A statically rendered Next.js site with a contact form, full privacy, cookie, terms and refund policies, structured data for search, and an accessible high-contrast 8-bit look.",
    imageUrl: "/savePoint.jpg",
    techTags: ["Next.js", "TypeScript", "CSS Modules", "EmailJS", "Vercel"],
    liveLink: "https://savepoint.co.nz",
    liveLabel: "savepoint.co.nz",
    status: "Private repo",
    featured: true,
  },
  {
    slug: "happy-horizons",
    title: "Happy Horizons Website",
    category: "client",
    description:
      "Contract build for a childcare business: a marketing site covering enrolment, gallery and contact handling, live at happyhorizons.nz.",
    imageUrl: "/happyHorizons.png",
    techTags: ["Next.js", "TypeScript", "EmailJS", "Vercel"],
    githubLink: "https://github.com/LoganShmogan/Happy-Horizons-Website",
    liveLink: "https://happyhorizons.nz",
    liveLabel: "happyhorizons.nz",
    featured: true,
  },
  {
    slug: "splitpin-engineering",
    title: "Splitpin Engineering Website",
    category: "client",
    description:
      "Mobile-first site for a welding and fabrication sole trader. Plain HTML, CSS and JavaScript with no build step: a filterable work gallery with lightbox, a quote form, a full legal page, and caching and security headers on Vercel.",
    imageUrl: "/splitpinEngineering.jpg",
    techTags: ["HTML", "CSS", "JavaScript", "Vercel"],
    liveLink: "https://splitpin-engineering.vercel.app",
    status: "Private repo",
    featured: true,
  },
  {
    slug: "kiosk-sign-in",
    title: "Kiosk Sign-In System",
    category: "client",
    description:
      "Sign-in/out kiosk and web dashboard for tracking attendance, originally built for a childcare centre and still running there. Includes signature capture, caregiver email notifications, run sheets and sign-in analytics. The open-source version is on GitHub.",
    imageUrl: "/kioskSignIn.png",
    techTags: ["Python", "Flask", "Tkinter", "SQLite", "Chart.js"],
    githubLink: "https://github.com/LoganShmogan/kiosk-signin-system",
  },

  // ── Apps & products ──
  {
    slug: "nz-safety-health",
    title: "NZ Safety Health App",
    category: "apps",
    description:
      "Food safety records for NZ and Australian food businesses, built around MPI Food Control Plan rules. Goods-inwards checks with barcode scanning and Open Food Facts auto-fill, temperature logs, audits, automatic corrective actions, expiry alerts, batch recall tracing and a full audit trail. 100% unit test coverage on both app and backend.",
    placeholderLabel: "Food Safety",
    techTags: ["Flutter", "Dart", "Convex", "TypeScript", "Vitest"],
    status: "Private repo",
    featured: true,
  },
  {
    slug: "alotanotes",
    title: "AlotaNotes",
    category: "apps",
    description:
      "Mobile notes and spaced-repetition quiz app. Organise notes into subjects, import .txt, .md, .pdf, .docx or .pptx files, and generate quiz questions with your own OpenAI-compatible or Anthropic API key. A from-scratch Flutter rewrite of Quiz App AI, with 100% test coverage.",
    placeholderLabel: "AlotaNotes",
    techTags: ["Flutter", "Dart", "OpenAI / Anthropic APIs", "Docker"],
    status: "Private repo",
  },
  {
    slug: "quiz-app-ai",
    title: "Quiz App AI",
    category: "apps",
    description:
      "Desktop notebook that quizzes you on your own notes. Generates questions with your own AI key, schedules reviews with spaced repetition, and cross-links related notes with local keyword matching. GitHub Actions builds single-file Windows and Linux executables on every release.",
    placeholderLabel: "Quiz App AI",
    techTags: ["Python", "Tkinter", "SQLite", "PyInstaller", "GitHub Actions"],
    githubLink: "https://github.com/LoganShmogan/Quiz-app-Ai",
  },
  {
    slug: "ai-job-search",
    title: "AI Job Search Tool",
    category: "apps",
    description:
      "Semi-automated job search assistant for Seek. Scrapes listings, drafts a tailored resume and cover letter for each job with Claude, then opens the real application for you to review. It never submits anything on your behalf, a boundary enforced in the architecture rather than a setting.",
    placeholderLabel: "Job Search",
    techTags: ["Python", "Playwright", "Claude API", "pytest"],
    githubLink: "https://github.com/LoganShmogan/Ai-Job-Search-Tool",
  },
  {
    slug: "lifestyle-app",
    title: "Lifestyle App",
    category: "apps",
    description:
      "Nutrition and fitness tracker with AI calorie counting. I built the profile and settings page, split a 3,000-line App.jsx into focused modules, and set up the Vercel deployment, where a serverless function keeps the Anthropic API key off the client.",
    placeholderLabel: "Lifestyle",
    techTags: ["React", "Vite", "Vercel Functions", "Claude API"],
    githubLink: "https://github.com/jamesbot78/lifestyle-app",
    liveLink: "https://lifestyle-app-omega.vercel.app",
    status: "Collaboration",
  },
  {
    slug: "nutritrack",
    title: "NutriTrack",
    category: "apps",
    description:
      "Nutrition tracking app with a 2,700+ item NZ food database, dietary intake charts and PDF/CSV reporting, built as a university software engineering project.",
    imageUrl: "/nutriTrack.png",
    techTags: ["Next.js", "TypeScript", "SQL", "Docker"],
    githubLink: "https://github.com/LoganShmogan/nextjs-nutrition-app",
  },
  {
    slug: "property-management",
    title: "Property Management Webapp",
    category: "apps",
    description:
      "Property listings webapp for New Zealand properties, with user accounts and session-based auth backed by MySQL, plus a demo mode that runs without a database.",
    imageUrl: "/propertyManagement.png",
    techTags: ["Node.js", "Express", "Handlebars", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/LoganShmogan/property-management-webapp",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    category: "apps",
    description:
      "This site: a multi-page Next.js portfolio with a green take on Save Point's 8-bit branding.",
    imageUrl: "/portfolioWebsite.png",
    techTags: ["Next.js", "TypeScript", "CSS Modules"],
    githubLink: "https://github.com/LoganShmogan/logan-portfolio",
    liveLink: "https://loganportfolio.savepoint.co.nz",
    liveLabel: "loganportfolio.savepoint.co.nz",
  },

  // ── Hardware & IoT ──
  {
    slug: "meme-browser",
    title: "MemeBrowser",
    category: "hardware",
    description:
      "Touchscreen media browser on a Raspberry Pi with the official Touch Display 2, in a 3D-printed case I designed. Imports saved TikToks from a data export, downloads them, and plays everything offline alongside your own photos, videos and notes.",
    placeholderLabel: "MemeBrowser",
    techTags: ["Python", "Raspberry Pi", "Tkinter", "libVLC", "SQLite", "3D printing"],
    status: "Private repo",
    featured: true,
  },
  {
    slug: "save-point-infrastructure",
    title: "Save Point Infrastructure",
    category: "hardware",
    description:
      "Self-hosted server that runs Save Point's internal apps on savepoint.co.nz subdomains through Cloudflare Tunnel and Caddy, including a live client attendance dashboard served straight from its kiosk, with hardware security keys on key accounts.",
    placeholderLabel: "Infra",
    techTags: ["Linux", "Cloudflare Tunnel", "Caddy", "Docker"],
    status: "Internal",
  },
  {
    slug: "in-home-ai",
    title: "In-Home AI",
    category: "hardware",
    description:
      "Private, on-device AI assistant running on a Raspberry Pi 5 with a Hailo-10H AI HAT+ 2 NPU, serving local language models through Open WebUI, with camera integration in progress.",
    placeholderLabel: "In-Home AI",
    techTags: ["Raspberry Pi 5", "Hailo NPU", "Docker", "Open WebUI"],
    status: "In progress",
  },

  // ── University & study ──
  {
    slug: "machine-learning",
    title: "Machine Learning Techniques",
    category: "study",
    description:
      "Data analytics coursework applying regression, clustering, classification and PCA to real-world datasets, including stock price prediction.",
    imageUrl: "/machineLearning.png",
    techTags: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    githubLink: "https://github.com/LoganShmogan/Machine-learning-techniques",
    liveLink:
      "https://colab.research.google.com/github/LoganShmogan/Machine-learning-techniques/blob/main/allTasks.ipynb#scrollTo=main_title",
    liveLabel: "Open in Colab",
  },
  {
    slug: "tuck-box",
    title: "TuckBox App",
    category: "study",
    description:
      ".NET MAUI food-ordering app using MVVM, with login, registration and a home screen of today's orders, all backed by a self-managed on-device JSON store.",
    placeholderLabel: "TuckBox",
    techTags: ["C#", ".NET MAUI", "MVVM", "Docker"],
    githubLink: "https://github.com/LoganShmogan/tuck-box-shop-app",
  },
  {
    slug: "dice-game",
    title: "Dice Game",
    category: "study",
    description:
      ".NET MAUI mobile app simulating a 2-player dice game, with turn-based rolling, random dice imagery and a first-to-20 win condition.",
    imageUrl: "/diceGame.png",
    techTags: ["C#", ".NET MAUI", "Docker"],
    githubLink: "https://github.com/LoganShmogan/dice-game",
  },
  {
    slug: "todo-list",
    title: "To-Do List Manager",
    category: "study",
    description:
      "C# to-do list manager with both a WPF GUI and a command-line interface, supporting categories, due dates, priorities and labels.",
    imageUrl: "/todoListManager.png",
    techTags: ["C#", "WPF", ".NET"],
    githubLink: "https://github.com/LoganShmogan/Todo-list-manager-app",
  },
  {
    slug: "dynamic-programming",
    title: "Dynamic Programming Notebook",
    category: "study",
    description:
      "My worked solutions to the LeetCode Dynamic Programming study plan, written in both Python and C#.",
    placeholderLabel: "DP Notebook",
    techTags: ["Python", "C#", "Algorithms"],
    githubLink: "https://github.com/LoganShmogan/Dynamic-Programming-Notebook",
  },
  {
    slug: "weather-webapp",
    title: "Weather Webapp",
    category: "study",
    description:
      "Local New Zealand weather app that pulls forecasts from an open weather API, built with vanilla JavaScript, HTML and CSS.",
    placeholderLabel: "Weather",
    techTags: ["JavaScript", "HTML", "CSS", "REST APIs"],
    githubLink: "https://github.com/LoganShmogan/weather-webapp",
  },
];
