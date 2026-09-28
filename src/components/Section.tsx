import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  summary: string
  band?: boolean
  children: ReactNode
}

export function Section({ id, title, summary, band = false, children }: SectionProps) {
  return (
    <section className={band ? 'section section-band' : 'section'} id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <header className="section-head">
          <h2 className="section-title" id={`${id}-title`}>
            {title}
          </h2>
          <p className="section-summary">{summary}</p>
        </header>
        {children}
      </div>
    </section>
  )
}
