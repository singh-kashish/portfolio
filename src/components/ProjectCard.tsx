import { useRef, useEffect, useState } from 'react'
import { attachCardGlow } from '../hooks/useMouseGlow'

interface ProjectCardProps {
  name: string
  description: string
  tags: string[]
  github: string
  live: string
  url: string
  image: string
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
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

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 mr-1" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 mr-1" aria-hidden="true">
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
    </svg>
  )
}

export default function ProjectCard({ name, description, tags, github, live, url, image }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<'preview' | 'live'>('preview')

  useEffect(() => {
    if (!cardRef.current) return
    return attachCardGlow(cardRef.current)
  }, [])

  return (
    <li className="mb-12">
      <div
        ref={cardRef}
        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
      >
        {/* Hover background overlay */}
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:drop-shadow-lg"
          style={{ ['--tw-drop-shadow' as string]: '' }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(100,255,218,0.05)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = 'inset 0 1px 0 0 rgba(100,255,218,0.08)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = ''
            ;(e.currentTarget as HTMLElement).style.boxShadow = ''
          }}
        />
        {/* Card cursor glow */}
        <div
          className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl lg:-inset-x-6 lg:block"
          style={{
            background: 'radial-gradient(500px circle at var(--mx,-999px) var(--my,-999px), rgba(100,255,218,0.05), transparent 50%)',
          }}
        />

        {/* Browser chrome mockup — order-1 on mobile, order-1 on sm (left col) */}
        <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1!"> {/*change here for extrawidth screen*/}
          <div
            className="overflow-hidden rounded"
            style={{ border: '2px solid rgba(100,255,218,0.08)', transition: 'border-color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(100,255,218,0.25)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(100,255,218,0.08)')}
          >
            {/* Browser bar */}
            <div
              className="flex items-center justify-between px-2 py-1.5"
              style={{ background: '#0d1628', borderBottom: '0.5px solid #1a2440' }}
            >
              <div className="flex items-center gap-1">
                {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
                  <div key={c} style={{ width: 5, height: 5, borderRadius: '50%', background: c }} />
                ))}
              </div>
              {/* Preview / Live toggle */}
              <div className="flex gap-1">
                {(['preview', 'live'] as const).map(m => (
                  <button
                    key={m}
                    onClick={e => { e.stopPropagation(); setMode(m) }}
                    className="text-[9px] px-1.5 py-0.5 rounded transition-all hover:bg-[#48BEA2]!"
                    style={{
                      fontFamily: 'monospace',
                      color: mode === m ? 'var(--accent)' : '#2a3a60',
                      background: mode === m ? 'var(--accent-dim)' : 'transparent',
                      border: `0.5px solid ${mode === m ? 'var(--accent-border)' : '#1a2440'}`,
                      cursor: 'pointer',
                    }}
                  >
                    {m === 'live' ? '⬡ Live' : '⬚ Preview'}
                  </button>
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="aspect-video object-cover" style={{ background: '#060d1a', overflow: 'hidden' }}>
              {mode === 'live' ? (
                <iframe
                  src={live}
                  className="w-full h-full border-0"
                  loading="lazy"
                  title={`${name} live preview`}
                  style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%', backgroundColor: 'white' }}
                />
              ) : image ? (
                <img
                  src={image}
                  alt={`${name} screenshot`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                /* Placeholder grid until real screenshot is added */
                <div className="p-2 grid gap-1" style={{ gridTemplateColumns: '36px 1fr', height: '100%' }}>
                  <div style={{ background: '#0d1628', borderRadius: 3, padding: 4 }}>
                    {[true, false, false].map((a, i) => (
                      <div key={i} style={{ height: 5, marginBottom: 3, borderRadius: 2, background: a ? 'rgba(100,255,218,0.3)' : '#1a2440', width: a ? '60%' : '100%' }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div style={{ height: 5, background: '#0d1628', borderRadius: 2 }} />
                    <div style={{ height: 5, background: '#0d1628', borderRadius: 2, width: '70%' }} />
                    <div style={{ display: 'flex', gap: 3, marginTop: 4 }}>
                      {[1,2,3].map(i => <div key={i} style={{ flex: 1, height: 24, background: '#0d1628', borderRadius: 3 }} />)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Text content — order-2, col-span-6 */}
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="group/link inline-flex items-baseline font-medium leading-tight text-base hover:text-[#64ffda]!"
              href={live}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} (opens in a new tab)`}
              style={{ color: 'var(--text-primary)' }}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block pointer-events-none" />
              <span>
                {name.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="inline-block">
                  {name.split(' ').slice(-1)[0]}
                  <ArrowIcon />
                </span>
              </span>
            </a>
          </h3>

          <p className="mt-2 text-sm leading-normal" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>

          {/* Links */}
          <div className="mt-2 flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="relative inline-flex items-center text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={live}
              target="_blank"
              rel="noreferrer noopener"
              className="relative inline-flex items-center text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              <ExternalLinkIcon />
              Live
            </a>
          </div>

          {/* Tech pills */}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tags.map(tag => (
              <li key={tag} className="mr-1.5 mt-2 ">
                <div
                  className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 shadow-2xl"
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
