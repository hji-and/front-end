import { useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
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

export default function SiteNav() {
  /* `SiteNav` 컴포넌트는 총 **3개의 state**를 사용하여 데스크톱 메가메뉴와 모바일 아코디언 메뉴를 제어합니다.

1. `hoveredItem` - 데스크톱 메가메뉴 제어
2. `isMobileNavOpen` - 모바일 메뉴 열림/닫힘 제어
3. `expandedMobileItem` - 모바일 아코디언 서브메뉴 제어
 */
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); //상태 변수의 타입이 string이거나 null이 될 수 있으며, 초기값은 null
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); //setIsMobileNavOpen 모바일메뉴 열렸는지(true-메뉴열기)/닫혔는지(false-닫기) 상태를 저장
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  ); //expandedMobileItem 모바일메뉴 안의 펼쳐진 서브항목을 관리(아코디언 제어)
  //
  //
  /* **1. 햄버거 버튼 클릭**
```typescript
  const toggleMobileNav = () => {
  setIsMobileNavOpen((prev) => !prev)
  setExpandedMobileItem(null)  // 서브메뉴도 모두 닫음
}
```
- 햄버거 메뉴 버튼을 클릭하면 이전 값의 반대로 토글
- 메뉴를 열 때는 모든 서브메뉴를 닫은 상태로 시작 (`expandedMobileItem = null`) */
  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev); //현재 상태가 true이면 false로 바꾸고, false이면 true로 바꿉니다
    setExpandedMobileItem(null); //null초기화시 모든 서브메뉴 접힘(메뉴 열 때는 모든 서브메뉴를 닫은 상태로 시작)
  };
  //
  //메뉴를 클릭해서 페이지 이동 시 메뉴창(콘테이너) 닫아줌
  const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    //마우스 이벤트 핸들러의 **이벤트 객체에 대한 타입(Type)**을 정의
    const target = event.currentTarget; //클릭된 <a>요소를 가져옴
    if (target.closest(".mobile-nav")) {
      //해당 <a>요소가 .mobile_nav 내부에 있는지 확인
      setIsMobileNavOpen(false); //모바일 메뉴 닫기(메뉴 닫기)
      setExpandedMobileItem(null); //확장된 메뉴상태 초기화(서브메뉴 닫기)
    }
  };

  //
  //+버튼이 label로 열리게끔
  const handleMobileItemToggle = (label: string) => {
    setExpandedMobileItem((prev) => (prev === label ? null : label));
  }; //현재 펼쳐진 항목 다시 클릭하면 null / 다른 항목을 클릭: 해당 항목의l abel로 설정(펼침)
  //
  /* **2. 모바일 메뉴 내 링크 클릭**
```typescript
  const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const target = event.currentTarget
  if (target.closest('.mobile-nav')) {
    setIsMobileNavOpen(false)  // 메뉴 닫기
    setExpandedMobileItem(null)  // 서브메뉴도 닫기
  }
}
```
- 모바일 메뉴 내의 어떤 링크를 클릭해도 메뉴가 자동으로 닫힘
- 사용자가 페이지를 이동했으므로 메뉴를 닫아야 함

### 🔗 사용되는 곳

**1. 햄버거 버튼의 접근성 속성**
```typescript
<button
  type="button"
  className="mobile-nav-toggle"
  aria-expanded={isMobileNavOpen}
  onClick={toggleMobileNav}
>
```
- `aria-expanded` 속성으로 스크린 리더에 메뉴 상태를 알림
- `true`: 메뉴가 열려 있음, `false`: 메뉴가 닫혀 있음 */
  /* #### State 업데이트 시점

**1. 아코디언 버튼 클릭**
```typescript
const handleMobileItemToggle = (label: string) => {
  setExpandedMobileItem((prev) => (prev === label ? null : label))
}
```
- 아코디언 토글 버튼을 클릭하면:
  - **현재 펼쳐진 항목을 다시 클릭**: `null`로 설정 (접힘)
  - **다른 항목 클릭**: 해당 항목의 `label`로 설정 (펼침)
- 한 번에 하나의 서브메뉴만 열릴 수 있음 (아코디언 방식)

**2. 햄버거 메뉴 열 때**
```typescript
const toggleMobileNav = () => {
  setIsMobileNavOpen((prev) => !prev)
  setExpandedMobileItem(null)  // 모든 서브메뉴 닫기
}
```
- 햄버거 메뉴를 열 때마다 모든 서브메뉴를 닫은 상태로 시작

**3. 모바일 메뉴 내 링크 클릭 시**
```typescript
const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const target = event.currentTarget
  if (target.closest('.mobile-nav')) {
    setIsMobileNavOpen(false)
    setExpandedMobileItem(null)  // 모든 서브메뉴 닫기
  }
} */
  //
  return (
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
        /* onMouseLeave - 마우스가 메뉴 영역 밖으로 나가면 메뉴 닫힘
           onblur(키보드가 빠지는 것) - (접근성을 위해)키보드 탐색중 포커스가 다른 요소로 이동해도 닫힘 */
        //null은 어떤 값도 선택되지 않은 상태
        //menu에서 마우스가 벗어나면 상태를 초기화
      >
        <div className="container desktop-nav-container">
          <nav className="site-nav desktop-nav">
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
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={isMobileNavOpen}
            onClick={toggleMobileNav}
          >
            <span className="sr-only">메뉴 열기</span>
            {/* sr-only - 웹접근성(스크린리더 읽어줌) */}
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* Mobile Nav */}
        <nav
          className="mobile-nav"
          data-open={isMobileNavOpen ? "true" : "false"}
          //data-open={true}면 max높이가 640으로 바뀜
        >
          <ul>
            {navItems.map((item, index) => {
              const isExpanded = expandedMobileItem === item.label;
              const panelId = `mobile-sub-nav-${index}`;
              return (
                <li
                  key={item.label}
                  className="mobile-nav-item"
                  data-expanded={isExpanded ? "true" : "false"}
                >
                  <div className="mobile-nav-top">
                    <NavLink
                      to={item.path}
                      end={item.exact}
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      onClick={handleMobileLinkClick}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="mobile-accordion-trigger"
                      aria-expanded={isExpanded} //스크린리더가 메뉴의 확장성을 알려줌
                      aria-controls={panelId} //몇 번이 열렸는지도 알려줌
                      onClick={() => handleMobileItemToggle(item.label)}
                    >
                      <span className="sr-only">
                        {isExpanded
                          ? `${item.label} 메뉴닫기`
                          : `${item.label} 메뉴열기`}
                      </span>
                      <span aria-hidden="true" />
                    </button>
                  </div>
                  <ul
                    id={panelId}
                    className="mobile-sub-nav"
                    data-open={isExpanded ? "true" : "false"}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.to}
                          className="dropdown-link"
                          onClick={handleMobileLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

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
