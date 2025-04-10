import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
    // Show success message
    alert("Message sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white w-full">
      <div className="bg-white flex items-center gap-2.5 overflow-visible text-2xl text-[rgba(70,64,64,1)] whitespace-nowrap flex-row max-lg:flex-wrap mt-2.5 p-2.5 max-md:max-w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="self-stretch w-[395px] bg-[rgba(232,216,251,1)] min-w-60 gap-2.5 overflow-hidden my-auto pl-[23px] pr-2.5 py-[23px] rounded-[26px] max-md:pl-5 focus:outline-none focus:ring-2 focus:ring-[rgba(75,15,147,1)]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="self-stretch w-[395px] bg-[rgba(232,216,251,1)] min-w-60 gap-2.5 overflow-hidden my-auto pl-[23px] pr-2.5 py-[23px] rounded-[26px] max-md:pl-5 focus:outline-none focus:ring-2 focus:ring-[rgba(75,15,147,1)]"
        />
      </div>
      <div className="bg-white flex items-center gap-2.5 overflow-visible text-2xl text-[rgba(70,64,64,1)] whitespace-nowrap flex-row max-lg:flex-wrap mt-2.5 p-2.5 max-md:max-w-full">
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Number"
          className="self-stretch w-[395px] bg-[rgba(232,216,251,1)] min-w-60 gap-2.5 overflow-hidden my-auto pl-[23px] pr-2.5 py-[23px] rounded-[26px] max-md:pl-5 focus:outline-none focus:ring-2 focus:ring-[rgba(75,15,147,1)]"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="self-stretch w-[395px] bg-[rgba(232,216,251,1)] min-w-60 gap-2.5 overflow-hidden my-auto pl-[23px] pr-2.5 py-[23px] rounded-[26px] max-md:pl-5 focus:outline-none focus:ring-2 focus:ring-[rgba(75,15,147,1)]"
        />
      </div>
      <div className="bg-white flex w-[836px] max-w-full items-center gap-2.5 overflow-hidden text-2xl text-[rgba(70,64,64,1)] whitespace-nowrap mt-2.5 p-2.5">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="w-[816px] bg-[rgba(232,216,251,1)] self-stretch min-w-60 min-h-[366px] gap-2.5 overflow-hidden my-auto pl-[23px] pr-2.5 pt-[23px] rounded-[26px] max-md:pl-5 max-md:pb-[100px] focus:outline-none focus:ring-2 focus:ring-[rgba(75,15,147,1)]"
        />
      </div>
      <div className="bg-white flex w-[836px] max-w-full gap-2.5 overflow-hidden text-[25px] text-white font-normal mt-2.5 p-2.5 justify-end">
        <button
          type="submit"
          className="self-stretch w-[213px] bg-[rgba(9,179,255,1)] min-h-[65px] gap-2.5 overflow-hidden px-2.5 py-5 rounded-[17px] hover:bg-opacity-90 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
