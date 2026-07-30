import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {projects} from "../data/Projects";

export default function Portfolio() {
  
  return (
    <section
      id="projects"
      className="py-14 xsm:py-16 sm:py-18 lg:py-20 bg-light-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5 sm:gap-6">
            <div>
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-primary">
                  Projects
                </h2>
                <div className="h-0.5 w-16 bg-primary" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-dark-muted max-w-[40rem] leading-relaxed">
                A collection of live client projects I developed during my professional experience, focused on building responsive, modern, and user-friendly web applications. 
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-light-bg rounded-3xl border border-primary/5 shadow-sm hover:shadow-premium overflow-hidden group transition-all duration-300"
              >
                {/* Browser Mockup Header */}
                <div className="bg-light border-b border-primary/5 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto bg-light-card border border-primary/5 rounded-lg text-[9px] text-center text-dark-muted py-1 flex items-center justify-center space-x-1 font-medium select-none truncate">
                    <Globe className="h-2.5 w-2.5 text-primary/60 shrink-0" />
                    <span className="truncate">{project.url}</span>
                  </div>
                </div>

                {/* Project Image Frame */}
                <div className="relative aspect-video overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Details Footer */}
                <div className="p-5 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-light-card text-[12px] font-semibold text-dark-muted rounded-lg border border-primary/5"
                      >
                        {t}
                      </span>
                    ))}


                  </div>
                  <div className=" project-btns flex gap-5 pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="livedemo-project h-11 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition"
                    >
                      <ExternalLink />
                      Explore
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
