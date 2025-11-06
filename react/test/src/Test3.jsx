import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Test3() {
  function Countdown() {
    const [count, setCount] = useState(5);
    const resetPoint = -5; // 멈추는 지점
    const resetValue = 0; // 돌아갈 값

    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount - 1;
          return nextCount < resetPoint ? resetValue : nextCount;
        });
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    return <div>{count}</div>;
  }
  return <Countdown />;
}
