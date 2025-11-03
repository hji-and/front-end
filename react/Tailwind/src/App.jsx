import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import ResponsiveText from "./components/ResponsiveText";
import DarkModeBox from "./components/DarkModeBox";
import ConditionalButton from "./components/ConditionalButton";
export default function App() {
  return (
    <div className="space-y-4 p-6">
      <Button />
      <Card />
      <ResponsiveText />
      <DarkModeBox />
      <ConditionalButton />
    </div>
  );
}
//div 안에 직계 자식요소 사이의 space-y-4 수직간격-4(margin과비슷)
// //
