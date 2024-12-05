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
      <div className="w-full grid grid-cols-2 mx-40 gap-4">
        <PaymentDetailSection propertyId={propertyId} />
        <div className="flex flex-col mr-auto p-5 justify-start items-center sticky top-10 gap-8">
          <GetProperty propertyId={propertyId} />
          <ReverseCart text="Edit" />
        </div>
        <RulesAndPolicy />
      </div>
    </div>
  );
};

export default BookingRequest;
