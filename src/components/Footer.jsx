import { motion } from "framer-motion";
import { Github, Linkedin, Whatsapp } from "./BrandIcons";
// import { FiArrowUp } from "react-icons/fi";

export default function Footer() {


  const socials = [
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/dhruv-mistry-13876236b/",
  },
  {
    icon: <Github />,
    link: "https://github.com/Dhruvkumar-Mistry",
  },
  {
    icon: <Whatsapp />,
    link: "https://wa.me/916355462186?text=Hi%20Dhruv,%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",
  },
];

  return (
    <footer className="relative bg-[#29878A] overflow-hidden">

      {/* Top Border */}
      <div className="h-[2px] bg-white/10"></div>

      <div className="max-w-7xl mx-auto px-5 py-8 md:flex items-center justify-between">

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center text-white text-xs sm:text-sm md:text-base font-medium"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">
            Dhruv Mistry
          </span>{" "}
          All Rights Reserved.
        </motion.p>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-4 md:mt-0 flex-wrap"
        >
         {socials.map((item, index) => (
  <motion.a
    key={index}
    href={item.link}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -6, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="group w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md hover:bg-white transition-all duration-300"
  >
    <span
      className={`transition-colors duration-300 ${
        index === 2
          ? "group-hover:text-green-500"
          : "group-hover:text-[#005CC8]"
      }`}
    >
      {item.icon}
    </span>
  </motion.a>
))}
        </motion.div>
      </div>

      {/* Scroll Top */}
      {/* <motion.button
        whileHover={{
          scale: 1.1,
          y: -4,
        }}
        whileTap={{
          scale: .9,
        }}
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white text-[#005CC8] shadow-xl flex items-center justify-center hover:bg-gray-100"
      >
        <FiArrowUp size={22} />
      </motion.button> */}
    </footer>
  );
}