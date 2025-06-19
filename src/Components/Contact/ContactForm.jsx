import React, { useState } from "react";
import PrimaryBtn from "../../Share/PrimaryBtn/PrimaryBtn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const data = {
      access_key: "061067aa-26f4-493e-9371-bdfd45896a74",
      name: `${formData.firstname} ${formData.lastname}`,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div  className="flex w-11/12 mx-auto justify-center p-[1px] rounded-3xl border-b border-r border-transparent hover:border-primary hover:dark:border-darkprimary bg-clip-border transition-all duration-300 hover:-translate-y-1">
      <div className="h-full w-full bg-[#E2E2E24D] dark:bg-[#191B1A4D] rounded-3xl p-12 flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold text-primary dark:text-darkprimary">
            Contact Our Team
          </h1>
          <p className="font-medium text-secondary dark:text-darksecondary">
            We'd love to hear from you. Fill out the form and we'll be in touch shortly.
          </p>
        </div>

        {submitted && (
          <div className="text-green-500 font-medium">
            Your message has been sent successfully!
          </div>
        )}
        {error && <div className="text-red-500 font-medium">{error}</div>}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 text-black dark:text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
              required
              className="p-3 rounded-lg bg-[#E2E2E299] dark:bg-[#0E0D0F] placeholder:text-black placeholder:dark:text-gray-300"
            />
            <input
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-lg bg-[#E2E2E299] dark:bg-[#0E0D0F] placeholder:text-black placeholder:dark:text-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg bg-[#E2E2E299] dark:bg-[#0E0D0F] placeholder:text-black placeholder:dark:text-gray-300"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              type="text"
              placeholder="Phone"
              className="p-3 rounded-lg bg-[#E2E2E299] dark:bg-[#0E0D0F] placeholder:text-black placeholder:dark:text-gray-300"
            />
          </div>

          <div>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="p-3 w-full rounded-lg bg-[#E2E2E299] dark:bg-[#0E0D0F] text-black dark:text-white"
              required
            >
              <option value="">Select Subject</option>
              <option value="Support">Support</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-[#E2E2E299] dark:bg-[#0E0D0F] placeholder:text-black placeholder:dark:text-gray-300"
              required
            ></textarea>
          </div>

          <div className="flex justify-start">
            <PrimaryBtn type="submit" className="bg-black hover:bg-white text-white hover:text-black dark:hover:text-darkprimary dark:hover:bg-transparent  transition-all duration-300">Submit</PrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
