"use client";
import { Textarea } from "@/components/ui/textarea";
import { ImProfile } from "react-icons/im";
import { Button } from "@/components/ui/button";

const ContactHost = () => {
  return (
    <div className="mx-auto w-[700px]">
      <div className="mb-[50px] mt-[100px] flex justify-between">
        <div className="">
          <p className="text-[22px] font-bold">Contact Ronald & Inese</p>
          <p>Typically responds within an hour</p>
        </div>
        <ImProfile className="h-[40px] w-[40px]" />
      </div>
      <div className="mb-[62px] border-b-2 border-black"></div>
      <div className="">
        <p className="mb-[42px] text-[22px] font-bold">
          Most travelers ask about
        </p>
        <p className="font-semibold">Getting there</p>
        <li>Free parking on the premises.</li>
        <li className="mb-[22px]">
          Check-in time for this home starts at 4:00PM and checkout is at
          11:00AM.
        </li>
        <p className="font-semibold">House details and rules</p>
        <li className="mb-[22px]">No smoking.</li>
        <div>
          <p className="ml-3 text-[16px] font-semibold">
            Price and availability
          </p>
          <li>Get a 5% discount on stays longer than a week.</li>
          <li>Ronald & Ineses home is available from Dec 7-12. Book soon.</li>
          <li>
            Cancel up to 5 days before check-in and get a full refund. After
            that, cancel before check-in and get a 50% refund, minus the first
            night and service fee.
          </li>
          <div className="mb-[32px] mt-[32px] border-b-2 border-black"></div>
        </div>
        <p className="mb-[40px] mt-[40px] text-[22px] font-bold">
          Still have questions? Message the Host
        </p>
        <Textarea
          className="w-[600px]"
          placeholder="hey sir...Type your message here."
        />
        <Button className="mt-[30px] mb-[100px]" variant="outline">
          Send message
        </Button>
      </div>
    </div>
  );
};
export default ContactHost;
