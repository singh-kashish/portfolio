import { EXPERIENCE } from '../data/portfolio'
import ExperienceCard from './ExperienceCard'

function ResumeArrow() {
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

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Mobile sticky header */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only"
        style={{ background: 'rgba(10,10,10,0.85)' }}
      >
        <h2
          className="text-sm font-bold uppercase tracking-widest lg:sr-only"
          style={{ color: 'var(--text-primary)' }}
        >
          Experience
        </h2>
      </div>

      <div>
        {/*
          group/list on the ol — enables the dim-others-on-hover pattern.
          Each card uses lg:group-hover/list:opacity-50 + lg:hover:!opacity-100
        */}
        <ol className="group/list">
          {EXPERIENCE.map(exp => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </ol>

        {/* View résumé link */}
        <div className="mt-12">
          <a
            className="group/link inline-flex items-baseline font-semibold leading-tight text-base"
            href="/resume"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={e =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')
            }
            onMouseLeave={e =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')
            }
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Résumé
                <ResumeArrow />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
