import HostMainContent from "@/components/HostView/HostMainContent";

const Page = async ({ params }: { params: Promise<{ hostId: string }> }) => {
  const hostId = (await params).hostId;

  return (
    <div className="mx-auto w-[1400px] gap-[40px]">
      <HostMainContent hostId={hostId} />
    </div>
  );
};
export default Page;
