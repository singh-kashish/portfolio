import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { usePageGlow } from './hooks/useMouseGlow'
import { useScrollSpy } from './hooks/useScrollSpy'
import { NAV_ITEMS, type SectionId } from './data/portfolio'
import { useEffect } from 'react'

const SECTION_IDS = NAV_ITEMS.map(n => n.id)

export default function App() {
  // Page-wide glow — sets --glow-x and --glow-y on :root via mousemove
  usePageGlow()

  // Scroll-spy — watches window scroll, returns current section id
  const activeSection = useScrollSpy(SECTION_IDS as unknown as SectionId[])

  // On nav click — update URL without full navigation
const scrollToSection = (id: SectionId) => {
  const el = document.getElementById(id)
  if (!el) return
  window.history.pushState(null, '', `#${id}`)
  window.scrollTo({ top: el.offsetTop - 96, behavior: 'smooth' })
}

// On mount — if URL has a hash, scroll to it
useEffect(() => {
  const hash = window.location.hash.slice(1) as SectionId
  if (hash && SECTION_IDS.includes(hash)) {
    setTimeout(() => {
      const el = document.getElementById(hash)
      if (el) window.scrollTo({ top: el.offsetTop - 96, behavior: 'instant' })
    }, 50) // tiny delay so DOM is fully painted
  }
}, [])

  return (
    /*
      group/spotlight — used for the radial glow div
      The glow div is position:fixed so it covers the whole viewport
    */
    <div className="group/spotlight relative">

      {/* Page-wide cursor glow — defined in index.css as #page-glow */}
      <div id="page-glow" aria-hidden="true" />

      {/*
        mx-auto max-w-screen-xl — centers content with a max width
        px-6 py-12 — mobile padding
        md:px-12 md:py-16 — tablet
        lg:py-0 — desktop: no vertical padding (sidebar handles it)
      */}
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">

        {/*
          lg:flex — side-by-side on desktop
          lg:justify-between — space between header and main
          lg:gap-4 — small gap between columns
        */}
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* LEFT — sticky sidebar */}
          <Header activeSection={activeSection} onNavClick={scrollToSection} />

          {/*
            RIGHT — scrollable content
            pt-24 — mobile: push below sticky nav
            lg:w-[52%] lg:py-24 — desktop: 52% width, 96px vertical padding
          */}
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>

        </div>
      </div>
    </div>
  )
}
