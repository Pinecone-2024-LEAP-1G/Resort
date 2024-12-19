import { HostReservations } from "@/components/HostProperties/HostReservations";

const Page = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params).propertyId;

  return (
    <div>
      <HostReservations propertyId={propertyId} />
    </div>
  );
};
export default Page;
