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

export const PROJECTS = [
  {
    name: 'TaskFlo',
    description:
      'Full-stack task management platform with production-grade JWT auth. Atomic refresh token rotation via a single MongoDB aggregation pipeline eliminates the race condition most auth systems silently ignore. HttpOnly cookies, CSRF protection, role-based access.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/singh-kashish/TASK-MANAGEMENT-APP', 
    live: 'https://task-management-app-delta-sable.vercel.app/',
    url: 'https://task-management-app-delta-sable.vercel.app/',
    image: 'https://private-user-images.githubusercontent.com/54403943/612701390-f2849e80-d0d3-4f89-b70b-f04a1aea5fd6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQ2MzE0NDQsIm5iZiI6MTc4NDYzMTE0NCwicGF0aCI6Ii81NDQwMzk0My82MTI3MDEzOTAtZjI4NDllODAtZDBkMy00Zjg5LWI3MGItZjA0YTFhZWE1ZmQ2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA3MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNzIxVDEwNTIyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNjNzkxOWFjODdlZDY2ZmM5N2Y0OTY3MDZjNmVmYzgyZjE0Zjk4MTY2NDMyNTg1MjNlZjE0ZTYxZGI5MWVlYjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.hOxsR06NGvFlpMFWr9RS4z-ak2k_-Dyzhxk3VBPJ3Qk', // TODO: add real screenshot
  },
  {
    name: 'Pipeline Builder',
    description:
      'Drag-and-drop visual pipeline editor built with React Flow and Zustand. A FastAPI backend validates submitted graphs — exposing node/edge counts and running Kahn\'s algorithm (BFS topological sort) to detect cycles, correctly handling isolated nodes, disconnected graphs, and concurrent submissions via request-ordering guards.',
    tags: ['React', 'React Flow', 'Zustand', 'FastAPI', 'Python', 'Pydantic'],
    github: 'https://github.com/singh-kashish/pipelineFastAPI',
    live: 'https://pipeline-fast-api.vercel.app/', // TODO: add once hosted
    url: 'pipeline-builder.vercel.app',
    image: '/screenshots/pipelineFastAPI.png',
  },
  {
    name: 'Delete Stale Git Branches',
    description:
      'GitHub developer tool that scans repos for merged and stale branches, previews what will be deleted, and batch-cleans with one click. Built for dev teams managing repos with 50+ branches — saves hours of manual cleanup per sprint.',
    tags: ['Node.js', 'GitHub API', 'TypeScript', 'CLI'],
    github: 'https://github.com/singh-kashish/DeleteStaleGitBranches', 
    live: 'https://delete-stale-git-branches.vercel.app/', 
    url: 'https://delete-stale-git-branches.vercel.app/',
    image: '/screenshots/git-sweep.png',
  },
  {
    name: 'Personal Finance Dashboard',
    description:
      'Analytics dashboard for income, expense, and savings tracking with interactive Recharts visualizations. Node.js + TypeScript backend with Prisma, PostgreSQL, Zod validation, rotating HttpOnly refresh tokens, Swagger docs, and Jest + Supertest test coverage.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Zod', 'Recharts'],
    github: 'https://github.com/singh-kashish/PersonalFinanceDashboard', // TODO
    live: 'https://finance.vercel.app', // TODO
    url: 'finance.vercel.app',
    image: '/screenshots/finance.png',
  },
  {
    name: 'TanStack Dashboard',
    description:
      'Take-home assignment — production-ready admin dashboard with TanStack Table, Shadcn/ui, advanced filtering, column visibility, and row selection. Pixel-perfect implementation from a Figma spec with a full feature sub-page.',
    tags: ['React', 'TanStack Table', 'Shadcn/ui', 'TypeScript'],
    github: 'https://github.com/singh-kashish/Order-Risk-Dashboard', 
    live: 'https://order-risk-dashboard.vercel.app/order-risk', 
    url: 'https://order-risk-dashboard.vercel.app/order-risk',
    image: '/screenshots/tanstack-dashboard.png',
  },
]

// ─── ARCHIVED PROJECTS (shown on /projects page only) ───────────────────────
// Volume + consistency signal. No shame in clones — they show you ship.
export const ARCHIVED_PROJECTS = [
  {
    year: '2024',
    name: 'FlixPlay',
    builtAt: 'Personal',
    description: 'YouTube-style video platform — upload, stream, like, comment, nested replies, playlists. JWT auth, Cloudinary for video storage.',
    tags: ['Next.js', 'Tailwind', 'Supabase' ],
    github: 'https://github.com/singh-kashish/youtubeClone', 
    live: 'https://youtube-clone-alpha-liard.vercel.app/', 
  },
  {
    year: '2023',
    name: 'Reddit Clone',
    builtAt: 'Personal',
    description: 'Full-stack Reddit clone — subreddits, posts, nested comments, upvoting, infinite scroll, image uploads via Uploadthing.',
    tags: ['Next.js', 'Supabase', 'Reddit OAuth', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/singh-kashish/redditClone', 
    live: 'https://reddit-clone-2-teal.vercel.app/',
  },
  {
    year: '2022',
    name: 'Amazon Clone',
    builtAt: 'Personal',
    description: 'E-commerce clone with product listing, cart, and order flow. Firebase auth and Firestore for data.',
    tags: ['React', 'Firebase', 'Stripe'],
    github: 'https://github.com/singh-kashish/amazon-clone',
    live: 'https://amazon-clone.vercel.app',
  },
  {
    year: '2021',
    name: 'Airbnb UI Clone',
    builtAt: 'Personal',
    description: 'Pixel-accurate Airbnb landing page clone. Responsive layout, modal flows, and search bar interactions.',
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/singh-kashish/airbnb',
    live: 'https://airbnb-smoky.vercel.app/',
  },
  {
    year: '2021',
    name: 'Youtube Search',
    builtAt: 'Personal',
    description: '',
    tags: ['React', 'Firebase', 'Youtube Data API v3','Semantic UI'],
    github: 'https://github.com/singh-kashish/youtubeSearch/',
    live: 'https://search-313918.web.app/',
  },
  {
    year: '2021',
    name: 'Personal Website v0',
    builtAt: 'Personal',
    description: '',
    tags: ['React'],
    github: 'https://github.com/singh-kashish/portfolioV0/',
    live: 'https://lucent-narwhal-310044.netlify.app/',
  }
  
]

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    years: '2022 — 2024',
    role: 'Software Engineer',
    company: 'Deloitte USI',
    url: 'https://www.deloitte.com',
    description:
      'Shipped frontend modules for Fortune 500 clients on Oracle HCM integrations — Chubb, Kroger, Atrium Health. Diagnosed a 9-second dashboard load on the Chubb account using React Profiler, resolved it with memo, useCallback, and Promise.all. Adopted Redwood UI components and delivered Kronos HCM integrations across multiple environments.',
    tags: ['React', 'TypeScript', 'Oracle HCM', 'Redux Toolkit', 'Performance'],
  },
  {
    years: '2021 — 2022',
    role: 'Junior Frontend Engineer',
    company: 'SalesBook',
    url: 'https://salesbook.com',
    description:
      'Built and shipped product features at a B2B SaaS startup. Full ownership from design handoff to deployment — React, TypeScript, Axios across the core product. Resolved UI/UX bugs and consumed REST APIs to surface real-time sales data.',
    tags: ['React', 'TypeScript', 'Axios', 'REST APIs'],
  },
]

// ─── NAV + SOCIALS ───────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
] as const

export type SectionId = (typeof NAV_ITEMS)[number]['id']

