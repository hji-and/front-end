import React, { useState, useRef } from 'react'
import './TodoEditor.css'

export default function TodoEditor({onCreate}) {
    const[content, setContent] = useState(""); //초기화
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value); //setContent(e.target.value) input창에서 변경하는 값 //content에 저장
        console.log(e.target.value);
        // 키보드로 실시간 입력하는 사항을 content에 저장
    };

    const onKeyDown = (e) => {
        if(e.keyCode == 13){ //엔터키(키코드 13) 치면
            onSubmit(); //버튼추가 발생
        }
    }

    const onSubmit = () => {
        if(!content){ // !content == content에 내용이 없으면
            inputRef.current.focus(); // 커서를 깜빡이게 하고
            return; //빠져나옴
        }
        onCreate(content);
        setContent("");//입력(추가) 후 초기화

    }

  return (
    <div className='TodoEditor'>
        <h4>새로운 Todo 작성하기🖍</h4>
        <div className='editor_wrapper'>

            <input placeholder='새로운 Todo...' 
            value={content}
            onChange={onChangeContent}//onChange 입력필드의 값을 변경할때 발생하는 이벤트
            onKeyDown={onKeyDown} //키보드 이벤트: 키가 눌렸을 때 발생(엔터키)
            />
            

            <button onClick={onSubmit}>추가</button>
        </div>
    </div>
  )
}
