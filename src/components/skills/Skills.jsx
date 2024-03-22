import React from "react";
import SkillsComponent from "../animation/SkillsComponent";
import {LaptopCode} from "@styled-icons/fa-solid/LaptopCode"
import {Architecture} from "@styled-icons/material/Architecture"
import {Azuredevops} from "@styled-icons/simple-icons/Azuredevops"
const Skills = () => {
  return (
    <div className="bg-[#181818] w-[90vw] md:w-[92vw] md:h-auto flex  justify-center items-center rounded-3xl border border-gray-200 border-opacity-25 shadow-lg mb-16 ">
      <div className="bg-[#101010] m-2 rounded-2xl  w-[90vw] md:w-[92vw] md:h-auto border border-gray-200 border-opacity-25 flex flex-col items-center text-white">
        <h2 className="text-3xl font-mono hover:underline mt-8 mb-8">
          {" "}
          Skills
        </h2>
        <div className="flex flex-col md:flex-row w-full h-fit items-center mb-8 md:items-start md:justify-evenly text-xs md:text-justify font-thin p-4">
          <div className="flex flex-col  items-center w-80 md:w-56 h-[30vh] bg-slate-100 mb-6 rounded-xl text-slate-950 p-4 ">
            {" "}
            <span className="border-b-2 border-black text-sm mb-2"> <LaptopCode className="h-4 mb-1 mr-1"/>Web Dev</span>
            <span className="font-plus-jakarta">
              "Skilled in crafting dynamic web solutions using React and Redux,
              coupled with RESTful API integration. Proficient in frontend
              design with Tailwind CSS, Bootstrap, and SCSS for enhanced user
              experiences."
            </span>
          </div>
          <div className="flex flex-col items-center w-80 md:w-56 h-[30vh] bg-slate-100 mb-6 rounded-xl text-slate-950 p-4">
            {" "}
            <span className="border-b-2 border-black text-sm mb-2"><Architecture className="h-4 mb-1 mr-1"/>System Design</span>
            <span className="font-plus-jakarta">
              "Experienced in designing scalable system architectures, focusing
              on efficiency and performance. Implements advanced design
              methodologies and principles, ensuring robust and adaptable
              solutions for diverse requirements."
            </span>
          </div>
          <div className="flex flex-col items-center w-80 md:w-56 h-[30vh] bg-slate-100 mb-6 rounded-xl text-slate-950 p-4">
            {" "}
            <span className="border-b-2 border-black text-sm mb-2"><Azuredevops className="h-4 mb-1 mr-1"/>DevOps</span>
            <span className="font-plus-jakarta">
              "Expertise in guiding projects through the software development
              life cycle (SDLC), ensuring seamless integration of development,
              testing, and deployment phases. Proficient in leveraging
              industry-standard practices for efficient project delivery."
            </span>
          </div>
        </div>
        <div className="scroll flex flex-col justify-center items-center">
          <div className="mb-6">
          <SkillsComponent></SkillsComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
