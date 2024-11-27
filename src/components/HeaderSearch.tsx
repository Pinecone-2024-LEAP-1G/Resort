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
type Property = {
  _id: string;
  address: string;
};
export const HeaderSearch = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/properties",
        );
        // console.log(response.data);
        setProperties(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProperties();
  }, []);
  console.log(properties);
const 
  return (
    <div
      onClick={handleSearch}
      className="flex w-[218px] flex-col rounded-full border-2 px-6 py-1"
    >
      Where<input placeholder="Search destinations"></input>
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
