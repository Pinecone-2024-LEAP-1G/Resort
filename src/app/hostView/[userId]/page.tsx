import HostMainContent from "@/components/HostView/HostMainContent";

const Page = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const userId = (await params).userId;

  return (
    <div className="mx-auto w-[1400px] gap-[40px]">
      <HostMainContent userId={userId} />
    </div>
  );
};
export default Page;
