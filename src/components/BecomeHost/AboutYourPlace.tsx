import { PropertyOverview } from "./PropertyOverView";
import { PrivacyType } from "./PrivacyType";
import { PropertyHeader } from "./PropertyHeader";
import { Button } from "../ui/button";
import { useState } from "react";

export const AboutYourPlace = () => {
  const [step, setStep] = useState<string>("about");

  const handleNext = () => {
    setStep("next");
  };

  const handleBack = () => {
    setStep("back");
  };

  if (step === "back") {
    return <PropertyOverview />;
  }

  if (step === "next") {
    return <PrivacyType />;
  }

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <PropertyHeader />
      <div className="mx-auto flex flex-col items-center px-6 md:flex-row md:items-center">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-600">Step 1</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-gray-900">
            Tell us about your place
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>
        <div className="flex-shrink-0">
          <video autoPlay muted aria-hidden="true">
            <source
              src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between border-t px-6 py-4">
        <button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Back
        </button>
        <Button
          onClick={handleNext}
          aria-label="Proceed to the next step"
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
