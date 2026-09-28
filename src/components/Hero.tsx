import { useEffect, useRef } from 'react'
import { currentEmployer, links } from '../data'
import { GitHubIcon, LinkedInIcon } from './Icons'

const NAME = ['Muneeb', 'Rehman']
const HEAVY = 800
const LIGHT = 220
const RADIUS = 240

// Letters thin out as the pointer passes over them. Only on devices with a
// real hover pointer, and never when the visitor prefers reduced motion.
function useVariableWeight(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return

    const chars = Array.from(root.querySelectorAll<HTMLElement>('.char'))
    const area = root.closest('.hero') ?? root
    let frame = 0

    const onMove = (e: Event) => {
      const { clientX, clientY } = e as PointerEvent
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        for (const c of chars) {
          const r = c.getBoundingClientRect()
          const d = Math.hypot(clientX - (r.left + r.width / 2), clientY - (r.top + r.height / 2))
          const t = Math.max(0, 1 - d / RADIUS)
          c.style.setProperty('--w', String(Math.round(HEAVY - t * t * (HEAVY - LIGHT))))
        }
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      for (const c of chars) c.style.removeProperty('--w')
    }

    area.addEventListener('pointermove', onMove)
    area.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerleave', onLeave)
    }
  }, [ref])
}

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  useVariableWeight(nameRef)
  let index = 0

  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <p className="hero-status">
          <span className="hero-status-dot" aria-hidden="true" />
          <span>
            Now at {currentEmployer.name}, a{' '}
            <img className="inline-logo" src={currentEmployer.parentLogo} alt={currentEmployer.parent} /> company
          </span>
        </p>

        <h1 className="hero-name" ref={nameRef} aria-label={NAME.join(' ')}>
          {NAME.map((word) => (
            <span className="hero-line" key={word} aria-hidden="true">
              {[...word].map((ch) => (
                <span className="char" key={index} style={{ '--i': index++ } as React.CSSProperties}>
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero-lede">
          Full-stack engineer on Control Center, building micro-frontends in React and TypeScript and
          BFF services in Go. Before that, product front ends and IDE tooling.
        </p>

        <ul className="hero-actions">
          <li>
            <a className="button button-light" href={`mailto:${links.email}`}>
              Email me
            </a>
          </li>
          <li>
            <a className="button button-outline-light" href={links.cv} target="_blank" rel="noreferrer">
              View CV
            </a>
          </li>
          <li>
            <a className="icon-link" href={links.github} aria-label="GitHub">
              <GitHubIcon size={22} />
            </a>
          </li>
          <li>
            <a className="icon-link" href={links.linkedin} aria-label="LinkedIn">
              <LinkedInIcon size={22} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
