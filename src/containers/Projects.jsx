import React from "react";
import {AnimatePresence, motion } from "framer-motion";
import { about, Leaf1, Leaf2 } from "../assets";
import { ProjectsData } from "../utils/helper";

const Projects = () => {
  return <section
  id="projects"
  className="flex items-center justify-center flex-col gap-12 my-12"
>
  <div className="w-full flex items-center justify-center py-24">
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: 200 }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ delay: 0.4 }}
      className="flex items-center justify-around w-52"
    >
      <img src={Leaf1} alt="" className="w-6 h-auto object-contain" />
      <p
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
      >
        Projects
      </p>
      <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
    </motion.div>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
    <AnimatePresence>
      {ProjectsData && ProjectsData.map((project, index) => (
          <ProjectCard key = {project.id} project={project}/>
      ))}
    </AnimatePresence>
    
  </div>
</section>;
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div key={project.id}>
      <motion.img className="w-full h-full object-contain rounded-lg" src={project.imgSrc}></motion.img>
    </motion.div>
   
  )
}

export default Projects;
