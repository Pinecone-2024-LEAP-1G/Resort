"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GoogleSignin = () => {
  const [googleShow, setGoogleShow] = -useState(false);
  const router = useRouter();
  return (
    <div className="mx-auto flex min-h-screen w-fit flex-col items-center justify-center">
      <div className="flex flex-col gap-3">
        <Button
          onClick={() => signIn("google")}
          type="submit"
          className="bg-cyan-500 text-sm font-normal"
        >
          Google signin
        </Button>
        <Button className="bg-cyan-500" onClick={() => router.push("/")}>
          Буцах
        </Button>
      </div>
    </div>
  );
};
export default GoogleSignin;
