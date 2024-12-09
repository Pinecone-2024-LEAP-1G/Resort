import { useState } from "react";
import { Button } from "../ui/button";
import { Plus, Minus } from "lucide-react";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyClick } from "@/app/become-host/page";
import { PriceFloor } from "./FloorPlanHover";

export const FloorPlan = ({
  handleBack,
  handleNext,
  value,
  handleChange,
}: PropertyClick) => {
  const [guests, setGuests] = useState<number>(1);
  const [beds, setBeds] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(0.5);
  const [price, setPrice] = useState<number | string>();
  const [cleaningFee, setCleaningFee] = useState<string | number>();

  return (
    <div>
      <PropertyHeader />
      <div className="mx-auto my-8 w-[630px] text-right">
        <div className="my-5 flex flex-col gap-5 text-left">
          <h1 className="text-[32px] font-semibold">
            Share some basics about your place
          </h1>
          <span className="text-lg text-[#6a6a6a]">
            You will add more details later, like bed types.
          </span>
        </div>
        <div className="flex h-16 flex-row justify-between border-b p-4">
          <p className="text-xl font-normal">Guests</p>
          <div className="flex items-center justify-center gap-2">
            <Button
              onClick={() => {
                if (guests > 1) {
                  const guest = guests - 1;
                  setGuests(guest);

                  handleChange({
                    target: { name: "guests", value: guest.toString() },
                  });
                }
              }}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
            >
              <Minus className="h-4 w-4 text-black" />
            </Button>
            <div className="w-6 text-center text-lg">{guests}</div>
            <Button
              onClick={() => {
                if (guests < 15) {
                  const newGuests = guests + 1;
                  setGuests(newGuests);
                  handleChange({
                    target: { name: "guests", value: newGuests.toString() },
                  });
                }
              }}
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
              onClick={() => {
                if (beds > 1) {
                  const bed = beds - 1;
                  setBeds(bed);

                  handleChange({
                    target: { name: "totalBedrooms", value: bed.toString() },
                  });
                }
              }}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
            >
              <Minus className="h-4 w-4 text-black" />
            </Button>
            <div className="w-6 text-center text-lg">{beds}</div>
            <Button
              onClick={() => {
                if (beds < 50) {
                  const bed = beds + 1;
                  setBeds(bed);
                  handleChange({
                    target: { name: "totalBedrooms", value: bed.toString() },
                  });
                }
              }}
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
              onClick={() => {
                if (bathrooms > 0.5) {
                  const rooms = bathrooms - 0.5;
                  setBathrooms(rooms);
                  handleChange({
                    target: { name: "totalBathrooms", value: rooms.toString() },
                  });
                }
              }}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
            >
              <Minus className="h-4 w-4 text-black" />
            </Button>
            <div className="w-6 text-center text-lg">{bathrooms}</div>
            <Button
              onClick={() => {
                if (bathrooms < 50) {
                  const broom = bathrooms + 0.5;
                  setBathrooms(broom);

                  handleChange({
                    target: { name: "totalBathrooms", value: broom.toString() },
                  });
                }
              }}
              className="h-8 w-8 rounded-full border bg-white hover:border-black hover:bg-current"
              disabled={bathrooms < 0.5}
            >
              <Plus className="h-4 w-4 text-black" />
            </Button>
          </div>
        </div>
        <div className="flex h-16 flex-row justify-between border-b p-4">
          <p className="text-xl font-normal">Cleaning Fee</p>
          <div className="flex items-center gap-3">
            <input
              min={5}
              type="number"
              className="bg-gray w-[150px] rounded-lg border p-1"
              placeholder="   Cleaning Fee"
              onChange={(e) => {
                const fee = parseFloat(e.target.value);
                setCleaningFee(fee);
                handleChange({
                  target: { name: "cleaningFee", value: fee.toString() },
                });
              }}
            />
            <div className="w-[120px]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "MNT",
              }).format(parseFloat(cleaningFee?.toString() ?? "0"))}
            </div>
          </div>
        </div>
        <div className="flex h-16 flex-row justify-between border-b p-4">
          <p className="text-xl font-normal">Guest pricing</p>

          <div className="flex items-center gap-3">
            <input
              min={5}
              type="number"
              className="bg-gray w-[150px] rounded-lg border p-1"
              placeholder="   Guest pricing"
              onChange={(e) => {
                const pri = parseFloat(e.target.value);
                setPrice(pri);
                handleChange({
                  target: { name: "price", value: pri.toString() },
                });
              }}
            />
            <div className="w-[120px]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "MNT",
              }).format(parseFloat(price?.toString() ?? "0"))}
            </div>
          </div>
        </div>
        <PriceFloor />
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
          disabled={!value.price || !value.cleaningFee}
          aria-disabled={!value.price || !value.cleaningFee}
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
