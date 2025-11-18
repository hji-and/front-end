import React, { useMemo, useState, useRef, useCallback } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import FixAnimation from "./components/FixAnimation";
import NavigationDots from "./components/NavigationDots";
import Header from "./components/Header";
import OverlayMenu from "./components/OverlayMenu";

const SECTION_CONFIG = [
  { id: "section1", label: "Main", theme: "dark" }, //index:0
  { id: "section2", label: "Our Value", theme: "light" },
  { id: "section3", label: "What we do", theme: "dark" },
  { id: "section4", label: "Nasreport", theme: "light" },
  { id: "section5", label: "Let's be Together", theme: "dark" },
  { id: "section6", label: "Contact", theme: "dark" },
];

const SECTION_COUNT = SECTION_CONFIG.length;

export default function App() {
  // ---OverlayMenu---
  // ---Header---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ---OverlayMenu---
  // ---Header---

  // ---Header---
  const [activeSection, setActiveSection] = useState(0);
  // ---Header---

  // ---FixAnimation---
  const [showIntro, setShowIntro] = useState(true);
  // ---FixAnimation---

  // ---NavigationDots---
  const sections = useMemo(() => SECTION_CONFIG, []); //현재 활성화된 섹션 인덱스(0~5)

  const changeSection = useCallback(
    (next) => {
      if (showIntro || isMenuOpen) {
        return;
      }
      setActiveSection((prev) => {
        const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, next(prev)));
        //wheel을 너무 굴려서 범위를 0~5를 넘지 않게 제한(총 섹션 갯수:6)
        //아래의 handleWheel에다가 추가로 방지한 것!
        return clamped;
      });
    },
    [isMenuOpen, showIntro]
  );
  // ---NavigationDots---

  //---App---
  const fullCoverStyle = useMemo(
    () => ({
      transform: `translateY(-${activeSection * 100}vh)`,
      transition: "transform 1s ease",
    }),
    [activeSection] // [activeSection]이 바뀔 때마다 -100vh(한 섹션의 크기)
  );

  const wheelLock = useRef(false);

  const handleWheel = useCallback((event) => {
    if (wheelLock.current || isMenuOpen || showIntro) {
      // (|| == OR)
      return;
      //wheelLock.current 휠처리 중복 방지 -> 1초간 추가휠 이벤트 금지
      //isMenuOpen메뉴가 열려있을 땐 휠 금지
      //showIntro 인트로 애니메이션중엔 휠 이벤트 무시
    }
    const delta = event.deltaY;
    if (delta === 0) return;
    console.log(
      "마우스 휠 deltaY:",
      delta,
      delta > 0 ? "(아래로 스크롤)" : "(위로 스크롤)"
      //마우스 스크롤 위,아래 내리면 음수,양수로 값이 나옴(-100,100)(밑으로 내려야 양수)
    );
    wheelLock.current = true; //1초동안 휠 금지
    changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1)); //(아래로 내리면 양수)섹션의 값을 하나씩 증가0-1-2-3
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 1000);
  });
  //---App---

  //---Mobiletouch---
  const touchStartY = useRef(null);

  const handleTouchStart = useCallback(
    (event) => {
      if (isMenuOpen || showIntro) return; //메뉴가 열려있을 때나 인트로 중에는 무시
      touchStartY.current = event.touches[0].clientY; //clientY == Y의좌표
      //현재는 첫번째 터치만 처리
    },
    [isMenuOpen, showIntro]
  );
  //실제 움직일 때
  const handleTouchMove = useCallback(
    (event) => {
      if (
        touchStartY.current == null ||
        wheelLock.current ||
        isMenuOpen ||
        showIntro
      )
        return;
      //시작위치가 없거나, 휠잠금상태이거나, 메뉴가 보이거나, 인트로 상태에선 빠져나감

      const currentY = event.touches[0].clientY;
      const delta = touchStartY.current - currentY;
      if (Math.abs(delta) < 50) {
        //abs절대값 / 미미한 동작(delta)은 이벤트가 발생X
        return;
      }
      wheelLock.current = true;
      changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 1000); //올라가는 동안은 터치무브가 안 먹게
      touchStartY.current = null; //다시 한 번 스크롤이 가능하게 풀어줌
    },
    [isMenuOpen, showIntro, changeSection]
  );
  //touchStartY.current = null; 넣어놨지만 한 번 더 안전장치
  const handleTouchEnd = useCallback(() => {
    touchStartY.current = null;
  }, []);
  //---Mobiletouch---

  return (
    <div className={`app-root${isMenuOpen ? " menu-open" : ""}`}>
      <FixAnimation
        visible={showIntro} //visible(true)
        onFinished={() => setShowIntro(false)}
      />
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)} //false, true가 번갈아 들어옴
        isLightBackground={sections[activeSection]?.theme === "light"}
      />
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <NavigationDots
        sections={sections}
        activeIndex={activeSection} //활성화된 섹션값
        onSelect={(index) => changeSection(() => index)}
      />
      <div
        id="fullpage"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="full_cover" style={fullCoverStyle}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </div>
      </div>
    </div>
  );
}
