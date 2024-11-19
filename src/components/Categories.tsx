"use client"
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "./Category";
type CategoriesState=Category[]
type Category={
  name: string;
  icon?: JSX.Element;
}


export const Categories = () => {
   const [categories, setCategories]=useState<CategoriesState>([])
   const [scrollButton, setScrollButton]=useState(1)
   const[hover, setHover]=useState<string | null>(null)
  const backCategory=()=>{
    if (categories.length >= 0)
     return setScrollButton((prev)=>prev-1)
  }

  const nextCategory=()=>{
    setScrollButton((prev)=>prev+1)
  }
 


  const getCategories=async()=>{
    try { const response= await axios.get("http://localhost:3000/api/categories")
       Response.json({categories})
       setCategories(response.data)

    } catch (error) 
    {Response.json({error:error});     
    }
  }

  useEffect(()=>{
    getCategories()
  }, [])

  return (<div className="flex items-center ">
    <CircleChevronLeft onClick={backCategory}/>
    <ScrollArea className="w-screen">
      <div className="flex flex-row gap-8">
        {" "}
        {categories.map((data, index) => {
          return <Category onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)} key={index} text={data.name}/>
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    <CircleChevronRight onClick={nextCategory} className=" "/>
    </div>
  );
};
