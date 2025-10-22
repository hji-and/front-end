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
          email:'public.veloport@gmail.com',
          active:true  
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active:false  
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active:false  
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
        
        //초기화
      setInputs({
          username:'', //다 입력한 후 (네임,이메일) 초기화
          email:''
        });
        nextId.current +=1; //4번이 입력되면 5번을 미리 만들어서 다음에 생성/다음id증가
  };

      const onRemove = id => {//리액트엔 삭제하는 기능 없음-> 삭제 시, 해당 컴포넌트 제외하고 보여주는(불러주는) 식
        //User.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        //=user.id가 id인 것을 제거함
        setUsers(users.filter(user => user.id !== id)); //클릭된 유저 아이디와 같지 않은 아이디만 걸러서 보여줘yo
      };

  const onToggle = id => {
    //(1)setUsers를 호출하여 users 상태를 업데이트 시작
    setUsers(users.map(user => //(2)기존의 users 배열을 순회하여 새로운 배열을 생성
      user.id === id ? {...user, active: !user.active} : user)) //(3)현재 순회중인 user.id가 전달받은 id와 일치하는지 확인 
      //(4)일치(O) - 해당 user객체의 active속성만 토글하여 새로운 객체를 생성 ({}안에 있는 공식)
      //(5)불일치(X) - 해당 user객체는 그대로 반환 (:user)
      // ...user, active : !user.active 
      // 기존의 user를 불러와서, active값을 반대로 뒤집기 true->false //다시 클릭하면 검정색이 되게
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
      
      <UserList2 users={users} onRemove={onRemove} onToggle={onToggle}/>
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
