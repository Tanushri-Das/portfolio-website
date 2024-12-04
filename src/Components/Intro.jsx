import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";

const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const fadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full lg:w-2/3 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>👋 Hi, this is</h1>
      </motion.div>
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`text-4xl md:text-6xl font-bold mt-3 mb-4 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Tanushri Das
      </motion.h2>

      <h2
        className={`text-xl font-medium mb-4 ${
          theme === "dark" ? "text-white" : " text-black"
        }`}
      >
        I am a{" "}
        <Typewriter
          words={[
            "Front-End Web Developer",
            "React Developer",
            "Self Believer",
          ]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <p>
        <motion.p
          initial={{ opacity: 0, y: 50 }} // নিচ থেকে শুরু
          animate={{ opacity: 1, y: 0 }} // ধীরে ধীরে উপরে
          transition={{ duration: 0.8, ease: "easeOut" }} // সময় এবং গতিশীলতা
          className={`text-lg font-normal mb-5 ${
            theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
          }`}
        >
          I completed my graduation B.Sc in CSE. I have a strong foundation in
          front-end development and am skilled in creating user-friendly and
          responsive web applications using React.js, Next.js and its ecosystem.
        </motion.p>
      </p>
      <div className="flex items-center gap-x-5">
        <Link
          to="https://drive.google.com/file/d/1wBFhg0tsImORHKPGQpKEfgFWPd8p9xOu/view?usp=drive_link"
          target="_blank"
        >
          <button
            type="button"
            className={`px-6 py-2 text-lg font-semibold border transition-all duration-300 rounded-lg text-nowrap transform ${
              theme === "dark"
                ? "text-white border-gray-200 bg-gray-800 hover:bg-gradient-to-b from-sky-500 to-blue-900 hover:border-none hover:outline-none"
                : "text-black border-gray-300 bg-white hover:bg-gradient-to-b from-sky-500 to-blue-900 hover:border-none hover:text-white"
            }`}
          >
            Open Resume
          </button>
        </Link>
        <div className="flex space-x-3">
          <Link to="mailto:dastanushri402@gmail.com">
            <button className="flex justify-center items-center border border-gray-300 rounded-full w-10 h-10 hover:border-sky-400 transition-all duration-300 ease-in-out">
              <TfiEmail className="text-lg hover:text-sky-400 transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            </button>
          </Link>
          <Link to="https://www.linkedin.com/in/tanushri-das/" target="_blank">
            <button className="flex justify-center items-center border border-gray-300 rounded-full w-10 h-10 hover:border-sky-400 transition-all duration-300 ease-in-out">
              <FaLinkedinIn className="text-lg hover:text-sky-400 transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            </button>
          </Link>
          <Link to="https://github.com/Tanushri-Das" target="_blank">
            <button className="flex justify-center items-center border border-gray-300 rounded-full w-10 h-10 hover:border-sky-400 transition-all duration-300 ease-in-out">
              <FaGithub className="text-lg hover:text-sky-400 transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
