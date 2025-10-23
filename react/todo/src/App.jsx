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

  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo}/> {/* todo(프롭스 == 데이터)내용을 리스트에 추가 */}
    
    </div>
  )
}
