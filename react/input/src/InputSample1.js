import React, { useState } from 'react'

export default function InputSample1() {

const[inputs, setInputs] = useState({
    name:'', 
    nickname:'',
})
const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출 
    
    const onChange = (e) => {
        const{value, name} = e.target; //e.target에서 name(name, nickname)과 value를 추출
        setInputs({
            ...inputs,      //기존의 input 객체를 복사한 뒤 
            [name] : value //name키(nickname)를 가지고 값을 value로 설정
        });
  };
    const onReset = () => {
        setInputs({name:'', nickname:''})
  };

return (
    <div>
        {/* placeholder-데이터 로딩 중이거나 콘텐츠가 표시되기 전에 사용자에게 보여주는 시각적인 요소 */}
        <input name="name" placeholder='이름' onChange={onChange} value={name}/>
        <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name}({nickname})
        </div>
    </div>
  )
}
