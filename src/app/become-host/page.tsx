"use client";

import { AboutYourPlace } from "@/components/BecomeHost/AboutYourPlace";
import { Address } from "@/components/BecomeHost/Address";
import { FloorPlan } from "@/components/BecomeHost/FloorPlan";
import { Overview } from "@/components/BecomeHost/OverView";
import { Photos } from "@/components/BecomeHost/Photos";
import { Structure } from "@/components/BecomeHost/Structure";
import { useState } from "react";

export type PropertyValue = {
  address: string;
  description: string;
  guests: number;
  price: number;
  categoryId: string;
  propertyPictures: string[];
  totalBedrooms: number;
  totalBathrooms: number;
  cleaningFee: string;
};
export type PropertyClick = {
  handleBack: () => void;
  handleNext: () => void;
  value: string[];
  handleChange:()=>void
};
const stepper = [
  Overview,
  AboutYourPlace,
  Address,
  Structure,
  FloorPlan,
  Photos,
];
const BecomeHost = () => {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState({
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

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const Step = stepper[step];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue({
        ...value
        [name]:value,
    })}

  if (step < stepper.length)
    return (
      <Step
      handleChange={handleChange}
        handleBack={handleBack}
        handleNext={handleNext}
        value={value}
      ></Step>
    );
  return <div></div>;
}

export default BecomeHost;
