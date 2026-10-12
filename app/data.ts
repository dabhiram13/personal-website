export const PERSONAL = {
  name: 'Abhiram',
  fullName: 'Sri Durga Abhiram Divyakolu',
  tagline: 'Applied AI engineer',
  summary:
    'Applied AI engineer focused on forward-deployed engineering, computer vision, and production AI systems.',
  email: 'dabhiram13@gmail.com',
  phone: '+1 (571) 564-6161',
  location: 'St. Louis, Missouri',
  github: 'https://github.com/dabhiram13',
  linkedin: 'https://www.linkedin.com/in/sri-durga-abhiram-d-910128195/',
  x: 'https://x.com/AIwithAbhi',
  instagram: 'https://www.instagram.com/abhiramsrii',
  avatar: '/sridurga.png',
  currentRole: 'AI Engineer Intern',
  currentCompany: 'EverestLabs AI',
  currentCompanyUrl: 'https://everestlabs.ai/',
  education: 'M.S. in Applied Computer Science',
}

export type Experience = {
  id: string
  company: string
  mark: string
  title: string
  subtitle: string
  start: string
  end: string
  link?: string
  linkLabel?: string
  bullets: string[]
  tech: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'everestlabs',
    company: 'EverestLabs AI',
    mark: 'EL',
    title: 'AI Engineer Intern',
    subtitle:
      'Computer vision & large vision models for robotic performance analysis',
    start: 'Jun 2026',
    end: 'Present',
    link: PERSONAL.currentCompanyUrl,
    linkLabel: 'everestlabs.ai',
    bullets: [
      'Building the Audit Agent end to end: a computer-vision pipeline that turns IP-camera footage into structured pick-event evidence, then uses vision-language reasoning to classify outcomes and miss categories.',
      'Designed a two-stage pick-event detection system that over-generates candidates, then filters them to localize pick attempts in video. Recycling cells run about 60 picks per minute across 50+ material classes.',
      'Building the evaluation layer before making accuracy claims: a human ground-truth protocol and an evaluation harness that scores event detection precision, recall, and F1 against real annotations.',
    ],
    tech: ['Python', 'OpenCV', 'PyTorch', 'Vision-language models'],
  },
  {
    id: 'deltron',
    company: 'Deltron AI Labs LLC',
    mark: 'DA',
    title: 'Founder & Automation Developer',
    subtitle:
      'Independent CRM and workflow automation prototypes for home-service businesses',
    start: 'Dec 2025',
    end: 'Apr 2026',
    bullets: [
      'Built reusable GoHighLevel prototypes for lead capture, CRM pipelines, automated follow-up, and appointment-booking workflows.',
      'Connected forms, websites, calendars, SMS, email, voicemail, and Messenger into end-to-end demos, with setup steps documented.',
    ],
    tech: ['GoHighLevel', 'CRM', 'Workflow automation'],
  },
]

export type Education = {
  school: string
  mark: string
  degree: string
  date: string
  location: string
}

export const EDUCATION: Education[] = [
  {
    school: 'Southeast Missouri State University',
    mark: 'SEMO',
    degree: 'M.S. in Applied Computer Science · GPA 3.6 / 4.0',
    date: 'May 2025',
    location: 'Cape Girardeau, Missouri',
  },
  {
    school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute',
    mark: 'VT',
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
      'Compared Random Forest, SVM, 1D CNN, and LSTM models on 10,634 labeled heartbeats from five MIT-BIH patient records. Random Forest reached 98.82% accuracy on the project evaluation split.',
    impact: '98.82% accuracy',
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
    id: 'prompt-playground',
    slug: 'prompt-playground',
    name: 'Prompt Playground',
    mark: 'PP',
    description: 'A hands-on prompt engineering teaching tool.',
    details:
      'Teaches a five-block prompt framework (Role, Context, Task, Format, Examples), assembles prompts live as users type, and streams responses from GPT-4o, Claude, and Gemini.',
    tech: ['Python', 'Flask', 'OpenRouter API', 'Vanilla JavaScript'],
    github: 'https://github.com/dabhiram13/Prompt-Playground-Application',
    image: '/project1.png',
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
    description:
      'A connected work-and-verification framework for coding agents.',
    details:
      'The Foundry project from the existing portfolio. Visit the repository for its current architecture, documentation, and implementation.',
    tech: ['TypeScript', 'Node.js'],
    github: 'https://github.com/dabhiram13/foundry',
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
  { label: 'Blog', href: '/blog' },
  { label: 'Experience', href: '/#experience' },
]

export const EMAIL = PERSONAL.email
