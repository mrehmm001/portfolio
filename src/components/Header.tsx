import { useEffect, useState } from 'react'
import { links } from '../data'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [onHero, setOnHero] = useState(true)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const hero = document.getElementById('top')
    const heroObserver = new IntersectionObserver(
      ([entry]) => setOnHero(entry.intersectionRatio > 0.12),
      { threshold: [0, 0.12, 0.3] },
    )
    if (hero) heroObserver.observe(hero)

    // A section counts as current while it crosses the middle of the viewport.
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) sectionObserver.observe(el)
    }

    return () => {
      heroObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  return (
    <header className={onHero ? 'site-header site-header-hero' : 'site-header'}>
      <div className="wrap site-header-inner">
        <a className="site-mark" href="#top">
          Muneeb Rehman
        </a>
        <nav aria-label="Sections">
          <ul className="site-nav">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={!onHero && active === s.id ? 'location' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a className="site-nav-cv" href={links.cv} target="_blank" rel="noreferrer">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
