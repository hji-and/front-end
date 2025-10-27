import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./pages/Navigation";

export default function App() {
  return (
    // main.jsx에
    /* import { BrowserRouter } from "react-router-dom"; */
    /*<BrowserRouter>
      <App />
    </BrowserRouter>*/
    //해줘야 함
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 주소창에 http://localhost:5174/contact 이동  */}
        </Routes>
      </main>
    </div>
  );
}
