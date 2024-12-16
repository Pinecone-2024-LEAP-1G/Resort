import { MyReservations } from "@/components/HostProperties/MyReservations";

const Page = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params).propertyId;
  return (
    <div>
      <MyReservations propertyId={propertyId} />
    </div>
  );
};
export default Page;
