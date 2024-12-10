import { Button } from "../ui/button";
import { PropertyHeader } from "./PropertyHeader";
import Image from "next/image";
import { PropertyClick } from "@/app/become-host/page";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Overview = ({ handleNext }: PropertyClick) => {
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
        "Add 5 or more photos plus a title and description—we will help you out.",
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


  return (
    <div className="flex flex-col">
      <PropertyHeader />
      <div className="mx-6 mt-12 flex flex-col space-y-12 md:flex-row md:space-y-0">
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-[1.2] text-gray-900">
            It’s easy to get started on Airbnb
          </h1>
        </div>
        <div className="grid flex-1 gap-8 md:grid-cols-3">
          <ol className="space-y-8">
            {steps.map((step) => (
              <StepItem
                key={step.id}
                id={step.id}
                title={step.title}
                description={step.description}
              />
            ))}
          </ol>
          <div className="flex flex-col space-y-8">
            {steps.map((step) => (
              <StepImage
                key={step.id}
                image={step.image}
                alt={`Step ${step.id}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-6 mt-12 flex justify-end border-t pt-6">
        <Button
          className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white hover:bg-pink-500"
          onClick={handleNext}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

interface StepItemProps {
  id: number;
  title: string;
  description: string;
}

const StepItem = ({ id, title, description }: StepItemProps) => (
  <li className="flex items-start space-x-4 border-b pb-6 last:border-b-0">
    <div className="text-2xl font-bold text-gray-800">{id}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600">{description}</p>
    </div>
  </li>
);

interface StepImageProps {
  image: string;
  alt: string;
}

const StepImage = ({ image, alt }: StepImageProps) => (
  <div className="flex h-[120px] w-[120px] justify-center md:justify-start">
    <Image src={image} alt={alt} width={120} height={120} objectFit="contain" />
  </div>
);
