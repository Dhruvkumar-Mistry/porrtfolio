import React from "react";
import HeadLine from "../../Share/HeadLine/HeadLine";

const DesignSkillScale  = [
  {
    title: "Photoshop",
    value: 90,
  },
  {
    title: "Figma",
    value: 80,
  },
  {
    title: "Canva",
    value: 80,
  },
  {
    title: "Adobe XD",
    value: 80,
  },
];

const CodingSkillScale = [
  {
    title: "HTML / CSS",
    value: 90,
  },
  {
    title: "Tailwind CSS",
    value: 80,
  },
  {
    title: "JavaScript",
    value: 80,
  },
  {
    title: "React JS",
    value: 90,
  },
];

const Skills = () => {
  return (
    <section id="skill" className="container py-12 md:py-24 space-y-20">
      {/* Skill Heading */}
      <div className="flex flex-col justify-center items-center space-y-6">
        <HeadLine>Skill</HeadLine>
        <p className="text-lg font-medium text-secondary dark:text-darksecondary text-center max-w-xl">
          I blend development and design skills to build visually appealing,
          user-friendly digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 text-center">
        {/* Coding Skill */}
        <div className="px-5 lg:px-0">
          <h1 className="text-2xl lg:text-4xl font-bold dark:text-white mb-10">
            Development Skill
          </h1>
          {CodingSkillScale.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-sm lg:text-lg dark:text-white">
                  {item.title}
                </p>
                <span className="text-sm lg:text-base dark:text-white">
                  {item.value}%
                </span>
              </div>
              <input
                type="range"
                value={item.value}
                min={0}
                max={100}
                className="w-full h-2 bg-transparent rounded-lg cursor-pointer accent-primary dark:accent-darkprimary"
                readOnly
              />
            </div>
          ))}
        </div>
        {/* Design Skill */}
        <div className="px-5 lg:px-0">
          <h1 className="text-2xl lg:text-4xl font-bold dark:text-white mb-10">
            Design Skill
          </h1>
          {DesignSkillScale .map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-sm lg:text-lg dark:text-white">
                  {item.title}
                </p>
                <span className="text-sm lg:text-base dark:text-white">
                  {item.value}%
                </span>
              </div>
              <input
                type="range"
                value={item.value}
                min={0}
                max={100}
                className="w-full h-2 bg-slate-300 rounded-lg cursor-pointer dark:accent-darkprimary accent-primary"
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
