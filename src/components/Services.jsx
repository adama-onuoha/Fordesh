import { Link } from 'react-router-dom'
import programs from '../data/programs.js'

function Services() {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        our wider <span>work</span>
      </h1>
      <p className="section-intro">
        Clean cooking builds on more than 12 years of community development
        work across Nigeria and Ghana.
      </p>

      <div className="work-grid">
        {programs.map((program) => (
          <Link to={`/programs/${program.slug}`} className="work-card" key={program.slug}>
            {program.image ? (
              <img src={program.image} alt="" />
            ) : (
              <div className="work-icon">
                <i className={`fa-solid ${program.icon}`}></i>
              </div>
            )}
            <div>
              <h3>{program.title}</h3>
              <p>{program.summary}</p>
              <span className="stove-link">
                Read more <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services
