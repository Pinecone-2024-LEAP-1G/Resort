import HostLeftCard from "@/components/HostView/HostLeftCard";
import HostLeftCardSecond from "@/components/HostView/HostLeftCardSecond";
import HostMainContent from "@/components/HostView/HostMainContent";

const Page = async ({ params }: { params: Promise<{ hostId: string }> }) => {
  const hostId = (await params).hostId;

  return (
    <div className="mx-auto flex w-[1400px] gap-[40px]">
      <div className="mt-[120px] h-[230px] w-[500px]">
        <div className="h-[230px] w-[320px] cursor-pointer">
          <HostLeftCard hostId={hostId} />
          <div className="mt-[80px]">
            <HostLeftCardSecond />
          </div>
        </div>
      </div>
      <HostMainContent hostId={hostId} />
    </div>
  );
};
export default Page;
