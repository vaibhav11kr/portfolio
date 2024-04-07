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
        Education
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
            <h3 className="font-bold text-sm md:text-lg text-center">
            Bosscoder Academy</h3>
            <p className='md:text-sm text-xs font-semibold'>2023-2024</p>
            </div>
            <div className='flex flex-col'>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">
            During my time at Bosscoder Academy, I completed an intensive Full Stack Web Development program focusing on various aspects of computer science and web development.</p>
            <p className='mt-2'><b>Skills:</b> HTML, CSS, JavaScript, Node.js, Express.js, SQL, NoSQL, RESTful APIs, Git<br />
<b>Activities and Societies: </b> Computer Science, DataBase Management System, Operating System, OOPs, System Design, API Integrations, Web Development</p>
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
            <h3 className="font-bold text-sm md:text-lg text-center">
            Bhagalpur College of Engineering</h3>
            <p className='md:text-sm text-xs font-semibold'>2017-2021</p>
            </div>
            <div className='flex flex-col'>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">During my tenure at Bhagalpur College of Engineering, I pursued a Bachelor of Technology (B.Tech) degree in Mechanical Engineering, graduating in November 2021 with a commendable CGPA of 8.41.</p>
            <p className='mt-2'><b>Skills:</b> HTML, CSS, JavaScript, CAD, CAM, 3-D Printing<br />
<b>Activities and Societies: </b> Active member of the Grievance Cell, participated in Football and Music clubs.
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Experience
