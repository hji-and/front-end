import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Content from "./sections/Content";
import Contact from "./sections/Contact";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Content />
        <Contact />
      </div>
    </ParallaxProvider>
  );
}

export default App;

/* # 프로덕션 의존성
npm install react react-dom react-scroll react-scroll-parallax

# 개발 의존성
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer @types/react @types/react-dom */
