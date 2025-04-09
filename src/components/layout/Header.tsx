import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[rgba(75,15,147,1)] flex flex-wrap items-center justify-between w-full text-white font-light leading-[53px] px-5 py-3">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/4716a062702be0029d8cbd612e1ee6b2e1838c75?placeholderIfAbsent=true"
          alt="Fanus Digital Logo"
          className="aspect-[1.56] object-contain w-[120px]"
        />
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center w-full md:w-auto mt-3 md:mt-0`}
      >
        <a
          href="#services"
          className="block md:inline-block px-3 py-2 hover:text-opacity-80 transition-colors font-inter font-light text-[25px] leading-[53px] tracking-[0px]"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="block md:inline-block px-3 py-2 hover:text-opacity-80 transition-colors font-inter font-light text-[25px] leading-[53px] tracking-[0px]"
        >
          Portfolio
        </a>
        <a
          href="#progress"
          className="block md:inline-block px-3 py-2 hover:text-opacity-80 transition-colors font-inter font-light text-[25px] leading-[53px] tracking-[0px]"
        >
          Progress
        </a>
        <a
          href="#contact"
          className="block md:inline-block px-3 py-2 hover:text-opacity-80 transition-colors font-inter font-light text-[25px] leading-[53px] tracking-[0px]"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
