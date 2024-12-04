// import { useContext, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaXmark } from "react-icons/fa6";
// import { LuSun } from "react-icons/lu";
// import { FaMoon } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";
// import { ThemeContext } from "../../ThemeContext/ThemeContext";

// const Header = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <header>
//       <div className="w-[90%] mx-auto py-4 flex items-center justify-between">
//         {/* Left: Logo */}
//         <div className="text-lg font-bold lg:flex-grow-0">
//           <Link to="/">
//             <div className="flex justify-center items-center">
//               <h1 className="text-3xl font-bold text-blue-600">Tanushri</h1>
//             </div>
//           </Link>
//         </div>

//         {/* Right: Theme Toggler (Visible on all screens) */}
//         <div className="lg:flex lg:items-center hidden gap-x-6">
//           <NavLink
//             to="#about"
//             className="text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="#experience"
//             className="text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Experience
//           </NavLink>
//           <NavLink
//             to="#projects"
//             className="text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="#skills"
//             className="text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Skills
//           </NavLink>
//           <NavLink
//             to="#contact"
//             className="text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Contact
//           </NavLink>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
//           >
//             {theme === "dark" ? (
//               <LuSun className="w-4 h-4" />
//             ) : (
//               <FaMoon className="w-4 h-4" />
//             )}
//           </button>
//         </div>

//         {/* Right: Menu Icon (Visible only on small to medium screens) */}
//         <div className="lg:hidden">
//           <button onClick={toggleDrawer}>
//             <FiMenu className="text-2xl" />
//           </button>
//         </div>

//         {/* Drawer */}
//         <div
//           className={`fixed top-0 left-0 h-full bg-white dark:bg-slate-900 transition-transform transform ${
//             isDrawerOpen ? "translate-x-0" : "-translate-x-full"
//           } w-[200px] z-50 lg:hidden`}
//         >
//           {/* Close Icon inside Drawer, positioned to the right */}
//           <div className="flex justify-end p-4">
//             <button onClick={toggleDrawer}>
//               <FaXmark className="text-2xl" />
//             </button>
//           </div>

//           {/* Drawer Navigation */}
//           <nav className="flex flex-col gap-y-4 p-5 font-semibold text-lg lg:text-[16px]">
//             {/* Hardcoded Drawer Links */}
//             <NavLink to="#about" className="text-lg" onClick={toggleDrawer}>
//               About
//             </NavLink>
//             <NavLink
//               to="#experience"
//               className="text-lg"
//               onClick={toggleDrawer}
//             >
//               Experience
//             </NavLink>
//             <NavLink to="#projects" className="text-lg" onClick={toggleDrawer}>
//               Projects
//             </NavLink>
//             <NavLink to="#skills" className="text-lg" onClick={toggleDrawer}>
//               Skills
//             </NavLink>
//             <NavLink to="#contact" className="text-lg" onClick={toggleDrawer}>
//               Contact
//             </NavLink>
//           </nav>
//         </div>

//         {/* Overlay */}
//         {isDrawerOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={toggleDrawer}
//           ></div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { useContext, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaXmark } from "react-icons/fa6";
// import { LuSun } from "react-icons/lu";
// import { FaMoon } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
// import { ThemeContext } from "../../ThemeContext/ThemeContext";
// import logo from "../../assets/logo.jpg";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <header>
//       <div className="w-[90%] mx-auto py-4 flex items-center justify-between">
//         {/* Left: Logo */}
//         <div className="text-lg font-bold md:flex-grow-0">
//           <Link to="/">
//             <div className="flex justify-center items-center space-x-2">
//               <div className="w-[60px] h-[60px] hidden md:block">
//                 <img
//                   src={logo}
//                   alt="Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//               <h2 className="text-2xl xl:text-3xl font-semibold bg-gradient-to-r from-sky-400 from-30% to-sky-600 to-70% inline-block text-transparent bg-clip-text md:-tracking-tighter">
//                 <span className="doc">Tanushri</span>
//               </h2>
//             </div>
//           </Link>
//         </div>
//         {/* Right: Theme Toggler & Navigation Links */}
//         <div className="lg:flex lg:items-center hidden gap-x-6">
//           <ScrollLink
//             to="about"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             About
//           </ScrollLink>
//           <ScrollLink
//             to="experience"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Experience
//           </ScrollLink>
//           <ScrollLink
//             to="projects"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Projects
//           </ScrollLink>
//           <ScrollLink
//             to="skills"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Skills
//           </ScrollLink>
//           <ScrollLink
//             to="contact"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
//           >
//             Contact
//           </ScrollLink>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
//           >
//             {theme === "dark" ? (
//               <LuSun className="w-4 h-4" />
//             ) : (
//               <FaMoon className="w-4 h-4" />
//             )}
//           </button>
//         </div>

//         {/* Menu Icon for Small Screens */}
//         <div className="lg:hidden">
//           <button onClick={toggleDrawer}>
//             <FiMenu className="text-2xl" />
//           </button>
//         </div>

//         {/* Drawer */}
//         <div
//           className={`fixed top-0 left-0 h-full bg-white dark:bg-slate-900 transition-transform transform ${
//             isDrawerOpen ? "translate-x-0" : "-translate-x-full"
//           } w-[200px] z-50 lg:hidden`}
//         >
//           <div className="flex justify-end p-4">
//             <button onClick={toggleDrawer}>
//               <FaXmark className="text-2xl" />
//             </button>
//           </div>
//           <nav className="flex flex-col gap-y-4 p-5 font-semibold text-lg lg:text-[16px]">
//             <ScrollLink
//               to="about"
//               smooth={true}
//               duration={500}
//               className="cursor-pointer text-lg"
//               onClick={toggleDrawer}
//             >
//               About
//             </ScrollLink>
//             <ScrollLink
//               to="experience"
//               smooth={true}
//               duration={500}
//               className="cursor-pointer text-lg"
//               onClick={toggleDrawer}
//             >
//               Experience
//             </ScrollLink>
//             <ScrollLink
//               to="projects"
//               smooth={true}
//               duration={500}
//               className="cursor-pointer text-lg"
//               onClick={toggleDrawer}
//             >
//               Projects
//             </ScrollLink>
//             <ScrollLink
//               to="skills"
//               smooth={true}
//               duration={500}
//               className="cursor-pointer text-lg"
//               onClick={toggleDrawer}
//             >
//               Skills
//             </ScrollLink>
//             <ScrollLink
//               to="contact"
//               smooth={true}
//               duration={500}
//               className="cursor-pointer text-lg"
//               onClick={toggleDrawer}
//             >
//               Contact
//             </ScrollLink>
//           </nav>
//         </div>

//         {isDrawerOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={toggleDrawer}
//           ></div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
      <div className="w-[90%] mx-auto py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-lg font-bold md:flex-grow-0">
          <Link to="/">
            <div className="flex justify-center items-center space-x-2">
              <div
                className={`w-[60px] h-[60px] hidden md:block rounded-full overflow-hidden ${
                  theme === "light" ? "border-2 border-black" : "bg-transparent"
                }`}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl xl:text-3xl font-semibold bg-gradient-to-r from-sky-400 from-30% to-sky-600 to-70% inline-block text-transparent bg-clip-text md:-tracking-tighter">
                <span className="doc">Tanushri</span>
              </h2>
            </div>
          </Link>
        </div>
        {/* Right: Theme Toggler & Navigation Links */}
        <div className="lg:flex lg:items-center hidden gap-x-6">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            Contact
          </ScrollLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {theme === "dark" ? (
              <LuSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleDrawer}>
            <FiMenu className="text-2xl" />
          </button>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-full bg-white dark:bg-slate-900 transition-transform transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } w-[200px] z-50 lg:hidden`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleDrawer}>
              <FaXmark className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col gap-y-4 p-5 font-semibold text-lg lg:text-[16px]">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg"
              onClick={toggleDrawer}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg"
              onClick={toggleDrawer}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg"
              onClick={toggleDrawer}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg"
              onClick={toggleDrawer}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg"
              onClick={toggleDrawer}
            >
              Contact
            </ScrollLink>
          </nav>
        </div>

        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
