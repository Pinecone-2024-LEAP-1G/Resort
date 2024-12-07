import moment from "moment";

type Order = {
  adress: string;
  from: Date;
  to: Date;
  image: string;
  description: string;
  totalPrice: number;
};

export const OrderProps = ({
  adress,
  from,
  to,
  image,
  description,
  totalPrice,
}: Order) => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">{adress}</h1>
      <div className="flex text-base">
        <p> {moment(from).format("ll")}-</p>
        <p> {moment(to).format("ll")}</p>
      </div>

      <div className="mt-4 flex justify-between rounded-lg border p-[24px] shadow-xl">
        <div
          className="h-[80px] w-[80px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-base font-bold text-gray-700">{description}</h3>
        </div>
        <div>
          <p>{new Intl.NumberFormat().format(totalPrice)}₮</p>
        </div>
      </div>
    </div>
  );
};
