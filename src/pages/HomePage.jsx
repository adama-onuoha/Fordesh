import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Challenge from '../components/Challenge.jsx'
import AboutSection from '../components/AboutSection.jsx'
import VisionMission from '../components/VisionMission.jsx'
import Stoves from '../components/Stoves.jsx'
import Impact from '../components/Impact.jsx'
import Services from '../components/Services.jsx'
import Profiles from '../components/Profiles.jsx'
import PartnerBanner from '../components/PartnerBanner.jsx'
import Contact from '../components/Contact.jsx'

function HomePage() {
  const { hash } = useLocation()

  // Arriving from another page (e.g. "/#services" from a program page), jump to that section.
  // Only on arrival: clicks within the home page are scrolled by the browser itself.
  useEffect(() => {
    if (!hash) return
    const jump = () =>
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' })
    jump()
    // images above the section can still be loading and push it down; re-align once they settle
    const timers = [200, 600, 1200].map((delay) => setTimeout(jump, delay))
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Home />
      <Challenge />
      <AboutSection />
      <VisionMission />
      <Stoves />
      <Impact />
      <Services />
      <Profiles />
      <PartnerBanner />
      <Contact />
    </>
  )
}

export default HomePage
