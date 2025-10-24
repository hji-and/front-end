import React from 'react'
import './TodoItem.css'

export default function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete}) {
  // 구조분해할당으로 onUpdate추가 
  const onChangeCheckbox = ()=>{
    onUpdate(id);
  }
  const onClickDelete = ()=>{
    onDelete(id);
  }

  return (
    <div className='TodoItem'>
 
        <div className='checkbox_col'>
            <input type="checkbox" checked={isDone}
            /* 체크했을 때 호출할 함수 ↓ */
            // onChangeCheckbox는 onUpdate를 호출하고 인수는 현재 클릭한 아이템id를 전달
            onChange={onChangeCheckbox}
            />
        </div>

        <div className='title_col'>{content}</div>
        <div className='data_col'>{new Date(createdDate).toLocaleDateString()}</div>
        {/* new Date()로 현재시간 추출, toLocaleDatestring()로 날짜를 현지언어에 맞는 문자열로 표시 */}
        <div className='btn_col'>
            <button onClick={onClickDelete}>삭제</button>
        </div>

    </div>
  )
}
