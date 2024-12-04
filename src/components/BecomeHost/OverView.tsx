import { Button } from "../ui/button";
import { PropertyHeader } from "./PropertyHeader";
import { useState } from "react";
import { AboutYourPlace } from "./AboutYourPlace";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Overview = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => setIsClicked(true);

  const steps: Step[] = [
    {
      id: 1,
      title: "Tell us about your place",
      description:
        "Share some basic info, like where it is and how many guests can stay.",
      image:
        "https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg",
    },
    {
      id: 2,
      title: "Make it stand out",
      description:
        "Add 5 or more photos plus a title and description—we’ll help you out.",
      image:
        "https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg",
    },
    {
      id: 3,
      title: "Finish up and publish",
      description:
        "Choose a starting price, verify a few details, then publish your listing.",
      image:
        "https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg",
    },
  ];

  if (isClicked) {
    return <AboutYourPlace />;
  }

  return (
    <div className="flex flex-col">
      <PropertyHeader />
      <div className="mx-6 mt-12 flex flex-col space-y-12 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-[1.2] text-gray-900">
            It’s easy to get started on Airbnb
          </h1>
        </div>
        <div className="grid flex-1 gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
      <div className="mx-6 mt-12 flex justify-end border-t pt-6">
        <Button
          className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white hover:bg-pink-500"
          onClick={handleClick}
          aria-label="Get started"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

interface StepCardProps {
  step: Step;
}

const StepCard = ({ step }: StepCardProps) => (
  <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-6">
    <Image
      src={step.image}
      alt={step.title}
      width={120}
      height={120}
      className="rounded-md"
    />
    <div className="mt-4 flex flex-col md:mt-0">
      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
      <p className="mt-2 text-base text-gray-600">{step.description}</p>
    </div>
  </div>
);
