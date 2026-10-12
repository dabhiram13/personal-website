const ICONS: Record<string, string> = {
  Anthropic: 'anthropic',
  'Anthropic Claude API': 'anthropic',
  'Claude Code': 'claude',
  'Claude API': 'anthropic',
  Docker: 'docker',
  Flask: 'flask',
  GitHub: 'github',
  'Git/GitHub': 'github',
  'HTML/CSS': 'html5',
  'Hugging Face Transformers': 'huggingface',
  'Hugging Face': 'huggingface',
  JavaScript: 'javascript',
  Jira: 'jira',
  LangChain: 'langchain',
  'Next.js': 'nextdotjs',
  NumPy: 'numpy',
  OpenCV: 'opencv',
  Pandas: 'pandas',
  PyTorch: 'pytorch',
  Python: 'python',
  React: 'react',
  'scikit-learn': 'scikitlearn',
  Streamlit: 'streamlit',
  'Tailwind CSS': 'tailwindcss',
  TypeScript: 'typescript',
  Vercel: 'vercel',
}

const LIGHT_LOGOS = new Set(['github', 'nextdotjs', 'vercel'])

export function SkillBadge({ name }: { name: string }) {
  const icon = ICONS[name]

  return (
    <span
      data-sfx-hover="whisper"
      className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[11px] text-[var(--muted-foreground)] transition-[transform,border-color,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--brand)]/50 hover:bg-[var(--muted)] hover:text-[var(--foreground)] hover:shadow-sm"
    >
      {icon ? (
        <img
          src={`https://cdn.simpleicons.org/${icon}`}
          alt=""
          aria-hidden="true"
          width="14"
          height="14"
          loading="lazy"
          className={`size-3.5 transition-transform duration-200 group-hover:scale-110 ${
            LIGHT_LOGOS.has(icon) ? 'dark:invert' : ''
          }`}
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex size-3.5 items-center justify-center rounded-sm bg-[var(--brand)]/10 text-[8px] font-semibold text-[var(--brand)]"
        >
          {name.slice(0, 1)}
        </span>
      )}
      {name}
    </span>
  )
}
