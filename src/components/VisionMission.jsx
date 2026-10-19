const values = [
  'Community first',
  'Sustainability',
  'Equity and inclusion',
  'Innovation with purpose',
  'Transparency',
  'Excellence',
  'Partnership',
]

function VisionMission() {
  return (
    <section className="vision" id="vision">
      <h1 className="heading">
        vision, mission <span>&amp; values</span>
      </h1>

      <div className="vm-grid">
        <div className="vm-card">
          <i className="fa-solid fa-eye"></i>
          <h3>Our Vision</h3>
          <p>
            A Nigeria where every household has safe, affordable cooking energy:
            women breathe cleaner air, forests regenerate, and young people find
            meaningful work.
          </p>
        </div>

        <div className="vm-card">
          <i className="fa-solid fa-bullseye"></i>
          <h3>Our Mission</h3>
          <p>
            Clean cooking as a national standard: health, jobs, forests and local
            economies advanced together at scale across the country.
          </p>
        </div>

        <div className="vm-card">
          <i className="fa-solid fa-hand-holding-heart"></i>
          <h3>Our Values</h3>
          <ul className="value-tags">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
