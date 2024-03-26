import React from 'react'
import Hero from '../hero/Hero'
import Skills from '../skills/Skills'
import Projects from '../projects/Projects.jsx';

const Home = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center font-bold">
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  )
}

export default Home
