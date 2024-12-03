import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleMinus, CirclePlus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { PopoverClose } from "@radix-ui/react-popover";

type SearchProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hover: string;
  onClick: () => void;
  infantsNumber: number;
  childrenNumber: number;
  adultNumber: number;
  petNumber: number;
  decreaseAdult: () => void;
  decreaseChildren: () => void;
  decreaseInfants: () => void;
  decreasePet: () => void;
  plusAdult: () => void;
  plusChildren: () => void;
  plusInfants: () => void;
  plusPet: () => void;
  submit: () => void;
};

export function PopoverDemo({
  onMouseEnter,
  onMouseLeave,
  hover,
  onClick,
  infantsNumber,
  childrenNumber,
  adultNumber,
  petNumber,
  decreaseAdult,
  decreaseChildren,
  decreaseInfants,
  decreasePet,
  plusAdult,
  plusChildren,
  plusInfants,
  plusPet,
  submit,
}: SearchProps) {
  return (
    <div
      className={`flex w-[218px] flex-row items-center justify-center rounded-full ${hover}`}
    >
      <Popover>
        <PopoverTrigger asChild>
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`ml-4 flex w-[234px] flex-col items-start justify-center rounded-full ${hover}`}
          >
            Add guests
          </button>
        </PopoverTrigger>
        <PopoverContent className="flex w-[380px] flex-col rounded-2xl px-7 py-8">
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Adults</p>
              <p className="text-sm text-gray-400">Ages 13 or above</p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus onClick={plusAdult} />
              {adultNumber}
              <CircleMinus onClick={decreaseAdult} />
            </div>
          </div>
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Children</p>
              <p className="text-sm text-gray-400">Ages 2-12</p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus onClick={plusChildren} />
              {childrenNumber}
              <CircleMinus onClick={decreaseChildren} />
            </div>
          </div>
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Infants</p>
              <p className="text-sm text-gray-400">Under-2</p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus onClick={plusInfants} />
              {infantsNumber}
              <CircleMinus onClick={decreaseInfants} />
            </div>
          </div>
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Pets</p>
              <p className="text-sm text-gray-400">
                Bringing a server animal ?
              </p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus onClick={plusPet} />
              {petNumber}
              <CircleMinus onClick={decreasePet} />
            </div>
          </div>
          <PopoverClose>
            {" "}
            <Button onClick={submit} className="bg-pink-600 px-20">
              Submit
            </Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
      <div
        onClick={onClick}
        className="mr-1 flex gap-1 rounded-full bg-pink-600 px-4 py-3 text-white"
      >
        <Search /> Search
      </div>
    </div>
  );
}
