import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null); //작은 창고 역할
//App -> Parent -> Child -> Button 순서로 전달
//중간 컴포넌트들은 쓸데없이 props를 계속 전달해야 함-> props의 drilling 문제
//createContext 사용하면 App -> (Context) -> Button으로 중간단계를 건너뛰고 원하는 컴포넌트에 데이터 사용
