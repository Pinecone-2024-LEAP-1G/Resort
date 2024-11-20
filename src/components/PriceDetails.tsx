import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Star } from "lucide-react";
import { Medal } from "lucide-react";
import { Dot } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

export function PriceDetails() {
  return (
    <div className="p-6 border rounded-2xl gap-4 h-[360px] w-[456px]">
      <div className="flex flex-row mb-4 gap-4">
        <div className="h-[104px] w-[104px] bg-gray-600 rounded-xl items-center"></div>
        <div className=" flex flex-col gap-1 justify-center ">
          <p className="text-lg font-medium">
            Ba hao Residence x SANTIPHAP ROOM
          </p>
          <p>Room in townhouse</p>
          <div className="flex flex-row text-sm items-center gap-1">
            <Star className="w-3 h-3 fill-black" />
            <p className="font-semibold">4.94</p>
            <p>(434 reviews)</p>
            <Dot className="w-5 h-5 fill-black" />
            <Medal className="w-3 h-3 fill-black" />
            <p>Superhost</p>
          </div>
        </div>
      </div>
      <div className="border-y py-4">
        <h3 className="text-xl font-medium pb-3">Price details</h3>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>$137.61 x 1 night</p>
            <p>$137.61</p>
          </div>
          <div className="flex justify-between">
            <HoverCard>
              <HoverCardTrigger asChild>
                <p className="underline underline-offset-1">Cleaning fee</p>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm">
                      One-time fee charged by host to cover the cost of cleaning
                      their space.{" "}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <p>$137.61</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <p>
          Total
          <DropdownMenu>
            <DropdownMenuTrigger className="underline underline-offset-1">
              (USD)
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[]">
              <DropdownMenuLabel>Choose a currency</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Australian dollar - $</DropdownMenuItem>
              <DropdownMenuItem>Brazilian real - R$</DropdownMenuItem>
              <DropdownMenuItem>Bulgarian lev - лв.</DropdownMenuItem>
              <DropdownMenuItem>Canadian dollar - $</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </p>

        <p>$137.61</p>
      </div>
    </div>
  );
}
