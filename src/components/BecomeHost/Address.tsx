import { PropertyHeader } from "./PropertyHeader";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AboutYourPlace } from "./AboutYourPlace";
import { Structure } from "./Structure";
import { Provinces } from "../Provinces";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export const Address = () => {
  const [step, setStep] = useState<string>("about");
  const [description, setDescription] = useState<string>("");
  // const [town, setTown] = useState<string>("");
  // const [postalCode, setPostalCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const router = useRouter();
  const { id } = router.query;
  const handleNext = () => {
    if (description && address) {
      router.push(`/[${description}]/[${description}]`);
      setStep("next");
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  const handleBack = () => {
    setStep("back");
  };

  if (step === "next") {
    return <Structure />;
  }

  if (step === "back") {
    return <AboutYourPlace />;
  }

  return (
    <div>
      <PropertyHeader />
      <div className="mx-auto my-8 flex w-[630px] flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-[32px] font-semibold">
            Where is your place located?
          </h1>
          <p className="text-lg text-[#6a6a6a]">
            Your address is only shared with guests after they have made a
            reservation.
          </p>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select your province
            </label>
            <Select onValueChange={setAddress}>
              <SelectTrigger className="w-[630px]">
                <SelectValue placeholder="Choose a province" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Provinces.map((province) => (
                    <SelectItem value={province.name} key={province.name}>
                      {province.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <Input
                id="streetAddress"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter your street address"
              />
            </div>
            {/* <div>
              <label
                htmlFor="town"
                className="block text-sm font-medium text-gray-700"
              >
                City/Town/Village
              </label>
              <Input
                id="town"
                value={town}
                onChange={(e) => setTown(e.target.value)}
                type="text"
                placeholder="Enter your city or town"
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <Input
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                type="text"
                placeholder="Enter your postal code"
              />
            </div> */}
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
};
