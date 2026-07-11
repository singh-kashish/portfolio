const FOOTER_LINKS: Record<string, string> = {
  Figma: 'https://www.figma.com/',
  'Visual Studio Code': 'https://code.visualstudio.com/',
  'React': 'https://react.dev/',
  'Tailwind CSS': 'https://tailwindcss.com/',
  Vercel: 'https://vercel.com/',
  Inter: 'https://rsms.me/inter/',
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="font-medium transition-colors"
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${children} (opens in a new tab)`}
      style={{ color: 'var(--text-secondary)' }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm sm:pb-0" style={{ color: 'var(--text-dim)' }}>
      <p>
        Loosely designed in <FooterLink href={FOOTER_LINKS.Figma}>Figma</FooterLink> and coded
        in{' '}
        <FooterLink href={FOOTER_LINKS['Visual Studio Code']}>Visual Studio Code</FooterLink> by
        yours truly. Built with <FooterLink href={FOOTER_LINKS.React}>React</FooterLink> and{' '}
        <FooterLink href={FOOTER_LINKS['Tailwind CSS']}>Tailwind CSS</FooterLink>, deployed with{' '}
        <FooterLink href={FOOTER_LINKS.Vercel}>Vercel</FooterLink>. All text is set in the{' '}
        <FooterLink href={FOOTER_LINKS.Inter}>Inter</FooterLink> typeface.
      </p>
    </footer>
  )
}
