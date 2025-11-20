import { useState } from "react";
import type { FocusEvent } from "react";
import { Link, NavLink } from "react-router-dom";

//타입스크립트 타입정의
type NavItem = {
  label: string;
  path: string;
  exact?: boolean;
  subItems: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    path: "/",
    exact: true,
    subItems: [
      { label: "About", to: "/#brand" },
      { label: "Our Ways", to: "/#soup" },
      { label: "Our Product", to: "/#order" },
      { label: "Our Mission", to: "/#stores" },
    ],
  },
  {
    label: "Shop",
    path: "/menu",
    subItems: [
      { label: "New", to: "/menu#sandwich" },
      { label: "Leaf Tea", to: "/menu#wrap" },
      { label: "Teabag", to: "/menu#salad" },
      { label: "Matcha", to: "/menu#breakfast" },
      { label: "Limited", to: "/menu#smile-sub" },
    ],
  },
  {
    label: "Teaware",
    path: "/how-to-order",
    subItems: [
      { label: "Teacup", to: "/how-to-order#guide" },
      { label: "Teapot", to: "/how-to-order#ingredients" },
      { label: "Gaiwan", to: "/how-to-order#app" },
      { label: "Tea Utensils", to: "/how-to-order#group" },
    ],
  },
  {
    label: "Community",
    path: "/news",
    subItems: [
      { label: "Event", to: "/news#event" },
      { label: "Notice", to: "/news#notice" },
      { label: "Media", to: "/news#media" },
      { label: "Campaign", to: "/news#campaign" },
    ],
  },
  {
    label: "Tearoom",
    path: "/franchise",
    subItems: [
      { label: "Sinsa Tearoom", to: "/franchise#process" },
      { label: "Reservation", to: "/franchise#investment" },
      { label: "Review", to: "/franchise#branch" },
      { label: "Special Order", to: "/franchise#seminar" },
      { label: "FAQ", to: "/franchise#faq" },
    ],
  },
];

export default function SiteNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container brand-container">
          <div className="brand">
            <img
              src="./tea-img/logo.png"
              alt="logo"
              style={{
                width: "3.5rem",
                zIndex: "99",
                paddingBottom: "-10px",
                margin: "0 auto",
              }}
            />
            <span className="brand-secondary">M&T</span>
            {/* <span className="brand-primary">Subway</span>
             */}
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
        /* onMouseLeave - 마우스가 메뉴 영역 밖으로 나가면 메뉴 닫힘
           onblur(키보드가 빠지는 것) - (접근성을 위해)키보드 탐색중 포커스가 다른 요소로 이동해도 닫힘 */
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
        {/* [data-open='true']상태 시 mega-menu가 표시 */}
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
  );
}
