import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //Jquery 없이 돌아가는 슬라이드, 스크롤스파이 등
// Font Awesome 4.7
import "font-awesome/css/font-awesome.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
