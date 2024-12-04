import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import tanu from "../assets/hero.jpg";
import { motion } from "framer-motion";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className="mt-20">
      <motion.h1
        initial={{ opacity: 0, x: -50 }} // শুরুতে বাম দিকে থাকবে এবং অদৃশ্য থাকবে
        animate={{ opacity: 1, x: 0 }} // ধীরে ধীরে মূল অবস্থানে এবং দৃশ্যমান হবে
        transition={{ duration: 0.7, ease: "easeOut" }} // সময় এবং গতিশীলতা
        className="text-xl md:text-3xl lg:text-4xl font-bold mb-10"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left div with animation */}
        <motion.div
          className="w-full lg:w-2/3 flex flex-col gap-4 order-2 lg:order-none"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
        >
          <p
            className={`text-lg font-normal ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
            }`}
          >
            Hello! I'm <span className="font-bold">Tanushri Das</span>, an
            aspiring MERN Stack Developer with a strong foundation in front-end
            technologies like React.js and Next.js. My passion lies in building
            responsive, user-friendly web applications that seamlessly adapt
            across devices.
          </p>
          <p
            className={`text-lg font-normal ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
            }`}
          >
            With hands-on experience in modern front-end development, I am
            actively expanding my skills to include back-end technologies like
            Node.js, Express.js, and MongoDB. My goal is to master the full MERN
            Stack and become proficient in creating scalable, efficient, and
            dynamic web solutions.
          </p>
          <p
            className={`text-lg font-normal ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
            }`}
          >
            I am a committed learner who stays updated with the latest
            advancements in web development. I enjoy exploring new frameworks,
            libraries, and tools to enhance my skill set and deliver
            high-quality applications. Collaboration and problem-solving are at
            the heart of my approach, ensuring innovative and user-centric
            solutions for every project.
          </p>
          <p
            className={`text-lg font-normal ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
            }`}
          >
            My vision is to make meaningful contributions to the software
            development industry by crafting intuitive and impactful
            applications. I aim to grow as a developer and collaborate with
            talented teams to build solutions that leave a lasting impact on
            users and businesses alike.
          </p>
        </motion.div>

        {/* Right div with animation */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center items-center order-1 lg:order-none"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
        >
          <div className="border-4 border-gray-200 rounded-full p-2">
            <img
              src={tanu}
              alt="profile"
              className="object-cover rounded-full w-80 h-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
