import React, { useRef, useReducer } from 'react'
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

//useReducer란?
//리액트에서 간단한 상태관리는 useState
//useReducer 복잡한 상태 관리용 리액트 훅. 장점:코드구조가 명확해 가독성이 좋고, 확장및유지보수가 쉽다. 단점:코드가 약간 길어짐

//const [state,dispatch] = useReducer(reducer, initialstate);
//state: 현재 상태값(예:todo폴더>useState의todo)
//dispatch: 상태변경명령(액션)을 보낼 함수 / 상태 변경 "명령(action)"을 보냄
//reducer: 상태를 실제로 변경하는 로직함수 / 상태 변경로직을 한 곳에 모은 함수
//initialstate: 초기(상태)값

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

  //상태변화로직
  function reducer(state,action){
    switch(action.type){
      case "CREATE":
        return [action.newItem,...state]; 
      case "UPDATE":
        return state.map((it)=>
          it.id === action.targetId ? {...it, isDone : !it.isDone} : it)
      case "DELETE":
        return state.filter((it) => it.id !== action.targetId);  
      default:
        return state;
    }  
  }
  //reducer = "현재상태 + 명령(action)"을 받아서 새로운 상태(state)를 반환하는 함수  
    //ㄴstate = todo배열
    //ㄴaction = 우리가 dispatch() 보낼 명령객체
  //dispatch가 실행되면 reducer가 호출되어 type:"create"로 분기->return[action.newItem,...state]실행

  //<전체동작> 사용자클릭(입력)-> onCreate/onUpdate/onDelete -> dispatch([type:"..."])-> reducer(state, action)-> 새로운state(todo)-> 컴포넌트 자동랜더링


export default function App() {
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  //todo현재할일목록, dispatch상태변경요청, reducer상태를 실제로 변경할 로직이 있는 함수, mockTodo초기값
  const idRef = useRef(3); 
  

  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem: { //액션
        id:idRef.current,
        content,
        isDone:false,
        createdDate: new Date().getTime(),
      }
    });
    idRef.current += 1; 
  };

  const onUpdate = (targetId) => {
    dispatch({type:"UPDATE",targetId});
    // map((it)=>{
    //   return it.id === targetId ? {...it, isDone : !it.isDone} : it
    // }))
  }
  

  const onDelete = (targetId) => {
    dispatch({type:"DELETE",targetId});
    // setTodo(todo.filter((it) => it.id !== targetId)) 
  }


  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    
    </div>
  )
}
