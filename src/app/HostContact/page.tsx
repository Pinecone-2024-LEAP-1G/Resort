"use client";
import { Textarea } from "@/components/ui/textarea";
import { ImProfile } from "react-icons/im";
import { Button } from "@/components/ui/button";

const ContactHost = () => {
  return (
    <div className="mx-auto w-[700px]">
      <div className="mb-[50px] mt-[100px] flex justify-between">
        <div className="">
          <p className="text-[22px] font-bold">
            Хөдөө гарья Баг Хамт Олон Байна аа ХӨ
          </p>
          <p className="mt-[50px]">
            Хэрэв тус сайт-н талаар санал хүсэлт байвал бидэнд заавал
            мэдэгдээрэй бид таны асуудлыг түргэн шуурхай шийдвэрлэхээр ажиллаж
            байна{" "}
          </p>
        </div>
        <ImProfile className="h-[40px] w-[40px]" />
      </div>
      <div className="mb-[62px] border-b-2 border-black"></div>
      <div className="">
        <p className="mb-[42px] text-[22px] font-bold">
          Танд туслахад шаардлагатай утасны дугаар
        </p>
        <p className="font-semibold">Үйлчилгээтэй холбоотой</p>
        <li>96818166 сайт тай холбоотой Санал Хүсэлт 11:00AM - 18:00PM</li>
        <li className="mb-[22px]">
          96818166 Гомдол Санал Хүсэлт Хариуцсан ажилтан БОЛД 11:00AM - 18:00PM
        </li>
        <div>
          <p className="ml-3 text-[16px] font-semibold"></p>

          <p className="font-semibold">Гомдол Санал Хүсэлт</p>
          <li>
            96818166 Гомдол Санал Хүсэлт Хариуцсан ажилтан БОЛД 11:00AM -
            18:00PM
          </li>
          <li>
            96818166 Гомдол Санал Хүсэлт Хариуцсан ажилтан БОЛД 11:00AM -
            18:00PM
          </li>
          <div className="mb-[32px] mt-[32px] border-b-2 border-black"></div>
        </div>
        <p className="mb-[40px] mt-[40px] text-[22px] font-bold">
          Та шинэ бүтээгдэхүүн, үйлчилгээ болон хямдрал, урамшууллын мэдээллийг
          хамгийн түрүүнд авч байхыг хүсвэл имэйл хаягаа бүртгүүлээрэй.
        </p>
        <Textarea className="w-[600px]" placeholder="Мэдээлэл авч байх...." />
        <Button className="mb-[100px] mt-[30px]" variant="outline">
          Илгээх
        </Button>
      </div>
    </div>
  );
};
export default ContactHost;
