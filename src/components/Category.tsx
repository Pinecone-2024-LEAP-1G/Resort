"use client"
import categoryIcon from "@/util/findCategoryIcon"
import { useState } from "react"

type Category={
text: string,
onMouseEnter:()=>void,
onMouseLeave:()=>void
}


export const Category = (props: Category)=>{

    const icons = categoryIcon(props)
    return  <div className="flex flex-col items-center gap-1 p-5" >
    <div className="items-center text-gray-600" >{icons?.icon}</div>
    <p className="text-center text-gray-600 text-xs font-sans" onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>{props.text}</p>
  </div>
}