import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {MapPin, Phone, Mail, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent(formData.subject);

  const body = encodeURIComponent(
`Name: ${formData.firstName} ${formData.lastName}

Email: ${formData.email}

Message:
${formData.message}`
  );

  // Gmail Open
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=dhruvmistry.dev@gmail.com&su=${subject}&body=${body}`,
    "_blank"
  );

  // Form Reset
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Success Message
  setSubmitted(true);

  // Hide Success Message after 3 sec
  setTimeout(() => {
    setSubmitted(false);
  }, 3000);
};
  return (
    <section id="contact" className="py-14 xsm:py-16 sm:py-18 lg:py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 sm:space-x-4 mb-10 sm:mb-12">
          <h2 className="text-2xl
      sm:text-3xl
      lg:text-4xl font-bold uppercase tracking-widest text-primary">Contact</h2>
          <div className="h-0.5 w-16 bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Solid Blue Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 85, damping: 15 }}
            className="lg:col-span-5 bg-gradient-premium text-white p-6 xsm:p-7 sm:p-8 lg:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background absolute graphic bubbles */}
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/5 pointer-events-none" />

            <div className="space-y-5 sm:space-y-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold">Contact Info</h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Always happy to connect! Feel free to reach out via email or message for project inquiries, collaboration opportunities, or any questions. I’ll do my best to respond promptly and help bring your ideas to life.
              </p>
            </div>

            {/* Quick Contact info */}

            
              
            <div className="space-y-5 sm:space-y-6 my-8 sm:my-10 relative z-10">

              <a href="#" className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 shrink-0">
                  <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[18px] text-white  font-bold  tracking-wider">Our Location</span>
                  <span className="text-sm font-bold text-white/80 group-hover:text-white break-all">
                    Bilimora, Gujarat, India
                  </span>
                </div>
              </a>

              <a href="tel:6355462186" className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 shrink-0">
                  <Phone className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[18px] text-white  font-bold  tracking-wider">Phone</span>
                  <span className="text-sm font-bold text-white/60 group-hover:text-white">+91 63554 62186</span>
                </div>
              </a>

              <a href="mailto:dhruvmistry.dev@gmail.com" className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 shrink-0">
                  <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[18px] text-white font-bold  tracking-wider">Email</span>
                  <span className="text-sm font-bold text-white/60  group-hover:text-white break-all">
                    dhruvmistry.dev@gmail.com
                  </span>
                </div>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Contact Form & Illustration white block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 85, damping: 15, delay: 0.1 }}
            className="lg:col-span-7 bg-light-card rounded-3xl border border-primary/5 p-6 xsm:p-7 sm:p-8 lg:p-10 shadow-premium grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center"
          >
            
            {/* Form side */}
            <div className="md:col-span-12 space-y-6">
              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl text-xs font-bold flex items-center space-x-2.5 animate-fadeIn">
                  <div className="h-6 w-6 rounded-full bg-green-200 flex items-center justify-center text-green-700 shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>Your message has been sent successfully! I will reply soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[12px] font-bold text-dark-muted uppercase tracking-wider">First Name</label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-light-bg border border-primary/5 rounded-xl px-4 py-3 text-xs font-semibold text-dark focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[12px] font-bold text-dark-muted uppercase tracking-wider">Last Name</label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-light-bg border border-primary/5 rounded-xl px-4 py-3 text-xs font-semibold text-dark focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-dark-muted uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-light-bg border border-primary/5 rounded-xl px-4 py-3 text-xs font-semibold text-dark focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-sm"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-dark-muted uppercase tracking-wider">Subject</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-light-bg border border-primary/5 rounded-xl px-4 py-3 text-xs font-semibold text-dark focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-sm"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-dark-muted uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-light-bg border border-primary/5 rounded-xl px-4 py-3 text-xs font-semibold text-dark focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none placeholder:text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-bold shadow-premium transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
