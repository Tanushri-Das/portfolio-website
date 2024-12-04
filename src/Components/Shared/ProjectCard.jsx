import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // শুরুতে নিচে এবং অদৃশ্য
      animate={{ opacity: 1, y: 0 }} // ধীরে ধীরে উপরে উঠে দৃশ্যমান
      transition={{ duration: 0.6, ease: "easeOut" }} // সময় এবং মসৃণতা
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }} // হোভার ইফেক্ট
      className={`p-3 border-2 cursor-pointer transition-transform duration-300 rounded-lg border-opacity-20 h-full flex flex-col ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800"
          : "border-gray-300 bg-white"
      }`}
    >
      {/* Project Image */}
      <img
        src={project.home_src}
        alt={project.project_name}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Project Details */}
      <div className="mt-4 flex flex-col flex-grow">
        <h2 className="text-xl mb-2 font-bold text-gray-700 dark:text-gray-200">
          {project.project_name}
        </h2>
        <p
          className={`text-[16px] font-normal ${
            theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
          }`}
        >
          {project.short_description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mt-3 mb-10">
          {project.tech.split(", ").map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded dark:bg-slate-500 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub and Link Icons positioned at the bottom of the card */}
      <div className="flex justify-center gap-x-6 items-center">
        <motion.button
          whileHover={{ scale: 1.1, color: "#0ea5e9" }} // হোভার স্টাইল
        >
          <Link to={project.livesite_href} target="_blank">
            <FaLink
              size={28}
              className="transform transition-transform duration-300 ease-in-out"
            />
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, color: "#0ea5e9" }} // হোভার স্টাইল
        >
          <Link to={project.cilent_side} target="_blank">
            <FaGithub
              size={30}
              className="transform transition-transform duration-300 ease-in-out"
            />
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
