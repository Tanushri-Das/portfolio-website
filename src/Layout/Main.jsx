import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import ScrollToTop from "../Components/ScrollToTop";
import CustomLoader from "../Components/CustomLoader/CustomLoader";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <CustomLoader />
      ) : (
        <div
          className={`${
            theme === "dark"
              ? "bg-slate-900 text-gray-200"
              : "bg-white text-black"
          }`}
        >
          <Header />
          <Outlet />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default Main;
