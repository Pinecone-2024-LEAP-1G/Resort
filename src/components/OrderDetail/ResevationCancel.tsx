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
    <div className="mx-auto">
      <div className="h-[415px] w-[290px] gap-5 rounded-xl shadow-2xl">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
          }}
          className="h-[300px] w-[290px] rounded-xl border-2 bg-cover"
        ></div>
        <div className="w-[380px]">
          <p className="ml-[20px] mt-[10px] text-[20px] font-bold">{address}</p>
          <p className="ml-[20px] mt-[5px] text-lg">
            {moment(checkIn).format("L")}-{moment(checkOut).format("L")}
          </p>
          <p className="ml-[20px] mt-[8px] text-[17px] text-green-500">
            {new Intl.NumberFormat().format(Number(price))}₮
          </p>
        </div>
      </div>
    </div>
  );
};
