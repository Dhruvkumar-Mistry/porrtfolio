import React from "react";
import HeadLine from "../../Share/HeadLine/HeadLine";
import Pro1 from "../../assets/Pro1.webp";
import Pro2 from "../../assets/Pro2.webp";
import Pro3 from "../../assets/Pro3.webp";
import Pro4 from "../../assets/Pro4.Webp";
import { VscZoomIn } from "react-icons/vsc";
import { Link } from "react-scroll";

const ProjectsData = [
  {
    id: 1,
    img: Pro1,
    title: "The Coffee Cafe",
    desc: "React Template",
    Link: "https://nirvanacafe.netlify.app",
  },
  {
    id: 2,
    img: Pro2,
    title: "The Fruits Stall",
    desc: "React Template",
    Link: "https://nirvanafruitstore.netlify.app",
  },
  {
    id: 3,
    img: Pro3,
    title: "The Hotels Booking",
    desc: "React Template",
    Link: "https://nirvanahotels.netlify.app",
  },
  {
    id: 4,
    img: Pro4,
    title: "The Online Restaurant",
    desc: "React Template",
    Link: "https://nirnanarestaurant.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="project" className="container py-12 md:py-24 space-y-6 lg:space-y-16">
      <div className="flex flex-col justify-center items-center space-y-6">
        <HeadLine>Projects</HeadLine>
        <p className="text-lg font-medium text-secondary dark:text-darksecondary text-center max-w-xl">
          A selection of my recent front-end projects—each built with modern
          tools like React, Tailwind, and custom design.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12">
          {ProjectsData.map((item) => (
            <div key={item.id} className="space-y-2 lg:space-y-3 group relative p-3 lg:p-0 ">
              <a href={item.Link} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={item.img}
                    alt={`Screenshot of ${item.title}`}
                    className="w-full lg:h-[350px] object-cover rounded-3xl "
                  />
                  <div className="bg-white/40 dark:bg-black/50 group-hover:opacity-100 opacity-0 h-full w-full absolute top-0 duration-300 rounded-3xl flex flex-col justify-center items-center text-lg ">
                    <VscZoomIn className="text-2xl mb-2" />
                    Exploer
                  </div>
                </div>
              </a>
              <h1 className="text-xl font-bold group-hover:text-primary dark:group-hover:text-darkprimary">
                {item.title}
              </h1>
              <hr className="border-transparent group-hover:border-black dark:group-hover:border-white w-0 group-hover:w-72 duration-500 ease-in-out" />
              <p className=" font-medium text-[#AEA8A8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
