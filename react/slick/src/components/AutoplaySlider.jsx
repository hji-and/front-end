import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AutoplaySlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500, //슬라이드 1장 넘어가는 속도
    slidesToShow: 1,
    slidesToScroll: 1, //마우스로 스크롤 시 1장씩 넘어감
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, //마우스 갖다댈 시 자동재생 정지
    pauseOnFocus: true, //Tab키 이동해서 슬라이더 안에 포커스 잡히면 정지
    className: "autoplay-slider",
  };

  const slides = [
    { id: 1, text: "Auto 1", image: "/images/car1.jpg" },
    { id: 2, text: "Auto 2", image: "/images/car2.jpg" },
    { id: 3, text: "Auto 3", image: "/images/car3.jpg" },
    { id: 4, text: "Auto 4", image: "/images/car4.jpg" },
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
