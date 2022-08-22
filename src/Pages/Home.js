import React from "react";
import HomePageHeader from "../Components/HomePage/HomePageHeader";
import ImageSlider from "../Components/HomePage/ImageSlider";

export default function Home() {
  return (
    <div>
      <HomePageHeader />
      <div className="w-[90%] m-auto">
        <h1 className="homeTopic">Top Headline</h1>
        <ImageSlider />
      </div>
    </div>
  );
}
