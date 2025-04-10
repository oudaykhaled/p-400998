import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-wrap relative w-full items-start gap-[-18px] overflow-visible font-normal justify-start flex-wrap py-28 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/771b15db346a89841161a0cf9b70acc359f6815a?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute aspect-[1.45] h-auto w-auto object-cover inset-0"
      />
      <div className="relative flex flex-row items-start justify-between w-full max-md:flex-col mt-[-160px] pt-[0px] max-md:pt-[40px] max-md:py-89px">
        <div
          className="relative self-stretch min-w-60 overflow-visible w-[803px] my-auto px-2.5 max-md:max-w-full"
          style={{ marginLeft: "clamp(0px, 5vw, 90px)" }}
        >
          <h1
            className="text-white pt-24 max-md:max-w-full max-sm:pt-0 max-md:pt-16"
            style={{ fontSize: "clamp(40px, 8vw, 117px)" }}
          >
            Fanus Digital
          </h1>
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(40px, 7vw, 102px)",
              background: "linear-gradient(180deg, #09B3FF 27.5%, #F1F5FE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Agency
          </h2>
          <p className="text-white mt-3.5 max-md:max-w-full" style={{ fontSize: "clamp(18px, 3vw, 28px)" }}>
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
