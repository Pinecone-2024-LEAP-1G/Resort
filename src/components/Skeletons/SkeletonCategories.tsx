import { Skeleton } from "../ui/skeleton";

export const SkeletonCategories = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-3 p-5">
      <Skeleton className="h-9 w-9"></Skeleton>
      <Skeleton className="h-1 w-9"></Skeleton>
    </div>
  );
};
