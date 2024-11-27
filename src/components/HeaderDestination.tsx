import Image from "next/image";

export const PropertyLocationSearch = ({ address }: { address: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <Image src={"/"} width={500} height={500} alt="img" />
      <p>{address}</div>
    </div>
  );
};
