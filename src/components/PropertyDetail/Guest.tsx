import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { FormEventHandler } from "react";

export type QuantityProps = {
  name?: number;
  className?: string;
  onclick: () => void;
  plusonclick: () => void;
};

export const Guest = ({
  plusonclick,
  onclick,
  name,
  className,
}: QuantityProps) => {
  return (
    <div className={cn(`flex items-center`, className)}>
      <Button
        className="h-8 w-8 rounded-full bg-white"
        aria-label="Decrease quantity"
        onClick={plusonclick}
      >
        -
      </Button>
      <p className="flex h-10 w-[45px] items-center justify-center text-center">
        {name}
      </p>
      <Button
        className="h-8 w-8 rounded-full bg-white"
        aria-label="Increase quantity"
        onClick={onclick}
      >
        +
      </Button>
    </div>
  );
};
