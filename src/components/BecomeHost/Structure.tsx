import React, { useState } from "react";
import { MdOutlineHouse, MdApartment, MdCabin } from "react-icons/md";
import { PiBarn } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { TbSailboat } from "react-icons/tb";
import { FaCaravan } from "react-icons/fa";
import { CasaParticular } from "../icons/PropertyIcons/CasaParticular";
import { Castle } from "../icons/PropertyIcons/Castle";
import { PropertyHeader } from "./PropertyHeader";
import { FloorPlan } from "./FloorPlan";
import { Address } from "./Address";

export const Structure = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [step, setStep] = useState<string>("about");

  const places = [
    {
      id: "house",
      label: "House",
      icon: <MdOutlineHouse className="h-12 w-12" />,
    },
    {
      id: "apartment",
      label: "Apartment",
      icon: <MdApartment className="h-12 w-12" />,
    },
    { id: "barn", label: "Barn", icon: <PiBarn className="h-12 w-12" /> },
    {
      id: "bedBreakfast",
      label: "Bed & breakfast",
      icon: <GiCoffeeCup className="h-12 w-12" />,
    },
    { id: "boat", label: "Boat", icon: <TbSailboat className="h-12 w-12" /> },
    { id: "cabin", label: "Cabin", icon: <MdCabin className="h-12 w-12" /> },
    { id: "rv", label: "Camper/RV", icon: <FaCaravan className="h-12 w-12" /> },
    {
      id: "casaParticular",
      label: "Casa particular",
      icon: <CasaParticular />,
    },
    { id: "castle", label: "Castle", icon: <Castle /> },
    {
      id: "cave",
      label: "Cave",
      icon: <MdOutlineHouse className="h-12 w-12" />,
    },
    {
      id: "container",
      label: "Container",
      icon: <MdOutlineHouse className="h-12 w-12" />,
    },
    {
      id: "cycladicHome",
      label: "Cycladic home",
      icon: <MdOutlineHouse className="h-12 w-12" />,
    },
  ];

  const handleSelect = (id: string) => {
    setSelectedPlace(id);
  };

  const isNextButtonDisabled = !selectedPlace;

  const handleNext = () => {
    setStep("next");
  };

  const handleBack = () => {
    setStep("previous");
  };

  if (step === "next") {
    return <FloorPlan />;
  }

  if (step === "previous") {
    return <Address />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PropertyHeader />
      <div className="mx-auto w-[680px] px-4 py-8">
        <h1 className="mb-6 text-[32px] font-semibold">
          Which of these best describes your place?
        </h1>
        <div className="grid w-[640px] grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {places.map((place) => (
            <button
              key={place.id}
              className={`flex h-[98px] w-[202px] flex-col rounded-lg border p-4 transition-shadow hover:shadow-md ${
                selectedPlace === place.id
                  ? "border-black bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => handleSelect(place.id)}
              aria-label={`Select ${place.label}`}
            >
              <div className="flex flex-col items-start justify-start">
                <div className="h-12 w-12">{place.icon}</div>
                <span className="font-medium">{place.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t p-4">
        <button
          className="text-gray-500 hover:underline"
          aria-label="Go back to the previous step"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className={`rounded-md px-6 py-3 text-white transition-colors ${
            isNextButtonDisabled
              ? "cursor-not-allowed bg-gray-300"
              : "bg-black hover:bg-gray-800"
          }`}
          disabled={isNextButtonDisabled}
          aria-disabled={isNextButtonDisabled}
          aria-label="Proceed to the next step"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
