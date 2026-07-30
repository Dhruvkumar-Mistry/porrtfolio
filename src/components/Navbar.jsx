import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.href.slice(1));
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.name);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b border-primary/1  transition-all duration-300 ${
          scrolled
            ? 'bg-light-card/85 backdrop-blur-md shadow-premium border-b border-primary/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className=" RN flex items-center space-x-2 group min-w-0">
              <span className="h-10 w-10 sm:h-10 sm:w-10 rounded-xl bg-gradient-premium flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                DM
              </span>
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-dark group-hover:text-primary transition-colors duration-300 truncate min-w-0">
                Dhruv Mistry
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`navbar-fs-a relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:text-primary ${
                      isActive ? 'text-primary' : 'text-dark-muted'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 bg-primary hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-dark-muted hover:text-primary hover:bg-primary/5 focus:outline-none transition-all"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65.1px] z-50 bg-light-card border-b border-primary/5 shadow-premium lg:hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-dark-muted hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-1.5 bg-primary hover:bg-teal-800 text-white py-3 rounded-xl font-semibold shadow-premium transition-all duration-300"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
