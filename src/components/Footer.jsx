import { phones } from '../data/contact.js'

function Footer() {
  return (
    <>
      <footer id="footer" className="footer_info">
        <div className="footer_width about-1">
          <h2>about</h2>
          <p>
            Fordesh Africa is a clean-energy social enterprise delivering modern
            pellet-based cooking solutions that lower household costs, improve
            health, protect forests, and create meaningful jobs for women and
            young people. Clean Energy. Stronger Communities.
          </p>
          <p className="footer-motto">Transforming How Nigerian Households Cook</p>
        </div>

        <div className="footer_width link">
          <h2>quick links</h2>
          <ul>
            <li>
              <a href="/#home">home</a>
            </li>
            <li>
              <a href="/#about">about</a>
            </li>
            <li>
              <a href="/#services">programs</a>
            </li>
            <li>
              <a href="/#stoves">stoves</a>
            </li>
            <li>
              <a href="/#impact">impact</a>
            </li>
            <li>
              <a href="/#team">team</a>
            </li>
            <li>
              <a href="/#contact">contact</a>
            </li>
          </ul>
        </div>

        <div className="footer_width contact-1">
          <h2>contact</h2>
          <ul>
            <li>
              <span>
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <p>
                Head Office: No. 10 Mohammed Shefiu Street, Ago Palace Way,
                Okota, Lagos, Nigeria.
              </p>
            </li>
            <li>
              <span>
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <p>
                Ghana Office: No. 5 Soprano Street, off Celosia Street, South
                Odorkor Estate, Accra, Ghana.
              </p>
            </li>
            {phones.map((phone) => (
              <li key={phone.tel}>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>
                  <a href={`tel:${phone.tel}`}>{phone.display}</a> ({phone.country})
                </p>
              </li>
            ))}
            <li>
              <a href="mailto:fordesh@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                <span>fordesh@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copy-right">
        <p>
          &copy; {new Date().getFullYear()} <span>FORDESH AFRICA</span> | all rights reserved!
        </p>
      </div>
    </>
  )
}

export default Footer
