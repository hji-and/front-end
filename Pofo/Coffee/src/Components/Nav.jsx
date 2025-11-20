import React from "react";

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
];
//각 메뉴는 label(메뉴명), items(하위메뉴 배열)
export default function Nav() {
  return (
    <header>
      <div className="fix_top">
        <p>The Coffee Roost</p>

        <a href="#" className="logo">
          <img src="/img/logo1.png" alt="로고" />
        </a>
        <ul>
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
      <nav>
        <ul>
          {navMenus.map((menu) => (
            <li key={menu.label}>
              <a href="#">{menu.label}</a>
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
    </header>
  );
}
