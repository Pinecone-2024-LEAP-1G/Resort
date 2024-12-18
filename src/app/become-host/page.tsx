"use client";

import { AboutYourPlace } from "@/components/BecomeHost/AboutYourPlace";
import { Address } from "@/components/BecomeHost/Address";
import { CreateProperty } from "@/components/BecomeHost/FinallyPropertyStep";
import { FloorPlan } from "@/components/BecomeHost/FloorPlan";
import { Structure } from "@/components/BecomeHost/Structure";
import { Photos } from "@/components/BecomeHost/Photos";
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
  phoneNumber: number;
  advantage: string;
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
    event:
      | CustomEvent
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  text: string;
};

const stepper = [
  AboutYourPlace,
  Address,
  Structure,
  Photos,
  FloorPlan,
  CreateProperty,
];

const BecomeHost = () => {
  const [step, setStep] = useState(0);
  const [property, setProperty] = useState<PropertyValue>({
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
    phoneNumber: 0,
    advantage: "",
  });

  const Step = stepper[step];

  const handleChange = (
    event:
      | CustomEvent
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (step < stepper.length)
    return (
      <Step
        handleChange={handleChange}
        handleBack={() => setStep((prev) => prev - 1)}
        handleNext={() => setStep((prev) => prev + 1)}
        value={property}
        text={""}
      ></Step>
    );

  return <div></div>;
};

export default BecomeHost;
