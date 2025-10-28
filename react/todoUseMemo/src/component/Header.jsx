import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}
export default React.memo(Header);
//React.memo : 한 번만 로딩되면 더이상 바꿀 필요가 없을 때
