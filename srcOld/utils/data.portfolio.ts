export const experience = [
  {
    years: "2022 — 2024",
    role: "Software Engineer",
    company: "Deloitte USI",
    url: "https://www.deloitte.com",
    description:
      "Shipped frontend modules for Fortune 500 clients on Oracle HCM integrations — Chubb, Kroger, and Atrium Health. Diagnosed a 9-second dashboard load on the Chubb account using React Profiler, resolved it with memo, useCallback, and Promise.all, bringing load time under 5 seconds. Adopted Redwood UI components and delivered Kronos HCM integrations across multiple client environments.",
    tags: ["React", "TypeScript", "Oracle HCM", "Performance", "Kronos"],
  },
  {
    years: "2021 — 2022",
    role: "Junior Frontend Engineer",
    company: "SalesBook",
    url: "#",
    description:
      "Built and shipped product features at a B2B SaaS startup. Full ownership of feature work from design handoff to deployment — React, TypeScript, and Axios across the core product. Fixed critical UI bugs and consumed REST APIs to deliver real-time sales data to the dashboard.",
    tags: ["React", "TypeScript", "Axios", "REST APIs"],
  },
];

export const projects = [
  {
    name: "TaskFlow",
    description:
      "Full-stack task management platform with production-grade JWT auth. Implemented atomic refresh token rotation via a single MongoDB aggregation pipeline — eliminates the race condition most auth systems silently ignore. HttpOnly cookies, CSRF protection, role-based access.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "JWT", "Express"],
    github: "https://github.com",
    live: "https://taskflow.vercel.app",
    url: "taskflow.vercel.app",
  },
  {
    name: "Delete Stale Git Branches",
    description:
      "A GitHub developer tool that scans repositories for merged and stale branches, previews what will be deleted, and batch-cleans with one click. Built for dev teams managing repos with 50+ branches. Saves hours of manual cleanup per sprint.",
    tags: ["Node.js", "GitHub API", "TypeScript", "CLI"],
    github: "https://github.com",
    live: "https://git-sweep.vercel.app",
    url: "git-sweep.vercel.app",
  },
  {
    name: "FlixPlay",
    description:
      "Full-stack YouTube-style video platform — upload, stream, like, comment, and create playlists. Likes on comments, nested replies, and a fully responsive player built with Next.js. MongoDB for content, JWT for auth.",
    tags: ["Next.js", "MongoDB", "Tailwind", "JWT", "Cloudinary"],
    github: "https://github.com",
    live: "https://flixplay.vercel.app",
    url: "flixplay.vercel.app",
  },
  {
    name: "Personal Finance Dashboard",
    description:
      "Analytics dashboard for tracking income, expenses, and savings with interactive charts. Node.js + TypeScript backend with Prisma, PostgreSQL, Zod validation, rotating HttpOnly refresh tokens, Swagger docs, and Jest + Supertest coverage.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Jest"],
    github: "https://github.com",
    live: "https://finance.vercel.app",
    url: "finance.vercel.app",
  },
  {
    name: "Reddit Clone",
    description:
      "Full-stack Reddit clone — subreddits, posts, nested comments, upvoting, and user auth. Built with Next.js App Router, Prisma, and PostgreSQL. Infinite scroll, image uploads via Uploadthing.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Uploadthing"],
    github: "https://github.com",
    live: "https://reddit-clone.vercel.app",
    url: "reddit-clone.vercel.app",
  },
  {
    name: "Shadcn TanStack Dashboard",
    description:
      "Take-home assignment — production-ready admin dashboard with TanStack Table, Shadcn/ui, advanced filtering, column visibility, row selection, and a full feature page. Pixel-perfect implementation from a Figma spec.",
    tags: ["React", "TanStack Table", "Shadcn/ui", "TypeScript"],
    github: "https://github.com",
    live: "https://tanstack-dash.vercel.app",
    url: "tanstack-dash.vercel.app",
  },
];

export const navItems = ["about", "experience", "projects"] as const;
export type Section = (typeof navItems)[number];
