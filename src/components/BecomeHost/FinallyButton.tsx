import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyClick } from "@/app/become-host/page";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import categoryIcon from "@/util/findCategoryIcon";
import { useSession } from "next-auth/react";

export const FinallyButton = ({ value, handleBack }: PropertyClick) => {
  const router = useRouter();
  const { data: session } = useSession();
  const text = value.categoryname;
  const icons = categoryIcon({ text });
  console.log(value.propertyPictures);
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
  console.log(value);
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-[600px] p-6">
          <CardHeader className="text-center">
            <CardTitle>Таны бүтээгдэхүүний мэдээлэл</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Bairshil</p>
                  <p className="text-sm text-muted-foreground">
                    {value.address}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Delgerengvi hayg
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Cleaning Fee price
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {value.cleaningFee}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Tvreesiin vne
                  </p>
                  <p className="text-sm text-muted-foreground">{value.price}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    bedrooms and bathrooms
                  </p>
                  <p className="text-sm text-muted-foreground">
                    bathrooms {value.totalBathrooms}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    bedrooms {value.totalBedrooms}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Guests</p>
                  <p className="text-sm text-muted-foreground">
                    Guests {value.guests}
                  </p>
                </div>
              </div>
            </div>{" "}
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Category</p>
                  <div className="flex flex-row">
                    <p className="text-sm,text-muted-foreground">
                      {value.categoryname}
                    </p>
                    <div className="h-12 w-12">{icons?.icon}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Pictures</p>
                  <div className="flex flex-row">
                    <p className="text-sm,text-muted-foreground">
                      {value.propertyPictures.map((picture) => {
                        console.log(picture);
                        return (
                          <div
                            style={{
                              backgroundImage: `url(${picture})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="h-8 w-7"
                          ></div>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-center"></p>
              <div className="flex justify-center">
                <Button className="w-[200px]" onClick={createProperty}>
                  Submit
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
