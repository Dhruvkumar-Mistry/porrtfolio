import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FaqData } from '../data/FaqData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 xsm:py-16 sm:py-18 lg:py-20 bg-light-card ">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="faq-section flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-primary">Faq.</h2>
        <div className="h-0.5 w-16 bg-primary" />
      </div>
      <p className=" faq-para text-sm sm:text-base lg:text-lg text-dark-muted mb-10 sm:mb-12 max-w-2xl leading-relaxed">
        Great websites are more than just good design—they should be fast, intuitive, and easy to use. I focus on building reliable digital experiences with strong attention to performance, usability, and detail.
      </p>
      </div>

      <div className=" pt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FaqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl mb-6 sm:rounded-xl border transition-colors duration-200 ${isOpen
                    ? "border-primary/30 bg-primary/5"
                    : "border-primary/10 bg-transparent"
                  }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span
                    className={`faq-question text-sm sm:text-base font-bold leading-tight pr-4 transition-colors ${isOpen ? "text-primary" : "text-dark group-hover:text-primary"
                      }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary shrink-0"
                  >
                    <ChevronRight className="h-6 w-6 sm:h-5 sm:w-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="faq-ans px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-dark-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
