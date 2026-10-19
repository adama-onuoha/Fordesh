const stats = [
  { value: '167M', label: 'People cooking with biomass every day' },
  { value: '700K+', label: 'Annual smoke-related illnesses' },
  { value: '90%', label: 'Rural households relying on firewood' },
  { value: '20–30%', label: 'Annual rise in traditional fuel costs' },
]

function Challenge() {
  return (
    <section className="challenge" id="challenge">
      <div className="challenge-grid">
        <div className="challenge-image">
          <img
            src="/images/cc-firewood-cooking.jpg"
            alt="Woman cooking over a smoky open firewood fire"
          />
        </div>

        <div className="challenge-content">
          <span className="section-tag">THE CHALLENGE</span>
          <h2>Nigeria’s Clean-Cooking Challenge</h2>
          <p>
            167 million Nigerians still rely on firewood and charcoal for daily
            cooking, creating a triple burden across health, environment and
            household economics: smoke-related illness, forest loss, and fuel
            costs that climb every year.
          </p>

          <div className="challenge-stats">
            {stats.map((stat) => (
              <div className="challenge-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Challenge
