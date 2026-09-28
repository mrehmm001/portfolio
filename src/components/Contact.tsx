import { useEffect, useState } from 'react'
import { links } from '../data'
import { GitHubIcon, LinkedInIcon } from './Icons'

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <header className="section-head">
          <h2 className="section-title" id="contact-title">
            Contact
          </h2>
          <p className="section-summary">
            Whether you have a question or just want to say hi, drop me a line and I'll get back to you.
          </p>
        </header>

        <a className="contact-email" href={`mailto:${links.email}`}>
          {links.email}
        </a>

        <div className="contact-actions">
          <button type="button" className="button button-light" onClick={copy}>
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a className="button button-outline-light" href={links.linkedin}>
            <LinkedInIcon size={18} /> LinkedIn
          </a>
          <a className="button button-outline-light" href={links.github}>
            <GitHubIcon size={18} /> GitHub
          </a>
          <span className="visually-hidden" aria-live="polite">
            {copied ? 'Email address copied' : ''}
          </span>
        </div>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Muneeb Rehman</p>
          <p>Built with React, Vite and TypeScript</p>
        </footer>
      </div>
    </section>
  )
}
