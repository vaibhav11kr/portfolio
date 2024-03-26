import React, { useRef } from "react";
import { motion } from "framer-motion";
import bg from "../../assets/background.avif";
import profile from "../../assets/pic.png";

const Hero = () => {
  // Define the text to be typed
  const textToType = "Software Developer";
  const nextSectionRef = useRef(null);
  const scrollToNextSection = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center w-screen relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center md:mt-2 w-max relative"
      >
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={bg}
          alt="profile_bg"
          className="object-cover h-24 w-[100vw] md:h-52 md:w-[82vw] md:rounded-3xl"
        />
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={profile}
          alt="profile_pic"
          className="h-20 w-20 -mt-10 md:h-32 md:w-32 md:-mt-16"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[50vh] md:h-[40vh] w-[85vw] flex flex-col justify-center items-center z-0 text-[#fbfaf5] font-plus-jakarta bold text-center "
      >
        {/* Typing animation for "Software Developer" */}
        <motion.h1
          className="absolute overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 font-bold text-[#fbfaf5] text-3xl md:text-8xl top-4 md:top-10 hover:from-[#C33764] hover:to-[#1D2671]"
        >
          {textToType.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block", width: "fit-content" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        {/* Other text blocks */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-plus-jakarta bold w-fit bg-[#343434] p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#C33764] hover:to-[#1D2671] transition-all ease-in-out"
        >
          <motion.span
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            Hey I'm Vaibhav Kumar
          </motion.span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl mt-5 font-bold"
        >
          <motion.span
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            a software developer, dedicated to driving innovation and delivering robust solutions.⚡️
          </motion.span>
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-xl mt-5 mb-10 font-mono font-extrabold"
        >
          <motion.span
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            Discover the magic of awesome UIs crafted with some{" "}
            <span className="font-sans hover:underline cursor-pointer">coffee</span>{" "}
            ☕️ and{" "}
            <span className="font-sans hover:underline cursor-pointer">music</span>{" "}
            🎧. <br />
            Let's elevate your digital experience together.
          </motion.span>
        </motion.h3>
      </motion.div>
      {/* Scroll down icon */}
      <div
        className="absolute bottom-5 flex flex-col items-center cursor-pointer"
        onClick={scrollToNextSection}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      {/* Invisible div to scroll to */}
      <div ref={nextSectionRef}></div>
    </div>
  );
};

export default Hero;
