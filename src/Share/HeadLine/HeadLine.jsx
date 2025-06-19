import React from "react";

const HeadLine = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative gradient circle */}
      <div className="h-14 w-14 rounded-full absolute -top-3 -left-2 z-0 opacity-20 -ml-4 mx-auto bg-gradient-to-r from-[#27EB8C] to-[#014826]/40 dark:bg-gradient-to-r dark:from-darkprimary dark:to-[#014826] " />

      {/* Gradient headline text */}
      <h1
        className={`${className} text-3xl font-bold z-50 relative text-transparent bg-clip-text bg-primary dark:bg-gradient-to-r dark:from-darkprimary dark:to-white/80 `}
      >
        {children}
      </h1>
    </div>
  );
};

export default HeadLine;
