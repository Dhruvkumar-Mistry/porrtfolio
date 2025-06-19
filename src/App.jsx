import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Services from "./Components/Service/Services";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { TiAdjustBrightness } from "react-icons/ti";
import { BsMoonStars } from "react-icons/bs";
import ContactInfo from "./Components/Contact/ContactInfo";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleBtn = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-[#0E0D0F] dark:text-white font-rajdhani">
        <Header />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        {/* <ContactInfo /> */}
        <Footer />
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleBtn}
          aria-label="Toggle Dark Mode"
          className="text-3xl fixed bottom-10 2xl:bottom-16 right-10 2xl:right-16 p-1 z-[99999]  rounded-full border 
          bg-black dark:bg-white text-white dark:text-black dark:hover:bg-black hover:bg-white hover:text-black dark:hover:text-white hover:scale-105 
          transition-all duration-500"
        >
          {darkMode ? <TiAdjustBrightness /> : <BsMoonStars className="p-1" />}
        </button>
      </div>
    </div>
  );
};

export default App;
