import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value); //counter읽어오기
  const dispatch = useDispatch();
  //redux의 상태를 변경해 달라는 함수
  return (
    <div className="counter">
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}
