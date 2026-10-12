// All site content lives here. Swap placeholder values with your own.

export const PERSONAL = {
  name: 'Abhiram',
  fullName: 'Sri Durga Abhiram Divyakolu',
  verified: true,
  tagline: 'full-stack developer',
  age: null as number | null, // e.g. 22 -> shows "22y/o"
  role: 'Full-stack Developer',
  company: 'Foundry', // current company / project, swap with real one
  companyUrl: 'https://github.com/dabhiram13/foundry',
  previousCompanies: [] as { name: string; url: string }[], // e.g. [{ name: 'Acme', url: 'https://acme.com' }]
  location: 'India', // swap with your city
  email: 'dabhiram13@gmail.com',
  leetcode: null as { label: string; url: string } | null, // e.g. { label: 'Top 12% on LeetCode', url: 'https://leetcode.com/you' }
  education: 'CS graduate', // short label for the info list
  educationUrl: '',
  bio: 'Full-stack developer building products and learning new things. I like shipping user-first tools and writing about how I build them.',
  avatars: ['/sridurga.png'], // add more photos to cycle on click
}

export type Experience = {
  company: string
  logo?: string // path under /public, falls back to initial letter
  title: string
  start: string
  end: string
  link?: string
  linkLabel?: string
  bullets?: string[]
  tech?: string[]
  id: string
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'Community',
    title: 'Web3 Developer',
    start: '2025',
    end: 'Present',
    link: '',
    bullets: [
      'Describe what you built or shipped here',
      'Another highlight, impact or metric worth showing',
    ],
    tech: ['Solana', 'TypeScript', 'Next.js'],
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'React Native Dev',
    start: 'Jan 2025',
    end: 'Mar 2025',
    bullets: [],
    tech: ['React Native', 'Expo'],
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Fullstack Developer',
    start: '2024',
    end: 'Present',
    bullets: [],
    tech: ['Next.js', 'Node.js'],
    id: 'work3',
  },
]

export type Education = {
  school: string
  degree: string
  start: string
  end: string
  link?: string
  logo?: string
}

export const EDUCATION: Education = {
  school: 'Your College Name', // swap
  degree: 'B.Tech in Computer Science', // swap
  start: '20XX',
  end: '20XX',
  link: '',
}

export type Project = {
  name: string
  description: string
  link: string
  github?: string
  image?: string // preview image under /public
  logo?: string // small icon under /public
  tag?: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AI Prompt Playground',
    description: 'Playground for testing and experimenting with AI prompts',
    link: 'https://sridurga.me',
    github: 'https://github.com/dabhiram13/Prompt-Playground-Application',
    image: '/project1.png',
    id: 'project1',
  },
  {
    name: 'Retro-Dither',
    description: 'Dither your images into 90s retro style',
    link: 'https://retro-dither.vercel.app/',
    github: 'https://github.com/dabhiram13/retro-dither',
    image: '/project1.png', // swap with a real preview image
    id: 'project2',
  },
  {
    name: 'Foundry',
    description: 'Connected work-and-verification framework for coding agents',
    link: 'https://github.com/dabhiram13/foundry',
    github: 'https://github.com/dabhiram13/foundry',
    image: '/project1.png', // swap with a real preview image
    id: 'project3',
  },
]

// Tech stack pills. `icon` is a simpleicons.org slug (https://simpleicons.org).
export type StackItem = { name: string; icon?: string }

export const STACK: StackItem[] = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Express', icon: 'express' },
  { name: 'React Native', icon: 'react' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Prisma', icon: 'prisma' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Solana', icon: 'solana' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'Linux', icon: 'linux' },
]

export type SocialLink = {
  label: string
  link: string
  icon: 'github' | 'linkedin' | 'x' | 'youtube' | 'instagram' | 'discord' | 'calendar'
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', link: 'https://github.com/dabhiram13', icon: 'github' },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sri-durga-abhiram-divyakolu-910128195',
    icon: 'linkedin',
  },
  { label: 'X', link: 'https://x.com/AIwithAbhi', icon: 'x' },
  { label: 'Instagram', link: 'https://www.instagram.com/abhiramsrii', icon: 'instagram' },
]

export const CONTACT = {
  heading: 'Building something cool?',
  subtext:
    "I'm always up for a good idea. Tell me what you're working on and let's build something great together.",
  primary: { label: 'Email me', link: 'mailto:dabhiram13@gmail.com' },
  secondary: {
    label: 'Message on LinkedIn',
    link: 'https://www.linkedin.com/in/sri-durga-abhiram-divyakolu-910128195',
  },
}

export const FOOTER = {
  tagline: 'if you came this far, say hi or something.',
  handle: 'dabhiram13',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Guestbook', href: '/guestbook' },
  ],
}

export const EMAIL = PERSONAL.email
