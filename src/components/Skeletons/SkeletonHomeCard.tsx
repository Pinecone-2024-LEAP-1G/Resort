import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

export const SkeletonHomeCard = () => {
  return (
    <div className="w-full cursor-pointer rounded-xl bg-transparent shadow-lg transition-shadow duration-200">
      <Carousel className="w-full rounded-xl">
        <CarouselContent>
          <CarouselItem>
            <Skeleton className="aspect-[20/19] rounded-t-xl" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col gap-2 px-5 py-4">
        <div className="mt-4 md:grid-cols-2">
          <Skeleton className="h-9 w-full" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-[50px]" />
          <Skeleton className="h-5 w-[50px]" />
        </div>
      </div>
    </div>
  );
};
