import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideTest() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    className: "test-slider",
  };

  const slides = [
    {
      id: 1,
      title: "포트폴리오",
      text: "지금의 자리에 머물러있지 않고 더 열심히, 쉬지 않고 달려...",
      icon: "",
    },
    {
      id: 2,
      title: "감각적이고 창의적인 신입을 소개합니다.",
      text: "Name ㅇㅇ Age 00 phone 00 Email: 00 ",
      icon: "/images/slide2.jpg",
    },
    {
      id: 3,
      title: "rltnfrh",
      text: "Name ㅇㅇ Age 00 phone 00 Email: 00 ",
      icon: "/images/slide2.jpg",
    },
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
            <h3 className="css-please">{slide.text}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
}
