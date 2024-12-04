import React from "react";
import About from "../../Components/About";
import Intro from "../../Components/Intro";
import Experience from "../../Components/Experience";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills/>
      <Contact/>
    </div>
  );
};

export default Home;
