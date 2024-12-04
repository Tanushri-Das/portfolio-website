import React from "react";
import loaderImage from "../../assets/hero.jpg";
import "./CustomLoader.css";

const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img
        src={loaderImage}
        alt="Loading..."
        className="zoom-in w-24 h-24 object-cover rounded-full"
      />
    </div>
  );
};

export default CustomLoader;
