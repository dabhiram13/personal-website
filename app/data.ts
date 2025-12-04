import AodIcon from '@mui/icons-material/Aod';
import SourceIcon from '@mui/icons-material/Source';
import CodeIcon from '@mui/icons-material/Code';

type Project = {
  name: string
  github : string
  description: string
  link: string
  video?: string
  id: string
  tag?: string
  type?: 'video' | 'image'
  image?: string
}

type Design = {
  name: string
  description: string
  link: string
  video: string
  id: string
  tag?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  icon?: React.ElementType
}

type SocialLink = {
  label: string
  link: string
}

type OpenSourceContrib = {
  repository: string
  description: string
  githubLink: string
  pullRequests: {
    title: string
    link: string
  }[]
  id: string
  tag?: string
}

export const PROJECTS: Project[] = [
    {
    name: 'AI Prompt Playground',
    github:'https://github.com/dabhiram13/Prompt-Playground-Application' , 
    description:
      'AI Prompt playground for testing and experimenting with AI prompts',
    link: 'https://sridurga.me',
    image :
      '/project1.png',
    id: 'project1',
    type : 'image'
  },
]

export const DESIGNS: Design[] = [
  {
    name: 'Zone',
    description: 'Secure your code ownership on the Solana blockchain. Protect intellectual property, monetize repositories, and build a verifiable portfolio of your work.',
    link: 'https://sridurga.me',
    video: '/Zone.mp4',
    id: 'design3',
    tag: 'Motion' 
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Community',
    title: 'Web3 Developer',
    start: '2025',
    end: 'Present',
    link: 'https://sridurga.me',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'React Native Dev',
    start: "Jan",
    end: "Mar",
    link: 'https://sridurga.me',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Fullstack Developer',
    start: '2024',
    end: 'Present',
    link: 'https://sridurga.me',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Frontend',
    description: 'React , Nextjs , TailwindCSS , Native',
    link: '/',
    uid: 'blog-1',
    icon: AodIcon
  },
  {
    title: 'Backend',
    description:
      'Nodejs , Express , PostgresSQL , MongoDB , Prisma',
    link: '/',
    uid: 'blog-2',
    icon: SourceIcon
  },
  {
    title: 'Languages',
    description:
      'Javascript , Typescript , Solidity , SQL , Rust ',
    link: '/',
    uid: 'blog-3',
    icon: CodeIcon
  },

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/dabhiram13',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/AIwithAbhi',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sri-durga-abhiram-divyakolu-910128195',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/abhiramsrii',
  },
]

export const EMAIL = 'dabhiram13@gmail.com'

export const OPEN_SOURCE_CONTRIBUTIONS: OpenSourceContrib[] = [
  {
    repository: 'Example Repo',
    description: 'Description of your contribution to this repository',
    githubLink: 'https://github.com/organization/repo',
    pullRequests: [
      {
        title: 'Fix bug',
        link: 'https://github.com/organization/repo/pull/124',
      },
    ],
    id: 'contrib1',
    tag: 'Maintainer',
  },
  // Add more contributions here
]
