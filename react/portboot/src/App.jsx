import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // useEffect(()=>{},[]); 컴포넌트가 처음 화면에 나타날 때 한 번 실행되는 코드
  useEffect(() => {
    //mount = 처음 렌더링될 때
    const handleScroll = () => {
      document.querySelectorAll(".slideanim").forEach((el) => {
        //.slideanim의 클래스요소들 선택
        const pos = el.getBoundingClientRect().top; //pos = 요소의 상단으로부터 거리(px) 구함. 요소가 현재 뷰포트의 어디쯤 있는지를 알 수 있음
        //getBoundingClientRect = offset().top(상단을 기준으로 test 엘리먼트 요소가 위치한 거리를 절대좌표로 반환)과 비슷, 최상단이 아닌 스크롤 내린 상태에서 상단 위치를 기준으로 반환
        const winHeight = window.innerHeight; //브라우저 높이
        if (pos < winHeight - 100) {
          //요소의 위치가 화면 하단100px 위에 도달하면 실행(스크롤 내려서 해당 요소가 화면 내에 들어오면)
          el.classList.add("slide");
        } //애니메이션 시작
      });
    };
    window.addEventListener("scroll", handleScroll); //클린업, 컴포넌트가 사라질 때 스크롤이벤트 제거(메모리 누수 방지)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
