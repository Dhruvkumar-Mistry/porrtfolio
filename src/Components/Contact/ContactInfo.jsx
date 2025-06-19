import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const ContactDetails = [
  {
    id: 1,
    icon: <IoCallOutline />,
    Title: "Phone",
    desc: "+91 63554 62186",
    link: "tel:+916355462186",
  },
  {
    id: 2,
    icon: <IoLocationOutline />,
    Title: "Address",
    desc: "Hanuman Street, Bilimora",
    link: "https://maps.app.goo.gl/1FrXsaJ28pBCMgnEA",
  },
  {
    id: 3,
    icon: <MdOutlineMail />,
    Title: "Email",
    desc: "dhruvmistry.dev@gmail.com",
    link: "mailto:dhruvmistry.dev@gmail.com",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:w-11/12 space-y-12 justify-center sm:ml-auto">
      {ContactDetails.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center space-y-6 group cursor-pointer"
          onClick={() => item.link && window.open(item.link, "_blank")}
        >
          <div className="flex flex-col sm:flex-row items-center md:text-left text-center gap-4">
            <div className="h-16 w-16 rounded-full flex items-center justify-center text-3xl dark:group-hover:text-primary group-hover:text-white duration-300 text-primary dark:text-white bg-gradient-to-r from-[#27EB8C]/10 to-[#014826]/10 dark:from-darkprimary/20 dark:to-[#014826]">
              {item.icon}
            </div>
            <div>
              <h1 className="text-lg font-semibold">{item.Title}</h1>
              <p className="text-xl font-bold text-secondary/80 dark:text-darkprimary">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
