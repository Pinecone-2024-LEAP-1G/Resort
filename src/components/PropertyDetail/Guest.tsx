import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

type QuantityProps = {
  quantity: number;
  setQuantity: (_newQuantity: number) => void;
  className?: string;
};

export const Guest = ({ quantity, setQuantity, className }: QuantityProps) => {
  return (
    <div className={cn(`flex items-center`, className)}>
      <Button
        className="h-8 w-8 rounded-full bg-white"
        aria-label="Decrease quantity"
        onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
      >
        -
      </Button>
      <p className="flex h-10 w-[45px] items-center justify-center text-center">
        {quantity}
      </p>
      <Button
        className="h-8 w-8 rounded-full bg-white"
        aria-label="Increase quantity"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
    </div>
  );
};
