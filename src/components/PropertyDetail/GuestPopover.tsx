import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Guest } from "./Guest";
import { BottomArrow } from "components/icons/BottomArrow";

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
              <Guest quantity={quanity} setQuantity={updateQuantity} />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Huuhed</Label>
              <Guest quantity={quanity} setQuantity={updateQuantity} />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Baga nasnii huuhed</Label>
              <Guest quantity={quanity} setQuantity={updateQuantity} />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Amitan</Label>
              <Guest quantity={quanity} setQuantity={updateQuantity} />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
