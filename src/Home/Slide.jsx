import { useEffect, useState } from "react";
import "./Slide.css"

const colors = ["Home-slide-img/home_img_1.jpeg", "Home-slide-img/home_img_2.jpeg", "Home-slide-img/home_img_3.jpeg","Home-slide-img/home_img_4.jpeg","Home-slide-img/home_img_5.jpeg",];
const delay = 2500;

export function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((img, index) => (
          <img
            className="slide"
            key={index}
            src={img}
            
          />
        ))}
      </div>
    </div>
  );
}