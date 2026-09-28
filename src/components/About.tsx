import { about, aboutStatement, interests, skills } from '../data'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About" summary="A little about me and the tools I reach for.">
      <p className="about-statement">{aboutStatement}</p>

      <div className="about-grid">
        <div className="about-text">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p>
            <span className="muted">Interested in </span>
            {interests.join(', ').toLowerCase()}.
          </p>
        </div>

        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skills-group">
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
