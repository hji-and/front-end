import { useState, useEffect, useRef } from "react";
// import { BrowserRouter, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  // const contactRef = useRef(null);
  // .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다.
  //
  const scrollToSection = (index) => {
    const sections = [
      heroRef,
      aboutRef,
      resumeRef,
      portfolioRef,
      /*contactRef,*/
    ];
    sections[index]?.current?.scrollIntoView({
      //scrollIntoView: 특정 요소에 따른 스크롤 자동 조정
      behavior: "smooth", //behavior : 스크롤 애니메이션에 대한 정의
      block: "start", //block : 수직 정렬
    });
  };
  //sections 배열: 위에서 정의된 다섯 개의 ref 객체를 순서대로 담고 있습니다.
  //index 매개변수: 이 배열의 순서(인덱스)를 받아 스크롤할 대상을 지정합니다.
  //핵심 동작: 지정된 인덱스의 ref를 찾아 (sections[index]),
  //실제 DOM 요소(?.current)의 상단이 화면 상단에 맞춰 부드럽게(behavior: 'smooth', block: 'start') 보이도록 스크롤합니다.
  //
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.pageYOffset + window.innerHeight / 3;
      //scrollPosition: 스크롤이 감지된 위치
      //window.pageYOffset수직스크롤위치 + (윈도우 높이÷3)화면상단에서 1/3지점이 감지 기준
      sections.forEach((section, index) => {
        const top = section.offsetTop; //현재 순회중인 섹션의 시작
        const bottom = top + section.offsetHeight;
        //감지 위치(scrollPosition)가 현재 순회중인 섹션의 시작과 끝 사이에 있는 경우
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index); //조건이 참이면 해당섹션의 (index)값으로 activeSection상태를 업데이트
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); //스크롤이벤트 소멸시켜 메모리누수방지
  }, []);
  //컴포넌트 화면에 나타난 후, 사용자가 스크롤할 때마다 모든 .section요소를 검사하여
  //화면 상단 1/3지점에 걸쳐있는 섹션이 무엇인지 확인하고,
  // 그 섹션의 인덱스를 activeSection에 상태 저장해
  //이 activeSection상태를 사용해 내비게이션 메뉴 스타일을 동적으로 변경할 수 있다.
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-menu">
            <li
              className={activeSection === 0 ? "active" : ""} //화면이 0번째면 active줌
              onClick={() => scrollToSection(0)}
            >
              Home
            </li>
            <li
              className={activeSection === 1 ? "active" : ""}
              onClick={() => scrollToSection(1)}
            >
              About
            </li>
            <li
              className={activeSection === 2 ? "active" : ""}
              onClick={() => scrollToSection(2)}
            >
              Resume
            </li>
            <li
              className={activeSection === 3 ? "active" : ""}
              onClick={() => scrollToSection(3)}
            >
              Portfolio
            </li>
            {/* <li
              className={activeSection === 4 ? "active" : ""}
              onClick={() => scrollToSection(4)}
            >
              Contact
            </li> */}
          </ul>
        </div>
      </nav>

      <section ref={heroRef} className="section section-hero">
        <div className="section-content">
          <h2 className="fade-in">Portfolio</h2>
          <p className="fade-in-delay">
            안녕하세요, 프로그래머를 지망하는 권혜지입니다.
            <br />
            こんにちは、プログラマーを志望するクオン·ヘジと申します。
          </p>
        </div>
      </section>

      <section ref={aboutRef} className="section section-about">
        <div className="section-content">
          <h2 className="slide-in-left">About</h2>
          <div className="me slide-in-left">
            <div>
              <img
                src="./me.png"
                alt="me"
                style={{ width: "20rem", padding: "0" }}
              />
            </div>
            <div className="mee">
              <ul>Education</ul>
              <li>
                도쿄 KCP일본어학교 어학연수(2016.10-2017.8)
                <br />
                <span>東京KCP日本語学校語学研修</span>
              </li>
              <li>
                숙명여자대학교 공예과, 일본학과(副) 졸업(2019.2)
                <br />
                <span>淑明(スクミョン)女子大学校 工芸科、日本学科(副)卒業</span>
              </li>
              <li>
                ‘생성형 AI활용(스테이블 디퓨전) 모던 웹 실무자 육성'
                이수중(2025.9~2025.12)
                <br />
                <span>
                  '生成型 AI（ステーブルディフュージョン）活用 Modern Web
                  実務者育成課程' 履修中
                </span>
              </li>
              <ul>Skills</ul>
              <li>
                <FaHtml5 style={{ fontSize: "15px", margin: "5px 0 5px" }} />
                <FaCss3Alt style={{ fontSize: "15px", margin: "5px 5px" }} />
                <FaJs style={{ fontSize: "15px", margin: "5px 5px" }} />
                <FaReact style={{ fontSize: "15px", margin: "5px 5px" }} />
              </li>
            </div>
          </div>
        </div>
      </section>

      <section ref={resumeRef} className="section section-resume">
        <div className="section-content">
          <h2 className="slide-in-right">Resume</h2>
          <p className="slide-in-right">
            자기소개서<span>·自己紹介書</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cards">
          <div
            className="card card-fade"
            onClick={() => window.open("./ResumeKo.pdf", "_blank")}
          >
            한국어
          </div>
          <div
            className="card card-fade"
            onClick={() => window.open("./ResumeJa.pdf", "_blank")}
          >
            日本語
          </div>
        </div>
      </section>

      <section ref={portfolioRef} className="section section-portfolio">
        <div className="section-content">
          <h2 className="fade-in">Portfolio</h2>
          <p className="fade-in-delay">작업물들을 소개합니다.</p>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              className="portfolio-swiper"
            >
              <SwiperSlide>
                <div className="portfolio-item">
                  <div
                    className="portfolio-image"
                    // onClick={()=>{window.open(url, '_blank')}}
                  >
                    <a
                      href={"https://html0925.dothome.co.kr/ "}
                      target="_blank"
                      className="project-link"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow"></span>
                      <LuSquareArrowOutUpRight
                        style={{ fontSize: "20px" }}
                      />{" "}
                      Project 1
                    </a>
                  </div>
                  <h3>프로젝트 1</h3>
                  <p>HTML, CSS를 사용한 웹</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">
                    <a
                      href={"https://html0929.dothome.co.kr/  "}
                      target="_blank"
                      className="project-link"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow"></span>
                      <LuSquareArrowOutUpRight
                        style={{ fontSize: "20px" }}
                      />{" "}
                      Project 2
                    </a>
                  </div>
                  <h3>프로젝트 2</h3>
                  <p>HTML, CSS, JavaScript를 사용한 반응형 웹</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">
                    <a href="">
                      <span className="arrow"></span>
                      <LuSquareArrowOutUpRight
                        style={{ fontSize: "20px" }}
                      />{" "}
                      Project 3
                    </a>
                  </div>
                  <h3>프로젝트 3</h3>
                  <p>React와 TypeScript를 사용한 반응형 웹</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">Soon</div>
                  <h3>Team Project</h3>
                  <p>팀프로젝트(예정)</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* <section ref={contactRef} className="section section-contact">
        <div className="section-content">
          <h2 className="zoom-in">Contact Us</h2>
          <p className="zoom-in">
            연락을 주시면 빠른 시일 내에 답변 드리겠습니다.
          </p>
        </div>
      </section> */}
      {/*  */}
    </div>
  );
}
