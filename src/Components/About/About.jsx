import React from "react";
import Person from "../../assets/DhruvKumar.jpg";
import HeadLine from "../../Share/HeadLine/HeadLine";
import PrimaryBtn from "../../Share/PrimaryBtn/PrimaryBtn";
import Resume from "/DhruvMistryCV.pdf";
import { BiSolidDownArrowCircle } from "react-icons/bi";

const About = () => {
  return (
    <section id="about" className="container py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
        <div className="flex justify-center items-center relative">
          <img src={Person} alt="Person" className="flex  lg:h-[625px]" />
          {/* <div className="h-[150px] w-full absolute -bottom-1 bg-gradient-to-t from-white via-white dark:bg-gradient-to-t dark:from-[#0E0D0F] dark:via-[#0E0D0F] dark:to-transparent dark:bg-transparent"></div> */}
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 lg:space-y-8 justify-end">
          <HeadLine className="w-40">About me</HeadLine>
          <p className="text-secondary dark:text-darksecondary w-3/4 font-medium lg:text-sm text-xs">
            To begin my professional journey in a dynamic and growth-oriented environment where I can apply my technical skills, implement innovative ideas, and continuously learn and adapt. I aim to contribute meaningfully to the organization’s success while enhancing my own professional capabilities, aspiring to take on increasing responsibilities and become a key contributor to long-term strategic goals.
          </p>
          <div className="flex gap-4 lg:gap-8">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="lg:text-lg font-bold">
                Name:
              </label>
              <PrimaryBtn className="cursor-text text-xl dark:text-darkprimary bg-white text-black ">
                Dhruv Mistry
              </PrimaryBtn>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="lg:text-lg font-bold">
                Location:
              </label>
              <PrimaryBtn className="cursor-text text-xl dark:text-darkprimary bg-white text-black">
                Bilimora, Gujrat, India
              </PrimaryBtn>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-8">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="lg:text-lg font-bold">
                Contact:
              </label>
              <PrimaryBtn className="cursor-text text-xl dark:text-darkprimary bg-white text-black">
                +91 6355 462 186
              </PrimaryBtn>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="lg:text-lg font-bold">
                Project:
              </label>
              <PrimaryBtn className="cursor-text text-xl  dark:text-darkprimary bg-white text-black">
                20 React Template
              </PrimaryBtn>
            </div>
          </div>
          <div className="flex justify-start pt-4 lg:pt-10 group">
            <a href={Resume} download={true}>
              <PrimaryBtn className="uppercase flex items-center gap-2 px-4 bg-black hover:bg-white text-white group-hover:text-black dark:group-hover:text-darkprimary  transition-all duration-300">
                <BiSolidDownArrowCircle className="lg:text-2xl" /> Download CV
              </PrimaryBtn>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
