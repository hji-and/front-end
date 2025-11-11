import { useState } from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import type { FocusEvent } from "react";
import Home from "./pages/Home";

//타입스크립트 타입정의
type NavItem = {
  label: string;
  path: string;
  exact?: boolean;
  subItems: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  {
    label: "홈",
    path: "/",
    exact: true,
    subItems: [
      { label: "브랜드 소개", to: "/#brand" },
      { label: "오늘의 수프", to: "/#soup" },
      { label: "온라인 주문", to: "/#order" },
      { label: "지점 찾기", to: "/#stores" },
    ],
  },
  {
    label: "메뉴소개",
    path: "/menu",
    subItems: [
      { label: "샌드위치", to: "/menu#sandwich" },
      { label: "랩ㆍ기타", to: "/menu#wrap" },
      { label: "샐러드", to: "/menu#salad" },
      { label: "아침메뉴", to: "/menu#breakfast" },
      { label: "스마일 썹", to: "/menu#smile-sub" },
    ],
  },
  {
    label: "이용방법",
    path: "/how-to-order",
    subItems: [
      { label: "써브웨이 이용방법", to: "/how-to-order#guide" },
      { label: "빵 & 재료 소개", to: "/how-to-order#ingredients" },
      { label: "앱 주문 안내", to: "/how-to-order#app" },
      { label: "단체 주문", to: "/how-to-order#group" },
    ],
  },
  {
    label: "새소식",
    path: "/news",
    subItems: [
      { label: "이벤트 · 프로모션", to: "/news#event" },
      { label: "뉴스 · 공지사항", to: "/news#notice" },
      { label: "광고 영상", to: "/news#media" },
      { label: "브랜드 캠페인", to: "/news#campaign" },
    ],
  },
  {
    label: "가맹점",
    path: "/franchise",
    subItems: [
      { label: "가맹 절차", to: "/franchise#process" },
      { label: "투자 비용", to: "/franchise#investment" },
      { label: "지사 안내", to: "/franchise#branch" },
      { label: "사업 설명회", to: "/franchise#seminar" },
      { label: "FAQ", to: "/franchise#faq" },
    ],
  },
];

export default function App() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-top">
          <div className="container brand-container">
            <div className="brand">
              <span className="brand-primary">Subway</span>
              <span className="brand-secondary">Fresh Choice</span>
            </div>
          </div>
        </div>
        <div
          className="header-nav"
          onMouseLeave={() => setHoveredItem(null)}
          onBlur={(event: FocusEvent<HTMLDivElement>) => {
            //마우스가 떠나거나 포커스가 떠나가면 null
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setHoveredItem(null);
            }
          }}
          //null은 어떤 값도 선택되지 않은 상태
          //menu에서 마우스가 벗어나면 상태를 초기화
        >
          <div className="container">
            <nav className="site-nav">
              <ul className="top-nav">
                {navItems.map(
                  //item에 label을 준다
                  (item) => (
                    <li
                      key={item.label}
                      className="nav-item"
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onFocus={() => setHoveredItem(item.label)}
                    >
                      <NavLink
                        to={item.path}
                        end={item.exact}
                        //url이 path와 완전히 일치해야만 active클래스 적용
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                      >
                        {item.label}
                      </NavLink>
                      {/* NavItem 배열을 기반으로 홈, 메뉴소개, 회사소개...링크를 생성 */}
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="mega-menu" data-open={hoveredItem ? "true" : "false"}>
            <div className="mega-menu-inner">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`mega-column${
                    hoveredItem === item.label ? " mega-column-active" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onFocus={() => setHoveredItem(item.label)} //Tab키(hover와 비슷)
                  //hoveredItem상태가 업데이트됨 -> 서브메뉴(mega-menu)열림
                >
                  <span className="mega-heading">{item.label}</span>
                  {/* 큰 메뉴 '홈', 서브메뉴에도 '홈'이 또 있는 거 */}
                  <ul>
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link to={subItem.to} className="dropdown-link">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
