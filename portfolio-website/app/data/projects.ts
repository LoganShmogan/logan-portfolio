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
    lead: "Raspberry Pi and ESP32 builds, self-hosted infrastructure and on-device AI.",
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
    githubLink: "https://github.com/LoganShmogan/save-point",
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
    githubLink: "https://github.com/HappyHorizons-NZ/Happy-Horizons-Website",
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
    githubLink: "https://github.com/LoganShmogan/splitpin-engineering",
    liveLink: "https://splitpin-engineering.vercel.app",
    featured: true,
  },
  {
    slug: "asa-sign-in",
    title: "ASA Sign-In System",
    category: "client",
    description:
      "The production sign-in system for After School Adventures childcare, now at v7.3. A fullscreen Tkinter kiosk on a Windows kiosk PC runs alongside a Flask dashboard reachable over a Cloudflare Tunnel. Admin and staff roles, bulk sign-in from run sheets, staff self-service timesheets, caregiver emails, Excel/PDF/CSV exports with embedded signatures, hashed passwords with lockouts and CSRF protection, full audit logging and 100% test coverage.",
    placeholderLabel: "ASA Sign-In",
    techTags: ["Python", "Flask", "Tkinter", "SQLite", "Cloudflare Tunnel", "pytest"],
    status: "Private",
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
    status: "Open source",
    featured: true,
  },

  // ── Apps & products ──
  {
    slug: "jampacked",
    title: "JamPacked",
    category: "apps",
    description:
      "Goods inwards, stock and food safety records for NZ and Australian food businesses, built around MPI National Programmes 1–3 or a custom programme. Every delivery becomes stock you can rotate, hold, dispatch and recall, with barcode scanning, temperature logs, audits and corrective actions. One account runs several businesses with invited staff. Flutter app, Convex backend and a Next.js website, all with 100% test coverage enforced.",
    placeholderLabel: "JamPacked",
    techTags: ["Flutter", "Dart", "Convex", "Next.js", "TypeScript", "Vitest"],
    githubLink: "https://github.com/LoganShmogan/JamPacked",
    liveLink: "https://jampacked.co.nz",
    liveLabel: "jampacked.co.nz",
    featured: true,
  },
  {
    slug: "quillfin",
    title: "QuillFin",
    category: "apps",
    description:
      "Mobile-first notes app built around spaced repetition. Turn notes into quiz questions with your own OpenAI-compatible or Anthropic key, import .txt, .md, .pdf, .docx or .pptx files, track practice problems LeetCode-style, and let FSRS (the algorithm Anki uses) bring each item back before you forget it. Started as Quiz App AI, a Python desktop app, then rewritten from scratch in Flutter as AlotaNotes; now adding accounts, offline-first sync and a Next.js web app. 100% test coverage.",
    placeholderLabel: "QuillFin",
    techTags: ["Flutter", "Dart", "Convex", "Clerk", "Next.js", "FSRS"],
    githubLink: "https://github.com/LoganShmogan/QuillFin",
    liveLink: "https://alotanotes.savepoint.co.nz",
    liveLabel: "Live demo",
    status: "In progress",
    featured: true,
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
    featured: true,
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
    slug: "project-hub",
    title: "Save Point Project Hub",
    category: "apps",
    description:
      "Save Point's Discord bot for project docs. Each project gets a forum channel that mirrors its GitHub docs as versioned posts, with a pinned feed of commits, PRs, issues and releases. A /project command sets up a new forum and starts syncing straight away, and the bot can be added to other servers, each with its own projects, while only the home server can mirror private repos. Team uploads come in through slash commands or a docsync CLI whose API only listens on Tailscale, with duplicate detection and GitHub kept as the source of truth.",
    placeholderLabel: "Project Hub",
    techTags: ["Go", "Discord API", "GitHub API", "Docker", "Tailscale"],
    githubLink: "https://github.com/LoganShmogan/savepoint-disc-bot",
    status: "Internal tool",
  },
  {
    slug: "memeline",
    title: "MemeLine",
    category: "apps",
    description:
      "A community app for memes: post, vote and discuss, with a timeline showing when each meme took off alongside world events of the time. One Expo codebase for web, iOS and Android. It began as a touchscreen TikTok browser on a Raspberry Pi with the Touch Display 2, in a 3D-printed case I designed, which plays a saved TikTok data export offline.",
    placeholderLabel: "MemeLine",
    techTags: ["Expo", "React Native", "TypeScript", "SQLite", "Python", "Raspberry Pi"],
    githubLink: "https://github.com/LoganShmogan/MemeLine",
    status: "In progress",
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
    featured: true,
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
    slug: "loganserver",
    title: "loganserver",
    category: "hardware",
    description:
      "My headless Ubuntu home server, which hosts this portfolio and Save Point's apps. Each app runs in its own Docker Compose stack behind a Caddy reverse proxy that only listens locally, and a Cloudflare Tunnel brings every savepoint.co.nz subdomain in, so no ports are open to the internet. I manage it over Tailscale with hardware-key SSH and keep a full build log and runbook.",
    placeholderLabel: "loganserver",
    techTags: ["Ubuntu Server", "Docker Compose", "Caddy", "Cloudflare Tunnel", "Tailscale"],
    status: "Self-hosted",
  },
  {
    slug: "f1-dashboard",
    title: "F1 Race Dashboard",
    category: "hardware",
    description:
      "Three ESP32-S3 touch screens in matching frames that show live Formula One sessions: standings on the left, a track map with every car moving round it in the middle, and race drama and sound on the right. Each board pulls live timing from OpenF1 over wifi and they talk to each other over ESP-NOW, so a tap on one screen changes another. A gift build, made with a friend who owns the design.",
    placeholderLabel: "F1 Dashboard",
    techTags: ["ESP32-S3", "Arduino", "C++", "OpenF1 API", "ESP-NOW"],
    status: "In progress",
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

// Projects with a real screenshot first, otherwise keeping list order
export const imagesFirst = (list: Project[]) =>
  [...list].sort((a, b) => Number(!a.imageUrl) - Number(!b.imageUrl));
