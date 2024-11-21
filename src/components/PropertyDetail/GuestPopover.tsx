import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Guest } from "./Guest";

export const GustPopover = () => {
  const [quanity, setQuantity] = useState(0);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={
            "mt-4 flex h-14 w-[300px] flex-col items-start justify-start px-4 py-1 pl-3 text-left font-normal"
          }
          variant="outline"
        >
          <p>Зочдын тоо</p>
          <p>0 zochin</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-gray-400">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Tom hun</Label>
              <Guest quantity={quanity} setQuantity={updateQuantity} />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
