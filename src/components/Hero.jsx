import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Briefcase,
  FileText,
  ArrowRight,
  Award,
  Zap,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "./BrandIcons";
import Resume from "../assets/Dhruv_Mistry_ReactDev.pdf";
import profileImg from "../assets/dhruv.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <section
        id="home"
        className="
min-h-screen
pt-24
lg:pt-24
pb-8
lg:pb-16
flex
items-center
bg-gradient-light
overflow-hidden
"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {/* Background SVG Grid and Diagonal Accents */}
          <div className="absolute inset-0 -z-10 opacity-30 select-none">
            <svg
              className="absolute top-0 right-0 w-[600px] h-[600px] text-primary/5"
              fill="currentColor"
              viewBox="0 0 100 100"
            >
              <defs>
                <pattern
                  id="grid"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 8 0 L 0 0 0 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
            <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Title, Intro, Stats, Socials */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-8 text-center lg:text-left"
            >
              {/* Tagline */}
              <motion.div
                variants={itemVariants}
                className="tagline inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full sm:mt-5 lg:mt-10"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm  font-semibold  tracking-wider text-primary">
                  Open to Work & Freelance
                </span>
              </motion.div>

              {/* Main Animated Title */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight break-words font-extrabold tracking-tight text-dark">
                  Creative <br />
                  <span className="text-gradient mt-0.5 sm:mt-1 lg:mt-3">
                    <TypeAnimation
                      sequence={[
                        "Frontend Developer",
                        2000,
                        "React JS Developer",
                        2000,
                        "Modern UI Developer",
                        2000,
                        "Freelance Developer",
                        2000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </h1>

                <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-dark-muted leading-relaxed">
                  Creative and detail-oriented Frontend Developer specializing in React JS. I build responsive, modern, and user-friendly web applications with clean code and a strong focus on performance.
                </p>
              </motion.div>

              {/* Statistics Row */}
              <motion.div
                variants={itemVariants}
                className="home-detail-card grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 bg-light-card border border-primary/5 p-4 rounded-2xl shadow-premium"
              >
                <div className="text-center border-r border-primary/10 last:border-0 pr-2 home-detail-cards">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary">
                    10+
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-dark-muted uppercase tracking-wider">
                    Projects Completed
                  </span>
                </div>
                <div className="home-detail-cards text-center border-r border-primary/10 last:border-0 px-2">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary">
                    1 Year
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-dark-muted uppercase tracking-wider">
                    {" "}
                    Professional Experience
                  </span>
                </div>
                <div className="home-detail-cards text-center last:border-0 pl-2">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary">
                    100%
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-dark-muted uppercase tracking-wider">
                    Responsive Design
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-xl font-bold shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="font-bold">View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={Resume}
                  download="Dhruv_Mistry_ReactDev.pdf"
                  className="inline-flex items-center space-x-2 bg-light-card border border-primary/20 text-primary hover:bg-primary/5 px-7 py-3.5 rounded-xl font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </motion.div>

              {/* Social Icons row */}
              <motion.div
                variants={itemVariants}
                className="home-social-icon flex justify-center lg:justify-start items-center space-x-4"
              >
                <span className="text-xs font-bold text-dark-muted uppercase tracking-widest border-r border-primary/25 pr-4 mr-1">
                  Follow Me
                </span>

                <div className="home-social-icons flex justify-center lg:justify-start items-center gap-4 mx-5">

                  <a
                    href="https://www.linkedin.com/in/dhruv-mistry-13876236b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-light-card border border-primary/10 flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <Linkedin className=" home-i h-5 w-5" />
                  </a>

                  <a
                    href="https://github.com/Dhruvkumar-Mistry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-light-card border border-primary/10 flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <Github className=" home-i h-5 w-5" />
                  </a>

                  <a
                    href="mailto:dhruvmistry.dev@gmail.com"
                    className="h-10 w-10 rounded-full bg-light-card border border-primary/10 flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <Mail className="home-i h-5 w-5" />
                  </a>
                  <a
                    href="tel:6355462186"
                    className="h-10 w-10 rounded-full bg-light-card border border-primary/10 flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <Phone className="home-i h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Profile Image Card & Float Badges */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-8 lg:py-0">
              {/* Animated floating layout matching the reference */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.3,
                }}
                className="relative w-full max-w-[320px] h-[420px] sm:max-w-[340px] sm:h-[450px]"
              >
                {/* Back offset shadow card */}
                <div className="absolute inset-0 bg-primary rounded-3xl translate-x-4 translate-y-4 shadow-xl -z-10" />

                {/* Main headshot image container */}
                <div className="absolute inset-0 rounded-3xl bg-light-card border border-primary/10 overflow-hidden shadow-premium">
                  <img
                    src={profileImg}
                    alt="Ravi Narigara"
                    className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                {/* Float Badge 1: Hire Me (Top Left) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className=" Badge1 absolute top-2 left-2 lg:-top-4 lg:-left-6 bg-light-card border border-primary/10 px-4 py-2.5 rounded-2xl shadow-premium flex items-center space-x-2"
                >
                  <div className="h-7 w-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                    <Award className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-dark-muted font-bold uppercase tracking-wider">
                      Status
                    </span>
                    <span className="block text-xs font-extrabold text-dark">
                      Hire Me
                    </span>
                  </div>
                </motion.div>

                {/* Float Badge 2: Portfolio folder (Right Middle) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="Badge2 absolute top-1/2 right-2 lg:top-1/3 lg:-right-8 bg-light-card border border-primary/10 px-4 py-2.5 rounded-2xl shadow-premium flex items-center space-x-2"
                >
                  <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-dark-muted font-bold uppercase tracking-wider">
                      Projects
                    </span>
                    <span className="block text-xs font-extrabold text-dark">
                      Portfolio
                    </span>
                  </div>
                </motion.div>

                {/* Float Badge 3: Frontend Dev Badge (Bottom Left) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className=" Badge3 absolute bottom-2 left-2 lg:bottom-8 lg:-left-8 bg-light-card border border-primary/10 px-4 py-2.5 rounded-2xl shadow-premium flex items-center space-x-2"
                >
                  <div className="h-7 w-7 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-600">
                    <Zap className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-dark-muted font-bold uppercase tracking-wider">
                      Focus
                    </span>
                    <span className="block text-xs font-extrabold text-dark">
                      Frontend Dev
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
