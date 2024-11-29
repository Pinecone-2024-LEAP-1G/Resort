import React, { useState } from "react";

export const PropertyStructure = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const places = [
    { id: "house", label: "House", icon: "/icons/house.svg" },
    { id: "apartment", label: "Apartment", icon: "/icons/apartment.svg" },
    { id: "barn", label: "Barn", icon: "/icons/barn.svg" },
    {
      id: "bedBreakfast",
      label: "Bed & breakfast",
      icon: "/icons/bed-breakfast.svg",
    },
    { id: "boat", label: "Boat", icon: "/icons/boat.svg" },
    { id: "cabin", label: "Cabin", icon: "/icons/cabin.svg" },
    { id: "rv", label: "Camper/RV", icon: "/icons/rv.svg" },
    {
      id: "casaParticular",
      label: "Casa particular",
      icon: "/icons/casa-particular.svg",
    },
    { id: "castle", label: "Castle", icon: "/icons/castle.svg" },
    { id: "cave", label: "Cave", icon: "/icons/cave.svg" },
    { id: "container", label: "Container", icon: "/icons/container.svg" },
    {
      id: "cycladicHome",
      label: "Cycladic home",
      icon: "/icons/cycladic-home.svg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between p-4">
        <img src="/icons/airbnb-logo.svg" alt="Airbnb Logo" className="h-8" />
        <div className="space-x-4">
          <button className="text-gray-500 hover:underline">Questions?</button>
          <button className="text-gray-500 hover:underline">Save & exit</button>
        </div>
      </div>
      <div className="container mx-auto flex-1 px-4 py-8">
        <h1 className="mb-6 text-2xl font-semibold">
          Which of these best describes your place?
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {places.map((place) => (
            <button
              key={place.id}
              className={`flex flex-col items-center space-y-2 rounded-lg border p-4 text-center hover:shadow-md ${
                selectedPlace === place.id
                  ? "border-black bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedPlace(place.id)}
            >
              <img src={place.icon} alt={place.label} className="h-12 w-12" />
              <span className="font-medium">{place.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t p-4">
        <button className="text-gray-500 hover:underline">Back</button>
        <button
          className={`rounded-md px-6 py-3 text-white ${
            selectedPlace
              ? "bg-black hover:bg-gray-800"
              : "cursor-not-allowed bg-gray-300"
          }`}
          disabled={!selectedPlace}
        >
          Next
        </button>
      </div>
    </div>
  );
};
