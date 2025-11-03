import React from "react";
import { useState } from "react";

export default function ConditionalButton() {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`px-4 py-2 rounded ${active ? "bg-green-500" : "bg-gray-400"}`}
      onClick={() => setActive(!active)} // !: 논리 부정 연산자로, true를 false로, false를 true로 바꿉니다.
    >
      상태버튼
    </button>
  );
}
