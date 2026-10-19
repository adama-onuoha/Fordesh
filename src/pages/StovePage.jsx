import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import stoves from '../data/stoves.js'

function StovePage() {
  const { slug } = useParams()
  const stove = stoves.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (stove) document.title = `${stove.model} ${stove.name} | FORDESH AFRICA`
    return () => {
      document.title = 'FORDESH AFRICA'
    }
  }, [stove])

  if (!stove) return <Navigate to="/" replace />

  const others = stoves.filter((item) => item.slug !== stove.slug)

  return (
    <article className="stove-page">
      <header className="stove-banner">
        <div className="stove-banner-text">
          <Link to="/#stoves" className="program-back">
            <i className="fas fa-arrow-left"></i> All stoves
          </Link>
          <span className="hero-tag">{stove.category.toUpperCase()}</span>
          <h1>
            The {stove.model} <span>{stove.name}</span>
          </h1>
          <p>{stove.tagline}</p>

          <div className="stove-banner-stats">
            {stove.keyStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stove-banner-image">
          <img src={stove.image} alt={`Fordesh ${stove.model} ${stove.name}`} />
        </div>
      </header>

      <section className="stove-features">
        {stove.features.map((feature, index) => (
          <div className="stove-feature" key={feature.title}>
            <span className="stove-feature-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>

      <section className="program-cta">
        <h2>Interested in the {stove.model}?</h2>
        <p>
          Contact us about orders, distribution or partnership opportunities for
          the Fordesh stove range.
        </p>
        <Link to="/#contact" className="btn-primary">
          Contact Us
        </Link>
      </section>

      <nav className="program-nav" aria-label="Other stoves">
        {others.map((item, index) => (
          <Link
            to={`/stoves/${item.slug}`}
            className={index === 1 ? 'next' : ''}
            key={item.slug}
          >
            <span>{item.category}</span>
            <strong>
              {item.model} {item.name}
            </strong>
          </Link>
        ))}
      </nav>
    </article>
  )
}

export default StovePage
