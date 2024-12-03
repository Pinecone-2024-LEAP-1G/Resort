import { PropertyHeader } from "./PropertyHeader";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const PropertyAddress = () => {
  const [step, setStep] = useState<string>("about");

  const handleNext = () => {
    setStep("privacy");
  };

  const handleBack = () => {
    setStep("overview");
  };

  if (step === "overview") {
    return <PropertyOverview />;
  }

  if (step === "privacy") {
    return <PrivacyType />;
  }

  return (
    <div>
      <PropertyHeader />
      <div>
        <div>
          <p>Where's your place located?</p>
          <p>
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>
        </div>
        <div>
          <Input />
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between border-t px-6 py-4">
        <Button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Back
        </Button>
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
