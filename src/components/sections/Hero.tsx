import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[1257px] w-full items-center gap-[-18px] overflow-hidden font-normal justify-center flex-wrap py-28 max-md:max-w-full max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/771b15db346a89841161a0cf9b70acc359f6815a?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative self-stretch flex w-[92px] shrink-0 h-[115px] my-auto" />
      <div className="relative self-stretch min-w-60 min-h-[623px] overflow-hidden w-[803px] my-auto px-2.5 max-md:max-w-full">
        <h1 className="text-[rgba(241,245,254,1)] text-[117px] max-md:max-w-full max-md:text-[40px]">
          Fanus Digital
        </h1>
        <h2 className="text-[102px] mt-3.5 max-md:text-[40px]">Agency</h2>
        <p className="text-white text-[28px] mt-3.5 max-md:max-w-full">
          We design, develop, and deliver custom websites and mobile apps
          tailored to your needs.
        </p>
        <a
          href="#contact"
          className="inline-block self-stretch bg-[rgba(9,179,255,1)] min-h-[65px] w-[213px] max-w-full text-[25px] text-white mt-3.5 px-2.5 py-[18px] rounded-[17px] text-center hover:bg-opacity-90 transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div className="relative self-stretch flex min-w-60 w-[366px] shrink-0 h-[97px] my-auto" />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/dd93115ada7c3f6cfec7af78311a35957509c91c?placeholderIfAbsent=true"
        alt="Hero Image"
        className="aspect-[0.49] object-contain w-[510px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
    </section>
  );
};

export default Hero;
