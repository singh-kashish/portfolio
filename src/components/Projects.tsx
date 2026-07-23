import { PROJECTS } from '../data/portfolio'
import ProjectCard from './ProjectCard'

const RightArrow= () =>{
  return (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
  )
}
export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
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
          Projects
        </h2>
      </div>

      <div>
        {/* group/list — enables dim-others-on-hover across all project cards */}
        <ul className="group/list">
          {PROJECTS.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </ul>
      </div>
      <a href="/archive"
        className="group inline-flex items-center font-semibold leading-tight transition-colors"
        style={{ color: 'var(--text-primary)' }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
      >
        <span>
          <span className="pb-px transition motion-reduce:transition-none">View Full Project </span>
          <span className="whitespace-nowrap">
            <span className="pb-px transition motion-reduce:transition-none">Archive</span>
            <RightArrow />
          </span>
        </span>
      </a>
    </section>
  )
}
