import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import picture from "../assets/Tanu.jpg";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="about" className="mt-12">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-10">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 flex flex-col gap-4 order-2 lg:order-none">
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
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center order-1 lg:order-none">
          <div className="border-4 border-gray-200 rounded-full p-2">
            <img
              src={picture}
              alt="profile"
              className="object-cover rounded-full w-80 h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
