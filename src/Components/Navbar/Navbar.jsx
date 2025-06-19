import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { Link } from "react-scroll";
import { CiLinkedin } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { PiGithubLogoFill } from "react-icons/pi";

const navbarData = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Services", link: "#services" },
  { title: "Skill", link: "#skill" },
  { title: "Project", link: "#project" },
  { title: "Contact", link: "#contact" },
];

const SocialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/dhruv.mistary",
    icon: (
      <FaFacebookF className="group-hover:text-blue-500 duration-200 transition-all" />
    ),
    title: "Facebook",
  },
  {
    name: "Instagram",
    link: `https://www.instagram.com/dhruva__18_/`,
    icon: (
      <AiFillInstagram className="group-hover:text-pink-500 duration-200 transition-all" />
    ),
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/dhruvkumar-mistry-13876236b",
    icon: (
      <FaLinkedinIn className="group-hover:text-blue-500 duration-200 transition-all" />
    ),
  },
  {
    name: "github",
    link: "https://github.com/Dhruvkumar-Mistry",
    icon: (
      <PiGithubLogoFill className="group-hover:text-red-500 duration-200 transition-all" />
    ),
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <section className=" absolute top-0 left-0 right-0 container py-5 grid grid-cols-2 xl:grid-cols-2 items-center z-50 text-white">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <a href="/" className="cursor-pointer">
          <h1 className="text-xl md:text-3xl font-bold uppercase">DhruvKumar</h1>
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center justify-end gap-6">
        {navbarData.map((item) => (
          <li
            key={item.title}
            className="list-none cursor-pointer text-sm 2xl:text-md font-semibold uppercase dark:text-debugger  hover:text-primary  transition-all duration-200 dark:hover:text-darkprimary "
          >
            <Link
              to={item.link.replace("#", "")}
              smooth={true}
              duration={800}
              offset={0}
            >
              {item.title}
            </Link>
          </li>
        ))}
        
      </div>

      {/* Social Icons (Desktop) */}
      <div className="hidden  items-center justify-end gap-4">
        {SocialMedia.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="group hover:scale-105 duration-200 p-3 shadow-md shadow-black/20 dark:shadow-slate-800 rounded-full"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center justify-end text-3xl z-50" onClick={toggle}>
        {isOpen ? <IoMdClose /> : <IoIosMenu />}
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-primary dark:bg-[#0e0e0e] p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 pt-12">
          {navbarData.map((item) => (
            <li
              key={item.title}
              className="text-white text-lg font-semibold uppercase cursor-pointer"
            >
              <Link
                to={item.link.replace("#", "")}
                smooth={true}
                duration={800}
                offset={-50}
                onClick={toggle} // close drawer on link click
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex gap-4">
          {SocialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="group p-2 rounded-full bg-white text-black"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
