"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Хэрэглэгчийн нэр дор хаяж 5 тэмдэгт байх ёстой",
  }),
  useremail: z.string().email({
    message: "Имайл хаягын утга буруу байна",
  }),
});
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const GoogleSignin = () => {
  const router = useRouter();
  const signinGoogle = () => {
    signIn("google");
    toast.message(
      "Амжилттай нэвтэрлээ, Буцах товч дээр дарж нүүр хуудасруу очно уу",
    );
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.message("Та амжилттай нэвтэрлээ");
  }
  return (
    <div className="mx-auto flex h-screen w-fit flex-col items-center justify-center">
      <div className="flex flex-col justify-center gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-cyan-500 text-white" variant="outline">
              Бүртгүүлэх
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-96">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          className="w-fit"
                          placeholder="Нэрээ оруулна уу"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="useremail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          className="w-fit"
                          placeholder="Имэйл хаягаа оруулна уу"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Илгээх</Button>
              </form>
            </Form>
          </PopoverContent>
        </Popover>
        <Button
          onClick={signinGoogle}
          type="submit"
          className="bg-cyan-500 text-sm font-normal"
        >
          <div className="flex flex-row gap-5">
            <FaGoogle />
            <p> "Google" -ээр нэвтрэх</p>
          </div>
        </Button>
        <Button className="bg-cyan-500" onClick={() => router.push("/")}>
          Буцах
        </Button>
      </div>
    </div>
  );
};
export default GoogleSignin;
