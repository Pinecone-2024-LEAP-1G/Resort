"use client";

import { AboutYourPlace } from "@/components/BecomeHost/AboutYourPlace";
import { Address } from "@/components/BecomeHost/Address";
import { FinallyButton } from "@/components/BecomeHost/FinallyButton";
import { FloorPlan } from "@/components/BecomeHost/FloorPlan";
import { Structure } from "@/components/BecomeHost/Structure";
import { Photos } from "@/components/BecomeHost/Photos"; // Import Photos component
import React, { useState } from "react";

export type PropertyValue = {
  address: string;
  description: string;
  guests: number;
  price: number;
  categoryId: string;
  propertyPictures: string[];
  totalBedrooms: number;
  totalBathrooms: number;
  cleaningFee: number;
  categoryname: string;
};
type CustomEvent = {
  target: {
    name: string;
    value:
      | PropertyValue
      | string
      | (EventTarget & (HTMLInputElement | HTMLSelectElement));
  };
};
export type PropertyClick = {
  handleBack: () => void;
  handleNext: () => void;
  value: PropertyValue;
  handleChange: (
    e: CustomEvent | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddPhoto?: (photoUrl: string) => void;
};

const stepper = [
  AboutYourPlace,
  Address,
  Structure,
  Photos,
  FloorPlan,
  FinallyButton,
];

const BecomeHost = () => {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState<PropertyValue>({
    address: "",
    description: "",
    guests: 0,
    price: 0,
    categoryId: "",
    propertyPictures: [],
    totalBedrooms: 0,
    totalBathrooms: 0,
    cleaningFee: 0,
    categoryname: "",
  });

  const Step = stepper[step];

  const handleChange = (
    e: CustomEvent | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPhoto = (photoUrl: string) => {
    setValue((prev) => ({
      ...prev,
      propertyPictures: [...prev.propertyPictures, photoUrl],
    }));
  };

  if (step < stepper.length)
    return (
      <Step
        handleChange={handleChange}
        handleBack={() => setStep((prev) => prev - 1)}
        handleNext={() => setStep((prev) => prev + 1)}
        value={value}
        handleAddPhoto={handleAddPhoto}
      ></Step>
    );

  return <div></div>;
};

export default BecomeHost;
