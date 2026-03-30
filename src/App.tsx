import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AboutMe from './section/AboutMe'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Header from './section/Header'
import Hero from './section/Hero'
import Projects from './section/Projects'
import CRMDetails from './section/projects/CRMDetails'
import QuiztopiaDetails from './section/projects/QuiztopiaDetails'
import SpeakSmartDetails from './section/projects/SpeakSmartDetails'
import TriVocaDetails from './section/projects/TriVocaDetails'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects/crm' element={<CRMDetails />} />
        <Route path='/projects/trivoca' element={<TriVocaDetails />} />
        <Route path='/projects/quiztopia' element={<QuiztopiaDetails />} />
        <Route path='/projects/speak-smart' element={<SpeakSmartDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
