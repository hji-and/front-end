import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Child from "./Child";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light")); //prev현재상태
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          height: "100vh",
          padding: "20px",
        }}
      >
        <h1>Current Theme: {theme}</h1>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}
//context생성 -> provider 설정하고 -> usecontext 사용
//실제 쓰는 곳: 로그인 상태 저장, 다크모드/테마, 다국어, 쇼핑몰(장바구니 데이터)
