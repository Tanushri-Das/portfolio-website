import React, { useContext } from "react";
import Header from "../Components/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import ScrollToTop from "../Components/ScrollToTop";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-900 text-gray-200" : "bg-white text-black"
      }`}
    >
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;
