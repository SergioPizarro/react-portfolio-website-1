import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
//import Services from './components/services/Services'
//import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/conctact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    {/*<Services />*/}
    {/*<Testimonials />*/}
    <Contact />
    <Footer />
    </>
  )
}

export default App
