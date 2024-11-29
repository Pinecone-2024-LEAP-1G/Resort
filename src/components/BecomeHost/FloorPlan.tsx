<<<<<<< HEAD
import { useState } from "react";
import { Button } from "../ui/button";
import { Plus, Minus } from "lucide-react";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyStructure } from "./PropertyStructure";
import { PropertyPhotos } from "./PropertyPhotos";

export const FloorPlan = () => {
  const [guests, setGuests] = useState<number>(1);
  const [beds, setBeds] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(0.5);
  const [step, setStep] = useState<string>("about");

  const incrementGuest = () => {
    if (guests < 15) {
      setGuests(guests + 1);
    }
  };
  const decrementGuest = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const incrementBeds = () => {
    if (beds < 50) {
      setBeds(beds + 1);
    }
  };
  const decrementBeds = () => {
    if (beds > 1) {
      setBeds(beds - 1);
    }
  };

  const incrementBathrooms = () => {
    if (bathrooms < 50) {
      setBathrooms(bathrooms + 0.5);
    }
  };
  const decrementBathrooms = () => {
    if (bathrooms > 0.5) {
      setBathrooms(bathrooms - 0.5);
    }
  };

  const handleNext = () => {
    setStep("next");
  };

  const handleBack = () => {
    setStep("previous");
  };

  if (step === "next") {
    return <PropertyPhotos />;
  }

  if (step === "previous") {
    return <PropertyStructure />;
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
        <div className="flex h-16 flex-row justify-between border-b p-4">
          <p className="text-xl font-normal">Guests</p>
          <div className="flex items-center justify-center gap-2">
            <Button
              onClick={decrementGuest}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
            >
              <Minus className="h-4 w-4 text-black" />
            </Button>
            <div className="w-6 text-center text-lg">{guests}</div>
            <Button
              onClick={incrementGuest}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
              disabled={guests < 1}
            >
              <Plus className="h-4 w-4 text-black" />
            </Button>
          </div>
        </div>
        <div className="flex h-16 flex-row justify-between border-b p-4">
          <p className="text-xl font-normal">Beds</p>
          <div className="flex items-center justify-center gap-2">
            <Button
              onClick={decrementBeds}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
            >
              <Minus className="h-4 w-4 text-black" />
            </Button>
            <div className="w-6 text-center text-lg">{beds}</div>
            <Button
              onClick={incrementBeds}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
              disabled={beds < 1}
            >
              <Plus className="h-4 w-4 text-black" />
            </Button>
          </div>
        </div>
        <div className="flex h-16 flex-row justify-between border-b p-4">
          <p className="text-xl font-normal">Bathrooms</p>
          <div className="flex items-center justify-center gap-2">
            <Button
              onClick={decrementBathrooms}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
            >
              <Minus className="h-4 w-4 text-black" />
            </Button>
            <div className="w-6 text-center text-lg">{bathrooms}</div>
            <Button
              onClick={incrementBathrooms}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
              disabled={bathrooms < 0.5}
            >
              <Plus className="h-4 w-4 text-black" />
            </Button>
          </div>
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
=======
export const FloorPlan = () => {
  return;
>>>>>>> 7891b27 (HostSetup first commit)
};
