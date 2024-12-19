import { HostProperties } from "@/components/HostProperties/HostProperties";

const hostProperty = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const userId = (await params).userId;
  return (
    <div>
      <HostProperties userId={userId} />
    </div>
  );
};
export default hostProperty;
