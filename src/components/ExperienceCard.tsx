import { useRef, useEffect } from 'react'
import { attachCardGlow } from '../hooks/useMouseGlow'

interface ExperienceCardProps {
  years: string
  role: string
  company: string
  url: string
  description: string
  tags: string[]
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px ${className}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function ExperienceCard({
  years,
  role,
  company,
  url,
  description,
  tags,
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    // Pass bgRef.current so attachCardGlow controls the bg too
    return attachCardGlow(cardRef.current, bgRef.current)
  }, [])

  return (
    <li className="mb-12">
      <div
        ref={cardRef}
        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
      >
        {/* Background overlay — JS-controlled, NOT CSS-hover-controlled */}
        <div
          ref={bgRef}
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-200 lg:-inset-x-6 lg:block"
        />
        {/* Cursor glow — reads --mx/--my set on cardRef */}
        <div
          className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl lg:-inset-x-6 lg:block"
          style={{
            background: 'radial-gradient(400px circle at var(--mx,-999px) var(--my,-999px), rgba(100,255,218,0.08), transparent 50%)',
          }}
        />

        {/* Year — col-span-2 */}
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2"
          style={{ color: 'var(--text-secondary)' }}
          aria-label={years}
        >
          {years}
        </header>

        {/* Content — col-span-6 */}
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug" style={{ color: 'var(--text-primary)' }}>
            <a
              className="group/link inline-flex items-baseline font-medium leading-tight text-base"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${role} at ${company} (opens in a new tab)`}
              style={{ color: 'var(--text-primary)' }}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {role} ·{' '}
                <span className="inline-block" style={{ color: 'var(--accent)' }}>
                  {company}
                  <ArrowIcon />
                </span>
              </span>
            </a>
          </h3>

          <p
            className="mt-2 text-sm leading-normal"
            style={{ color: 'var(--text-secondary)' }}
          >
            {description}
          </p>

          {/* Tech pills */}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tags.map(tag => (
              <li key={tag} className="mr-1.5 mt-2">
                <div
                  className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5"
                  style={{
                    color: 'var(--accent)',
                    background: 'var(--accent-dim)',
                    border: '0.5px solid var(--accent-border)',
                  }}
                >
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}
