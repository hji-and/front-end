import React from 'react'
import User from './User'

export default function UserList2({users}) {
  
  return (
    <div>
        {/* <User user={users[0]}/>
        <User user={users[1]}/>
        <User user={users[2]}/> */}
        {users.map(user=>(
            <User user={user} key={user.id}/> 
            //Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서, 해당 항목을  
            //고유하게 식별할 수 있는 문자열을 사용하는 것입니다. 
            // 대부분의 경우 데이터의 ID를 key로 사용합니다. ooo.id
        ))}
    </div>
  )
}
