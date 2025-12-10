import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slick1() {
  const settings = {
    speed: 600,
    draggable: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: "dots"
  };

  const slides = [
    {
      title: "Gather inspiration",
      text: "사용자와의 모든 접점을 통해 수집한 데이터를 다각도에서 분석하여 사용자와 고객이 원하는 교차점을 발굴해냅니다.",
      svg: "inspiration"
    },
    {
      title: "Generate ideas",
      text: "아이디어에는 제한을 두지 않습니다. 새로운 관점에서 바라보고발견한 가치를 다시 해석하는 과정에서 거침없는 원석의 아이디어들을 얻습니다.",
      svg: "idea"
    },
    {
      title: "Make ideas tangible",
      text: "아이디어들은 점차 형태를 갖추고 생각과 가치들은 구체화되며, 논리적인 흐름을 가지고 체계화 된 컨셉의 형태로 완성됩니다.",
      svg: "tangible"
    },
    {
      title: "Share the story",
      text: "스토리는 컨셉에 생명을 불어 넣습니다. 기술이 아닌, 가치를 전달할 수 있도록 공감할 수 있고 경험할 수 있는 이야기를 선사합니다.",
      svg: "story"
    }
  ];

  return (
    <div id="slick1">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="cf">
            <div className="slide_right">
              <svg xmlns="http://www.w3.org/2000/svg" width="360px" height="360px" viewBox="0 0 360 360">
                <rect x="0" y="0" width="360" height="360" fill="#FE6565"/>
              </svg>
            </div>
            <div className="slide_left">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick1;

