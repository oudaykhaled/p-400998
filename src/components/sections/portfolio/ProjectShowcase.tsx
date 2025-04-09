import React from "react";

interface ProjectShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  textColor?: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  textColor = "text-[rgba(75,15,147,1)]",
}) => {
  const textColorClass = textColor || "text-[rgba(75,15,147,1)]";
  const descriptionColorClass =
    textColor === "text-white" ? "text-white" : "text-[rgba(70,64,64,1)]";

  const content = (
    <div
      className={`min-w-60 overflow-hidden ${reverse ? "text-right" : ""} ${textColor === "text-white" ? "text-white" : ""}`}
    >
      <div className={`text-[40px] font-light ${textColorClass} max-md:text-[rgba(70,64,64,1)]`}>{title}</div>
      <div
        className={`text-[64px] mt-[17px] max-md:text-[40px] ${textColorClass} max-md:text-[rgba(70,64,64,1)]`}
      >
        {subtitle}
      </div>
      <div className={`text-[18px] mt-[10px] ${descriptionColorClass} max-md:text-[rgba(70,64,64,1)]`}>
        {description}
      </div>
    </div>
  );

  const image = (
    <img
      src={imageSrc}
      alt={imageAlt}
      className="object-contain max-w-[800px] min-w-60"
    />
  );

  return (
    <section className="flex w-full items-center gap-[40px] justify-center flex-row p-2.5 my-8 max-md:flex-wrap">
      {reverse ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </section>
  );
};

export default ProjectShowcase;
