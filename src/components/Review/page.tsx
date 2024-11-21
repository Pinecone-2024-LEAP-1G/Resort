"use client";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Review = () => {
  return (
    <div className="w-[480px]">
      <div className="flex gap-3">
        <img
          className="bg-cover border rounded-3xl"
          style={{
            backgroundImage: `url("https://media.gettyimages.com/id/1250238624/photo/handsome-young-adult-businessman-with-stubble.jpg?s=612x612&w=gi&k=20&c=H2upefy-mU5MNlNhuXDyTboEmTMycZM-FcK4jYXx2TU=")`,
            width: "50px",
            height: "50px",
          }}
        />
        <div>
          <p className="">Доржоо</p>
          <p className="">1 жилийн өмнө амьдарч байсан</p>
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="flex items-center">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
        </div>
        <p>*</p>
        <p>2 долоо хоногийн өмнө</p>
        <p>*</p>
        <p>1 өдөр хоносон</p>
      </div>
      <div>
        Янзын сайхан цэвэрхэн газар байна лээ. Түрээслэгч нь надтай архи уусан.
        Эелдэг найрсаг сайхан сэтгэлтэй хүн шиг санагдсан.
      </div>
    </div>
  );
};
export default Review;
