import { PropertyHeader } from "./PropertyHeader";
import { Button } from "../ui/button";
import { PropertyClick } from "@/app/become-host/page";
import { useRouter } from "next/navigation";

export const AboutYourPlace = ({ handleNext }: PropertyClick) => {
  const router = useRouter();
  return (
    <div className="mx-auto flex min-h-screen flex-col justify-between">
      <PropertyHeader />
      <div
        className="relative mx-auto flex h-[724px] w-[628px] flex-col items-center rounded-3xl px-6 md:flex-row md:items-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/59/be/d2/59bed276e7ed42bfdf342db1a43d0f4a.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-10 flex flex-col gap-6">
          <h1 className="mt-2 text-4xl font-bold leading-tight text-white">
            Өөрийн газрыг танилцуулна уу
          </h1>
          <p className="mt-4 text-balance text-2xl text-white">
            Энэ алхамд бид таны ямар төрлийн үл хөдлөх хөрөнгөтэйг асуух бөгөөд
            зочид бүхэл бүтэн байрыг эсвэл зөвхөн нэг өрөөг захиалах эсэхийг
            тодруулна. Дараа нь байршил болон хэдэн зочин хүлээн авах боломжтойг
            бидэнд мэдэгдэнэ үү.
          </p>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between border-t px-6 py-4">
        <button
          onClick={() => router.push("/")}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Буцах
        </button>
        <Button
          onClick={handleNext}
          aria-label="Proceed to the next step"
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Үргэлжүүлэх
        </Button>
      </div>
    </div>
  );
};
