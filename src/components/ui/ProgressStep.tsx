import React from "react";

interface ProgressStepProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProgressStep: React.FC<ProgressStepProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex min-w-60 flex-col overflow-hidden items-center w-[242px] p-2.5">
      <img
        src={imageUrl}
        alt={`${title} icon`}
        className="aspect-[1] object-contain w-40 max-w-full"
      />
      <h3 className="text-[rgba(75,15,147,1)] text-[32px] font-medium mt-2.5">
        {title}
      </h3>
      <p className="text-[rgba(70,64,64,1)] text-2xl font-normal text-center mt-2.5">
        {description}
      </p>
    </div>
  );
};

export default ProgressStep;
