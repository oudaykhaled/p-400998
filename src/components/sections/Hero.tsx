import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-wrap relative min-h-[1257px] w-full items-start gap-[-18px] overflow-visible font-normal justify-start flex-wrap py-28 max-md:max-w-full max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/771b15db346a89841161a0cf9b70acc359f6815a?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute aspect-[1.45] h-auto w-auto object-cover inset-0"
      />
      <div className="relative flex flex-row items-start justify-between w-full max-md:flex-col mt-[-160px]">
        <div className="relative self-stretch min-w-60 min-h-[623px] overflow-visible w-[803px] my-auto px-2.5 max-md:max-w-full">
          <h1 className="text-[117px] max-md:max-w-full max-md:text-[40px] text-black md:text-white">
            Fanus Digital
          </h1>
          <h2
            className="text-[102px] mt-3.5 max-md:text-[40px] text-black md:text-white"
            style={{
              background: "linear-gradient(180deg, #09B3FF 27.5%, #F1F5FE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Agency
          </h2>
          <p className="text-[28px] mt-3.5 max-md:max-w-full text-black md:text-white">
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
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/dd93115ada7c3f6cfec7af78311a35957509c91c?placeholderIfAbsent=true"
          alt="Hero Image"
          className="aspect-[0.49] w-[510px] min-w-60 my-auto max-md:hidden px-4"
        />
      </div>
      <div className="relative self-stretch flex min-w-60 w-[366px] shrink-0 h-[97px] my-auto" />
    </section>
  );
};

export default Hero;
