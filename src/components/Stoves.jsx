import { Link } from 'react-router-dom'
import stoves from '../data/stoves.js'

function Stoves() {
  return (
    <section className="stoves" id="stoves">
      <h1 className="heading">
        the fordesh <span>stove range</span>
      </h1>
      <p className="section-intro">
        Three stoves, one pellet fuel standard, covering every cooking need from
        home to institution.
      </p>

      <div className="stove-grid">
        {stoves.map((stove) => (
          <Link to={`/stoves/${stove.slug}`} className="stove-card" key={stove.slug}>
            <div className="stove-card-image">
              <img src={stove.image} alt={`Fordesh ${stove.model} ${stove.name}`} />
            </div>
            <span className="stove-category">{stove.category}</span>
            <h3>
              {stove.model} <span>{stove.name}</span>
            </h3>
            <p>{stove.summary}</p>
            <div className="stove-card-stat">
              <strong>{stove.keyStats[0].value}</strong>
              <span>{stove.keyStats[0].label}</span>
            </div>
            <span className="stove-link">
              View details <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        ))}
      </div>

      <div className="stove-notes">
        <div>
          <i className="fa-solid fa-gas-pump"></i>
          <div>
            <h4>One Fuel, One Supply Chain</h4>
            <p>All three run on the same biomass pellets, so a single fuel network serves the entire range.</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-layer-group"></i>
          <div>
            <h4>Built to Scale</h4>
            <p>Shared components and servicing keep costs down as deployment grows across Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stoves
