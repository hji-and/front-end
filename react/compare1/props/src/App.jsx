import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  //UserInfo
  const [user, setUser] = useState({ name: "홍길동", age: 25 });
  // 기존의 user 펼쳐놓고 이름 변경
  const updateUserName = (name) => setUser({ ...user, name });
  const updateUserAge = (age) => setUser({ ...user, age });

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="app">
      <Header user={user} />
      <MainContent
        count={count}
        user={user}
        updateUserName={updateUserName}
        updateUserAge={updateUserAge}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
    </div>
  );
}
