import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/cc-woman-pellet-stove.jpg",
    tag: "FORDESH AFRICA CLEAN COOKING INITIATIVE",
    title: "Clean Energy. Stronger Communities.",
    text: "Modern pellet-based cooking that lowers household costs, improves health, protects forests and creates jobs across Nigeria.",
  },
  {
    image: "/images/cc-smoke-challenge.jpg",
    tag: "THE CHALLENGE",
    title: "167 Million Nigerians Still Cook with Firewood and Charcoal",
    text: "A triple burden of smoke-related illness, forest loss and fuel costs that climb every year.",
  },
  {
    image: "/images/cc-family-stove.jpg",
    tag: "OUR STOVES",
    title: "Three Stoves, One Pellet Fuel",
    text: "From the home to the institution, every Fordesh stove runs on the same clean biomass pellets.",
  },
  {
    image: "/images/cc-women-retail.jpg",
    tag: "WOMEN-LED DISTRIBUTION",
    title: "Women Lead Our Distribution Networks",
    text: "Women manage our retail hubs and shape decisions at every level of the business.",
  },
  {
    image: "/images/cc-pellet-production.jpg",
    tag: "GREEN JOBS",
    title: "Every Stove Creates Opportunity",
    text: "We train and employ Nigerians as technicians, plant operators, delivery agents, data specialists and mobilizers.",
  },
];

const INTERVAL = 6000;

function Home() {
  const [current, setCurrent] = useState(0);

  const goTo = (index) =>
    setCurrent((index + slides.length) % slides.length);

  useEffect(() => {
    const timer = setTimeout(() => goTo(current + 1), INTERVAL);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="hero" id="home">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
          aria-hidden={index !== current}
        ></div>
      ))}

      <div className="hero-overlay">
        <div className="hero-content" key={current}>
          <span className="hero-tag">{slides[current].tag}</span>
          <h1>{slides[current].title}</h1>
          <p>{slides[current].text}</p>

          <div className="hero-buttons">
            <a href="#stoves" className="btn-primary">
              Our Stoves
            </a>
            <a href="#contact" className="btn-outline">
              Partner With Us
            </a>
          </div>

          <p className="hero-motto">
            <i className="fas fa-leaf"></i> Transforming How Nigerian Households Cook
          </p>
        </div>
      </div>

      <button
        type="button"
        className="hero-arrow prev"
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        type="button"
        className="hero-arrow next"
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.title}
            className={index === current ? "active" : ""}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Home;
