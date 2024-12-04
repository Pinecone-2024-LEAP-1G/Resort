import GetProperty from "@/components/PaymentDetail/GetProperty";
import { PaymentDetailSection } from "@/components/PaymentDetail/PaymentDetailSection";
import { RulesAndPolicy } from "@/components/PaymentDetail/RulesAndPolicy";
import { ReverseCart } from "@/components/PropertyDetail/ReverseCart";

const BookingRequest = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params).propertyId;

  return (
    <div>
      <div className="w-full mx-20 grid grid-cols-2">
        <PaymentDetailSection propertyId={propertyId} />
        <div>
          <GetProperty propertyId={propertyId} />
          <ReverseCart text="Edit" />
        </div>
        <RulesAndPolicy />
      </div>
    </div>
  );
};

export default BookingRequest;
