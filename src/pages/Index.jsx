import Header from '../components/sections/Header.jsx'
import About from '../components/sections/About.jsx'
import Proyects from '../components/sections/Proyects.jsx'
import LandingPages from '../components/sections/LandingPages.jsx' 
import Skills from '../components/sections/Skills.jsx'
import DisenoWeb from '../components/sections/DisenoWeb.jsx'
import Contact from '../components/sections/Contact.jsx'

function Index() {
  return (
    <>
      <Header />
      <About />
      <Proyects />
      <LandingPages />
      <Skills />
      <DisenoWeb />
      <Contact />
    </>
  )
}

export default Index