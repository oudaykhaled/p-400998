import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(76,18,149,1)] flex flex-col items-center text-white pt-8 pb-4 px-4">
      <div className="flex flex-wrap w-full max-w-[1659px] items-start gap-4 lg:gap-[40px_102px] px-4 py-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/49624210ab744d730655becef04ca5d596befe61?placeholderIfAbsent=true"
          alt="Fanus Digital Logo"
          className="aspect-[1.55] object-contain w-[120px] md:w-[244px] flex-shrink-0"
        />
        <div className="flex-grow flex-shrink-0 min-w-[60px] h-[120px]" />
        <div className="flex flex-col md:items-center items-start text-lg md:text-2xl font-light grow shrink-0 w-full md:w-[106px] px-2">
          <h3 className="font-bold">Sections</h3>
          <div className="flex flex-row md:flex-col items-start gap-4 md:gap-0 mt-3">
            <a
              href="#services"
              className="hover:text-opacity-80 transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-opacity-80 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#progress"
              className="hover:text-opacity-80 transition-colors"
            >
              Progress
            </a>  
          </div>
        </div>
        <div className="flex flex-col items-start text-sm md:text-base font-normal grow shrink-0 w-full md:w-[387px] px-2">
          <h3 className="text-lg md:text-2xl font-bold leading-loose">
            Information
          </h3>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/ff410764a6ac410ae45ee948ead53e0a258cfccd?placeholderIfAbsent=true"
              alt="Location icon"
              className="w-5 md:w-[29px] flex-shrink-0"
            />
            <address className="not-italic">
              The Promenade Mall, 108 St, Hallway, Kuwait
            </address>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/98256615a0f5150f348478e3edbd566b71295764?placeholderIfAbsent=true"
              alt="Email icon"
              className="w-5 md:w-[29px] flex-shrink-0"
            />
            <a
              href="mailto:fanusdigital@gmail.com"
              className="hover:text-opacity-80 transition-colors"
            >
              fanusdigital@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/9aad1b28b976d3d6bd8a492d63d9c5c9f0751630?placeholderIfAbsent=true"
              alt="Phone icon"
              className="w-5 md:w-[29px] flex-shrink-0"
            />
            <a
              href="tel:623871401-4-134"
              className="hover:text-opacity-80 transition-colors"
            >
              623871401-4-134
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-[1728px] px-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/65f8f795ca6b7d3cb88d7c9676da7f66479dfe66?placeholderIfAbsent=true"
          alt="Divider"
          className="w-full max-w-[1635px]"
        />
        <a
          href="https://www.fanusdigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 hover:text-opacity-80 transition-colors text-center"
        >
          www.fanusdigital.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
