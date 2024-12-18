import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleMinus, CirclePlus, Search } from "lucide-react";
import { PopoverClose } from "@radix-ui/react-popover";

type SearchProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hover: string;
  onClick: () => void;
  guests: number;
  decrease: () => void;
  increase: () => void;
};

export function PopoverDemo({
  onMouseEnter,
  onMouseLeave,
  hover,
  onClick,
  guests,
  decrease,
  increase,
}: SearchProps) {
  return (
    <div
      className={`flex w-[218px] flex-row items-center justify-center rounded-full ${hover}`}
    >
      <Popover>
        <PopoverTrigger asChild>
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`ml-7 flex w-[234px] flex-col items-start justify-center rounded-full ${hover}`}
          >
            Зочдын тоо оруулах
          </button>
        </PopoverTrigger>
        <PopoverContent className="flex w-[380px] flex-col rounded-2xl px-7 py-8">
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p>Зочдын тоо</p>
              <p className="text-sm text-gray-400">
                Та хэдэн хүний сууц хайж байна вэ?
              </p>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <CirclePlus onClick={increase} />
              {guests}
              <CircleMinus onClick={decrease} />
            </div>
          </div>
          <PopoverClose />
        </PopoverContent>
      </Popover>
      <div
        onClick={onClick}
        className="mr-5 flex gap-1 rounded-full bg-cyan-500 px-4 py-3 text-white"
      >
        <Search />
      </div>
    </div>
  );
}
