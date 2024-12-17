export const ReservationCancel = () => {
  return (
    <div className="mx-auto w-auto">
      <div>
        <div className="mt-[30px] text-[33px] font-bold">Аялал</div>
        <div className="mb-[20px] mt-[30px] text-[18px]">
          Миний захиалсан аялалууд :
        </div>
      </div>
      <div className="">
        <div className="h-[300px] w-[290px] rounded-xl border-2 bg-[url]"></div>
        <div className="h-[200px] w-[380px]">
          <p className="mt-[20px] text-[20px] font-bold">Аймаг</p>
          <p className="mt-[10px] text-[14px]">Хэдэн өдөрийн аялал</p>
          <p className="mb-[10px] text-[17px]">Үнэ</p>
          <button className="h-[35px] w-[220px] items-center rounded-lg bg-[#f2712c] text-white hover:bg-[#eb834b]">
            Захиалга цуцлах
          </button>
        </div>
      </div>
    </div>
  );
};
