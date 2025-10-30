import React from "react";
import { Link } from "react-router-dom";
/*  기본 사용 예
    import { Link } from "react-router-dom";
    <Link to="/about">About</Link>
    URL이 /about일 때 자동으로 active 클래스가 추가됩니다.
    예:
    <a href="/about" class="active">About</a> */
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //isMenuOpen:모바일 메뉴가 열려있는지 여부(true열림/false닫힘)
  //setInMenuOpen: 메뉴 상태를 바꿈

  //nav 항목 목록
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];
  // //id값 받아와서 스크롤
  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  //   setIsMenuOpen(false);
  // };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span className="logo-text">Portfolio</span>
          </div>

          {/* PC nav */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-button ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </Link>
              // <button
              //   key={item.id}
              //   onClick={() => scrollToSection(item.id)}
              //   className={`nav-button ${
              //     activeSection === item.id ? "active" : ""
              //   }`}
              // >
              //   {item.label}
              // </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            {/* true상태가 X상태 / false상태가 FiMenu(≡) */}
          </button>
        </div>

        {/* Mobile nav - useState(true)상태일 때 보여야 함 */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-items">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `mobile-nav-button ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
