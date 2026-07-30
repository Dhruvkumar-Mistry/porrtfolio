import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
// import hackerRankPdf from "../assets/frontend_developer_react certificate.pdf";
// import jsPdf from "../assets/JavascriptCertificate.jpeg";
// import reactPdf from "../assets/ReactCertificate.jpg";
export default function Resume() {
  const Experience = [
    {
      provider: "Vernoxy Media",
      year: "2025-2026",
      title: "Frontend Developer (React)",
      desc: "Developed 10+ live client websites using React.js and Tailwind CSS. Converted Figma designs into responsive, roduction-ready web applications. Managed GitHub repositories and deployed projects on Vercel & Hostinger.",
    },
    {
      provider: "HitNHammer Technologies",
      year: "2024-2025",
      title: "Frontend Developer Trainee",
      desc: "Built React.js applications and reusable UI components. Developed responsive websites using Tailwind CSS and Bootstrap. Gained experience with Git, Vercel, and modern frontend workflows.",
    },

  ];

  const education = [
    {
      period: "2020 - 2023",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Veer Narmad South Gujarat University, Surat",
      details:
        "Affiliated with Saurashtra University. Graduated with First Class (72.43%) and CGPA of 6.93 while building strong foundations in frontend development.",
    },
    {
      period: "2020",
      degree: "HSC - High School",
      institution: "M & R Tata High School, Bilimora, Navsari",
      details:
        "Successfully completed Higher Secondary Education in Commerce stream with 51.83 percentile.",
    },
  ];

  return (
    <section id="resume" className="py-14 xsm:py-16 sm:py-18 lg:py-20 bg-light-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center space-x-3 sm:space-x-4 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl
      sm:text-3xl
      lg:text-4xl font-bold uppercase tracking-widest text-primary">
              Resume
            </h2>
            <div className="h-0.5 w-16 bg-primary" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">


          {/* Certifications */}
          <div className="space-y-12">
            <div className="pb-4 border-b border-primary/10">

              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-bold text-primary">
                  Professional Experience
                </h3>
              </div>

              <p className="text-sm sm:text-base text-dark-muted leading-relaxed ">
                Hands-on experience gained through internships and full-time frontend development roles.
              </p>

            </div>

            <div className="relative space-y-10">
              {Experience.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative group"
                >
                  <div
                    className="
            relative
            bg-light-bg
            p-5
            sm:p-6
            rounded-2xl
            border
            border-primary/10
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-300
            overflow-hidden
          "
                  >
                    {/* Left Blue Accent */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>

                    <div className="pl-3">

                      {/* Top Row */}
                      <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          {cert.provider}
                        </span>

                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                          <Calendar className="h-4 w-4" />
                          {cert.year}
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-bold text-dark mb-3">
                        {cert.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-dark-muted leading-relaxed mb-4">
                        {cert.desc}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education  */}
          <div className="space-y-12">

            {/* Heading */}
            <div className="pb-4 border-b border-primary/10">

              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-bold text-primary">
                  Education
                </h3>
              </div>

              <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                Academic qualifications that built a strong foundation in computer applications, web development, and problem-solving.
              </p>

            </div>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-primary/30 space-y-10">

              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative group"
                >

                  {/* Timeline Dot */}
                  <div className="absolute -left-[33px] top-0 h-4 w-4 rounded-full bg-light-card border-4 border-primary group-hover:scale-125 transition-transform duration-300 shadow-md" />

                  {/* Card */}
                  <div
                    className="
            bg-light-bg
            p-5
            sm:p-6
            rounded-2xl
            border
            border-primary/10
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
          "
                  >

                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">

                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-dark leading-tight">
                          {edu.degree}
                        </h4>

                        <p className="text-md font-semibold text-primary mt-1">
                          {edu.institution}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-bold w-fit">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </span>

                    </div>

                    {/* Details */}
                    <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                      {edu.details}
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>

          </div>


        </div>
      </div>
    </section>
  );
}
