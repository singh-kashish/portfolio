import type { Section } from "../utils/data.portfolio";

const navItems: { id: Section; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

interface SidebarProps {
  active: Section;
  onNav: (s: Section) => void;
}

export default function Sidebar({ active, onNav }: SidebarProps) {
  return (
    <>
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
           <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl cursor-pointer">
          <a href="/">Kashish Singh</a>
          </h1>
          
        <h2 className="mt-3 text-md font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Engineer
        </h2>

        <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 240 }}>
          I build performant, accessible interfaces and production-grade APIs — 2.5 years shipping for Fortune 500 clients and early-stage SaaS.
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            marginTop: 18,
            fontSize: 11,
            color: "var(--accent)",
            background: "var(--accent-dim)",
            border: "0.5px solid var(--accent-border)",
            borderRadius: 20,
            padding: "5px 12px",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
          Open to SDE-1 · Frontend · Full-Stack
        </div>

        {/* Nav */}
        <nav style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: 6 }} aria-label="Page sections">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => onNav(id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 0",
                  textAlign: "left",
                }}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  style={{
                    display: "block",
                    height: "0.5px",
                    width: isActive ? 44 : 24,
                    background: isActive ? "var(--accent)" : "#2a2a28",
                    transition: "all 0.25s ease",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--text-primary)" : "#3a3a38",
                    transition: "color 0.25s ease",
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Social icons */}
      <div style={{ display: "flex", gap: 18 }}>
        {[
          {
            label: "GitHub",
            href: "https://github.com",
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            ),
          },
          {
            label: "LinkedIn",
            href: "https://linkedin.com",
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            ),
          },
          {
            label: "Email",
            href: "mailto:hello@kashishsingh.dev",
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ),
          },
        ].map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-dim)",
              transition: "color 0.2s",
              display: "flex",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
          >
            {icon}
          </a>
        ))}
      </div>
    </header>
    </>
  );
}
