"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "components/ui/button"
import { useState } from "react";


const getTimeFormat = (hour: number) => {
  const isPM = hour >= 12;
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const period = isPM ? 'PM' : 'AM';
  return `${displayHour}:00 ${period}`;
};

const tags = Array.from({ length: 12 }).map((_, i) => {
  const startHour = i + 10;
  const endHour = startHour + 2; 
  return `${getTimeFormat(startHour)} - ${getTimeFormat(endHour)}`;
});

export function CheckInTime () {
    return (
    <div className="w-[250px] flex flex-col justify-start p-1 space-y-2">
        <div className="">
        <Select>
        <SelectTrigger className="my-4">
        <SelectValue className="flex p-6" placeholder="Select time" />
        </SelectTrigger>
        <SelectContent className="">
        {tags.map((tag, index) => (
        <SelectItem className="flex items-center p-2 border-b border-gray-200 cursor-pointer bg-white" key={index} value={tag}>{tag}</SelectItem>
         ))}
        </SelectContent>
        </Select>
         </div>
    <div className="flex items-center justify-between p-2">
        <p className="underline underline-offset-1">Cancel</p>
        <Button>Save</Button>
    </div>
    </div>
    )
}