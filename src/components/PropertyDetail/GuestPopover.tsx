import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Guest } from "./Guest";
import { BottomArrow } from "components/icons/BottomArrow";

interface Props {
  adult: number;
  setAdult: (adult: number) => void;
  child: number;
  setChild: (adult: number) => void;
  infants: number;
  setInfants: (adult: number) => void;
  pets: number;
  setPets: (adult: number) => void;
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
}: Props) => {
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
            <p>0 zochin</p>
          </div>
          <BottomArrow />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-gray-400">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Tom hun</Label>
              <Guest
                name={adult}
                onclick={() => setAdult(adult + 1)}
                plusonclick={() => setAdult(adult - 1)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Huuhed</Label>
              <Guest
                name={child}
                onclick={() => setChild(child + 1)}
                plusonclick={() => setChild(child - 1)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Baga nasnii huuhed</Label>
              <Guest
                name={infants}
                onclick={() => setInfants(adult + 1)}
                plusonclick={() => setInfants(infants - 1)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Amitan</Label>
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
