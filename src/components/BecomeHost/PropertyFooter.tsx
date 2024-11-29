import { Button } from "../ui/button";

export const PropertyFooter = () => {
  const handleNext = () => {};

  const handleBack = () => {};
  return (
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
  );
};
