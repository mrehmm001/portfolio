import { experience } from '../data'
import { Section } from './Section'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// "Feb 2026" -> months since year 0; "Present" -> this month.
function toMonths(label: string): number {
  if (label === 'Present') {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth() + 1
  }
  const [mon, year] = label.split(' ')
  return Number(year) * 12 + MONTHS.indexOf(mon)
}

const spans = experience.map((r) => ({ start: toMonths(r.start), end: toMonths(r.end) }))
const firstYear = Math.floor(Math.min(...spans.map((s) => s.start)) / 12)
const axisStart = firstYear * 12
const axisEnd = Math.max(...spans.map((s) => s.end))
const axisLength = axisEnd - axisStart
const years = Array.from(
  { length: Math.floor(axisEnd / 12) - firstYear + 1 },
  (_, i) => firstYear + i,
)
const pct = (months: number) => `${((months - axisStart) / axisLength) * 100}%`

function duration(start: number, end: number) {
  const total = end - start
  const y = Math.floor(total / 12)
  const m = total % 12
  const parts = []
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`)
  if (m) parts.push(`${m} mo`)
  return parts.join(' ') || '1 mo'
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      summary="Five roles, from teaching web development to building tools for a banking platform."
      band
    >
      <div className="career" style={{ '--year-step': `${(12 / axisLength) * 100}%` } as React.CSSProperties}>
        <div className="career-axis" aria-hidden="true">
          <span />
          <span className="career-years">
            {years.map((y) => (
              <span key={y} style={{ left: pct(y * 12) }}>
                {y}
              </span>
            ))}
          </span>
        </div>

        {experience.map((r, i) => {
          const s = spans[i]
          const current = r.end === 'Present'
          return (
            <details key={`${r.company}-${r.start}`} className={current ? 'role role-current' : 'role'} open={i === 0}>
              <summary>
                <span className="role-head">
                  <span className="role-logo">
                    <img src={r.logo} alt="" width={40} height={40} />
                  </span>
                  <span className="role-name">
                    <span className="role-title">{r.role}</span>
                    <span className="role-company">
                      {r.company}
                      {r.parent && (
                        <>
                          , a <img className="inline-logo" src={r.parent.logo} alt={r.parent.name} /> company
                        </>
                      )}
                    </span>
                  </span>
                </span>
                <span className="role-track" aria-hidden="true">
                  <span className="role-bar" style={{ left: pct(s.start), width: pct(axisStart + s.end - s.start) }} />
                </span>
                <span className="role-toggle" aria-hidden="true" />
              </summary>
              <div className="role-detail">
                <p className="role-dates">
                  {r.start} – {r.end}
                  <span className="muted"> ({duration(s.start, s.end)})</span>
                </p>
                <ul className="role-points">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </details>
          )
        })}
      </div>
    </Section>
  )
}
