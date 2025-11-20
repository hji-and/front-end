import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FadeSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500, //슬라이드 1장 넘어가는 속도
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear", //사라질 때 속도 '일정하게'
    className: "fade-slider",
  };

  const slides = [
    { id: 1, text: "Fade 1", image: "/images/tree-1.jpg" },
    { id: 2, text: "Fade 2", image: "/images/tree-2.jpg" },
    { id: 3, text: "Fade 3", image: "/images/tree-3.jpg" },
    { id: 4, text: "Fade 4", image: "/images/tree-4.jpg" },
  ];

  return (
    <Slider {...settings}>
      {/* ...전개연산자 */}
      {slides.map((slide) => (
        <div key={slide.id} className="slide">
          <div
            className="slide-content"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>{slide.text}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
}
