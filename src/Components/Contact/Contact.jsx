import React from "react";
import HeadLine from "../../Share/HeadLine/HeadLine";
import PrimaryBtn from "../../Share/PrimaryBtn/PrimaryBtn";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";



const Contact = () => {
  return (
    <section id="contact" className="container  py-12 md:py-24 space-y-16">
      {/* Contact Heading */}
      <div className="flex flex-col justify-center items-center space-y-6">
        <HeadLine>Contact</HeadLine>
        <p className="text-lg font-medium sm:w-2/3 lg:w-2/4 text-center text-secondary dark:text-darksecondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {/* Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-28">
        {/* Contact Form */}
        <ContactForm />
        {/* Contact Details */}
        <ContactInfo />
        
      </div>
    </section>
  );
};

export default Contact;
