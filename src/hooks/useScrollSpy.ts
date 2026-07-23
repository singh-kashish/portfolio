import { useEffect, useRef, useState } from 'react'
import type { SectionId } from '../data/portfolio'

export function useScrollSpy(sectionIds: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(sectionIds[0])
  // Don't touch the URL until the user has actually scrolled.
  // Without this guard, the spy fires on mount at scrollY=0,
  // detects "about" is the active section, and immediately pushes
  // /#about into the URL 
  const hasScrolled = useRef(false)

  useEffect(() => {
    const handler = () => {
      hasScrolled.current = true

      let current: SectionId = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) {
          current = id
        }
      }

      setActive(current)

      // Only rewrite the URL after the user has scrolled at least once.
      // replaceState (not pushState) so the back button isn't polluted.
      if (window.location.hash !== `#${current}`) {
        window.history.replaceState(null, '', `#${current}`)
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds])

  return active
}
