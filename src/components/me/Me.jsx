import React from 'react'
import bg from "../../assets/background.avif";
import profile from "../../assets/pic.png"
const Me = () => {
  return (
    <div className="flex flex-col items-center bg-[#0E1011] w-screen">
      <div  className="flex flex-col justify-center items-center mt-2">
      <img src={bg} alt="profile_bg" className="object-cover h-24 w-[90vh] md:h-52 md:w-[82vw] md:rounded-3xl"/>
      <img src={profile} alt="profile_pic" className=" h-20 w-20 -mt-10 md:h-32 md:w-32 md:-mt-16"/>
      </div>
      <div className=" h-[50vh] md:h-[40vh] w-[85vw] flex flex-col justify-center items-center z-0 text-slate-50 font-plus-jakarta bold text-center ">
      <h1 className=" text-3xl md:text-5xl font-plus-jakarta bold w-fit bg-[#343434] p-3 rounded-lg">
        Vaibhav Kumar
      </h1>
      <h3 className="text-xl md:text-2xl mt-5 font-medium">
        a software developer, dedicated to driving innovation and delivering
        robust solutions.⚡️
      </h3>
      <h3 className="text-sm md:text-xl mt-5 mb-10 font-mono">
        Discover the magic of awesome UIs crafted with some <span className="font-sans hover:underline cursor-pointer">coffee</span> ☕️ and <span className="font-sans hover:underline cursor-pointer">music</span> 🎧. 
        <br />Let's elevate your digital experience together.
      </h3>
    </div>
    </div>
  )
}

export default Me
