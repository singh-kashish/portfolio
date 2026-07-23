import { useEffect, useState } from 'react'
import type { SectionId } from '../data/portfolio'

export function useScrollSpy(sectionIds: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(sectionIds[0])

  useEffect(() => {
    const handler = () => {
      // Walk sections bottom-up — first one whose top is above midscreen wins
      let current: SectionId = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) {
          current = id
        }
      }
      setActive(current)
      if (window.location.hash !== `#${current}`) {
      window.history.replaceState(null, '', `#${current}`)
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler() // run once on mount
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds])

  return active
}
