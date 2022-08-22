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
  const [active, setActive] = useState(1);

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const circleOne = () => {
    let elementWidth = ref.current.offsetWidth;
    console.log(elementWidth);
    if (active === 2) {
      scroll(-elementWidth);
      setActive(1);
    } else if (active === 3) {
      scroll(-elementWidth * 2);
      setActive(1);
    }
  };
  const circleTwo = () => {
    let elementWidth = ref.current.offsetWidth;
    if (active === 1) {
      scroll(+elementWidth);
      setActive(2);
    } else if (active === 3) {
      scroll(-elementWidth);
      setActive(2);
    }
  };
  const circleThree = () => {
    let elementWidth = ref.current.offsetWidth;
    if (active === 1) {
      scroll(+elementWidth * 2);
      setActive(3);
    } else if (active === 2) {
      scroll(+elementWidth);
      setActive(3);
    }
  };

  return (
    <div className="sliderParent">
      <div ref={ref} className=" slider ">
        {images.map((pic, i) => {
          return <Slide key={i} pic={pic} />;
        })}
      </div>
      <div className="flex space-x-2">
        <div
          onClick={() => circleOne()}
          className={`sliderCircle ${
            active === 1 ? "bg-red-600" : "bg-slate-600"
          }  `}
        ></div>
        <div
          onClick={() => circleTwo()}
          className={`sliderCircle ${
            active === 2 ? "bg-red-600" : "bg-slate-600"
          }  `}
        ></div>
        <div
          onClick={() => circleThree()}
          className={`sliderCircle ${
            active === 3 ? "bg-red-600" : "bg-slate-600"
          }  `}
        ></div>
      </div>
    </div>
  );
}

export default ImageSlider;
