import { useRef } from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import type { Section } from './utils/data.portfolio'
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
    const contentRef = useRef<HTMLDivElement>(null);
    const { active, scrollTo } = useScrollSpy(contentRef);
  return (
    <div id="page-glow" className='flex flex-col lg:flex-row leading-relaxed antialiased selection:text-teal-900' ref={contentRef} >     
    {/* <section id="about" style={{ marginBottom:"5rem" }}>
              "Back in 2021, I got my first taste of real-world frontend work at SalesBook — a B2B SaaS startup where I owned feature work from design handoff to deployment. That led to shipping interfaces for Fortune 500 companies at Deloitte, working on Oracle HCM integrations for clients like Chubb, Kroger, and Atrium Health.",
              "My focus these days is building high-performance, full-stack products. I care about the things that are easy to get wrong — auth race conditions, render bottlenecks, API contracts that hold up. I enjoy taking a hard technical problem and making the interface above it feel effortless.",
              "Currently working on a personal finance dashboard and sharpening my DSA for interviews. Open to SDE-1, frontend, and full-stack roles — preferably hybrid or remote out of Bengaluru.",
    </section> */}
    <Sidebar active={active} onNav={(s: Section) => scrollTo(s)} />
      <main>
        sda
      </main>
    </div>
  )
}

export default App
