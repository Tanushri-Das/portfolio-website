// import React from "react";

// const skills = [
//   { name: "HTML", level: 90 },
//   { name: "CSS", level: 85 },
//   { name: "JavaScript", level: 75 },
//   { name: "React.js", level: 70 },
//   { name: "Tailwind CSS", level: 80 },
//   { name: "Next.js", level: 60 },
//   { name: "Bootstrap", level: 75 },
//   { name: "Redux Toolkit", level: 65 },
//   { name: "Typescript", level: 70 },
//   { name: "Firebase", level: 75 },
//   { name: "Node.js", level: 35 },
//   { name: "Express.js", level: 45 },
//   { name: "Mongodb", level: 50 },
//   { name: "Github", level: 70 },
// ];

// const Skills = () => {
//   return (
//     <section id="projects" className="my-12">
//       <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-10">
//         Skills
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
//         {skills.map((skill, index) => (
//           <div key={index} className="mb-4">
//             <div className="flex justify-between items-center">
//               <label className="block text-lg mb-1">{skill.name}</label>
//               <span className="text-[16px]">{skill.level}%</span>
//             </div>

//             <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="absolute top-0 left-0 h-full bg-sky-400"
//                 style={{
//                   width: `${skill.level}%`,
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState, useEffect } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React.js", level: 70 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Next.js", level: 60 },
  { name: "Bootstrap", level: 75 },
  { name: "Redux Toolkit", level: 65 },
  { name: "Typescript", level: 70 },
  { name: "Firebase", level: 75 },
  { name: "Node.js", level: 35 },
  { name: "Express.js", level: 45 },
  { name: "Mongodb", level: 50 },
  { name: "Github", level: 70 },
];

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map((skill) => ({ ...skill, currentLevel: 0 }))
  );

  useEffect(() => {
    const timers = animatedSkills.map((skill, index) => {
      return setTimeout(() => {
        setAnimatedSkills((prev) =>
          prev.map((s, i) =>
            i === index ? { ...s, currentLevel: s.level } : s
          )
        );
      }, index * 300); // Delay between animations
    });

    return () => timers.forEach((timer) => clearTimeout(timer)); // Cleanup
  }, []);

  return (
    <section id="skills" className="my-12">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-10">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {animatedSkills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-lg mb-1">{skill.name}</label>
              <span className="text-[16px]">{skill.currentLevel}%</span>
            </div>

            <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-sky-400 progress-bar`}
                style={{
                  width: `${skill.currentLevel}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
