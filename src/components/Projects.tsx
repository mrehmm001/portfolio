import { useState } from 'react'
import { categoryLabels, featuredProjects, otherProjects, type Category, type Project } from '../data'
import { ExternalIcon, GitHubIcon } from './Icons'
import { Section } from './Section'

type Filter = Category | 'all'

const allProjects = [...featuredProjects, ...otherProjects]
const filters: Filter[] = ['all', 'ai', 'web', 'mobile']
const count = (f: Filter) =>
  f === 'all' ? allProjects.length : allProjects.filter((p) => p.categories.includes(f)).length

function ProjectLinks({ project }: { project: Project }) {
  return (
    <p className="project-links">
      {project.github && (
        <a href={project.github}>
          <GitHubIcon size={16} />
          Code
        </a>
      )}
      {project.live && (
        <a href={project.live}>
          <ExternalIcon size={16} />
          Live site
        </a>
      )}
    </p>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const matches = (p: Project) => filter === 'all' || p.categories.includes(filter)
  const featured = featuredProjects.filter(matches)
  const other = otherProjects.filter(matches)

  return (
    <Section id="projects" title="Projects" summary="AI research, full-stack apps and a few things built for fun.">
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className="filter"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : categoryLabels[f]}
            <span className="filter-count">{count(f)}</span>
          </button>
        ))}
      </div>

      {featured.length > 0 && (
        <ul className="project-grid">
          {featured.map((p) => (
            <li key={p.name} className="project-card">
              {p.image && (
                <div className={p.imageFit === 'contain' ? 'project-media project-media-contain' : 'project-media'}>
                  <img src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" />
                </div>
              )}
              <div className="project-body">
                <p className="project-year">{p.year}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                <p className="project-stack">{p.stack.join(', ')}</p>
                <ProjectLinks project={p} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {other.length > 0 && (
        <>
          <h3 className="subhead">Earlier work</h3>
          <ul className="other">
            {other.map((p) => (
              <li key={p.name} className="other-row">
                <p className="other-name">
                  {p.name} <span className="muted">{p.year}</span>
                </p>
                <div>
                  <p>{p.description}</p>
                  <p className="project-stack">{p.stack.join(', ')}</p>
                </div>
                <ProjectLinks project={p} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}
