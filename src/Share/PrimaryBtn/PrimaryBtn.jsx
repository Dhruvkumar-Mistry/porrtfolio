import React from "react";

const PrimaryBtn = ({ children, className = "" }) => {
  return (
    <div className="flex justify-center p-[1px] rounded-xl transition-all duration-300 dark:hover:text-darkprimary bg-  text-white hover:bg-white   dark:hover:bg-transparent hover:text-black dark:hover:bg-gradient-to-l from-[#27EB8C] via-[#0E0D0F] to-[#0E0D0F] shadow-lg ">
      <button
        className={`text-xs lg:text-sm px-5 lg:px-10 py-3 lg:py-4 dark:bg-gradient-to-r from-[#161417] via-[#100F11] to-[#080809] rounded-xl border hover:border-black border-transparent transition-all duration-300 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
