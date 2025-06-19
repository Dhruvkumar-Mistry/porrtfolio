import React from "react";
import PrimaryBtn from "../../Share/PrimaryBtn/PrimaryBtn";
import Person from "../../assets/Person.webp";
import Navbar from "../Navbar/Navbar";
import background from "../../assets/HeroBg1.jpg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiGithubLogoFill } from "react-icons/pi";

const BgStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center", // better centering
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  height: "100vh",
};

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
      <PiGithubLogoFill className="group-hover:text-gray-400 duration-200 transition-all " />
    ),
  },
];
const Header = () => {
  return (
    <section id="home" style={BgStyle} className="py-12 md:py-24 relative">
      <div className="dark:bg-black/50 bg-black/20 h-full w-full absolute top-0 left-0 z-0">
        <Navbar />
        <div className="container space-y-8 h-full w-10/12 flex flex-col justify-center items-center text-center">
          <p className="text-white text-xs sm:text-base md:text-md lg:text-lg mx-auto w-3/4 2xl:w-3/5 uppercase">
            welcome to my world
          </p>
          <h1 className="text-primary dark:text-darkprimary text-2xl sm:text-3xl md:text-4xl lg:text-6xl mx-auto sm:w-3/4 2xl:w-4/5 font-semibold ">
            I'm Frontend Developer and Designer
          </h1>
          <ul className="flex items-center justify-center gap-5 text-white">
            {SocialMedia.map((item, index) => (
              <a key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="group hover:scale-105 duration-200 p-3 shadow-md shadow-black/40 dark:shadow-slate-800 rounded-full">
                {item.icon}
              </a>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4 md:px-8 h-full">
        Header Content
        <div className="flex flex-col space-y-6 justify-center text-white">
          <p className="text-lg font-bold text-accent">WELCOME TO MY WORLD</p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-darkprimary">
            I’m Allen John, a Developer
          </h1>
          <p className="text-lg font-medium text-secondary dark:text-darksecondary">
            I specialize in building exceptional digital experiences. Currently, I’m focused on developing responsive full-stack web applications.
          </p>
          <div className="flex gap-4">
            <PrimaryBtn className="bg-white dark:text-white text-black">
              HIRE ME
            </PrimaryBtn>
            <PrimaryBtn>MY WORK</PrimaryBtn>
          </div>
        </div>

        Header Image
        <div className="hidden lg:flex items-center justify-center relative">
          <img src={Person} alt="Person" className="object-cover h-[550px]" />
          <div className="h-[150px] w-full absolute -bottom-1 bg-gradient-to-t from-white via-white dark:from-[#0E0D0F] dark:via-[#0E0D0F] dark:to-transparent"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Header;
