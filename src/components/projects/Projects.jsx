import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "./projectsdata";
import { BsGithub } from 'react-icons/bs';
import {Link} from "@styled-icons/bootstrap/Link"
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      const top = element.getBoundingClientRect().top;
      const height = window.innerHeight;
      if (top < height * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    // <AnimatePresence initial={false}>
      <div id="projects" className="shadow-lg">
        <div
          className={`${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } bg-[#101010] m-2 rounded-2xl  w-[90vw] md:w-[92vw] border border-gray-200 border-opacity-25 flex flex-col items-center text-white`}
        >
          <motion.h2 
        className="text-3xl font-mono mt-8 mb-8 font-extrabold"
        whileHover={{ scale: 1.2, rotate: 3, color: "#9A616D", textDecoration: "underline" }}
        transition={{ duration: 0.3 }}
      >
        Projects
      </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 m-6 gap-8 text-[white]">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                }}
                className="bg-[#374151] rounded-lg overflow-hidden shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2">{project.title}</h3>
                  <p className=" mb-4 text-sm font-normal">
                    {project.description}
                  </p>
                  {project.technologies && <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>}
                  <div className="flex justify-between mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 flex gap-1 items-center hover:underline"
                    >
                      <Link />
                      Visit
                    </a>
                    {project.githubLink && <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 flex gap-1 items-center hover:underline"
                    >
                      Code
                      <BsGithub />
                    </a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    // </AnimatePresence>
  );
};

export default Projects;
