import React, { useEffect, useRef, useState } from "react";
import pakageImage from "./img/pakage.png";

export const ScrollAnimationSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Wait until 30% is visible for a better effect
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about-intro"
      ref={sectionRef}
      className="py-32 bg-stone-100 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Animated Image Section */}
          <div
            className={`flex-1 w-full transform transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[200px] md:-translate-x-[300px]"
            }`}
          >
            <div className="relative shadow-2xl">
              {/* Decorative border frame */}
              <div
                className={`absolute top-4 -left-4 w-full h-full border border-gray-400 z-0 hidden md:block transition-all duration-[2000ms] delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : "opacity-0 -translate-x-10 -translate-y-10"
                }`}
              ></div>

              <img
                src={pakageImage}
                alt="pakage"
                className="relative z-10 w-full h-auto object-cover aspect-[4/5] shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`flex-1 text-left transform transition-all duration-1000 delay-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="space-y-8">
              <div className="inline-block border-b border-black pb-1">
                <span className="text-xs font-bold tracking-[0.25em] text-gray-900 uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-thin text-gray-900 leading-tight">
                Coffee <br />
                <span className="italic font-normal serif">For The Soul</span>
              </h2>

              <p className="text-gray-600 font-light leading-loose text-lg max-w-md border-l-2 border-gray-200 pl-6">
                커피잔에 담긴 최종 결과물이 어떠해야 하는지를 가장 먼저
                생각합니다. “강조하고 싶은 풍미는 무엇인가, 무엇이 느껴져야
                하는가?” 풍부한 경험을 가진 팀에서 각각의 블렌드를 개발하고
                제조합니다.
              </p>

              <div className="pt-4">
                <button className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-gray-600 transition-colors">
                  Read The Journal
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div
        className={`absolute top-0 right-0 w-1/3 h-full bg-white transition-opacity duration-1000 ${
          isVisible ? "opacity-50" : "opacity-0"
        } z-0`}
      ></div>
    </section>
  );
};
