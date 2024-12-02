import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleMinus, CirclePlus, Search } from "lucide-react";
import { useState } from "react";

type SearchProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hover: string;
  // onClick: () => void;
};
export function PopoverDemo({
  onMouseEnter,
  onMouseLeave,
  hover,
  // onClick,
}: SearchProps) {
  const [adultNumber, setAdultNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [infantsNumber, setInfantsNumber] = useState(0);
  const [petNumber, setPetNumber] = useState(0);

  const minusAdult = () => {
    if (adultNumber > 0) setAdultNumber((prev) => prev - 1);
  };
  const minusChildren = () => {
    if (childrenNumber > 0) setChildrenNumber((prev) => prev - 1);
  };
  const minusPet = () => {
    if (petNumber > 0) setPetNumber((prev) => prev - 1);
  };
  const minusInfants = () => {
    if (infantsNumber > 0) setInfantsNumber((prev) => prev - 1);
  };
  return (
    <div
      className={`flex w-[218px] flex-row items-center justify-center rounded-full ${hover}`}
    >
      <Popover>
        <PopoverTrigger asChild>
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`ml-4 flex w-[234px] flex-col items-start justify-center rounded-full ${hover}`}
          >
            Add guests
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex w-[380px] flex-col rounded-2xl px-7 py-8">
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Adults</p>
              <p className="text-sm text-gray-400">Ages 13 or above</p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus onClick={() => setAdultNumber((prev) => prev + 1)} />
              {adultNumber}
              <CircleMinus onClick={minusAdult} />
            </div>
          </div>
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Children</p>
              <p className="text-sm text-gray-400">Ages 2-12</p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus
                onClick={() => setChildrenNumber((prev) => prev + 1)}
              />
              {childrenNumber}
              <CircleMinus onClick={minusChildren} />
            </div>
          </div>
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Infants</p>
              <p className="text-sm text-gray-400">Under-2</p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus
                onClick={() => setInfantsNumber((prev) => prev + 1)}
              />
              {infantsNumber}
              <CircleMinus onClick={minusInfants} />
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
              <CirclePlus onClick={() => setPetNumber((prev) => prev + 1)} />
              {petNumber}
              <CircleMinus onClick={minusPet} />
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div
        // onClick={onClick}
        className="mr-1 flex gap-1 rounded-full bg-pink-600 px-4 py-3 text-white"
      >
        <Search /> Search
      </div>
    </div>
  );
}
