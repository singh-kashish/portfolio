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
export function attachCardGlow(el: HTMLElement) {
  const handler = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }
  el.addEventListener('mousemove', handler)
  return () => el.removeEventListener('mousemove', handler)
}
