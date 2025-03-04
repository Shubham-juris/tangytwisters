import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/HeroSection/Hero'
import { About } from './Components/AboutSection/About'
import { Experience } from './Components/Experience/Experience'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </>
  )
}

export default App
