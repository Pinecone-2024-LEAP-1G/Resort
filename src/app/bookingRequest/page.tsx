"use client";

import { PaymentDetail } from "@/components/PaymentDetail/PaymentDetail";
import { PaymentHeader } from "@/components/PaymentDetail/PaymentHeader";
import { PriceDetails } from "@/components/PaymentDetail/PriceDetails";
import { RulesAndPolicy } from "@/components/PaymentDetail/RulesAndPolicy";

const BookingRequest = () => {
  return (
    <div>
      <PaymentHeader />
      <div className="mx-20 grid grid-cols-2">
        <PaymentDetail />
        <div className="sticky top-10 ml-[92px]">
          <PriceDetails />
        </div>
        <RulesAndPolicy />
      </div>
    </div>
  );
};

export default BookingRequest;
