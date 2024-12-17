import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyClick } from "@/app/become-host/page";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import categoryIcon from "@/util/findCategoryIcon";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export const CreateProperty = ({ value, handleBack }: PropertyClick) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const text = value.categoryname;
  const icons = categoryIcon({ text });

  const createProperty = async () => {
    setLoading(true);
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
        title: value?.title,
      })
      .then(function (response) {
        if (response.data.message === "success")
          toast.success("Tanii bvrtgel amjilttai vvslee.");
        setTimeout(() => {
          router.push("/");
        }, 4000);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-[600px] p-6">
          <CardHeader className="text-center">
            <CardTitle>Таны бүтээгдэхүүний мэдээлэл</CardTitle>
          </CardHeader>
          <CardContent className="grid">
            <div className="text-2xl">{value.address}</div>
            <div className="text-lg font-bold">{value.description}</div>
            <div className="grid grid-cols-3 gap-4">
              {value.propertyPictures.map((picture, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${picture})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="h-20 w-20 rounded-lg"
                  ></div>
                );
              })}
            </div>
            <div className="flex flex-col">
              <p className="text-center"></p>
              <div className="flex justify-center">
                <Button
                  disabled={loading}
                  className="w-[200px]"
                  onClick={createProperty}
                >
                  {loading && <LoaderCircle className="animate-spin" />} Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 flex items-center justify-between border-t px-6 py-4">
        <button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};
