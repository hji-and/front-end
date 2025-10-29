import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* 공통 클래스명을 썼을 경우, 전역상태로 css도 먹음 */}
      </main>
    </div>
  );
}
