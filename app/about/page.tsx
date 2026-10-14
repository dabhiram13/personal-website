import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'
import { Section, SectionHeading, Divider } from '@/components/site/section'
import { SkillBadge } from '@/components/site/skill-badge'
import { PhotoGallery } from '@/components/site/photo-gallery'
import { CERTIFICATIONS, SOCIAL_LINKS } from '../data'

export const metadata: Metadata = {
  title: 'About Sri',
  description:
    'Get to know Sri: an AI Engineering Intern exploring computer vision, AI agents, visual systems, and practical software.',
  alternates: { canonical: '/about' },
}

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
        <div className="max-w-xl">
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-[var(--muted-foreground)] uppercase">
              A little about me
            </p>
            <h1 className="font-space mb-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Hi, I&apos;m Sri<span className="text-[var(--brand)]">.</span>
            </h1>
            <p className="text-[15px] leading-7 text-[var(--muted-foreground)]">
              I like understanding how things work, then building something with
              that understanding. Lately, that&apos;s meant computer vision for
              robotic systems, AI development tools, and experiments that turn
              ideas into usable products.
            </p>
            <Link
              href="/#experience"
              className="mt-5 inline-flex items-center gap-2 text-xs font-medium hover:text-[var(--brand)]"
            >
              My experience{' '}
              <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
        </div>
      </Section>
      <PhotoGallery />
      <Divider />
      <Section className="space-y-8">
        <div>
          <SectionHeading>What I&apos;m working on</SectionHeading>
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">
            I&apos;m an AI Engineering Intern at EverestLabs, working on
            computer vision for robotic systems. In my personal projects,
            I&apos;m building tools that make it easier to experiment with AI
            and turn ideas into useful software.
          </p>
          <Link
            href="/projects"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium hover:text-[var(--brand)]"
          >
            Explore my projects{' '}
            <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
        <div>
          <SectionHeading>What I&apos;m exploring</SectionHeading>
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">
            AI agents, visual systems, and the algorithms behind efficient
            software. I&apos;m interested in how these pieces work individually
            and what becomes possible when they come together.
          </p>
        </div>
        <div>
          <SectionHeading>How I work</SectionHeading>
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">
            I start with an experiment, inspect the evidence, and improve the
            result. I like being able to explain what worked, what didn&apos;t,
            and what to try next.
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
