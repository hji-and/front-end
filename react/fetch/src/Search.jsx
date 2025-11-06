// import React, { useState } from "react";
// // import App from "./App";

// export default function Seach({ data, renderItem }) {
//   const [search, setSearch] = useState(""); //빈칸
//   //useState 리액트훅을 만듦 -> seach 검색단어를 관리
//   const onChangeSearch = (e) => {
//     setSearch(e.target.value); //e.target.value==타이핑하는 글자
//     console.log(e.target.value);
//     //검색폼의 value(타이핑하는 글자) state변수 search에 저장해서 onChangeSearch로 실행
//   };
//   const getSearchResult = () => {
//     return search === ""
//       ? data
//       : data.filter(
//           (user) =>
//             user.name.content.toLowerCase().includes(search.toLowerCase()) ||
//             user.email.content.toLowerCase().includes(search.toLowerCase())
//         );
//     //search === " ?" todo search가 없으면 todo prop 자체를 리턴
//     //있으면 it항목에 search에 저장된 검색키워드(단어)가 포함된 it(레코드).content를 리턴
//     //toLowerCase(입력값을 소문자 변환) 대소문자 구분 없이 검색
//   };

//   const searchResults = getSearchResult();

//   return (
//     <div className="search">
//       <h4>Search</h4>
//       <input
//         className="searchbar"
//         placeholder="검색어를 입력하세요"
//         onChange={onChangeSearch} //onChange 입력필드의 값을 변경할때 발생하는 이벤트
//         //검색 폼의 onChange 이벤트핸들러 onChangeSearch를 만듦
//         value={search}
//       />

//       <div className="list_wrapper">
//         {/* 필터링된 결과를 map으로 반복하며, 부모로부터 받은 renderItem 함수를 사용하여 렌더링합니다. */}
//         {searchResults.map((item) => (
//           <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

// Search.jsx
// import React, { useState } from "react";
// // import App from "./App"; // Search 내에서 App을 import하면 안 됩니다. 순환 참조 오류가 발생합니다.

// // Search 컴포넌트는 검색어 상태만 관리하고, 검색어를 부모(App)에게 전달합니다.
// export default function Search({ onSearchChange }) {
//   const [search, setSearch] = useState("");

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearch(value);
//     // 입력 값이 변경될 때마다 부모 컴포넌트(App)로 검색어를 전달합니다.
//     onSearchChange(value);
//   };

//   return (
//     <div className="search">
//       <h4>Search User</h4>
//       <input
//         className="searchbar"
//         placeholder="이름 또는 이메일 검색"
//         onChange={handleInputChange}
//         value={search}
//       />
//     </div>
//   );
// }

// Search.jsx
import React, { useState } from "react";
// import App from "./App"; // 이 import는 제거했습니다. Search는 App 데이터를 검색하는 데 사용해야 합니다.

// onSearch는 부모로부터 받은 콜백 함수입니다.
export default function Search({ onSearch }) {
  // 사용자가 input에 타이핑하는 내용을 실시간으로 저장하는 상태
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearchClick = () => {
    // 부모 컴포넌트(App)로 현재 input 값을 전달하여 검색을 실행시킵니다.
    onSearch(input);
  };

  // 엔터 키 입력 핸들러
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="search">
      <h4>Search</h4>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          className="searchbar"
          placeholder="검색어를 입력하세요"
          onChange={onChangeInput}
          onKeyDown={handleKeyDown} // 엔터키 이벤트 추가
          value={input}
          style={{ padding: "10px", flexGrow: 1 }}
        />
        {/* 검색 버튼 추가 */}
        <button onClick={handleSearchClick} style={{ padding: "10px 15px" }}>
          검색
        </button>
      </div>

      {/* 
        주의: Search 컴포넌트 내에서 App 컴포넌트를 직접 렌더링하는 것은 구조적으로 맞지 않습니다.
        데이터 렌더링은 App.jsx에서 담당해야 합니다.
      */}
      {/* <div className="list_wrapper">
        {getSearchResult().map((it) => (
            <App key={it.id} {...it} />
        ))}
      </div> */}
    </div>
  );
}
