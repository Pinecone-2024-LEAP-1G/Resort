"use client";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Guest } from "./Guest";
import { ImArrowDown2 } from "react-icons/im";

interface Props {
  adult: number;
  setAdult: (adult: number) => void;
  child: number;
  setChild: (child: number) => void;
  infants: number;
  setInfants: (infants: number) => void;
  pets: number;
  setPets: (pets: number) => void;
  people?: number;
  limitGuest?: number;
}

export const GuestPopover = ({
  adult,
  setAdult,
  child,
  setChild,
  infants,
  setInfants,
  pets,
  setPets,
  people,
  limitGuest,
}: Props) => {
  const maxGuests = limitGuest ?? Infinity;

  const guests: number = adult + child + infants + pets;

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
                disabled={guests === maxGuests}
                name={adult}
                onclick={() => setAdult(adult + 1)}
                plusonclick={() => setAdult(adult > 0 ? adult - 1 : 0)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4 border-b">
              <Label htmlFor="child">Хүүхэд</Label>
              <Guest
                disabled={guests === maxGuests}
                name={child}
                onclick={() => setChild(child + 1)}
                plusonclick={() => setChild(child > 0 ? child - 1 : 0)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4 border-b">
              <Label htmlFor="infants">Нялх мама</Label>
              <Guest
                disabled={guests === maxGuests}
                name={infants}
                onclick={() => setInfants(infants + 1)}
                plusonclick={() => setInfants(infants > 0 ? infants - 1 : 0)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="pets">Амьтан</Label>
              <Guest
                disabled={guests === maxGuests}
                name={pets}
                onclick={() => setPets(pets + 1)}
                plusonclick={() => setPets(pets > 0 ? pets - 1 : 0)}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
