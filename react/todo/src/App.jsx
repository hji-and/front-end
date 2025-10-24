import React, { useRef, useState } from 'react'
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

//목 데이터(임시 데이터)
//기능을 완벽히 구현하지 않은 상태에서 테스트를 목적으로 사용하는 데이터
const mockTodo = [
  {
    id:0,
    isDone:false,
    content:"react 공부",
    createdDate: new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content:"빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content:"노래 연습하기",
    createdDate: new Date().getTime()
  },
]

export default function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3); //생성된 새 번호 관리

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone:false,
      content,
      createdDate: new Date().getTime()
    }
    setTodo([newItem, ...todo]); //전개연산: 기존 아이템 쌓아두고 새 아이템 얹음(차례대로) 
    idRef.current += 1; 
  };

  const onUpdate = (targetId) => {
    //targetId는 클릭된 Todo 고유id로 전달
    setTodo(todo.map((it)=>{
      // if(it.id===targetId){//순회하면서 기존it에 들어있는 id(it.id)와 targetId(클릭된id)가 같은지 확인, 값이 같다면
      //   return{...it, //전개연산자(it(객체)안에 있는 각각의 속성을 펼쳐서 자식 컴포넌트(TodoItem)로 전달하는 역할) -> it에 들어있는 기존다른속성(content,date,createdDate)등은 유지
      //     isDone:!it.isDone}//isDone값은 반전(false->true)하는 업데이트 실행
      // }else{
      //   return it;
      // } //이 식을 한 줄로 줄이먄↓
      return it.id === targetId ? {...it, isDone : !it.isDone} : it
    }))
  }

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId)) //삭제버튼 누른 id를 제외하고 배열을 만들면 삭제버튼 누른 것 같은 효과
  }

  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/> {/* todo(프롭스 == 데이터)내용을 리스트에 추가 */}
    
    </div>
  )
}
