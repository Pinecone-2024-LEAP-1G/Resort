'use client'

import { CgProfile } from "react-icons/cg";
  


const HostViewCardSecond = () =>{
    return(
            <div className="flex w-[320px] h-[230px] border-2 rounded-2xl ">
                <div className="mx-auto my-auto">
                <CgProfile className="w-[70px] h-[70px] "/>
                    <div className="text-[30px] ml-[5px]">NIKI</div>
                    <div className="text-[16px] ml-[15px] ">Host</div>
                </div>
                <div className="mx-auto mt-[15px]">
                    <div>
                        <p className="font-bold text-2xl mt-[10px]">48</p>
                        <p className="text-xs ">Reviews</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-[10px]">4.91</p>
                        <p className="text-xs">Rating</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-[10px]">7</p>
                        <p className="text-xs">Years Hosting</p>
                    </div>
                </div>
            </div>
    )
}
export default HostViewCardSecond