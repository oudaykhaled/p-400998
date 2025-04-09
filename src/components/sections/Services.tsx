import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white flex w-full gap-[40px_135px] overflow-hidden text-[rgba(75,15,147,1)] font-normal max-md:flex-wrap p-2.5 max-md:max-w-full"
    >
      <div className="flex min-w-60 min-h-[383px] flex-col overflow-hidden items-stretch justify-center w-[960px] pl-[46px] pr-2.5 py-[47px] max-md:max-w-full max-md:pl-5">
        <h3 className="text-[40px] font-light">Our Services</h3>
        <h2 className="text-[64px] mt-2.5 max-md:max-w-full max-md:text-[40px]">
          Innovative Solutions
        </h2>
        <p className="text-[rgba(70,64,64,1)] text-[28px] mt-2.5 max-md:max-w-full">
          At Fanus Digital, we bring cutting-edge digital experiences to life.
          Our services are designed to enhance engagement, optimize performance,
          and elevate your brand's online presence.
        </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/41c41dd3af77b9ca2c782906d511dec2257802df?placeholderIfAbsent=true"
        alt="Services Illustration"
        className="aspect-[1.2] object-contain w-[482px] min-w-60 max-md:max-w-full"
      />
    </section>
  );
};

export default Services;
