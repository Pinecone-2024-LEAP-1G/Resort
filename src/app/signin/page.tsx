"use client";
import { PropertyHeader } from "@/components/BecomeHost/PropertyHeader";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

const GoogleSignin = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex h-screen w-fit flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border-2 p-20">
        <PropertyHeader />
        <p className="text-center text-3xl font-semibold">Нэвтрэх</p>
        <a className="text-lg font-medium text-gray-500">
          Имэйл хаягаа ашиглан нэвтрэн орно уу{" "}
        </a>
        <Button
          onClick={() => {
            signIn("google");
            toast.message(
              "Амжилттай нэвтэрлээ, Буцах товч дээр дарж нүүр хуудасруу очно уу",
            );
            router.push("/");
          }}
          type="submit"
          className="bg-cyan-500 px-12 py-4 text-xl font-normal"
        >
          <div className="flex flex-row items-center gap-5">
            <FaGoogle className="h-10 w-10" />
            <p>Google-ээр нэвтрэх</p>
          </div>
        </Button>
        <Button
          className="w-[310px] bg-cyan-500 px-12 py-4 text-xl"
          onClick={() => router.push("/")}
        >
          Буцах
        </Button>
      </div>
    </div>
  );
};
export default GoogleSignin;
