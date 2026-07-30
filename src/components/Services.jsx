import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { services } from "../data/ServiceData";

export default function Services() {


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <>

      <section
        id="services"
        className="py-14 sm:py-16 lg:py-20 bg-light-bg"
      > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */} <ScrollReveal> <div className="flex items-center gap-4 mb-4"> <h2 className="text-2xl
      sm:text-3xl
      lg:text-4xl font-bold uppercase tracking-widest text-primary">
            Services </h2> <div className="h-0.5 w-16 bg-primary"></div> </div>

            <p className="text-dark-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
              I provide modern frontend development solutions focused on
              performance, responsiveness, and user experience. From business
              websites to e-commerce platforms, I build fast, clean, and scalable
              web applications.
            </p>
          </ScrollReveal>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="
            group
            relative
            overflow-hidden
            bg-light-card
            border
            border-primary/10
            hover:border-primary/25
            p-6
            sm:p-7
            lg:p-8
            rounded-3xl
            shadow-sm
            hover:shadow-premium
            transition-all
            duration-500
            hover:-translate-y-2
          "
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative h-14 w-14 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-dark-muted leading-7">
                  {service.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-[2px] w-12 bg-primary/20 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Have a Project in Mind? Let's Talk
            </h3>

            <p className="text-dark-muted max-w-2xl mx-auto mb-8">
              I create fast, responsive, and user-friendly websites using React JS and modern frontend technologies to help businesses and individuals build a strong online presence.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>

  );
}
