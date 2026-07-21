export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
] as const

export type SectionId = (typeof NAV_ITEMS)[number]['id']

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/singh-kashish', 
    icon: `<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>`,
    viewBox: '0 0 16 16',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kashish-singh111/', 
    icon: `<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>`,
    viewBox: '0 0 24 24',
  },
  {
    label: 'Email',
    href: 'mailto:singh.kashishw@gmail.com', 
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`,
    viewBox: '0 0 24 24',
    stroke: true,
  },
]

export const EXPERIENCE = [
  {
    years: '2023 — 2025',
    role: 'Software Engineer',
    company: 'Deloitte USI',
    url: 'https://www.deloitte.com',
    description:
      'Developed, maintained, and shipped responsive production frontend code for client web applications. Clients included Chubb Insurance, Kroger Co., and more.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI'],
  },
  {
    years: '2021 — 2022',
    role: 'Junior Frontend Engineer',
    company: 'SalesBook',
    url: 'https://www.salesbook.com',
    description:
      'Built and shipped product features at a B2B SaaS startup. Full ownership of feature work from design handoff to deployment — React, TypeScript, and Axios across the core product. Resolved 80+ UI/UX bugs and consumed REST APIs to surface real-time sales data.',
    tags: ['React', 'TypeScript', 'Axios', 'TailwindCSS'],
  },
]

export const PROJECTS = [
  {
    name: 'TaskFlow',
    description:
      'Full-stack task management platform with production-grade JWT auth. Atomic refresh token rotation via a single MongoDB aggregation pipeline eliminates the race condition most auth systems silently ignore. HttpOnly cookies, CSRF protection, role-based access.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/singh-kashish/TASK-MANAGEMENT-APP', 
    live: 'https://task-management-app-delta-sable.vercel.app/',
    url: 'https://task-management-app-delta-sable.vercel.app/',
    image: '/screenshots/taskflow.png', // TODO: add real screenshot
  },
  {
    name: 'Delete Stale Git Branches',
    description:
      'GitHub developer tool that scans repos for merged and stale branches, previews what will be deleted, and batch-cleans with one click. Built for dev teams managing repos with 50+ branches — saves hours of manual cleanup per sprint.',
    tags: ['Node.js', 'GitHub API', 'TypeScript', 'CLI'],
    github: 'https://github.com/singh-kashish/DeleteStaleGitBranches', 
    live: 'https://delete-stale-git-branches.vercel.app/', 
    url: 'https://delete-stale-git-branches.vercel.app/',
    image: '/screenshots/git-sweep.png', // TODO: add real screenshot
  },
  {
    name: 'FlixPlay',
    description:
      'Full-stack YouTube-style video platform — upload, stream, like, comment, nested replies, and playlists. Likes on comments, a fully responsive video player, and JWT auth built with Next.js and MongoDB.',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    github: 'https://github.com/singh-kashish/youtubeClone', 
    live: 'https://youtube-clone-alpha-liard.vercel.app/', 
    url: 'https://youtube-clone-alpha-liard.vercel.app/',
    image: '/screenshots/flixplay.png',// TODO: add real screenshot
  },
  {
    name: 'Personal Finance Dashboard',
    description:
      'Analytics dashboard for income, expense, and savings tracking with interactive Recharts visualizations. Node.js + TypeScript backend with Prisma, PostgreSQL, Zod validation, rotating HttpOnly refresh tokens, Swagger docs, and Jest + Supertest test coverage.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Zod', 'Recharts'],
    github: 'https://github.com', // TODO
    live: 'https://finance.vercel.app', // TODO
    url: 'finance.vercel.app',
    image: '/screenshots/finance.png',
  },
  {
    name: 'Reddit Clone',
    description:
      'Full-stack Reddit clone with subreddits, posts, nested comments, upvoting, infinite scroll, and image uploads via Uploadthing. Built on Next.js App Router with Prisma and PostgreSQL.',
    tags: ['Next.js', 'Supabase', 'Reddit OAuth', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/singh-kashish/redditClone', 
    live: 'https://reddit-clone-2-teal.vercel.app/',
    url: 'https://reddit-clone-2-teal.vercel.app/',
    image: '/screenshots/reddit.png',
  },
  {
    name: 'TanStack Dashboard',
    description:
      'Take-home assignment — production-ready admin dashboard with TanStack Table, Shadcn/ui, advanced filtering, column visibility, and row selection. Pixel-perfect implementation from a Figma spec with a full feature sub-page.',
    tags: ['React', 'TanStack Table', 'Shadcn/ui', 'TypeScript'],
    github: 'https://github.com/singh-kashish/Order-Risk-Dashboard', 
    live: 'https://order-risk-dashboard.vercel.app/order-risk', 
    url: 'https://order-risk-dashboard.vercel.app/order-risk',
    image: '/screenshots/tanstack.png',
  },
]
