import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Component,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "HTML5", value: 90 },
      { name: "CSS3", value: 88 },
      { name: "JavaScript", value: 80 },
      { name: "React JS", value: 82 },
    ],
  },

  {
    title: "Libraries & Frameworks",
    icon: Component,
    skills: [
      { name: "Redux Toolkit", value: 70 },
      { name: "React Router DOM", value: 80 },
      { name: "Framer Motion", value: 68 },
      { name: "AOS", value: 60 },
    ],
  },

  {
    title: "UI & Styling",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", value: 70 },
      { name: "Bootstrap 5", value: 85 },
      { name: "Responsive Design", value: 90 },
      { name: "Mobile First", value: 88 },
    ],
  },
  
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", value: 60 },
      { name: "GitHub", value: 65 },
      { name: "Vite", value: 77 },
      { name: "Netlify", value: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-14 xsm:py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <h2 className="text-2xl
      sm:text-3xl
      lg:text-4xl font-bold uppercase tracking-widest text-primary">
              Skills
            </h2>

            <div className="h-0.5 w-16 bg-primary" />
          </div>

          <p className="max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
            Technologies, frameworks, and tools I use to build
            responsive, modern, and high-performance websites.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  sm:rounded-3xl
                  bg-white
                  border
                  border-slate-200
                  p-5
                  sm:p-6
                  lg:p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                  hover:border-teal-300
                  transition-all
                  duration-500
                "
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600" />

                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className="
                    skill-card-icon
                      w-12 h-12
                      sm:w-14 sm:h-14
                      lg:w-16 lg:h-16
                      rounded-xl
                      sm:rounded-2xl
                      bg-gradient-to-br
                      from-teal-100
                      to-teal-50
                      flex
                      items-center
                      justify-center
                      shadow-md
                      shrink-0
                    "
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600" />
                  </motion.div>

                  <h3 className="skill-card-title text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-5 sm:space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 gap-2">
                        <span className="font-semibold text-sm sm:text-base text-slate-800">
                          {skill.name}
                        </span>

                        <span className="font-bold text-sm sm:text-base text-teal-700 shrink-0">
                          {skill.value}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2.5 sm:h-3 bg-slate-200 rounded-full overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.value}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                          }}
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-teal-700
                            via-teal-600
                            to-teal-500
                            shadow-[0_0_20px_rgba(37,99,235,0.4)]
                          "
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}