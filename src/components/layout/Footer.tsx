import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(76,18,149,1)] self-center flex min-h-[388px] w-full flex-col overflow-hidden items-center text-white pt-[61px] pb-[15px] px-2.5 max-md:max-w-full">
      <div className="flex w-[1659px] max-w-full items-center gap-[40px_102px] overflow-hidden flex-wrap px-2.5 py-2">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/49624210ab744d730655becef04ca5d596befe61?placeholderIfAbsent=true"
          alt="Fanus Digital Logo"
          className="aspect-[1.55] object-contain w-[244px] self-stretch min-w-60 shrink grow my-auto"
        />
        <div className="self-stretch flex min-w-60 w-[469px] shrink h-[120px] grow my-auto" />
        <div className="self-stretch flex min-h-[248px] flex-col overflow-hidden items-center text-2xl font-light whitespace-nowrap leading-[53px] grow shrink w-[106px] my-auto px-2.5">
          <h3 className="font-bold self-stretch">Sections</h3>
          <a
            href="#services"
            className="mt-[9px] hover:text-opacity-80 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="mt-[9px] hover:text-opacity-80 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#progress"
            className="mt-[9px] hover:text-opacity-80 transition-colors"
          >
            Progress
          </a>
        </div>
        <div className="self-stretch flex min-w-60 min-h-[258px] flex-col overflow-hidden items-stretch text-base font-normal grow shrink w-[387px] my-auto px-2.5">
          <h3 className="text-2xl font-bold leading-loose">Information</h3>
          <div className="flex items-center gap-2.5 overflow-hidden justify-center mt-[11px] pl-2.5 pr-[9px] py-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/ff410764a6ac410ae45ee948ead53e0a258cfccd?placeholderIfAbsent=true"
              alt="Location icon"
              className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
            />
            <address className="self-stretch my-auto not-italic">
              The Promenade Mall, 108 St, Hallway, Kuwait
            </address>
          </div>
          <div className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap justify-center mt-[11px] pl-2.5 pr-[9px] py-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/98256615a0f5150f348478e3edbd566b71295764?placeholderIfAbsent=true"
              alt="Email icon"
              className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
            />
            <a
              href="mailto:fanusdigital@gmail.com"
              className="self-stretch my-auto hover:text-opacity-80 transition-colors"
            >
              fanusdigital@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap justify-center mt-[11px] pl-2.5 pr-[9px] py-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/9aad1b28b976d3d6bd8a492d63d9c5c9f0751630?placeholderIfAbsent=true"
              alt="Phone icon"
              className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
            />
            <a
              href="tel:623871401-4-134"
              className="self-stretch my-auto hover:text-opacity-80 transition-colors"
            >
              623871401-4-134
            </a>
          </div>
        </div>
      </div>
      <div className="flex min-h-[74px] max-w-full w-[1728px] flex-col overflow-hidden items-center text-base font-normal whitespace-nowrap px-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/65f8f795ca6b7d3cb88d7c9676da7f66479dfe66?placeholderIfAbsent=true"
          alt="Divider"
          className="aspect-[1000] object-contain w-[1635px] max-w-full"
        />
        <a
          href="https://www.fanusdigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 hover:text-opacity-80 transition-colors"
        >
          www.fanusdigital.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
