import { NAV_ITEMS, SOCIAL_LINKS, type SectionId } from '../data/portfolio'

interface HeaderProps {
  activeSection: SectionId
  onNavClick: (id: SectionId) => void
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 ">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <a href="/" style={{ color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--text-primary)' }}>Kashish Singh</span>
          </a>
        </h1>
        <h2
          className="mt-3 text-lg font-medium tracking-tight sm:text-xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Full-stack Engineer
        </h2>

        <p className="mt-4 max-w-xs leading-normal" style={{ color: 'var(--text-secondary)' }}>
          I build performant, accessible interfaces and production-grade APIs for the web.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
          style={{
            color: 'var(--accent)',
            background: 'var(--accent-dim)',
            border: '0.5px solid var(--accent-border)',
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: 'var(--accent)', animation: 'pulse 2s infinite' }}
          />
          Open to SDE-1 · Frontend · Full-Stack
        </div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <li key={id}>
                  <button
                    onClick={() => onNavClick(id)}
                    className={[
                      'group flex items-center py-3',
                      isActive ? 'active' : '',
                    ].join(' ')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {/* Indicator line */}
                    <span
                      className={[
                        'nav-indicator mr-4 h-px transition-all motion-reduce:transition-none',
                        'group-hover:bg-(--text-primary) group-focus-visible:bg-(--text-primary)',
                        isActive
                          ? 'w-16 bg-(--text-primary)'
                          : 'w-8 bg-(--text-dim) group-hover:w-16',
                      ].join(' ')}
                    />
                    {/* Label */}
                    <span
                      className={[
                        'nav-text text-xs font-bold uppercase tracking-widest transition-colors',
                        'group-hover:text-(--text-primary) group-focus-visible:text-(--text-primary)',
                        isActive
                          ? 'text-(--text-primary)'
                          : 'text-(--text-secondary)',
                      ].join(' ')}
                    >
                      {label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Social icons */}
      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {SOCIAL_LINKS.map(({ label, href, icon, viewBox, stroke }) => (
          <li key={label} className="shrink-0">
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${label} (opens in a new tab)`}
              title={label}
              className="block transition-colors"
              style={{ color: 'var(--text-dim)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-dim)')}
            >
              <span className="sr-only">{label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={viewBox}
                fill={stroke ? 'none' : 'currentColor'}
                stroke={stroke ? 'currentColor' : undefined}
                strokeWidth={stroke ? 1.5 : undefined}
                className="h-6 w-6"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
