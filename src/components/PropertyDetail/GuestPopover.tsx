"use client";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Guest } from "./Guest";
import { ImArrowDown2 } from "react-icons/im";

interface Props {
  guest: number;
  setGuests: (adult: number) => void;

  people?: number;
  limitGuest?: number;
}

export const GuestPopover = ({
  guest,
  setGuests,

  people,
  limitGuest,
}: Props) => {
  const maxGuests = limitGuest ?? Infinity;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={
            "h-16 w-[300px] items-center justify-between border-2 px-4 py-2 pl-3 text-left font-normal"
          }
          variant="outline"
        >
          <div>
            <p>Зочдын тоо</p>
            <p>{people} зочин</p>
          </div>
          <ImArrowDown2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4 border-b">
              <Label htmlFor="adult">Том хүн</Label>
              <Guest
                disabled={guest === maxGuests}
                name={guest}
                onclick={() => setGuests(guest + 1)}
                plusonclick={() => setGuests(guest > 0 ? guest - 1 : 0)}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
