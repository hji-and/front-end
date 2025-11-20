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

  const scrollToSection = (index) => {
    const sections = [
      heroRef,
      aboutRef,
      resumeRef,
      portfolioRef,
      /*contactRef,*/
    ];
    sections[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.pageYOffset + window.innerHeight / 3;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); //스크롤이벤트 소멸시켜 메모리누수방지
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-menu">
            <li className={activeSection === 0 ? "active" : ""}>Home</li>
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
                  <div className="portfolio-image">
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
                    <a
                      href="https://web-neon-delta-69.vercel.app/"
                      target="_blank"
                      className="project-link"
                      rel="noopener noreferrer"
                    >
                      <span className="arrow"></span>
                      <LuSquareArrowOutUpRight
                        style={{ fontSize: "20px" }}
                      />{" "}
                      Project 3
                    </a>
                  </div>
                  <h3>프로젝트 3</h3>
                  <p>React(Router)와 TypeScript를 사용한 반응형 웹</p>
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
