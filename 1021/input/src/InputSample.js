import React, { useState } from 'react'

export default function InputSample() {
    
    const[text, setText] = useState(''); 
    //useState('')초기값:없음
    //text 현재값
    //setText-text값을 변경할 수 있다

    //e.target 현재 이벤트가 발생하는 Dom(input)
    //e.target.value input창에 써지는 글씨값을 받아옴
    const onChange = (e) => { //e 이벤트객체 => 파라미터(매개변수랑 비슷) 받아옴
        setText(e.target.value);
    };
    const onReset = () => {
        setText(''); //text는 지워짐
    };
    //e.target.value를 조사하면 현재 input의 value값을 알 수 있다.
  return (
    <div>
        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값 : {text} </b>
        </div>
    </div>
  )
}
