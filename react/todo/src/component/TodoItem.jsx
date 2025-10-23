import React from 'react'
import './TodoItem.css'

export default function TodoItem({id, content, isDone, createdDate}) {
    //it 체크박스에ㅣ 씀
  return (
    <div className='TodoItem'>
 
        <div className='checkbox_col'>
            <input type="checkbox" checked={isDone}/>
        </div>

        <div className='title_col'>{content}</div>
        <div className='data_col'>{new Date(createdDate).toLocaleDateString()}</div>
        {/* new Date()로 현재시간 추출, toLocaleDatestring()로 날짜를 현지언어에 맞는 문자열로 표시 */}
        <div className='btn_col'>
            <button>삭제</button>
        </div>

    </div>
  )
}
