import React from "react";
import HeadLine from "../../Share/HeadLine/HeadLine";
import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { LuTabletSmartphone } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { VscDeviceCamera } from "react-icons/vsc";
import { GiBrain } from "react-icons/gi";

const ServicesData = [
  {
    title: "Web Development",
    icons: <FaCode />,
    description:
      "I build fast, responsive websites with React and Tailwind CSS — from landing pages to full-stack apps with clean, efficient code.",
  },
  {
    title: "Web Design",
    icons: <IoDiamondOutline />,
    description:
      "I design intuitive, user-focused interfaces with strong attention to layout, color, typography, and usability.",
  },
  {
    title: "UI/UX",
    icons: <MdOutlineDesignServices />,
    description:
      "I craft seamless, engaging digital experiences by combining research, design systems, and usability principles.",
  },
  {
    title: "Branding",
    icons: <GiBrain />,
    description:
      "I help build strong brand identities by aligning visuals and messaging to resonate with your target audience.",
  },
  {
    title: "Photography",
    icons: <VscDeviceCamera />,
    description:
      "I capture high-quality images for personal, commercial, and social media use — showcasing stories through impactful visuals.",
  },
  {
    title: "Social Media",
    icons: <LuTabletSmartphone />,
    description:
      "I grow online presence by crafting strategies, designing content, and managing platforms like Instagram, Facebook, and LinkedIn.",
  },
];

const Services = () => {
  return (
    <section id="services" className="container py-12 md:py-24 space-y-16">
      <section className="flex flex-col items-center justify-center space-y-6 px-4 py-10">
        <HeadLine>Services</HeadLine>
        <p className="text-lg font-medium text-secondary dark:text-darksecondary text-center max-w-2xl">
         {/*  I offer a range of creative and technical services, from web
          development and design to branding, social media, and photography —
          all tailored to help you stand out online. */}
          I offer creative and technical services—from web development and design to branding and social media—to help you stand out online.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {ServicesData.map((item) => (
          <div
            key={item.id}
            className="mx-8 md:mx-0 flex flex-col justify-center space-y-6 border-[1px] border-[#AEA8A8]/20 hover:border-primary hover:text-primary dark:hover:border-darkprimary/60 dark:hover:text-darkprimary duration-200 hover:-translate-y-1 p-6 py-10 rounded-3xl shadow-lg hover:bg-gradient-to-l
            hover:from-primary/10 dark:hover:from-darkprimary/10 hover:to-transparent"
          >
            <div className="h-16 w-16 p-1 rounded-2xl bg-primary/10 dark:bg-gradient-to-l dark:from-secondary/10 dark:to-darkprimary/5 flex justify-start items-center space-x-4">
              <span className="text-3xl mx-auto text-primary">
                {item.icons}
              </span>
            </div>
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className=" font-medium  text-secondary dark:text-darksecondary/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
