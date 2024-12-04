import { useState } from "react";
import { Button } from "../ui/button";
import { Plus, Minus } from "lucide-react";
import { PropertyHeader } from "./PropertyHeader";
import { Structure } from "./Structure";
import { Photos } from "./Photos";

const Counter = ({
  label,
  value,
  increment,
  decrement,
  min,
  max,
}: {
  label: string;
  value: number;
  increment: () => void;
  decrement: () => void;
  min: number;
  max: number;
}) => (
  <div className="flex h-16 flex-row justify-between border-b p-4">
    <p className="text-xl font-normal">{label}</p>
    <div className="flex items-center justify-center gap-2">
      <Button
        onClick={decrement}
        className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
        aria-label={`Decrease ${label}`}
        disabled={value <= min}
      >
        <Minus className="h-4 w-4 text-black" />
      </Button>
      <div className="w-6 text-center text-lg">{value}</div>
      <Button
        onClick={increment}
        className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
        aria-label={`Increase ${label}`}
        disabled={value >= max}
      >
        <Plus className="h-4 w-4 text-black" />
      </Button>
    </div>
  </div>
);

export const FloorPlan = () => {
  const [guests, setGuests] = useState<number>(1);
  const [beds, setBeds] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(0.5);
  const [step, setStep] = useState<string>("about");

  const handleNext = () => {
    setStep("next");
  };

  const handleBack = () => {
    setStep("previous");
  };

  if (step === "next") {
    return <Photos />;
  }

  if (step === "previous") {
    return <Structure />;
  }

  return (
    <div>
      <PropertyHeader />
      <div className="mx-auto my-8 w-[630px]">
        <div className="my-5 flex flex-col gap-5">
          <h1 className="text-[32px] font-semibold">
            Share some basics about your place
          </h1>
          <span className="text-lg text-[#6a6a6a]">
            You'll add more details later, like bed types.
          </span>
        </div>
        <Counter
          label="Guests"
          value={guests}
          increment={() => setGuests(guests + 1)}
          decrement={() => setGuests(guests - 1)}
          min={1}
          max={15}
        />
        <Counter
          label="Beds"
          value={beds}
          increment={() => setBeds(beds + 1)}
          decrement={() => setBeds(beds - 1)}
          min={1}
          max={50}
        />
        <Counter
          label="Bathrooms"
          value={bathrooms}
          increment={() => setBathrooms(bathrooms + 0.5)}
          decrement={() => setBathrooms(bathrooms - 0.5)}
          min={0.5}
          max={50}
        />
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
