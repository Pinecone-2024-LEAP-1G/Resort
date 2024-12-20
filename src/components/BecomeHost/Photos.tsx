import { useState, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DragPhoto } from "../icons/DragPhoto";
import Image from "next/image";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyClick } from "@/app/become-host/page";

export const Photos = ({ handleBack, handleNext, value }: PropertyClick) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [, setUploadedImageUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);

    const validFiles = newFiles.filter((file) =>
      file.type.startsWith("image/"),
    );

    if (validFiles.length + selectedFiles.length > 5) {
      alert("Та зөвхөн 5 хүртэлх зураг сонгох боломжтой");
      return;
    }

    setSelectedFiles((prev) => [...prev, ...validFiles]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    if (!files) return;

    const newFiles = Array.from(files);

    const validFiles = newFiles.filter((file) =>
      file.type.startsWith("image/"),
    );

    if (validFiles.length + selectedFiles.length > 5) {
      alert("Та зөвхөн 5 хүртэлх зураг сонгох боломжтой.");
      return;
    }

    setSelectedFiles((prev) => [...prev, ...validFiles]);
  };

  const handleUploadToCloudinary = async () => {
    if (selectedFiles.length < 5) {
      alert("Байршуулахаасаа өмнө дор хаяж 5 зураг сонгоно уу.");
      return;
    }

    setUploading(true);
    const uploadedUrls: string[] = [];

    try {
      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
        );

        uploadedUrls.push(response.data.secure_url);
        value.propertyPictures.push(response.data.secure_url);
      }
      setUploadedImageUrls(uploadedUrls);

      alert("Зураг амжилттай уншигдаж дууслаа");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Зураг уншихад алдаа гарлаа.");
    } finally {
      setUploading(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Dialog>
        <PropertyHeader />
        <div className="mx-auto mt-8 flex w-[640px] flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-[32px] font-semibold text-[#222222]">
              Газрынхаа ерөнхий үзэмжийг харуулсан зураг оруулна уу
            </h3>
            <p className="h-[48px] w-[588px] text-lg font-normal text-[#6a6a6a]">
              Таньд багадаа 5 зураг хэрэгтэй
            </p>
          </div>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="flex h-[417px] w-[640px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed bg-[#f7f7f7]"
          >
            {selectedFiles.length === 0 && <DragPhoto />}
            {selectedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedFiles.map((file, index) => (
                  <Image
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                ))}
              </div>
            )}
            <p className="text-2xl font-semibold">
              Та зурагаа чирж эсвэл сонгож оруулна уу.
            </p>
            <Button onClick={handleButtonClick} className="h-12 w-[103.5px]">
              Сонгох
            </Button>
            <Input
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              multiple
            />
          </div>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              onClick={handleUploadToCloudinary}
              className="w-full"
            >
              {uploading ? "Хүлээн авч байна..." : "Хүлээн авах"}
            </Button>
          </DialogTrigger>
        </div>
        <div className="mt-12 flex items-center justify-between border-t px-6 py-4">
          <button
            onClick={handleBack}
            aria-label="Go back to the previous step"
            className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
          >
            Буцах
          </button>
          <Button
            disabled={selectedFiles.length < 5 || uploading}
            onClick={handleNext}
            aria-label="Proceed to the next step"
            className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            Үргэлжүүлэх
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
