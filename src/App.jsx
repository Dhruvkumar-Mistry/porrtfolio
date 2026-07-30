import React, { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen text-dark flex flex-col font-sans select-none antialiased bg-light-bg selection:bg-primary/25 selection:text-primary">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Services />
        <Portfolio />
        <Faq />
        <Contact />
      </main>

      <Footer />

        <ScrollTop />
    </div>
  );
}