import React from "react";
import ContactForm from "../ui/ContactForm";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-white flex w-full items-center gap-2.5 overflow-hidden font-light justify-center flex-wrap p-2.5 max-md:max-w-full"
    >
      <div className="bg-white self-stretch flex min-w-60 flex-col overflow-hidden w-[1018px] my-auto pl-[63px] pr-2.5 py-2.5 max-md:max-w-full max-md:pl-5">
        <div className="bg-white min-h-56 w-[890px] max-w-full overflow-hidden font-normal pl-2.5 py-[13px]">
          <h3 className="text-[rgba(144,15,195,1)] text-[40px] tracking-[-0.4px] max-md:max-w-full font-light">
            <span>Get In </span>
            <span>Touch </span>
            <span>With </span>
            <span>Us </span>
          </h3>
          <h2 className="text-[rgba(75,15,147,1)] text-[75px] mt-2.5 max-md:text-[40px]">
            Contact Us
          </h2>
          <p className="text-[rgba(70,64,64,1)] text-2xl mt-2.5 max-md:max-w-full">
            Have a project in mind? Let's bring your digital vision to life!
            Reach out to Fanus Digital, and we'll craft innovative solutions
            tailored to your needs.
          </p>
        </div>
        <ContactForm />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/1d40984f343200ea23d1113a3eaf196bacd56896?placeholderIfAbsent=true"
        alt="Contact illustration"
        className="aspect-[0.51] object-contain w-[485px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
    </section>
  );
};

export default Contact;
