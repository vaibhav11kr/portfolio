import React from 'react'
import { motion } from "framer-motion";
const Experience = () => {
   return (

      <div className=" bg-[#101010] m-2 rounded-2xl  w-[90vw] md:w-[92vw] md:h-auto border border-gray-200 border-opacity-25 flex flex-col items-center text-[#F5FEFD] relative">
      <motion.h2 
        className="text-3xl font-mono font-extrabold mb-8 mt-8"
        whileHover={{ scale: 1.2, rotate: 3, color: "#9A616D", textDecoration: "underline" }}
        transition={{ duration: 0.3 }}
      >
        Experience
      </motion.h2>

        <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        {/* right timeline */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-gray-800 text-sm">
            <div className="flex md:flex-row flex-col justify-between items-center mb-3">
            <h3 className="font-bold text-sm md:text-lg text-center">Tata Consultancy Services</h3>
            <p className='md:text-sm text-xs font-semibold'>2022-Present</p>
            </div>
            <div className='flex flex-col'>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">As a System Engineer at Tata Consultancy Services, I've spearheaded the creation of 10+ cutting-edge websites for Pfizer Inc., totaling 100+ pages. Leveraging HTML, CSS, and React, I crafted immersive user experiences with bespoke sections, interactive media, and robust search functionalities.</p>
            <p className='mt-2'><b>Skills:</b> Web Development, HTML5, CSS, React.js, Figma, Git, GitHub, Agile Methodologies, Jira <br />
<b>Client:</b> Pfizer Inc</p>
            </div>
          </div>
        </div>

        {/* left timeline */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-gray-800 text-sm">
            <div className="flex md:flex-row flex-col justify-between items-center mb-3">
            <h3 className="font-bold text-sm md:text-lg text-center">Ayushya Healthcare Services</h3>
            <p className='md:text-sm text-xs font-semibold'>2021-2021</p>
            </div>
            <div className='flex flex-col'>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">As a Frontend Developer at Ayushya Healthcare Services Pvt. Ltd., during my apprenticeship, I played a pivotal role in shaping the 'About Us' page, ensuring it was responsive and pixel-perfect using HTML, CSS, and JavaScript.</p>
            <p className='mt-2'><b>Skills:</b> HTML5, CSS, JavaScript, Project Management, GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Experience
