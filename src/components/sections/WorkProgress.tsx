import React from "react";
import ProgressStep from "../ui/ProgressStep";

const WorkProgress: React.FC = () => {
  const progressSteps = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/3e7f92a120265f3522fc384e0e18bf6cc8145422?placeholderIfAbsent=true",
      title: "Concept",
      description: "Understanding the client's needs.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/48fa41c0652a74fc62d8a72916893b5f49a47dba?placeholderIfAbsent=true",
      title: "Design",
      description: "Creating UI/UX prototypes.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/b19456edd3b6f99c960fe2f824fd312e79443d00?placeholderIfAbsent=true",
      title: "Develope",
      description: "Building the app or website.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/b568b7edab7535cc8b6855f9d6f3df65a5635f8d?placeholderIfAbsent=true",
      title: "Test",
      description: "Fixing bugs and optimizing.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/3f8f1fced5bf141357ed56a80e9cf52d90929c16?placeholderIfAbsent=true",
      title: "Launch",
      description: "Delivering & maintaining the project.",
    },
  ];

  return (
    <section
      id="progress"
      className="flex min-h-[536px] w-full flex-col overflow-hidden items-stretch justify-center px-2.5 py-[30px] max-md:max-w-full"
    >
      <div className="flex w-full items-center gap-[40px_42px] overflow-hidden text-[64px] text-[rgba(75,15,147,1)] font-normal justify-center flex-wrap pl-20 pr-2.5 py-2.5 max-md:max-w-full max-md:text-[40px] max-md:pl-5">
        <h2 className="self-stretch grow shrink w-[395px] my-auto max-md:max-w-full max-md:text-[40px]">
          Work Progress
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/fc3ebf344adac97420ac8d5d9d98afb75a0df25f?placeholderIfAbsent=true"
          alt="Progress line"
          className="aspect-[33.33] object-contain w-[1093px] self-stretch min-w-60 my-auto max-md:max-w-full"
        />
      </div>
      <div className="self-center flex gap-[40px_66px] overflow-hidden flex-wrap mt-2.5 p-2.5 max-md:max-w-full">
        {progressSteps.map((step, index) => (
          <ProgressStep
            key={index}
            imageUrl={step.imageUrl}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkProgress;
