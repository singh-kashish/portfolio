import { useEffect } from 'react'

export function usePageGlow() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--glow-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--glow-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
}

// For individual card glow — attach to a ref
export function attachCardGlow(el: HTMLElement, bgEl?: HTMLElement | null) {
  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const onEnter = () => {
    if (bgEl) {
      bgEl.style.background = 'rgba(100,255,218,0.04)'
      bgEl.style.boxShadow = 'inset 0 1px 0 0 rgba(100,255,218,0.1)'
    }
  }

  const onLeave = () => {
    // Reset to offscreen — glow disappears cleanly
    el.style.setProperty('--mx', '-999px')
    el.style.setProperty('--my', '-999px')
    if (bgEl) {
      bgEl.style.background = ''
      bgEl.style.boxShadow = ''
    }
  }

  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseenter', onEnter)
  el.addEventListener('mouseleave', onLeave)

  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseenter', onEnter)
    el.removeEventListener('mouseleave', onLeave)
  }
}
