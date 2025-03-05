import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/HeroSection/Hero'
import { About } from './Components/AboutSection/About'
import { Experience } from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import UnderMaintenes from './Components/UnderMaintines/UnderMaintenes'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Services/>
      <Footer/>
      <UnderMaintenes/>
    </>
  )
}

export default App
