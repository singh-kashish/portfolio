export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile sticky header — hidden on desktop */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only"
        style={{ background: 'rgba(10,10,10,0.85)' }}
      >
        <h2
          className="text-sm font-bold uppercase tracking-widest lg:sr-only"
          style={{ color: 'var(--text-primary)' }}
        >
          About
        </h2>
      </div>

      <div style={{ color: 'var(--text-secondary)' }}>
        <p className="mb-4">
          Hi there! I'm Kashish, and I like building things. I'm a full-stack engineer with expertise in
          building accessible, pixel-perfect user interfaces and modern API. I take pride in crafting thoughtful,
          inclusive products and have a sharp eye for the small details that separate a good product from an
          exceptional one.
          Back in 2022, I got my first taste of real-world frontend work at{' '}
          <a
            href="#"
            className="font-medium transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
          >
            SalesBook
          </a>
          , a B2B SaaS startup where I owned feature work from design handoff to deployment. That
          led to shipping interfaces for Fortune 500 companies at{' '}
          <a
            href="https://www.deloitte.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
          >
            Deloitte USI
          </a>
          , where I worked on Oracle HCM integrations for clients like Chubb, Kroger, and Atrium
          Health.
        </p>
          <p className="mb-4">
            I care about the things that are easy to get wrong—auth race conditions, render bottlenecks,
            and API contracts that hold up under load. Whether it's debugging a 9-second dashboard load
            with React Profiler or implementing Kahn's algorithm for DAG cycle detection in a visual pipeline builder,
            I enjoy taking genuinely hard engineering problems and making the experience above them feel effortless.
        </p>
        <p>
          When I'm not at the keyboard, I'm at the gym or planning the next project. Currently
          building a personal finance dashboard and sharpening DSA for interviews. Open to{' '}
          <span className="font-medium" style={{ color: 'var(--accent)' }}>
            SDE-1
          </span>
          , frontend, and full-stack roles — preferably hybrid or remote out of Bengaluru.
        </p>
      </div>
    </section>
  )
}
