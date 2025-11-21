import React from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app-shell">
      {/* <Nav/> */}
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}
