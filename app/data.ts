export const PERSONAL = {
  name: 'Abhiram',
  fullName: 'Sri Durga Abhiram Divyakolu',
  tagline: 'AI Engineering Intern',
  summary:
    'I’m Sri, an AI Engineering Intern at EverestLabs. I’m interested in how systems work and turning experiments into useful software.',
  email: 'dabhiram13@gmail.com',
  phone: '+1 (571) 564-6161',
  location: 'St. Louis, Missouri',
  github: 'https://github.com/dabhiram13',
  linkedin: 'https://www.linkedin.com/in/sri-durga-abhiram-d-910128195/',
  x: 'https://x.com/AIwithAbhi',
  instagram: 'https://www.instagram.com/abhiramsrii',
  avatar: '/photos/sri-sunlit.webp',
  currentRole: 'AI Engineering Intern',
  currentCompany: 'EverestLabs',
  currentCompanyUrl: 'https://everestlabs.ai/',
  currentCompanyLogo: '/company-logos/everestlabs-mark.svg',
  education: 'M.S. in Applied Computer Science',
}

export type Experience = {
  id: string
  company: string
  logo: string
  title: string
  subtitle: string
  start: string
  end: string
  link?: string
  linkLabel?: string
  bullets: string[]
  tech: string[]
  highlights?: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'everestlabs',
    company: 'EverestLabs',
    logo: '/company-logos/everestlabs-mark.svg',
    title: 'AI Engineering Intern',
    subtitle: 'Computer vision for robotic systems',
    start: 'Jun 2026',
    end: 'Present',
    link: PERSONAL.currentCompanyUrl,
    linkLabel: 'everestlabs.ai',
    bullets: [
      'Working on computer vision for robotic systems, from experiments to evaluating how they perform in practice.',
      'Inspecting evidence, testing ideas, and improving the reliability of AI software.',
    ],
    highlights: ['computer vision'],
    tech: ['Python', 'OpenCV', 'PyTorch'],
  },
  {
    id: 'deltron',
    company: 'Deltron AI Labs LLC',
    logo: '/company-logos/deltron-ai-labs-symbol.png',
    title: 'Founder & Automation Developer',
    subtitle:
      'Independent CRM and workflow automation prototypes for home-service businesses',
    start: 'Dec 2025',
    end: 'Apr 2026',
    bullets: [
      'Built reusable GoHighLevel prototypes for lead capture, CRM pipelines, automated follow-up, and appointment-booking workflows.',
      'Connected forms, websites, calendars, SMS, email, voicemail, and Messenger into end-to-end demos, with setup steps documented.',
    ],
    highlights: [
      'GoHighLevel',
      'automated follow-up',
      'appointment-booking workflows',
    ],
    tech: ['GoHighLevel', 'CRM', 'Workflow automation'],
  },
]

export type Education = {
  school: string
  logo: string
  degree: string
  date: string
  location: string
}

export const EDUCATION: Education[] = [
  {
    school: 'Southeast Missouri State University',
    logo: '/education-logos/semo-mark.png',
    degree: 'M.S. in Applied Computer Science · GPA 3.6 / 4.0',
    date: 'May 2025',
    location: 'Cape Girardeau, Missouri',
  },
  {
    school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute',
    logo: '/education-logos/veltech-mark.png',
    degree: 'B.Tech in Computer Science · GPA 3.5 / 4.0',
    date: 'May 2023',
    location: 'Chennai, India',
  },
]

export type Project = {
  id: string
  slug: string
  name: string
  mark: string
  description: string
  details: string
  impact?: string
  tech: string[]
  github?: string
  demo?: string
  image?: string
  tone: 'blue' | 'violet' | 'green' | 'orange' | 'slate'
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'ecg',
    slug: 'ecg-arrhythmia-detection',
    name: 'ECG Arrhythmia Detection',
    mark: 'ECG',
    description: 'A machine-learning pipeline for classifying ECG heartbeats.',
    details:
      'Compared Random Forest, SVM, 1D CNN, and LSTM models on 10,634 labeled heartbeats from five MIT-BIH records. The repository reports 98.82% Random Forest accuracy on a stratified 80/20 heartbeat-level split. Beats from a record can appear in both sets; this is not independent patient-held-out evaluation or clinical validation.',
    impact: '98.82% reported · heartbeat-level split',
    tech: ['Python', 'PyTorch', 'scikit-learn', 'SciPy'],
    github: 'https://github.com/dabhiram13/ECG-Arrhythmia-Detection-System',
    tone: 'blue',
    featured: true,
  },
  {
    id: 'docchat',
    slug: 'docchat',
    name: 'DocChat',
    mark: 'DC',
    description: 'Question-answering over documents with grounded citations.',
    details:
      'Built a full retrieval-augmented generation pipeline: PDF parsing and chunking, local embeddings, vector retrieval, and answers grounded in cited source passages.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Sentence-Transformers', 'Groq'],
    github: 'https://github.com/dabhiram13/DocChat',
    tone: 'violet',
    featured: true,
  },
  {
    id: 'prompt-studio',
    slug: 'prompt-studio',
    name: 'Prompt Studio',
    mark: 'PS',
    description:
      'Compare prompts, test what matters, and turn them into reusable tools.',
    details:
      'Build prompts from Role, Context, Task, Format, and Examples. Run side-by-side A/B comparisons, remove a block with an ablation to examine its effect, and check saved versions against reusable inputs and checklists. Turn a version into a mini-app with fill-in fields, or export it as Python or JavaScript.',
    tech: ['Python', 'Flask', 'SQLite', 'OpenRouter API', 'Vanilla JavaScript'],
    github: 'https://github.com/dabhiram13/Prompt-Playground-Application',
    tone: 'orange',
  },
  {
    id: 'retro-dither',
    slug: 'retro-dither',
    name: 'Retro-Dither',
    mark: 'RD',
    description: 'Turn images into retro 90s-style dithered artwork.',
    details:
      'An interactive image tool for applying a retro dither treatment. This project and its original preview recording are kept from the existing portfolio.',
    tech: ['TypeScript', 'Next.js', 'Canvas'],
    github: 'https://github.com/dabhiram13/retro-dither',
    demo: 'https://retro-dither.vercel.app/',
    tone: 'green',
  },
  {
    id: 'foundry',
    slug: 'foundry',
    name: 'Foundry',
    mark: 'F',
    description: 'An approval-gated workflow for building software with AI.',
    details:
      'Connect research, planning, design, implementation, and review in one workflow. Specialist roles handle each stage, with owner approval of the plan and design before building. Tasks, decisions, check results, and review findings carry forward between sessions. The final handoff is local; publishing and deployment are separate decisions.',
    tech: ['TypeScript', 'Node.js'],
    tone: 'slate',
  },
  {
    id: 'zone',
    slug: 'zone',
    name: 'Zone',
    mark: 'Z',
    description:
      'A Solana concept for verifiable code ownership and portfolios.',
    details:
      'An earlier concept from the existing site: secure code ownership on Solana, protect intellectual property, monetize repositories, and build a verifiable portfolio.',
    tech: ['Solana', 'Motion'],
    tone: 'violet',
  },
]

export const STACK = [
  'Python',
  'TypeScript',
  'JavaScript',
  'SQL',
  'HTML/CSS',
  'PyTorch',
  'OpenCV',
  'scikit-learn',
  'NumPy',
  'Pandas',
  'Keypoint detection',
  'Claude API',
  'Claude Code',
  'OpenAI API',
  'Prompt engineering',
  'RAG',
  'Evaluation harnesses',
  'LangChain',
  'Hugging Face',
  'ChromaDB',
  'Next.js',
  'React',
  'Flask',
  'Streamlit',
  'Tailwind CSS',
  'GoHighLevel',
  'Vercel',
  'GitHub',
  'Jira',
]

export const CERTIFICATIONS = [
  'Claude 101',
  'AI Fluency - Foundations & Frameworks',
  'Introduction to Claude Cowork',
]

export const CONTACT = {
  heading: 'Building something cool?',
  subtext:
    "I'm always interested in practical AI and computer-vision problems. Tell me what you're working on.",
  primary: { label: 'Email me', link: `mailto:${PERSONAL.email}` },
  secondary: { label: 'Message on LinkedIn', link: PERSONAL.linkedin },
}

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: PERSONAL.github, icon: 'github' },
  { label: 'LinkedIn', href: PERSONAL.linkedin, icon: 'linkedin' },
  { label: 'X', href: PERSONAL.x, icon: 'x' },
  { label: 'Instagram', href: PERSONAL.instagram, icon: 'instagram' },
]

export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/#experience' },
]

export const EMAIL = PERSONAL.email
