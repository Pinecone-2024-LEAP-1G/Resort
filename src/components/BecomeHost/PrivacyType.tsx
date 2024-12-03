import { PropertyHeader } from "./PropertyHeader";
import { PropertyStructure } from "./PropertyStructure";
import { AboutYourPlace } from "./AboutYourPlace";
import { useState } from "react";
import { Button } from "../ui/button";

export const PrivacyType = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [step, setStep] = useState<string>("about");

  const types = [
    {
      id: "entirePlace",
      label: "An entire place",
      description: "Guests have the whole place to themselves",
      icon: "",
    },
    {
      id: "aRoom",
      label: "A room",
      description:
        "Guests have their own room in home, plus access to shared spaces.",
      icon: "",
    },
    {
      id: "sharedRoom",
      label: "A shared room in a hostel",
      description:
        "Guests sleep in a shared room in a professionally managed hostel with staff onsite 24/7.",
      icon: "",
    },
  ];

  const handleSelect = (id: string) => {
    setSelectedType(id);
  };

  const handleNext = () => {
    setStep("next");
  };

  const handleBack = () => {
    setStep("previous");
  };

  if (step === "next") {
    return <PropertyStructure />;
  }

  if (step === "previous") {
    return <AboutYourPlace />;
  }

  return (
    <div>
      <PropertyHeader />
      <div className="mx-auto flex w-[630px] flex-col gap-12 py-11">
        <label className="text-[32px] font-semibold">
          What type of place will guests have?
        </label>
        <div className="flex flex-col gap-3">
          {types.map((type) => (
            <button
              key={type.id}
              className={`flex h-[113px] w-[630px] flex-col rounded-lg border transition-shadow hover:shadow-md ${
                selectedType === type.id
                  ? "border-black bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => handleSelect(type.id)}
              aria-label={`Select ${type.label}`}
            >
              <div className="m-6 flex h-16 w-[512px] flex-col items-start justify-start">
                <span className="text-lg font-medium">{type.label}</span>
                <span className="text-balance text-sm text-[#6a6a6a]">
                  {type.description}
                </span>
              </div>
              <div className="h-12 w-12">{type.icon}</div>
            </button>
          ))}
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
