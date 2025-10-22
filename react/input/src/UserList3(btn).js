//UserList숨기기/보이기 버튼

import React, { useEffect } from 'react'
import User from './User'

export default function UserList3({users, onRemove, onToggle}) {
  
// useEffect(()=>{},[]);
useEffect(()=>{ //마운트됨
  console.log('컴포넌트가 화면에 나타남');
  return()=>{//언마운트될 때(사라질 때 실행) //return()=>{}; Cleanup함수(소멸함수)
    console.log('컴포넌트가 화면에 사라짐');
  };
},[]);


  return (
    <div>
        {/* <User user={users[0]}/>
        <User user={users[1]}/>
        <User user={users[2]}/> */}
        {users.map(user=>(
            <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/> 
            //Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서, 해당 항목을  
            //고유하게 식별할 수 있는 문자열을 사용하는 것입니다. 
            // 대부분의 경우 데이터의 ID를 key로 사용합니다. ooo.id
        ))}
    </div>
  )
}
