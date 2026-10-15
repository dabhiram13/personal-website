import {
  BotIcon,
  BrainCircuitIcon,
  ChartNoAxesCombinedIcon,
  ContactRoundIcon,
  DatabaseIcon,
  EyeIcon,
  Layers3Icon,
  ScanSearchIcon,
  SparklesIcon,
  WorkflowIcon,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'

const ICONS: Record<string, string> = {
  Anthropic: 'anthropic',
  'Anthropic Claude API': 'anthropic',
  'Claude Code': 'claude',
  'Claude API': 'anthropic',
  'Hugging Face Transformers': 'huggingface',
  'Hugging Face': 'huggingface',
  Docker: 'docker',
  Flask: 'flask',
  GitHub: 'github',
  'Git/GitHub': 'github',
  'HTML/CSS': 'html5',
  JavaScript: 'javascript',
  'Vanilla JavaScript': 'javascript',
  Jira: 'jira',
  LangChain: 'langchain',
  'Node.js': 'nodedotjs',
  'Next.js': 'nextdotjs',
  NumPy: 'numpy',
  'OpenRouter API': 'openrouter',
  OpenCV: 'opencv',
  Pandas: 'pandas',
  PyTorch: 'pytorch',
  Python: 'python',
  React: 'react',
  'scikit-learn': 'scikitlearn',
  SciPy: 'scipy',
  Solana: 'solana',
  Streamlit: 'streamlit',
  'Tailwind CSS': 'tailwindcss',
  TypeScript: 'typescript',
  Vercel: 'vercel',
}

const CONCEPT_ICONS: Record<string, LucideIcon> = {
  Canvas: Layers3Icon,
  ChromaDB: DatabaseIcon,
  CRM: ContactRoundIcon,
  'Evaluation harness design': ChartNoAxesCombinedIcon,
  'Evaluation harnesses': ChartNoAxesCombinedIcon,
  Groq: BrainCircuitIcon,
  'Keypoint detection': ScanSearchIcon,
  Motion: WorkflowIcon,
  'OpenAI API': BotIcon,
  'Prompt engineering': SparklesIcon,
  RAG: Layers3Icon,
  'Sentence-Transformers': BrainCircuitIcon,
  SQL: DatabaseIcon,
  'Vision-language models': EyeIcon,
  'Workflow automation': WorkflowIcon,
  GoHighLevel: WorkflowIcon,
}

const DARK_LOGOS = new Set(['anthropic', 'github', 'nextdotjs', 'vercel'])

export function SkillBadge({ name }: { name: string }) {
  const icon = ICONS[name]
  const ConceptIcon = CONCEPT_ICONS[name] ?? SparklesIcon
  const iconClassName = `size-3.5 transition-transform duration-200 group-hover:scale-110 ${
    icon && DARK_LOGOS.has(icon) ? 'dark:invert' : ''
  }`

  return (
    <span
      data-sfx-hover="whisper"
      className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[11px] text-[var(--muted-foreground)] transition-[transform,border-color,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--brand)]/50 hover:bg-[var(--muted)] hover:text-[var(--foreground)] hover:shadow-sm"
    >
      {icon ? (
        <Image
          src={`/skill-icons/${icon}.svg`}
          alt=""
          width="14"
          height="14"
          className={iconClassName}
        />
      ) : (
        <ConceptIcon
          aria-hidden="true"
          className="size-3.5 shrink-0 text-[var(--brand)] transition-transform duration-200 group-hover:scale-110"
          strokeWidth={1.8}
        />
      )}
      {name}
    </span>
  )
}
