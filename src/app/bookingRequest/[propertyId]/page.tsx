import GetProperty from "@/components/PaymentDetail/GetProperty";
import { PaymentDetailSection } from "@/components/PaymentDetail/PaymentDetailSection";

const BookingRequest = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params).propertyId;

  return (
    <div>
      <div className="mx-40 grid w-full grid-cols-2 gap-4">
        <PaymentDetailSection propertyId={propertyId} />
        <div className="sticky top-10 mr-auto flex flex-col items-center justify-start gap-8 p-5">
          <GetProperty propertyId={propertyId} />
<<<<<<< HEAD
          <ReverseCart propertyId={propertyId} text="Edit" />
=======
>>>>>>> 96370d0 (send)
        </div>
      </div>
    </div>
  );
};

export default BookingRequest;
