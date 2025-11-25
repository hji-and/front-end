import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Nav.css";
const navMenus = [
  {
    label: "COFFEE",
    items: ["원두", "로스트", "친환경", "커피프레스", "커피메이커"],
  },
  {
    label: "MENU",
    items: ["에스프레소", "티", "디저트"],
  },
  {
    label: "STORE",
    items: ["매장찾기", "커뮤니티", "가맹관련 FAQ"],
  },
  {
    label: "REWARDS",
    items: ["이벤트·프로모션", "모바일 카드", "리워드 소개", "e-프리퀀시"],
  },
  {
    label: "WHAT'S NEW",
    items: ["뉴스·공지사항", "광고영상", "시즈널 MD", "사회공언"],
  },
]; //각 메뉴는 label(메뉴명), items(하위메뉴 배열)

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollHold = 50;

  useEffect(() => {
    const handleScroll = () => {
      //스크롤 위치가 scrollHold를 초과하면 isScrolled를 true로 설정
      setIsScrolled(window.scrollY > scrollHold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); //컴포넌트 마운트 시 초기 스크롤 위치 확인

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //스크롤 상태에 따라 클래스를 동적으로 적용
  const headerClass = `fix ${isScrolled ? "scrolled" : ""}`;

  //햄버거 메뉴
  // function hamburgerMenu() {
  //   const [isActive, setIsActive] = useState(false);
  //   const handleClick = () => {
  //     setIsActive(!isActive);
  //   };
  //   const hamburger = `hamburger ${isActive ? "is-active" : ""}`;

  return (
    //전체 헤더에 고정 및 스크롤 클래스 적용
    <header id="top" className={headerClass}>
      <div className="container">
        {" "}
        {/* 콘텐츠 중앙 정렬을 위한 컨테이너 */}
        {/* 유틸 바 (로고 + 유틸 메뉴) */}
        <div className="util-bar">
          <a href="#" className="logo">
            <img src="/img/logo1.png" alt="로고" />
            <span className="logo-txt">The Coffee Roost</span>
          </a>
          {/* 햄버거 메뉴 */}
          {/* <div class="row cf">
            <div class="three col">
              <div class={hamburger} id="hamburger-1" onclick={handleClick}>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
          </div> */}

          <ul className="util-menu">
            <li>
              <a href="#">매장찾기</a>
            </li>
            <li>
              <a href="#">가맹신청·문의</a>
            </li>
            <li>
              <a href="#">고객센터</a>
            </li>
            <li>
              <a href="#" className="earth" aria-label="언어 변경"></a>
            </li>
          </ul>
        </div>
        {/* 메인 내비게이션 */}
        <nav className="main-nav">
          <ul>
            {navMenus.map((menu) => (
              <li key={menu.label}>
                <a href="#">{menu.label}</a>
                {/* 하위 메뉴 */}
                <ul>
                  {menu.items.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="shadow"></div>
        </nav>
      </div>
    </header>
  );
}
// }
// export default HamburgerMenu;
