import React, { useEffect, useState } from "react";
import ProjectCard from "./Shared/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projectdata.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="mt-20">
      <motion.h1
        initial={{ opacity: 0, x: -50 }} // শুরুতে বাম দিকে থাকবে এবং অদৃশ্য থাকবে
        animate={{ opacity: 1, x: 0 }} // ধীরে ধীরে মূল অবস্থানে এবং দৃশ্যমান হবে
        transition={{ duration: 0.7, ease: "easeOut" }} // সময় এবং গতিশীলতা
        className="text-xl md:text-3xl lg:text-4xl font-bold mb-10"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
