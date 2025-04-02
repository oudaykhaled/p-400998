import React from "react";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/59436a4811a28e992085d8e1177052140d1078fb?placeholderIfAbsent=true"
        alt="Portfolio showcase"
        className="aspect-[0.65] object-contain w-full max-md:max-w-full"
      />
      <div className="self-center flex min-h-[55px] w-[90px]" />
    </section>
  );
};

export default Portfolio;
