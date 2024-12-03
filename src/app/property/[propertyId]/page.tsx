import { PropertyDetail } from "@/components/PropertyDetail/PropertyDetail";

const Page = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params).propertyId;

  return <PropertyDetail propertyId={propertyId} />;
};

export default Page;
