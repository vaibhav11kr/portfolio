import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SkillsComponent from "../animation/SkillsComponent";
import { LaptopCode } from "@styled-icons/fa-solid/LaptopCode";
import { Architecture } from "@styled-icons/material/Architecture";
import { Azuredevops } from "@styled-icons/simple-icons/Azuredevops";

const Skills = () => {
  const controls = useAnimation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 200) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1, type: "spring", stiffness: 100 },
        });
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="shadow-lg mb-16 mt-16"
    >
      <div className="bg-[#101010] m-2 rounded-2xl  w-[90vw] md:w-[92vw] md:h-auto border border-gray-200 border-opacity-25 flex flex-col items-center text-[#F5FEFD]">
      <motion.h2 
        className="text-3xl font-mono mt-8 mb-8 font-extrabold"
        whileHover={{ scale: 1.2, rotate: 3, color: "#9A616D", textDecoration: "underline" }}
        transition={{ duration: 0.3 }}
      >
        Skills
      </motion.h2>
        <div className="flex flex-col md:flex-row w-full h-auto items-center mb-8 md:items-start md:justify-evenly text-xs md:text-justify font-thin p-4">
          <motion.div
            className="flex flex-col items-center w-80 md:w-56 md:h-[22vh] bg-[#F5FEFD] mb-6 rounded-xl text-slate-950 p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            {" "}
            <span className="border-b-2 border-black text-sm mb-2">
              {" "}
              <LaptopCode className="h-4 mb-1 mr-1" />
              Web Dev
            </span>
            <span className="font-plus-jakarta">
              "Skilled in crafting dynamic web solutions using React and Redux,
              coupled with RESTful API integration. Proficient in frontend
              design with Tailwind CSS, Bootstrap, and SCSS for enhanced user
              experiences."
            </span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-80 md:w-56 md:h-[22vh] bg-[#F5FEFD] mb-6 rounded-xl text-slate-950 p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            {" "}
            <span className="border-b-2 border-black text-sm mb-2">
              <Architecture className="h-4 mb-1 mr-1" />
              System Design
            </span>
            <span className="font-plus-jakarta">
              "Experienced in designing scalable system architectures, focusing
              on efficiency and performance. Implements advanced design
              methodologies and principles, ensuring robust and adaptable
              solutions for diverse requirements."
            </span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-80 md:w-56 md:h-[22vh] bg-[#F5FEFD] mb-6 rounded-xl text-slate-950 p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            {" "}
            <span className="border-b-2 border-black text-sm mb-2">
              <Azuredevops className="h-4 mb-1 mr-1" />
              DevOps
            </span>
            <span className="font-plus-jakarta">
              "Expertise in guiding projects through the software development
              life cycle (SDLC), ensuring seamless integration of development,
              testing, and deployment phases. Proficient in leveraging
              industry-standard practices for efficient project delivery."
            </span>
          </motion.div>
        </div>
        <div className="scroll flex flex-col justify-center items-center">
          <div className="mb-6">
            <SkillsComponent></SkillsComponent>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
