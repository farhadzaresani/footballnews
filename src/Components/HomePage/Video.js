import { PlayCircle } from "iconsax-react";
import React from "react";
import ScrollImageOne from "../../assets/Image/image1.png";
function Video() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${ScrollImageOne})` }}
        className="videoTag"
      >
        <div className="text-white">
          <PlayCircle />
        </div>
      </div>
    </div>
  );
}

export default Video;
