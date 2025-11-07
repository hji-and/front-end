import React, { useState } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList({todo, onUpdate, onDelete}) {

  const [search,setSearch] = useState(""); //빈칸
  //useState 리액트훅을 만듦 -> seach 검색단어를 관리
  const onChangeSearch = (e) => {
    setSearch(e.target.value); //e.target.value==타이핑하는 글자
    console.log(e.target.value)
    //검색폼의 value(타이핑하는 글자) state변수 search에 저장해서 onChangeSearch로 실행
  }
  const getSearchResult = ()=>{
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
  //search === " ?" todo search가 없으면 todo prop 자체를 리턴
    //있으면 it항목에 search에 저장된 검색키워드(단어)가 포함된 it(레코드).content를 리턴
      //toLowerCase(입력값을 소문자 변환) 대소문자 구분 없이 검색
  }

  return (
    <div className='TodoList'>
        <h4>Todo List🌱</h4>
        <input 
        className='searchbar' 
        placeholder='검색어를 입력하세요'
        
        onChange={onChangeSearch} //onChange 입력필드의 값을 변경할때 발생하는 이벤트
        //검색 폼의 onChange 이벤트핸들러 onChangeSearch를 만듦
        value={search}
        />
        
        <div className='list_wrapper'>
          {getSearchResult().map((it)=>( //getSearchResult함수 호출해서 결과값을 map으로 반복
               <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/> 
               //...it == 전개연산(Spread Operator)
               //it(객체)안에 있는 각각의 속성을 펼쳐서 자식 컴포넌트(TodoItem)로 전달하는 역할
               //<TodoItem key={it.id} id={it.it} content={it.content} isDone{it.isDone} createdDate{it.createdDate}/>
          ))}
        </div>
    </div>
  )
}
