import React from 'react'
import Me from '../me/Me'
import Experience from '../experience/Experience'
import Education from '../education/Education';

const About = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center gap-14">
        <Me></Me>
        <Experience></Experience>
        <Education></Education>
    </div>
  )
}

export default About
