import { PropertyHeader } from "./PropertyHeader";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Provinces } from "../Provinces";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyClick } from "@/app/become-host/page";
export const Address = ({
  handleBack,
  handleNext,
  value,
  handleChange,
}: PropertyClick) => {
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
            <Select
              value={value.address}
              onValueChange={(province) =>
                handleChange({ target: { name: "address", value: province } })
              }
            >
              <SelectTrigger className="w-[630px]">
                <SelectValue placeholder="Choose a province" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Provinces?.map((province) => (
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
                onChange={(value) =>
                  handleChange({
                    target: { name: "description", value: value.target.value },
                  })
                }
                type="text"
                placeholder="Enter your street address"
              />
            </div>
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
          disabled={!value.address || !value.description}
          aria-disabled={!value.address || !value.description}
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
