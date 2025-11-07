import React, { createContext, useContext, useState } from "react";

//context 생성(props를 관리하는 전역(전체공유) 저장소)
//count와 user를 어디서든 사용할 수 있게 한다.
const AppContext = createContext();

//context Provider 컴포넌트
// //전역 상태를 실제로 담아두는 컴포넌트
export default function AppProvider({ children }) {
  const [count, setCount] = useState(0);
  //UserInfo
  const [user, setUser] = useState({ name: "홍길동", age: 25 });

  //user조작(업데이트)함수 2개
  const updateUserName = (name) => setUser({ ...user, name }); // 기존의 user 펼쳐놓고 이름 변경
  const updateUserAge = (age) => setUser({ ...user, age });

  //카운트조작함수 3개
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  //전역으로 공유할 값들, value객체
  //객체 안에 있는 모든 값을 앱 전체 컴포넌트에서 직접 사용가능
  const value = {
    count,
    user,
    incrementCount,
    decrementCount,
    resetCount,
    updateUserAge,
    updateUserName,
  };

  //provider로 감싸서 value 전달 -> {children} - provider로 감싼 모든 컴포넌트
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom Hook for using context
// // 전역 데이터를 꺼내쓰는 전용 훅 - 어디서든 전역상태를 가져올 수 있음
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
