import React from "react";
import Headlines from "../Components/HomePage/Headlines";
import HomePageHeader from "../Components/HomePage/HomePageHeader";
import ImageSlider from "../Components/HomePage/ImageSlider";
import VideoSlide from "../Components/HomePage/VideoSlide";

export default function Home() {
  return (
    <div className="">
      <HomePageHeader />
      <div className="w-[90%] m-auto">
        <h1 className="homeTopic">Top Headline</h1>
        <ImageSlider />
        <div className="flex justify-between w-[90vw] lg:w-[80vw] ">
          <h1 className="homeTopic">Headline</h1>
          <h1 className="homeTopic text-blue-800">Most</h1>
        </div>
        <Headlines />
        <div>
          <VideoSlide />
        </div>
      </div>
    </div>
  );
}
