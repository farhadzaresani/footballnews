import React from "react";
import Video from "./Video";

function VideoSlide() {
  return (
    <div className="flex my-10 gap-10 overflow-scroll w-[80vw]">
      <Video />
      <Video />
    </div>
  );
}

export default VideoSlide;
