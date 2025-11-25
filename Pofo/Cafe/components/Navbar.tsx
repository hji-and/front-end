import React, { useState, useEffect } from "react";
import { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  { label: "SHOP", href: "#shop" },
  { label: "ABOUT", href: "#about-intro" },
  { label: "JOURNAL", href: "#journal" },
  { label: "CONTACT", href: "#journal" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Dynamic classes based on state
  const navBackgroundClass =
    isScrolled || isMenuOpen ? "bg-white shadow-sm" : "bg-transparent";
  const textColorClass = isScrolled || isMenuOpen ? "text-black" : "text-white";
  const logoColorClass = isScrolled || isMenuOpen ? "text-black" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4 flex items-center justify-between ${navBackgroundClass}`}
      >
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-widest z-50 transition-colors duration-300 ${logoColorClass}`}
        >
          THE COFFEE ROOST
        </div>

        {/* Hamburger Icon / X Icon */}
        <button
          onClick={toggleMenu}
          className={`z-50 focus:outline-none w-9 h-9 flex flex-col justify-center items-center group`}
          aria-label="Toggle Menu"
        >
          {/* Top Line */}
          <span
            className={`block h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out transform ${
              isScrolled || isMenuOpen ? "bg-black" : "bg-white"
            } ${isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
          ></span>

          {/* Middle Line */}
          <span
            className={`block h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out ${
              isScrolled || isMenuOpen ? "bg-black" : "bg-white"
            } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>

          {/* Bottom Line */}
          <span
            className={`block h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out transform ${
              isScrolled || isMenuOpen ? "bg-black" : "bg-white"
            } ${isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
          ></span>
        </button>

        {/* Side Menu Overlay */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-40 flex flex-col justify-center items-center ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-8 text-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-3xl md:text-4xl font-light text-gray-800 hover:text-gray-500 transition-colors duration-300 transform hover:scale-105"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-10 text-xs text-gray-400">
            &copy; 2025 THE COFFEE ROOST.
          </div>
        </div>

        {/* Backdrop for menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-500"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};
