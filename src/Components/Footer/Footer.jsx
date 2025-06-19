import React from "react";
import { Link } from "react-scroll";


const navbarData = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Services", link: "#services" },
  { title: "Skill", link: "#skill" },
  { title: "Project", link: "#project" },
  { title: "Contact", link: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#33C38A0F] dark:bg-[#191B1A4D] pt-12 pb-5 md:pt-28">
      <div className="container space-y-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-primary dark:text-darkprimary uppercase">
          Dhruv Mistry
        </h1>
        <div className="hidden sm:flex justify-center gap-6">
          {navbarData.map((item) => (
            <li
              key={item.title}
              className="list-none cursor-pointer text-sm 2xl:text-md font-semibold uppercase dark:text-[#F3F3F3] hover:text-primary dark:hover:text-darkprimary transition-all duration-200"
            >
              <Link
                to={item.link.replace("#", "")}
                smooth={true}
                duration={800}
                offset={-50}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </div>
        <p className="text-center text-xs font-normal text-primary dark:text-darkprimary">
          © 2025 TCJ. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
