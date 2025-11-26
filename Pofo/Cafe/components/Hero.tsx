import React, { useState, useEffect, useCallback } from "react";
import slide1 from "./img/slide1-1.png";
import slide2 from "./img/slide2-1.png";
import slide3 from "./img/slide3.png";

const SLIDES = [
  {
    id: 1,
    image: slide1,
    title: "크리스마스 한정 상품",
    subtitle:
      "허브와 베이킹 스파이스 향에 진한 초콜릿 풍미가 \n어우러져 크리스마스의 따뜻한 분위기를 선사합니다.",
  },
  {
    id: 2,
    image: slide2,
    title: "리워드 혜택",
    subtitle:
      "회원 가입 후, 카드를 등록하여 리워드 회원이 되면\n 무료 음료쿠폰을 드립니다!",
  },
  {
    id: 3,
    image: slide3,
    title: "PICK Your Favorite",
    subtitle: "다양한 메뉴를 카페에서 즐겨보세요.",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-fit:cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-4 animate-fade-in-up">
                {slide.title}
              </h1>
              <p
                className="text-lg md:text-xl font-thin tracking-wide opacity-90 max-w-lg mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s", whiteSpace: "pre-line" }}
              >
                {slide.subtitle}
              </p>

              <div
                className="mt-10 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#shop"
                  className="inline-block px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors duration-300 focus:outline-none hidden md:block hover:bg-black/20 rounded-full"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors duration-300 focus:outline-none hidden md:block hover:bg-black/20 rounded-full"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
