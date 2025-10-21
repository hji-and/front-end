import React, { useRef, useState } from 'react'

export default function InputSample2() {

const[inputs, setInputs] = useState({
    name:'', 
    nickname:'',
})
    
    // **useRef**
    const nameInput = useRef(); //특정 Dom(태그)를 선택

const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출 
    
        const onChange = (e) => {
        const{value, name} = e.target; //e.target에서 name(name, nickname)과 value를 추출
        setInputs({
            ...inputs,      //기존의 input 객체를 복사한 뒤 
            [name] : value //name키(nickname)를 가지고 값을 value로 설정
        });
        };

        const onReset = () => {
        setInputs({name:'', nickname:''});
        
        //useRef를 사용하여 ref객체를 만들고, 이 객체를 우리가 선택하고 싶은 
        //Dom(첫번째input창)에 ref값으로 설정
        //그러면 .current값은 우리가 원하는 dom을 가리키게 된다
        nameInput.current.focus();
        };
    
  
    //리액트에서 객체를 업데이트하게 될 때 기존 객체를 직접 수정하면 안 되고,
    //새로운 객체를 만들어서, 새 객체에 변화를 주어야 한다.
    // => 값을 변경할 때, 상태를 직접 변경하는 것이 아닌 상태변경 함수에 값을 전달하는 방식으로 변경한다. 
    //예시) const addCount = () => {setNumber(number + 1);	//number++ 같이 상태를 직접변경하면 안된다.
  


return (
    <div>
        {/* placeholder-데이터 로딩 중이거나 콘텐츠가 표시되기 전에 사용자에게 보여주는 시각적인 요소 */}
        <input name="name" placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
        <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name}({nickname})
        </div>
    </div>
  )
}
