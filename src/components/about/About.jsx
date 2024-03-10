import React from 'react'
import Me from '../me/Me'
import Experience from '../experience/Experience'
import Education from '../education/Education';

const About = () => {
  return (
    <div className=" bg-[#121416] w-screen flex flex-col justify-center items-center ">
        <Me></Me>
        <Experience></Experience>
        <Education></Education>
    </div>
  )
}

export default About
