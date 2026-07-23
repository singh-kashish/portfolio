import { PROJECTS } from '../data/portfolio'
import ProjectCard from './ProjectCard'

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
          {PROJECTS.map((proj,index) => (
            index<4?<ProjectCard key={proj.name} {...proj} />:null
          ))}
        </ul>
      </div>
    </section>
  )
}
