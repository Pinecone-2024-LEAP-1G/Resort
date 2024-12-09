"use client";

import { AboutYourPlace } from "@/components/BecomeHost/AboutYourPlace";
import { Address } from "@/components/BecomeHost/Address";
import { FinallyButton } from "@/components/BecomeHost/FinallyButton";
import { FloorPlan } from "@/components/BecomeHost/FloorPlan";
import { Overview } from "@/components/BecomeHost/OverView";
import { Structure } from "@/components/BecomeHost/Structure";
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
};

export type PropertyClick = {
  handleBack: () => void;
  handleNext: () => void;
  value: PropertyValue;
  handleChange: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};
const stepper = [
  Overview,
  AboutYourPlace,
  Address,
  Structure,
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
  });

  const Step = stepper[step];
  const handleChange = (
    e:
      | React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(value);
  if (step < stepper.length)
    return (
      <Step
        handleChange={handleChange}
        handleBack={() => setStep((prev) => prev - 1)}
        handleNext={() => setStep((prev) => prev + 1)}
        value={value}
      ></Step>
    );
  return <div></div>;
};

export default BecomeHost;
