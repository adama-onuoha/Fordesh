import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import programs from '../data/programs.js'

function ProgramPage() {
  const { slug } = useParams()
  const index = programs.findIndex((program) => program.slug === slug)
  const program = programs[index]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (program) document.title = `${program.title} | FORDESH AFRICA`
    return () => {
      document.title = 'FORDESH AFRICA'
    }
  }, [program])

  if (!program) return <Navigate to="/" replace />

  const prev = programs[(index - 1 + programs.length) % programs.length]
  const next = programs[(index + 1) % programs.length]

  return (
    <article className="program-page">
      <header
        className={`program-banner ${program.image ? '' : 'no-image'}`}
        style={program.image ? { backgroundImage: `url("${program.image}")` } : undefined}
      >
        <div className="program-banner-content">
          <Link to="/#services" className="program-back">
            <i className="fas fa-arrow-left"></i> All programs
          </Link>
          <span className="hero-tag">KEY PROGRAM AREA</span>
          <h1>{program.title}</h1>
          <p>{program.overview}</p>
        </div>
      </header>

      <section className="program-highlights">
        {program.highlights.map((item) => (
          <div className="highlight" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="program-body">
        {program.sections.map((section) => (
          <div className="program-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.text && <p>{section.text}</p>}
            {section.points && (
              <ul>
                {section.points.map((point) => (
                  <li key={point}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="program-cta">
        <h2>Partner with us on {program.title}</h2>
        <p>
          Get in touch to learn more about this program or explore partnership
          opportunities with FORDESH AFRICA.
        </p>
        <Link to="/#contact" className="btn-primary">
          Contact Us
        </Link>
      </section>

      <nav className="program-nav" aria-label="Other programs">
        <Link to={`/programs/${prev.slug}`}>
          <span>
            <i className="fas fa-arrow-left"></i> Previous
          </span>
          <strong>{prev.title}</strong>
        </Link>
        <Link to={`/programs/${next.slug}`} className="next">
          <span>
            Next <i className="fas fa-arrow-right"></i>
          </span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </article>
  )
}

export default ProgramPage
