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
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Review = () => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>();
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) return router.push(`${signIn("google")}`);
  const getUser = async () => {
    try {
      const userProperty = await axios.get("/api/");
    } catch (error) {
      console.log(error);
    }
  };
  const createHostView = async () => {
    try {
      const response = await axios.post("/api/reviews", {
        userId: session?.user.id,
        // propertyId: ;
        rating: rating,
        comment: comment,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-fit text-center">
      <Card className="p-5">
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
