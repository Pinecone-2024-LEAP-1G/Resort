'use client'
import { TiMessages } from "react-icons/ti";
import HostViewCard from "@/components/HostViewCard"
import { Button } from "@/components/ui/button"
import { GiBackpack } from "react-icons/gi";


const HostViewCardComponent = () =>{
    return(
        <div className="flex mx-auto w-[1200px]">
            <div className="w-[500px] h-[230px]">
                <p className="font-bold mt-[40px] mb-[30px]">Meet your Host</p>
                <div className="w-[320px] h-[230px]">
                    <HostViewCard />
                </div>
                <div className="flex mt-5 mb-5 items-center">
                    <div>
                        <TiMessages className="w-[30px] h-[30px] ml-[10px]" />
                    </div>
                    <p className="text-[17px] ml-[19px]">Speaks English and Greek</p>
                </div>
                <div className="">
                     <p className="text-s w-[350px]">Speaks English and Greek Speaks English and Greek Speaks English and Greek Speaks English and Greek..</p>
                     <Button className="w-[154px] h-[48px] font-extrabold text-[19px]"  variant="link">Show more</Button>
                </div>
            </div>
            <div className="mt-[100px] w-[500px]">
                <p className="font-bold">Co-hosts</p>
                <div className="flex">
                <GiBackpack className="w-[35px] h-[35px]"/>
                    <p>Holihouse</p>
                </div>
                <p className="font-bold mt-5">Host details</p>
                <p className="text-xs mt-5">Responce rate: 100%</p>
                <p className="text-xs mt-5">Responds within an hour</p>
                <Button className="bg-black text-white mt-4" variant="outline">Message Host</Button>
                <p className="text-xs mt-5">Registration number:99117575</p>
                <div className="border-top-width-8px;">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default HostViewCardComponent