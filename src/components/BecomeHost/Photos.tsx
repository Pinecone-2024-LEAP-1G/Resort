import { useState, useRef } from "react";
import axios from "axios"; // For making HTTP requests
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DragPhoto } from "../icons/DragPhoto";
import Image from "next/image";
import { PropertyHeader } from "./PropertyHeader";
import { PropertyClick } from "@/app/become-host/page";

export const Photos = ({
  handleBack,
  handleNext,
  value,
  handleChange,
}: PropertyClick) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);

    const validFiles = newFiles.filter((file) =>
      file.type.startsWith("image/"),
    );

    if (validFiles.length + selectedFiles.length > 5) {
      alert("You can only select up to 5 photos.");
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
      alert("You can only select up to 5 photos.");
      return;
    }

    setSelectedFiles((prev) => [...prev, ...validFiles]);
  };

  const handleUploadToCloudinary = async () => {
    if (selectedFiles.length < 5) {
      alert("Please select at least 5 photos before uploading.");
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
      }
      setUploadedImageUrls(uploadedUrls);
      alert("All photos uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images.");
    } finally {
      setUploading(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  console.log(value.propertyPictures, uploadedImageUrls);
  return (
    <Dialog>
      <PropertyHeader />
      <div className="mx-auto mt-8 flex w-[640px] flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-[32px] font-semibold text-[#222222]">
            Add some photos of your property
          </h3>
          <p className="h-[48px] w-[588px] text-lg font-normal text-[#6a6a6a]">
            You will need at least 5 photos to get started.
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
            Drag and drop or browse for photos
          </p>
          <Button onClick={handleButtonClick} className="h-12 w-[103.5px]">
            Browse
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
          <Button variant="outline" className="w-full">
            Review & Upload Photos
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[568px]">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle>Upload photos</DialogTitle>
          <DialogDescription>
            {selectedFiles.length} file(s) selected. You need at least 5.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-between">
          <Button
            onClick={() => (
              handleUploadToCloudinary(),
              handleChange({
                target: { name: "propertyPictures", value: uploadedImageUrls },
              })
            )}
            disabled={selectedFiles.length < 5 || uploading}
            className="h-[48px] w-[112px] text-base"
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
      <div className="mt-12 flex items-center justify-between border-t px-6 py-4">
        <button
          onClick={handleBack}
          aria-label="Go back to the previous step"
          className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
        >
          Back
        </button>
        <Button
          // disabled={selectedFiles.length < 1 || uploading}
          onClick={handleNext}
          aria-label="Proceed to the next step"
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Next
        </Button>
      </div>
    </Dialog>
  );
};
