import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectsData from "./projectsdata";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <div className="shadow-lg ">
      <div className="bg-[#101010] m-2 rounded-2xl  w-[90vw] md:w-[92vw] border border-gray-200 border-opacity-25 flex flex-col items-center text-white">
      <h2 className="text-3xl font-mono hover:underline mt-8 mb-8">
          Projects
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 m-6 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      </div>
     
    </div>
  )
}

export default Projects;
