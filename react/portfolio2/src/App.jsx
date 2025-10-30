import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  const [activeSection, setActiveSection] = useState("home"); //home이 초기값
  //nav.bar 활성화
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]; //5개 sectionId 배열
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            //offsetTop 페이지 맨 위부터 섹션 시작되는 거리, offsetHeight 섹션의 높이
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight //이 범위 안에 스크롤이 있으면 activeSection(Navbar.jsx)
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />

      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* 공통 클래스명을 썼을 경우, 전역상태로 css도 먹음 */}
      </main>
    </div>
  );
}
