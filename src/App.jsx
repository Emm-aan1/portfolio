import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import FloatNav from './components/floatNav/FloatNav'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatNav />
    </>
  )
}

export default App