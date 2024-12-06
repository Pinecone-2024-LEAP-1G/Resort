import HostMainContent from "@/components/HostView/HostMainContent";

const Page = async ({ params }: { params: Promise<{ hostId: string }> }) => {
  const hostId = (await params).hostId;

  return (
    <div className="mx-auto flex w-[1400px] gap-[40px]">
      <div className="mt-[120px] h-[230px] w-[500px]">
        <div className="h-[230px] w-[320px] cursor-pointer"></div>
      </div>
      <HostMainContent hostId={hostId} />
    </div>
  );
};
export default Page;
