import { MyProperties } from "@/components/HostProperties/MyProperties";

const hostProperties = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const userId = (await params).userId;
  return (
    <div>
      <MyProperties userId={userId} />
    </div>
  );
};
export default hostProperties;
