"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Guest } from "./Guest";
import { ImArrowDown2 } from "react-icons/im";

interface Props {
  adult: number;
  setAdult: (adult: number) => void;
  child: number;
  setChild: (adult: number) => void;
  infants: number;
  setInfants: (adult: number) => void;
  pets: number;
  setPets: (adult: number) => void;
  people?: number;
  limitGuest?: number;
}

export const GustPopover = ({
  adult,
  setAdult,
  child,
  setChild,
  setInfants,
  setPets,
  infants,
  pets,
  people,
  limitGuest,
}: Props) => {
  const [isDisable, setIsDisable] = useState(false);
  const guests = adult + child + infants + pets;
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
              <Label htmlFor="width">Том хүн</Label>
              <Guest
                disabled={isDisable}
                name={adult}
                onclick={() => setAdult(adult + 1)}
                plusonclick={() => setAdult(adult - 1)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4 border-b">
              <Label htmlFor="maxWidth">Хүүхэд</Label>
              <Guest
                name={child}
                onclick={() => setChild(child + 1)}
                plusonclick={() => setChild(child - 1)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4 border-b">
              <Label htmlFor="height">Нялх мама</Label>
              <Guest
                name={infants}
                onclick={() => setInfants(infants + 1)}
                plusonclick={() => setInfants(infants - 1)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Амьтан</Label>
              <Guest
                name={pets}
                onclick={() => setPets(pets + 1)}
                plusonclick={() => setPets(pets - 1)}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
