// useContext로 해보려다 실패

// import React, { createContext, useRef, useState } from "react";

// const TodoContext = createContext();
// const mockTodo = [
//   {
//     id: 0,
//     isDone: false,
//     content: "react 공부",
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "빨래 널기",
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "노래 연습하기",
//     createdDate: new Date().getTime(),
//   },
// ];

// export default function TodoProvider({ children }) {
//   const [todo, setTodo] = useState(mockTodo);
//   const idRef = useRef(3); //생성될 새 번호 관리(3번부터/초기값)

//   const onCreate = (content) => {
//     const newItem = {
//       id: idRef.current,
//       isDone: false,
//       content,
//       createdDate: new Date().getTime(),
//     };
//     setTodo([newItem, ...todo]); //전개연산: 기존 아이템 쌓아두고 새 아이템 얹음(차례대로)
//     idRef.current += 1;
//   };

//   const onUpdate = (targetId) => {
//     //targetId는 클릭된 Todo 고유id로 전달
//     setTodo(
//       todo.map((it) => {
//         // if(it.id===targetId){//순회하면서 기존it에 들어있는 id(it.id)와 targetId(클릭된id)가 같은지 확인, 값이 같다면
//         //   return{...it, //전개연산자(it(객체)안에 있는 각각의 속성을 펼쳐서 자식 컴포넌트(TodoItem)로 전달하는 역할) -> it에 들어있는 기존다른속성(content,date,createdDate)등은 유지
//         //     isDone:!it.isDone}//isDone값은 반전(false->true)하는 업데이트 실행
//         // }else{
//         //   return it;
//         // } //이 식을 한 줄로 줄이먄↓
//         return it.id === targetId ? { ...it, isDone: !it.isDone } : it;
//       })
//     );
//   };

//   const onDelete = (targetId) => {
//     setTodo(todo.filter((it) => it.id !== targetId)); //삭제버튼 누른 id를 제외하고 배열을 만들면 삭제버튼 누른 것 같은 효과
//   };

//   const value = {
//     count,
//     user,
//     incrementCount,
//     decrementCount,
//     resetCount,
//     updateUserAge,
//     updateUserName,
//   };

//   return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
// }
// export function useTodoContext() {
//   const context = useContext(TodoContext);
//   if (!context) {
//     throw new Error("useTodoContext must be used within TodoProvider");
//   }
//   return context;
// }
