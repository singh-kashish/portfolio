import { useState } from 'react'
import { ARCHIVED_PROJECTS } from '../data/portfolio'
import { usePageGlow } from '../hooks/useMouseGlow'

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
    </svg>
  )
}

export default function ArchivedProjects() {
  usePageGlow()
  // Hover state tracked so we can dim non-hovered rows (same pattern as main page)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div id="page-glow" aria-hidden="true" />

      <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">

        {/* Back link */}
        <a
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300!"
          // onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
          // onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
        >
          <span className="font-bold transition-transform group-hover:-translate-x-0.5">
          <ArrowLeftIcon />
          </span>
            Kashish Singh
          
        </a>

        {/* Page heading */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
        <p className="text-sm mb-16" style={{ color: 'var(--text-secondary)' }}>
          A running list of things I've shipped — featured work is on the{' '}
          <a
            href="/"
            style={{ color: 'var(--text-primary)' }}
            className="transition-colors"
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
          >
            main page
          </a>
          .
        </p>

        {/* Table */}
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr
              className="text-left text-xs font-semibold uppercase tracking-widest"
              style={{
                color: 'var(--text-secondary)',
                borderBottom: '0.5px solid var(--border)',
              }}
            >
              <th className="pb-4 pr-8 font-semibold text-white">Year</th>
              <th className="pb-4 pr-8 font-semibold text-white">Project</th>
              {/* Hide "Built at" on mobile */}
              <th className="pb-4 pr-8 font-semibold hidden sm:table-cell text-white">Built at</th>
              {/* Hide tech on mobile, show at md+ */}
              <th className="pb-4 pr-8 font-semibold hidden md:table-cell text-white">Built with</th>
              <th className="pb-4 font-semibold text-white">Links</th>
            </tr>
          </thead>

          <tbody>
            {ARCHIVED_PROJECTS.map((proj, idx) => {
              const isDimmed = hoveredIdx !== null && hoveredIdx !== idx
              return (
                <tr
                  key={proj.name}
                  className="group/row relative border-b transition-all duration-150 cursor-default"
                  style={{
                    borderColor: 'var(--border)',
                    opacity: isDimmed ? 0.4 : 1,
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Hover background — same inset overlay pattern as cards */}
                  <td
                    className="py-4 pr-4 align-top font-semibold leading-snug"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <div
                      className="absolute -inset-x-4 inset-y-0 hidden rounded-lg lg:block transition-all duration-150"
                      style={{
                        background: hoveredIdx === idx ? 'rgba(100,255,218,0.04)' : 'transparent',
                        boxShadow: hoveredIdx === idx ? 'inset 0 1px 0 0 rgba(100,255,218,0.08)' : 'none',
                      }}
                    />
                    <span className="relative z-10 font-mono text-xs font-normal">{proj.year}</span>
                  </td>

                  <td className="py-6 pr-8 align-top">
                    <div className="relative z-10">
                      <span
                        className="font-bold transition-colors"
                        style={{
                          color: hoveredIdx === idx ? 'var(--accent)' : 'var(--text-primary)',
                        }}
                      >
                        {proj.name}
                      </span>
                      {/* Description visible on hover — slides in */}
                      <p
                        className="mt-1 text-xs leading-normal transition-all duration-200 max-w-xs"
                        style={{
                          color: 'var(--text-secondary)',
                          maxHeight: hoveredIdx === idx ? '80px' : '0',
                          overflow: 'visible',
                          opacity: hoveredIdx === idx ? 1 : 0,
                          cursor: 'text'
                        }}
                      >
                        {proj.description}
                      </p>
                    </div>
                  </td>

                  <td
                    className="py-4 pr-8 align-top hidden sm:table-cell text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="relative z-10">{proj.builtAt}</span>
                  </td>

                  <td className="py-4 pr-8 align-top hidden md:table-cell">
                    <div className="relative z-10 flex flex-wrap gap-1.5">
                      {proj.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium"
                          style={{
                            color: 'var(--accent)',
                            background: 'var(--accent-dim)',
                            border: '0.5px solid var(--accent-border)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="py-4 align-top">
                    <div className="relative z-10 flex items-center gap-3">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${proj.name} GitHub repository`}
                          className="transition-colors"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={e =>
                            ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')
                          }
                          onMouseLeave={e =>
                            ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')
                          }
                        >
                          <GitHubIcon />
                        </a>
                      )}
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${proj.name} live demo`}
                          className="transition-colors"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={e =>
                            ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')
                          }
                          onMouseLeave={e =>
                            ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')
                          }
                        >
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </main>
    </div>
  )
}
