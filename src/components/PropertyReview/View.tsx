"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReviewUser } from "./Star";
import { DialogClose } from "@radix-ui/react-dialog";

type Property = {
  propertyId?: string;
  getPropertyById?: () => void;
};
export function ReviewProperty({ propertyId, getPropertyById }: Property) {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>();
  const [show, setShow] = useState(false);
  const { data: session } = useSession();

  const createReview = async () => {
    if (rating === 0 && comment?.length === 0)
      return toast.message("Та үнэлгээ өгөөгүй байна");
    try {
      const response = await axios.post("/api/reviews", {
        rating: rating,
        comment: comment,
        propertyId: propertyId,
      });
      setShow(true);
      setComment("");
      setRating(0);
      getPropertyById();
      if (response.data) toast.message("Үнэлгээ өгсөн танд баярлалаа");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {!show && (
          <div className="flex flex-col">
            <p className="transform animate-moveTrain">😃</p>
            <Button
              className="rounded-lg bg-green-500 p-5 py-2 font-bold text-white"
              variant="outline"
            >
              Үнэлгээ өгөх
            </Button>
          </div>
        )}
      </DialogTrigger>
      <DialogContent>
        <div className="my-2 flex items-center justify-center">
          <Card className="border-none p-7 text-center">
            <CardHeader>
              <CardTitle className="text-2xl">
                Таны оршин суусан газарт өгөх үнэлгээ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row justify-around">
                {stars.map((star, index) => {
                  return (
                    <ReviewUser
                      onClick={() =>
                        !session
                          ? (setRating(0),
                            toast.message(
                              "Үнэлгээ өгөхийн тулд имэйлээрээ нэвтэрч орно уу",
                            ))
                          : setRating(star)
                      }
                      key={index}
                      fill={rating > index ? "gold" : "white"}
                    />
                  );
                })}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-col">
                <Textarea
                  disabled={!session}
                  placeholder=" Сэтгэгдэл"
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </CardFooter>
            <DialogClose>
              {" "}
              <button
                disabled={rating === 0 || comment?.length === 0}
                className="cursor-auto rounded-xl border-2 bg-green-500 px-10 py-3 text-white"
                onClick={createReview}
              >
                Илгээх
              </button>
            </DialogClose>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
