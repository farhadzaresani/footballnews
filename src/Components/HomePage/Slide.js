import React from "react";

function Slide({ pic }) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${pic.url})` }}
        className="w-[71vw]  h-[29vw] bg-cover flex items-end justify-center "
      >
        <div className="h-[40%] rounded-lg w-full bg-gradient-to-t from-black text-white">
          <p
            className="text-[1rem] md:text-[2rem] lg:text-[3rem] w-[70%] mx-[3em] mb-[5em]
          "
          >
            {pic.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
