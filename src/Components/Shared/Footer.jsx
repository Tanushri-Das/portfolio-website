import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="mt-20 px-6 pb-6">
      <p className="text-[16px] text-center font-normal">
        Copyright &copy; {date} All rights reserved by Tanushri Das
      </p>
    </div>
  );
};

export default Footer;
