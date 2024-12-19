import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyClick } from "@/app/become-host/page";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import categoryIcon from "@/util/findCategoryIcon";
import { useSession } from "next-auth/react";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Dot } from "lucide-react";
import { PropertyHeader } from "./PropertyHeader";

export const CreateProperty = ({ value, handleBack }: PropertyClick) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const text = value.categoryname;
  const icons = categoryIcon({ text });
  const createProperty = async () => {
    await axios
      .post(`/api/properties`, {
        address: value.address,
        description: value.description,
        guests: value.guests,
        price: value.price,
        userId: session?.user.id,
        categoryId: value?.categoryId,
        propertyPictures: value?.propertyPictures,
        totalBedrooms: value?.totalBedrooms,
        totalBathrooms: value?.totalBathrooms,
        email: session?.user.email,
        cleaningFee: value?.cleaningFee,
      })
      .then(function (response) {
        if (response.data && !loading)
          toast.success("Tanii bvrtgel amjilttai vvslee.");
        setTimeout(() => {
          router.push("/");
        }, 2000);
        setLoading(true);
      })

      .catch(function (error) {
        console.log(error);
      });
  };
  const propertyPictures = value.propertyPictures;
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <PropertyHeader />
      <div className="mx-auto">
        <Card className="w-[1200px] border-none shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Таны оруулсан газрын мэдээлэл
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="">
              <div className="pl-5 text-xl">{value.address}</div>
            </div>
            <div className="flex h-[530px] gap-2">
              {loading ? (
                <Skeleton className="w-1/2 rounded-xl" />
              ) : (
                <div
                  className="relative flex-1 rounded-xl"
                  style={{
                    backgroundImage: `url(${propertyPictures?.[0]})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              )}

              <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-2">
                {loading ? (
                  <Skeleton className="rounded-xl" />
                ) : (
                  <div
                    className="h-[260px] w-[275px] rounded-xl"
                    style={{
                      backgroundImage: `url(${propertyPictures?.[1]})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}

                {loading ? (
                  <Skeleton className="rounded-xl" />
                ) : (
                  <div
                    className="h-[260px] w-[275px] rounded-xl"
                    style={{
                      backgroundImage: `url(${propertyPictures?.[2]})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}
                {loading ? (
                  <Skeleton className="rounded-xl" />
                ) : (
                  <div
                    className="h-[260px] w-[275px] rounded-xl"
                    style={{
                      backgroundImage: `url(${propertyPictures?.[3]})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}

                {loading ? (
                  <Skeleton className="rounded-xl" />
                ) : (
                  <div
                    className="h-[260px] w-[275px] rounded-xl"
                    style={{
                      backgroundImage: `url(${propertyPictures?.[4]})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}
              </div>
            </div>
            <div>
              <div className="pl-3 text-xl font-medium">
                {value.description}
              </div>
              <div className="flex flex-row gap-40 pl-3 pt-3">
                <div className="flex flex-row items-center gap-2">
                  <p className="text-xl font-semibold">Сууцны төрөл:</p>
                  <div>{icons?.icon}</div>{" "}
                  <p className="text-xl">{value.categoryname}</p>{" "}
                </div>
              </div>
              <div className="flex flex-row items-center pl-3 pt-3">
                <p className="flex flex-row text-gray-500">
                  Хүний тоо: {value.guests}
                  <Dot />
                </p>
                <p className="flex flex-row text-gray-500">
                  Унтлагны өрөө: {value.totalBedrooms} <Dot />
                </p>
                <p className="flex flex-row text-gray-500">
                  Угаалгын өрөө: {value.totalBathrooms}
                </p>
              </div>
              <div className="flex flex-row gap-[98px] py-3 pl-3">
                <div className="flex gap-1">
                  <a className="text-xl">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "MNT",
                    }).format(parseFloat(value.price?.toString() ?? "0"))}
                  </a>
                  /<a className="text-xl">Түрээсийн үнэ </a>
                </div>
                <div className="flex gap-1">
                  <a className="text-xl">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "MNT",
                    }).format(parseFloat(value.cleaningFee?.toString() ?? "0"))}
                  </a>
                  /<a className="text-xl">Цэвэрлэгээний үнэ </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-center"></p>
              <div className="flex justify-center">
                <Button
                  disabled={loading}
                  className="w-[250px] bg-cyan-500 p-6"
                  onClick={createProperty}
                >
                  {loading && <LoaderCircle className="animate-spin" />}
                  Баталгаажуулах
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>{" "}
      <div className="border-t px-6 py-4">
        <button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Буцах
        </button>
      </div>
    </div>
  );
};
