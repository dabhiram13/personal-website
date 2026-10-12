import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'
import { Section, SectionHeading, Divider } from '@/components/site/section'
import { SkillBadge } from '@/components/site/skill-badge'
import { CompanyLogo } from '@/components/site/company-logo'
import { PERSONAL, CERTIFICATIONS, SOCIAL_LINKS } from '../data'

export const metadata: Metadata = { title: 'About' }

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'LLMs & agents',
    items: [
      'Anthropic Claude API',
      'Claude Code',
      'OpenAI API',
      'Prompt engineering',
      'RAG',
      'Evaluation harness design',
      'LangChain',
      'Hugging Face Transformers',
      'ChromaDB',
    ],
  },
  {
    label: 'ML & computer vision',
    items: [
      'PyTorch',
      'OpenCV',
      'scikit-learn',
      'Keypoint detection',
      'NumPy',
      'Pandas',
    ],
  },
  {
    label: 'Web & delivery',
    items: [
      'Next.js',
      'React',
      'Flask',
      'Streamlit',
      'Tailwind CSS',
      'GoHighLevel',
      'Vercel',
      'Git/GitHub',
      'Jira',
    ],
  },
]

export default function About() {
  return (
    <>
      <Section>
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-2 text-[10px] text-[var(--muted-foreground)]"
        >
          <Link
            href="/"
            data-sfx="soft"
            className="hover:text-[var(--foreground)]"
          >
            Home
          </Link>
          <span>/</span>
          <span>About</span>
        </nav>
        <h1 className="font-space mb-3 text-2xl font-medium tracking-tight">
          About<span className="text-[var(--brand)]">.</span>
        </h1>
        <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
          <p>{PERSONAL.summary}</p>
          <p>
            I&apos;m building{' '}
            <a
              href={PERSONAL.currentCompanyUrl}
              target="_blank"
              rel="noreferrer"
              data-sfx-hover="whisper"
              className="inline-flex items-center gap-1 font-medium text-[var(--foreground)] hover:text-[var(--brand)]"
            >
              <CompanyLogo
                src={PERSONAL.currentCompanyLogo}
                alt=""
                width={17}
                height={14}
              />
              EverestLabs&apos;
            </a>{' '}
            Audit Agent: a computer-vision and vision-language pipeline that
            turns recycling footage into timestamped evidence about robotic pick
            attempts.
          </p>
          <p>
            Before that, I founded{' '}
            <a
              href="https://deltronailabs.com/"
              target="_blank"
              rel="noreferrer"
              data-sfx-hover="whisper"
              className="inline-flex items-center gap-1 font-medium text-[var(--foreground)] hover:text-[var(--brand)]"
            >
              <CompanyLogo
                src="/company-logos/deltron-ai-labs-symbol.png"
                alt=""
                width={15}
                height={15}
              />
              Deltron AI Labs
            </a>{' '}
            and built CRM and workflow automation prototypes for home-service
            businesses.
          </p>
        </div>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>Skills</SectionHeading>
        <div className="space-y-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="mb-2 font-mono text-[10px] tracking-wider text-[var(--muted-foreground)] uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>Certifications</SectionHeading>
        <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
          {CERTIFICATIONS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--brand)]" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>Elsewhere</SectionHeading>
        <ul className="space-y-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-sfx="tap"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                {item.label}
                <ArrowUpRightIcon className="size-3" />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
