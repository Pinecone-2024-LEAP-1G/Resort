import { Button } from "@/components/ui/button";
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
import { useState, useRef } from "react";
import { Input } from "../ui/input";
import { PropertyHeader } from "./PropertyHeader";

export const PropertyPhotos = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [step, setStep] = useState<string>("about");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const file = files[0];

    setSelectedFile(file);

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return;
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!inputRef || !inputRef.current) return;

    inputRef.current.click();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files.length) {
      const file = files[0];
      setSelectedFile(file);
    }
  };

  const handleNext = () => {
    setStep("back");
  };

  const handleBack = () => {
    setStep("next");
  };

  if (step === "next") {
    return;
  }

  if (step === "back") {
    return;
  }

  return (
    <Dialog>
      <PropertyHeader />
      <div className="mx-auto mt-8 flex w-[640px] flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-[32px] font-semibold text-[#222222]">
            Add some photos of your castle
          </h3>
          <p className="h-[48px] w-[588px] text-lg font-normal text-[#6a6a6a]">
            You'll need 5 photos to get started. You can add more or make
            changes later.
          </p>
        </div>
        <div className="flex h-[417px] w-[640px] flex-col items-center justify-center rounded-xl border-2 border-dashed bg-[#f7f7f7]">
          <img
            src="https://a0.muscache.com/im/pictures/mediaverse/mys-amenities-n8/original/c83b2a87-3be4-43c9-ad47-12dd2aee24c4.jpeg"
            className="h-[182px] w-[182px]"
          />
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="h-24 w-24 object-cover"
            />
          )}
          <DialogTrigger asChild>
            <Button variant="outline">Add photos</Button>
          </DialogTrigger>
        </div>
      </div>
      <DialogContent className="sm:max-w-[568px]">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle>Upload photos</DialogTitle>
          <DialogDescription>
            {selectedFile
              ? `Selected file: ${selectedFile.name}`
              : "No items selected"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="flex h-[271px] w-[520px] flex-col items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 p-8 text-center"
            >
              <DragPhoto />
              <p className="text-2xl font-semibold">Drag and drop</p>
              <p className="text-sm">or browse for photos</p>
              <Button onClick={handleButtonClick} className="h-12 w-[103.5px]">
                Browse
              </Button>
              <Input
                ref={inputRef}
                type="file"
                className="hidden"
                multiple
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </div>
        <DialogFooter className="justify-between">
          <Button
            disabled={selectedFile === null}
            className="h-[48px] w-[112px] text-base"
          >
            Upload
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
