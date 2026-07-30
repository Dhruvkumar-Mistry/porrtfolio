import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  MonitorSmartphone,
  FileCode2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { User, Phone, Mail, MapPin, Globe } from "lucide-react";
import profileImg from "../assets/Dhruv-mistry.png";

export default function About() {
  const cards = [
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: "React JS Development",
      desc: "Building modern, responsive, and interactive web applications using React JS.",
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6 text-primary" />,
      title: "Responsive Design",
      desc: "Creating mobile-first layouts that work seamlessly across all devices.",
    },
    {
      icon: <FileCode2 className="h-6 w-6 text-primary" />,
      title: "Clean & Maintainable Code",
      desc: "Writing scalable, reusable, and well-structured code following best practices.",
    },
  ];

  const highlights = [
    {
      year: "2023",
      title:
        "Completed BCA and started my frontend development journey with HTML, CSS, JavaScript, Bootstrap, and React.js. Developed responsive and user-friendly websites.",
    },
    {
      year: "2024",
      title:
        "Frontend Developer Trainee – Hit N Hammer Technologies Developed responsive React.js websites while gaining hands-on experience with Tailwind CSS, Git, and Vercel..",
    },
    {
      year: "2025",
      title:
        "Frontend Developer – Vernoxy Media Developed and deployed multiple live client websites using React.js, transforming Figma designs into responsive, production-ready web applications.",
    },
  ];

  const infoItems = [
    {
      label: "Profile",
      value: "Frontend Developer",
      icon: <User className="h-5 w-5 text-primary" />,
    },
    {
      label: "Phone",
      value: "+91 6355462186",
      href: "tel:+916355462186",
      icon: <Phone className="h-5 w-5 text-primary" />,
    },
    {
      label: "Email",
      value: "dhruvmistry.dev@gmail.com",
      href: "mailto:dhruvmistry.dev@gmail.com",
      icon: <Mail className="h-5 w-5 text-primary" />,
    },
    {
      label: "Location",
      value: "Bilimora, Gujarat, India",
      icon: <MapPin className="h-5 w-5 text-primary" />,
    },
  ];

  const languages = ["English", "Hindi", "Gujarati"];

  return (
    <section id="about" className=" py-14 sm:py-16 lg:py-20 bg-light-card overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-primary">
              ABOUT
            </h2>
            <div className="h-0.5 w-16 bg-primary" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12  xl:grid-cols-12 xl:gap-15 lg:gap-10">

         {/* Left Column: Circular Profile Card */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 80, damping: 15 }}
  className=" lg:col-span-5 xl:col-span-4 w-full lg:w-full flex flex-col items-center text-center justify-start p-4 sm:p-6 bg-light-bg rounded-3xl border border-primary/5 shadow-premium md:w-125 md:mx-auto
  "
>
  {/* Circular Headshot Wrapper */}
  <div
    className="
      relative
      w-32 h-32
      sm:w-40 sm:h-40
      lg:w-48 lg:h-48
      rounded-full
      p-2
      bg-gradient-premium
      shadow-lg
      mb-6
    "
  >
    <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
      <img
        src={profileImg}
        alt="Ravi Narigara Circular Profile"
        className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="
      w-full
      bg-light-card
      border border-primary/5
      p-4
      sm:p-6
      rounded-3xl
      shadow-premium
      space-y-6
    "
  >
   <div className="flex flex-col items-center">
  <h3 className="text-lg sm:text-xl font-bold text-primary">
    Personal Info
  </h3>

  <div className="mt-2 flex items-center justify-center">
    <div className="h-0.5 w-28 bg-primary rounded-full"></div>
  
  </div>
</div>

    {/* Info details */}
    <div className="space-y-4  md:text-center items-center justify-center ">
      {infoItems.map((item, idx) => (
        <div
          key={idx}
          className="
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            hover:bg-primary/5
            transition-all
            duration-300
          "
        >
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            {item.icon}
          </div>

          <div className="flex-1 text-left min-w-0">
            <span className="block text-[11px] sm:text-[12px] text-dark-muted font-bold uppercase tracking-wider">
              {item.label}
            </span>

            {item.href ? (
              <a
                href={item.href}
                className="text-sm font-bold text-dark hover:text-primary transition-colors break-all"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-sm font-bold text-dark break-words">
                {item.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Languages */}
    <div className="pt-5 border-t border-primary/10">
      <span className="block text-[12px] text-dark-muted font-bold uppercase tracking-wider mb-3">
        Languages
      </span>

      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <span
            key={lang}
            className="
              inline-flex
              items-center
              px-3
              py-1.5
              rounded-full
              text-xs
              font-bold
              bg-primary/10
              text-primary
              border
              border-primary/10
            "
          >
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            {lang}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
</motion.div>

         {/* Right Column */}
<div className="about-right  xl:mx-4 lg:col-span-7 xl:col-span-8 w-full space-y-8 overflow-hidden md:mt-15">

  {/* Header intro */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h3
      className="
      text-2xl
      sm:text-3xl
      lg:text-4xl
      font-extrabold
      text-primary
      tracking-tight
      leading-tight
    "
    >
      Hi, I'm Dhruv — Frontend Developer
    </h3>

    <p
      className="
      text-sm
      sm:text-base
      text-dark-muted
      leading-7
      max-w-4xl
    "
    >
      Frontend Developer specializing in React JS, JavaScript,
      Tailwind CSS, and Bootstrap. Passionate about building
      responsive, user-friendly, and modern websites with clean code
      and strong performance. I enjoy transforming ideas into
      functional digital solutions while continuously improving my
      skills through freelance and personal projects.
    </p>
  </motion.div>

  {/* Cards */}
  <div
    className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-6
  "
  >
    {cards.map((card, idx) => (
      <motion.div
        key={card.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="
        h-full
        bg-light-bg
        hover:bg-light-card
        border border-primary/5
        hover:border-primary/20
        p-5
        rounded-2xl
        shadow-sm
        hover:shadow-premium
        transition-all
        duration-300
        group
      "
      >
        <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {card.icon}
        </div>

        <h4 className="text-base font-bold text-dark mb-2">
          {card.title}
        </h4>

        <p className="text-sm text-dark-muted leading-6">
          {card.desc}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Timeline */}
  <div className="space-y-8">
    {highlights.map((hl, idx) => (
      <motion.div
        key={hl.year}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="flex items-start gap-4 sm:gap-6"
      >
        {/* Border */}
        <div className="w-[3px] min-h-[73px] bg-primary rounded-full my-auto"></div>

        {/* Content */}
        <div
          className="
          flex flex-col md:flex-row gap-2 md:gap-4 flex-1 my-auto
        "
        >
          <span
            className="
            text-lg
            font-bold
            text-primary
            min-w-[70px]
            sm:self-center
          "
          >
            {hl.year}
          </span>

          <p
            className="
            text-sm
            sm:text-base
            text-dark-muted
            leading-7
            flex-1
          "
          >
            {hl.title}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Buttons */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="
    flex
    flex-col
    sm:flex-row
    gap-4
  "
  >
    <a
      href="#contact"
      className="
      inline-flex
      items-center
      justify-center
      gap-2
      bg-primary
      hover:bg-teal-800
      text-white
      px-5
      py-3
      rounded-xl
      text-sm
      font-bold
      shadow-premium
      transition-all
      duration-300
    "
    >
      <span>Contact Me</span>
      <ArrowRight className="h-4 w-4" />
    </a>

    <a
      href="#projects"
      className="
      inline-flex
      items-center
      justify-center
      gap-2
      bg-white
      hover:bg-teal-800
      hover:text-white
      text-primary
      border
      border-primary/20
      px-5
      py-3
      rounded-xl
      text-sm
      font-bold
      shadow-premium
      transition-all
      duration-300
    "
    >
      <span>View Projects</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  </motion.div>

</div>
        </div>
      </div>
    </section>
  );
}
