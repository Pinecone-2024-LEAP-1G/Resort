import { PropertyFooter } from "./PropertyFooter";
import { PropertyHeader } from "./PropertyHeader";
import { useState } from "react";

export const PrivacyType = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
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

  return (
    <div>
      <PropertyHeader />
      <div className="w-[630px]">
        <label className="">What type of place will guests have?</label>
        <div className="flex flex-col">
          {types.map((type) => (
            <button
              key={type.id}
              className={`flex h-[98px] w-[630px] flex-col rounded-lg border p-4 transition-shadow hover:shadow-md ${
                selectedType === type.id
                  ? "border-black bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => handleSelect(type.id)}
              aria-label={`Select ${type.label}`}
            >
              <div className="flex flex-col items-start justify-start">
                <span className="font-medium">{type.label}</span>
                <div className="h-12 w-12">{type.icon}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <PropertyFooter />
    </div>
  );
};
