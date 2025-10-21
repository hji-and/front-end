import React, { useRef, useState } from 'react'
import UserList2 from './UserList2'
import CreateUser from './CreateUser' 

export default function App() {
        //inputs: 사용자 이름과 이메일을 객체형태 관리
  const [inputs,setInputs] = useState({
    username:'',
    email:''
  });
  //구조분해할당
  const {username, email} = inputs; //유저네임,이메일 inputs에가져옴 
  const onChange = (e) => { //onChange: input에 변화가 있을 때 호출
    const{name, value} = e.target; //e.target [name] input의 네임속성에 따라서 username 또는 email키를 동적으로 지정
    setInputs({
      ...inputs,
      [name]:value
    });
  }
    //users-현재까지 등록된 사용자 객체들의 배열관리(초기사용자는 3명)
    const [users, setUsers] = useState( [
        {
          id:1,
          username: 'velopert',
          email:'public.veloport@gmail.com'  
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    const nextId = useRef(4); //새로 생성될 id값을 관리
    const onCreate = () => {
      //나중에 구현할 배열에 항목 추가하는 로직
      const user = {
        id: nextId.current, //useRef값 사용 id부여
        username,
        email
      };

      setUsers([...users,user]); //기존 users 불러오고(복사), 새로 만든 user을 추가

      setInputs({
        username:'', //다 입력한 후 (네임,이메일) 초기화
        email:''
      });
      nextId.current +=1; //4번이 입력되면 5번을 미리 만들어서 다음에 생성/다음id증가
    };
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        // CreateUser에 함수전달 
      />
      <UserList2 users={users}/>
    </div>
  )
}
//  APP(state) -> props(전달) -> CreateUser(input) -> 이벤트발생 -> APP의 setState()호출

// 사용자입력 -> CreateUser(input)에서 onChange 발생 -> APP의 onChange 함수 실행 ->
// -> APP의 state 변경(setinputs) -> 새로운 props가 CreateUser에 전달 -> 화면이 최신상태로 반영 

//개념적으로 컴포넌트는 JavaScript 함수와 유사합니다. 
// “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환합니다.

// 리액트에서는 하나의 컴포넌트에서 다른 컴포넌트로 데이터를 전달할 때 props를 사용합니다(부모 컴포넌트에서 자식 컴포넌트(들)로). 
// Props는 properties를 줄인 말입니다. 