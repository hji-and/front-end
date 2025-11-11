import React, { useState, useRef } from "react";
import "./TodoEditor.css";

interface TodoEditorProps {
  onCreate: (content: string) => void; //return(반환값)없을 땐 void.
}
//TodoEditor 컴포넌트는 반드시 onCreate란 함수를 props로 받아야하며,
//그 함수는 string 타입의 내용을 받아 실행되고, 반환값은 없다.

export default function TodoEditor({ onCreate }: TodoEditorProps) {
  const [content, setContent] = useState<string>("");
  //useState<string>("") - content라는 상태(state)를 문자열 형태로 생성, 초기값은 빈문자열.
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    //console.log(e.target.value);
    //키보드로 실시간으로 입력사항을 content에 저장
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //TypeScript에서는 e타입 자동추론 못해서 구체적으로 알려줘야 함.
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️ </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          placeholder="새로운 Todo..."
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}
