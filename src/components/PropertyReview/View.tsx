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

type Property = {
  propertyId?: string;
};
export function ReviewProperty({ propertyId }: Property) {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>();
  const { data: session } = useSession();
  if (comment?.length === 0) toast.message("Сэтгэгдэл бичнэ үү");
  const createHostView = async () => {
    try {
      const response = await axios.post("/api/propertyReviews", {
        rating: rating,
        comment: comment,
        propertyId: propertyId,
      });
      if (response) toast.message("Үнэлгээ өгсөн танд баярлалаа");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
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
                              "Үнэлгээ өгөхийн тулд мэйлээрээ нэвтэрч орно уу",
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
            <button
              className="cursor-auto rounded-xl border-2 bg-green-500 px-10 py-3 text-white"
              onClick={createHostView}
            >
              Илгээх
            </button>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
