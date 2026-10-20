import { useEffect, useState } from "react";
import { businessEmail, phones } from "../data/contact.js";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>

        <a href="/#home" className="logo">

          <div className="logo-row">
            <img src="/images/logo-mark.png" alt="FORDESH AFRICA" />

            <div className="logo-text">
              <h2>FORDESH AFRICA</h2>
              <span>GreenEdge Innovation Limited</span>
            </div>
          </div>

          <em className="logo-motto">Transforming How Nigerian Households Cook</em>

        </a>

        <nav className={menuOpen ? "navbar active" : "navbar"}>

          <a href="/#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="/#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="/#stoves" onClick={() => setMenuOpen(false)}>
            Stoves
          </a>

          <a href="/#impact" onClick={() => setMenuOpen(false)}>
            Impact
          </a>

          <a href="/#services" onClick={() => setMenuOpen(false)}>
            Programs
          </a>

          <a href="/#team" onClick={() => setMenuOpen(false)}>
            Team
          </a>

          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </nav>

        <div className="header-actions">

          <button
            className="contact-btn"
            onClick={() => setContactOpen(true)}
          >
            Contact
          </button>

          <i
            className="fas fa-bars menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>

        </div>

      </header>

      <div className={contactOpen ? "contact-panel active" : "contact-panel"}>

        <i
          className="fas fa-times close-panel"
          onClick={() => setContactOpen(false)}
        ></i>

        <h2>Contact Information</h2>

        <div className="panel-item">
          <i className="fas fa-phone"></i>
          <div>
            <h4>Phone</h4>
            {phones.map((phone) => (
              <p key={phone.tel}>
                {phone.country}: <a href={`tel:${phone.tel}`}>{phone.display}</a>
              </p>
            ))}
          </div>
        </div>

        <div className="panel-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>
              <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
            </p>
          </div>
        </div>

        <div className="panel-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Offices</h4>

            <p>
              Head Office: No. 10 Mohammed Shefiu Street, Ago Palace Way,
              Okota, Lagos, Nigeria
            </p>

            <p>
              Ghana Office: No. 5 Soprano Street, off Celosia Street, South
              Odorkor Estate, Accra, Ghana
            </p>

          </div>
        </div>

      </div>
    </>
  );
}

export default Header;