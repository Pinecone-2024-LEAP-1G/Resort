import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropertyClick } from "@/app/become-host/page";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const FinallyButton = ({
  value,
  handleBack,
  handleNext,
  handleChange,
}: PropertyClick) => {
  const router = useRouter();
  const createProperty = async () => {
    await axios
      .post(`http://localhost:3000/api/properties`, {
        address: value.address,
        description: value.description,
        guests: value.guests,
        price: value.price,
        userId: "6743f5e7a24be0fa04784f75",
        categoryId: "673c502a575c6654675aae7e",
        propertyPictures: value.propertyPictures,
        totalBedrooms: value.totalBedrooms,
        totalBathrooms: value.totalBathrooms,
        email: "bvsbvu",
        cleaningFee: value.cleaningFee,
      })
      .then(function (response) {
        if (response.data.message === "success")
          toast.success("Tanii bvrtgel amjilttai vvslee."),
            setTimeout(() => {
              router.push("/");
            }, 4000);
        console.log(response);
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
            <CardDescription>You have 3 unread messages.</CardDescription>
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
                    Baishingiin tsewerlegeeni tulbur
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
                    Baishingiin vne
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
                    Ornii too bolon ugaalgiin uruuniitoo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ugaalgiiin uruuniii too {value.totalBathrooms}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Untalgiin uruuniii too {value.totalBedrooms}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-center"></p>{" "}
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
        {/* <Button
          onClick={handleNext}
          aria-label="Proceed to the next step"
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Submit
        </Button> */}
      </div>
    </div>
  );
};
