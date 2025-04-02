import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(75,15,147,1)] flex w-full items-center gap-[40px_100px] overflow-hidden text-[25px] text-white font-light leading-[53px] justify-center pl-[67px] pt-[27px] pb-2.5 max-md:max-w-full max-md:pl-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/4716a062702be0029d8cbd612e1ee6b2e1838c75?placeholderIfAbsent=true"
        alt="Fanus Digital Logo"
        className="aspect-[1.56] object-contain w-[159px] self-stretch shrink-0 my-auto"
      />
      <div className="self-stretch flex min-w-60 w-[426px] shrink-0 h-[31px] my-auto" />
      <nav className="flex items-center">
        <a
          href="#services"
          className="self-stretch w-[111px] my-auto hover:text-opacity-80 transition-colors"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="self-stretch w-[100px] my-auto hover:text-opacity-80 transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#progress"
          className="self-stretch w-[113px] my-auto hover:text-opacity-80 transition-colors"
        >
          Progress
        </a>
        <a
          href="#contact"
          className="self-stretch w-[138px] my-auto hover:text-opacity-80 transition-colors"
        >
          Contact Us
        </a>
      </nav>
      <div className="self-stretch flex w-16 shrink-0 h-10 my-auto" />
    </header>
  );
};

export default Header;
