import React, { useState } from "react";

export default function App() {
  // const [result,setResult] = useState<number>(0);
  // 배열과 객체 예제
  const numbers: number[] = [1, 2, 3, 4, 5]; //숫자타입
  // const numbers = [1, 2, 3, 4, 5];
  const fruits: Array<string> = ["사과", "바나나", "오렌지"]; //문자배열타입(제네릭) Array<type(성격)>
  // const fruits = ["사과", "바나나", "오렌지"];

  //
  //인터페이스 - Type만 상속 받음
  interface Person {
    name: string;
    age: number;
    email?: string; //선택적 속성(선택입력사항)
  }
  //Person 인터페이스를 상속한(타입상속) person1 객체
  const person1: Person = {
    name: "홍길동",
    age: 30,
  };
  const person2: Person = {
    name: "김철수",
    age: 25,
    email: "kim@example.com",
  };

  return (
    <div className="App">
      <header>
        <h1>react TypeScript 예제</h1>

        <div className="container">
          {/* 기본타입 섹션 */}
          <section className="card">
            <h2>1. 기본 타입</h2>
            <div className="content">
              <p>
                <strong>name:</strong> {"TypeScript"}
              </p>
              <p>
                <strong>age:</strong> {13}
              </p>
              <p>
                <strong>isActive:</strong> {true ? "true" : "false"}
                {/*  불필요한 코드 경고 */}
              </p>
            </div>
          </section>
          <section className="card">
            <h2>2. 배열</h2>
            <div className="content">
              <p>
                <strong>숫자배열</strong> [{numbers.join(",")}]
              </p>
              <p>
                <strong>과일배열</strong> [{fruits.join(",")}]
                {/* numbers, fruits 배열을 실행시켜서 객체 사이에 ,를 넣음 */}
              </p>
            </div>
          </section>
          {/* 인터페이스 */}
          <section className="card">
            <h2>3.인터페이스</h2>
            <div className="content">
              <div className="person-card">
                <h3>{person1.name}</h3>
                <p>나이: {person1.age}</p>
                <p>이메일: {person1.email || "없음"}</p>
              </div>
              <div className="person-card">
                <h3>{person2.name}</h3>
                <p>나이: {person2.age}</p>
                <p>이메일: {person2.email || "없음"}</p>
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
