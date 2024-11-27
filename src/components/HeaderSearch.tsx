"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { PropertyLocationSearch } from "./HeaderDestination";
type Property = {
  _id: string;
  address: string;
  description: string;
};
export const HeaderSearch = () => {
  const [propertiesdata, setPropertiesdata] = useState<Property[]>([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/properties",
        );
        Response.json({ response: response });
        setPropertiesdata(response?.data);
      } catch (error) {
        Response.json({ error: error });
      }
    };
    fetchProperties();
  }, []);
  console.log(propertiesdata);
  return (
    <div>
      <div
        onBlur={() => setShow(false)}
        onFocus={() => setShow(true)}
        className="flex w-[218px] flex-col rounded-full border-2 px-6 py-1"
      >
        Where
        <input placeholder="Search destinations" />
      </div>{" "}
      {show && (
        <div className="fixed bottom-0 left-0 right-0 top-36 z-30 flex justify-center">
          <div className="h-72 w-80 rounded-2xl border-2 bg-white p-10">
            {/* <div className="flex flex-col gap-4"> */}
            <h4 className="font-medium leading-none">Search Region</h4>
            <PropertyLocationSearch address={"Arkhangai"} />
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
    // <Popover open={open} onOpenChange={setOpen}>
    //   <PopoverTrigger asChild>
    //     <Button
    //       variant="outline"
    //       role="combobox"
    //       aria-expanded={open}
    //       className="w-[200px] justify-between"
    //     >
    //       {value
    //         ? properties?.find((property) => property?.address === value)
    //             ?.address
    //         : "Select framework..."}
    //       <ChevronsUpDown className="opacity-50" />
    //     </Button>
    //   </PopoverTrigger>
    //   <PopoverContent className="w-[200px] p-0">
    //     <Command>
    //       <CommandInput placeholder="Search framework..." />
    //       <CommandList>
    //         <CommandEmpty>No framework found.</CommandEmpty>
    //         <CommandGroup>
    //           {properties?.map((property) => (
    //             <CommandItem
    //               key={property?._id}
    //               value={property?.address}
    //               onSelect={(currentValue) => {
    //                 setValue(currentValue === value ? "" : currentValue);
    //                 setOpen(false);
    //               }}
    //             >
    //               {property.address}
    //               <Check
    //                 className={cn(
    //                   "ml-auto",
    //                   value === property.address ? "opacity-100" : "opacity-0",
    //                 )}
    //               />
    //             </CommandItem>
    //           ))}
    //         </CommandGroup>
    //       </CommandList>
    //     </Command>
    //   </PopoverContent>
    // </Popover>
  );
};
