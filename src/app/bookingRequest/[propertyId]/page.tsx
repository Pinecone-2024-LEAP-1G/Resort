import { PaymentDetailSection } from "@/components/PaymentDetail/PaymentDetailSection";

const BookingRequest = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params).propertyId;

  return <PaymentDetailSection propertyId={propertyId} />;
};

export default BookingRequest;
