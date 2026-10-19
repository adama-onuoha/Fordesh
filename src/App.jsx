import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ProgramPage from './pages/ProgramPage.jsx'
import StovePage from './pages/StovePage.jsx'

function App() {
  return (
    <>
      <div className="arrow-btn">
        <a href="#top" onClick={(event) => {
          event.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
          <span>
            <i className="fa-solid fa-angles-up"></i>
          </span>
        </a>
      </div>
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stoves/:slug" element={<StovePage />} />
          <Route path="/programs/:slug" element={<ProgramPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
