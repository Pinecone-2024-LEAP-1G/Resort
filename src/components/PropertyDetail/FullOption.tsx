import { FirePit, Pets, Shower, Wifi } from "../icons";

export const FullOption = () => {
  return (
    <div className="mt-4 text-gray-700">
      <h1 className="text-xl font-bold">Тухайн газар дахь боломжит зүйлс</h1>
      <div className="mt-4 flex gap-2">
        <Wifi />
        <p>wifi</p>
      </div>
      <div className="mt-2 flex gap-2">
        <Pets />
        <p>Амьтан орох боломжтой</p>
      </div>
      <div className="mt-2 flex gap-2">
        <Shower />
        <p>Халуун ус</p>
      </div>
      <div className="mt-2 flex gap-2">
        <FirePit />
        <p>Ил гал </p>
      </div>
      <div className="mt-4 h-[48px] w-[207px] rounded-lg border-2 border-black p-2 text-center">
        Бүгдийг харах
      </div>
    </div>
  );
};
