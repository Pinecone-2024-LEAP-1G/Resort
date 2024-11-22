import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { FormEventHandler } from "react";

export type QuantityProps = {
  name?: number;
  className?: string;
  onclick: () => void;
  plusonclick: () => void;
  disabled?: boolean;
};

export const Guest = ({
  plusonclick,
  onclick,
  name,
  className,
  disabled,
}: QuantityProps) => {
  return (
    <div className={cn(`flex items-center gap-4`, className)}>
      <Button
        
        className="h-8 w-8 rounded-full border bg-white text-black"
        aria-label="Decrease quantity"
        onClick={plusonclick}
      >
        -
      </Button>
      <p className="flex h-10 w-[45px] items-center justify-center text-center">
        {name}
      </p>
      <Button
      disabled={disabled}
        className="h-8 w-8 rounded-full border bg-white text-black"
        aria-label="Increase quantity"
        onClick={onclick}
      >
        +
      </Button>
    </div>
  );
};
