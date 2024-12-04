<header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-md">
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
        className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="experience"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
      >
        Experience
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
      >
        Skills
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
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
      className={`fixed top-0 left-0 h-full bg-white dark:bg-slate-900 shadow-lg transition-transform transform ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } w-[250px] z-50 lg:hidden`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleDrawer}>
          <FaXmark className="text-2xl" />
        </button>
      </div>
      <nav className="flex flex-col gap-y-4 p-5 font-semibold text-lg">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={toggleDrawer}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={toggleDrawer}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={toggleDrawer}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={toggleDrawer}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
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
