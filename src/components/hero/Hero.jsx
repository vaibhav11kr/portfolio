import React from "react";
import bg from "../../assets/background.avif";
import profile from "../../assets/pic.png"
const Hero = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <div  className="flex flex-col justify-center items-center md:mt-2 w-max">
        <h1 className="absolute animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 font-bold text-[#fbfaf5] text-3xl md:text-8xl top-24 hover:bg-gradient-to-r hover:from-[#C33764] hover:to-[#1D2671] hover:bg-clip-text hover:text-transparent transition-all ease-in-out">Software Developer</h1>
      <img src={bg} alt="profile_bg" className="object-cover h-24 w-[100vw] md:h-52 md:w-[82vw] md:rounded-3xl"/>
      <img src={profile} alt="profile_pic" className=" h-20 w-20 -mt-10 md:h-32 md:w-32 md:-mt-16"/>
      </div>
      <div className=" h-[50vh] md:h-[40vh] w-[85vw] flex flex-col justify-center items-center z-0 text-[#fbfaf5] font-plus-jakarta bold text-center ">
      <h1 className="text-3xl md:text-5xl font-plus-jakarta bold w-fit bg-[#343434] p-3 rounded-xl">
        Hey I'm Vaibhav Kumar
      </h1>
      <h3 className="text-xl md:text-2xl mt-5 font-bold">
        a software developer, dedicated to driving innovation and delivering
        robust solutions.⚡️
      </h3>
      <h3 className="text-sm md:text-xl mt-5 mb-10 font-mono font-extrabold">
        Discover the magic of awesome UIs crafted with some <span className="font-sans hover:underline cursor-pointer">coffee</span> ☕️ and <span className="font-sans hover:underline cursor-pointer">music</span> 🎧. 
        <br />Let's elevate your digital experience together.
      </h3>
    </div>
    </div>
  );
};

export default Hero;


