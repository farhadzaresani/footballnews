import React from "react";

function Slide({ pic }) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${pic.url})` }}
        className="singleSlide "
      >
        <div className="caption">
          <p>{pic.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
