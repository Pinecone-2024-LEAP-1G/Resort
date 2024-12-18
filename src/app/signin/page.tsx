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
      <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border-2 p-20">
        <PropertyHeader />
        <p className="text-center text-3xl font-semibold">Нэвтрэх</p>
        <div className="text-lg font-medium text-gray-500">
          Имэйл хаягаа ашиглан нэвтрэн орно уу{" "}
        </div>
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
              toast.message("Имэйлээр амжилттай нэвтэрлээ");
            }}
            type="submit"
            className="bg-cyan-500 px-12 py-4 text-lg font-normal"
          >
            <div className="flex flex-row items-center gap-5">
              <FaGoogle className="h-10 w-10" />
              <p>Google-ээр нэвтрэх</p>
            </div>
          </Button>
          <Button
            className="w-[302px] bg-cyan-500 px-12 py-4 text-lg"
            onClick={() => router.push("/")}
          >
            Буцах
          </Button>
        </div>
      </div>
    </div>
  );
};
export default GoogleSignin;
