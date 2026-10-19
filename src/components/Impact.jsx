const impactAreas = [
  { icon: 'fa-heart-pulse', title: 'Health', text: 'Reduced smoke exposure and fewer respiratory illnesses in the home.' },
  { icon: 'fa-tree', title: 'Environment', text: 'Less deforestation, lower emissions and waste-to-fuel circularity.' },
  { icon: 'fa-coins', title: 'Economics', text: 'Lower household fuel costs and new income streams in communities.' },
  { icon: 'fa-people-group', title: 'Social', text: 'Women’s empowerment, youth employment and safer communities.' },
  { icon: 'fa-earth-africa', title: 'Climate', text: 'Verified emissions reductions supporting Nigeria’s NDC commitments.' },
]

const objectives = [
  'Expand clean cooking access nationwide.',
  'Build a large-scale green workforce with women and youth at the centre.',
  'Strengthen pellet production and distribution networks.',
  "Lead Nigeria's climate-smart energy transition through robust MRV systems.",
  'Drive community education and behavioural change.',
  'Promote gender leadership across the clean energy ecosystem.',
  'Protect forests and reduce emissions through sustainable biomass pellets.',
  'Build a circular, community-driven clean energy economy.',
]

function Impact() {
  return (
    <section className="impact" id="impact">
      <h1 className="heading">
        our impact <span>model</span>
      </h1>
      <p className="section-intro">
        Measurable change across health, environment, economics, society and
        climate.
      </p>

      <div className="impact-grid">
        {impactAreas.map((area) => (
          <div className="impact-card" key={area.title}>
            <i className={`fa-solid ${area.icon}`}></i>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </div>
        ))}
      </div>

      <div className="objectives">
        <div className="objectives-image">
          <img src="/images/cc-forest-regrowth.jpg" alt="Regenerating forest at sunrise" />
        </div>
        <div className="objectives-content">
          <h2>Strategic Objectives</h2>
          <ol>
            {objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Impact
