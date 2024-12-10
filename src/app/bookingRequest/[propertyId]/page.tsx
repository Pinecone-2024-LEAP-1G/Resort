import GetProperty from "@/components/PaymentDetail/GetProperty";
import { PaymentDetailSection } from "@/components/PaymentDetail/PaymentDetailSection";
import { ReverseCart } from "@/components/PropertyDetail/ReverseCart";

const BookingRequest = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params).propertyId;

  return <PaymentDetailSection propertyId={propertyId} />;
};

export default BookingRequest;
