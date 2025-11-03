import React from "react";

export default function ResponsiveText() {
  return <div className="text-sm md:text-lg lg:text-2xl">반응형 텍스트!</div>;
  //핸드폰 크기, 화면 크기가 md일 때(768이상) 텍스트가 lg, 화면 크기가 lg일 때(1024이상) 텍스트가 2xl
}
