import moment from "moment";

type Props = {
  address: string;
  checkIn: Date;
  checkOut: Date;
  price: number;
  image: string;
};

export const ReservationCancel = ({
  address,
  checkIn,
  checkOut,
  price,
  image,
}: Props) => {
  return (
    <div className="mx-auto w-auto">
      <div className="">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
          }}
          className="h-[300px] w-[290px] rounded-xl border-2 bg-cover"
        ></div>
        <div className="h-[200px] w-[380px]">
          <p className="mt-[20px] text-[20px] font-bold">{address}</p>
          <p className="mt-[10px] text-[14px]">
            {moment(checkIn).format("L")}-{moment(checkOut).format("L")}
          </p>
          <p className="mb-[10px] text-[17px]">{price}</p>
          <button className="h-[35px] w-[220px] items-center rounded-lg bg-[#f2712c] text-white hover:bg-[#eb834b]">
            Захиалга цуцлах
          </button>
        </div>
      </div>
    </div>
  );
};
