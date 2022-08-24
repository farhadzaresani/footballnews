import React, { useRef, useState } from "react";
import Slide from "./Slide";
import ScrollImageOne from "../../assets/Image/image1.png";
import ScrollImageTwo from "../../assets/Image/image2.png";
import ScrollImageThree from "../../assets/Image/image3.png";

function ImageSlider() {
  const images = [
    {
      url: ScrollImageOne,
      caption: "Tackling caused Nani to miss the next game",
    },
    {
      url: ScrollImageTwo,
      caption: "Tackling caused Nani to miss the next game",
    },
    {
      url: ScrollImageThree,
      caption: "Tackling caused Nani to miss the next game",
    },
  ];
  const [active, setActive] = useState(0);

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    console.log(ref);
  };

  const circleOne = (currentItem, clickedItem) => {
    let elementWidth = ref.current.offsetWidth;
    console.log(elementWidth);
    const number = clickedItem - currentItem;
    console.log(number);
    scroll(elementWidth * number);
    console.log(elementWidth * number);
    setActive(clickedItem);
    console.log(active);
  };

  return (
    <div className="sliderParent">
      <div ref={ref} className=" slider ">
        {images.map((pic, i) => {
          return <Slide key={i} pic={pic} />;
        })}
      </div>
      <div className="circleParent">
        {images.map((circle, i) => {
          return (
            <div
              onClick={() => circleOne(active, i)}
              className={`sliderCircle ${
                active === i ? "bg-red-600" : "bg-slate-600"
              }  `}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
