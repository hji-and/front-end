import React,{useEffect} from 'react'

// 클릭하는 버튼은 여기(User.js)에 넣고 삭제하는 데이터는 UserList2.js를 거쳐 App.js에 프롭스로 전달
export default function User({user, onRemove, onToggle}) {

  useEffect(()=>{ 
    console.log('user 값이 설정됨'); //새user.id를 업뎃했을 때 출력(마운트)
    console.log(user);
    return()=>{
      console.log('user가 바뀌기 전'); //삭제btn으로 삭제 시 콘솔에 출력(언마운트) //초록-검정 바뀔 땐 리렌더->마운트, 언마운트 둘 다 출력
      console.log(user);
    };
  },[user]); //[]의존성배열(deps), 뎁스에 특정값 넣어 useEffect


  return (
    <div>
      {/* style은 <>안에만 넣을 수 있음 */}
      <b style={{
      cursor:'pointer',
      color:user.active ? 'green' : 'black' //.active=true면 초록, 없으면 검정
      }} onClick={()=> onToggle(user.id)}>
         {/* 실제 클릭한 이벤트onClick onToggle */}
      {user.username}</b>

    <span>({user.email})</span>
    <button onClick={()=> onRemove(user.id)}>삭제</button>
    </div>
  )
}
