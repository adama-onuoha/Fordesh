const everyStove = [
  'Cleaner air',
  'A job created',
  'A skill gained',
  'A family empowered',
]

function AboutSection() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img
            className="main"
            src="/images/cc-pellet-production.jpg"
            alt="Workers bagging biomass pellets at a production site"
          />
          <img src="/images/cc-pellet-delivery.jpg" alt="Delivery agent loading pellet bags" />
          <img src="/images/cc-women-retail.jpg" alt="Women running a pellet retail hub" />
        </div>

        <div className="about-content">

          <span className="section-tag">
            ABOUT FORDESH AFRICA
          </span>

          <h2>
            Transforming How Nigerian Households Cook
          </h2>

          <p>
            Fordesh Africa is a clean-energy social enterprise. We deliver modern
            pellet-based cooking solutions that lower household costs, improve
            health, protect forests, and create meaningful jobs for women and
            young people across the country.
          </p>

          <p>
            Through our community-centered model we train and employ Nigerians as
            technicians, plant operators, delivery agents, data specialists and
            mobilizers. Women lead our distribution networks, manage retail hubs
            and shape decisions at every level.
          </p>

          <p className="about-note">
            Our work builds on more than 12 years of rural development
            experience in Nigeria and Ghana.
          </p>

          <h3 className="about-subheading">Every stove deployed means:</h3>
          <div className="about-features">
            {everyStove.map((item) => (
              <div className="feature" key={item}>
                ✔ {item}
              </div>
            ))}
          </div>

          <a href="#stoves" className="btn-primary">
            See Our Stoves
          </a>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;
