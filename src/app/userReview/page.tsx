"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ReviewUser } from "@/components/UserReview/star";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const Review = () => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>();

  const createHostView = async () => {
    try {
      const response = await axios.post("/api/propertyReviews", {
        rating: rating,
        comment: comment,
      });
      if (response) toast.message("Үнэлгээ өгсөн танд баярлалаа");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-10 flex items-center justify-center">
      <Card className="w-fit p-5 text-center">
        <CardHeader>
          <CardTitle>Таны оршин суусан газарт өгөх үнэлгээ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-around">
            {stars.map((star, index) => {
              return (
                <ReviewUser
                  onClick={() => setRating(star)}
                  key={index}
                  fill={rating > index ? "black" : "white"}
                />
              );
            })}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-5">
            <p>Танд тухайн газар ямар сэтгэгдэл үлдээсэн бэ?</p>
            <Textarea
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
  );
};

export default Review;
