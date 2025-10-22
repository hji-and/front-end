import React, { useState, useRef, useEffect } from 'react'
import './Slide.css';

const slideData = [{
    img: 'https://picsum.photos/400/400?randam=1',
    text: '민생회복\n소비쿠폰\n사용 가능합니다',
  },
  {
    img: 'https://picsum.photos/400/400?randam=2',
    text: '민생회복\n소비쿠폰\n사용 가능합니다',
  },
  {
    img: 'https://picsum.photos/400/400?randam=3',
    text: '민생회복\n소비쿠폰\n사용 가능합니다', //개행문자(줄바꿈 문자) \n
  },]


export default function Slide() {
    const [current, setCurrent] = useState(0); //현재 보여지는 슬라이드 인덱스(current)
    const [isPlaying, setIsPlaying] = useState(true); //자동슬라이드 재생여부(isPlaying)
    const intervalRef = useRef(null); //SetInterval을 참조하기 위해 intervalRef 사용(나중에 멈추기 위해서)
    
    //자동슬라이드
    useEffect(() => {
        if(isPlaying){
            intervalRef.current = setInterval(()=>{
                setCurrent(prev => (prev+1) % slideData.length);
                //setCurrent(Prev=> (prev+1) % slideData.length) 마지막 슬라이드 다음엔 첫 슬라이드로 돌아가게 처리
            },3000); //isPlaying이 true일 때 3초마다 슬라이드 변경
        }
        return () => clearInterval(intervalRef.current)
    },[isPlaying])
    //cleanUp함수에서 clearInterval로 이전interval 제거 
    //이게 중요한 이유-> isPlaying 상태가 바뀔 때마다 기존interval 지우고 새interval 생성 


    // 수동슬라이드 전환
    const goToSlide = (index) => {
        setCurrent(index); //pager를 누르면 인덱스 값 전달->goToSlide가 작동
    }

    //재생&정지 토글
    const togglePlay = () => {
        setIsPlaying(!isPlaying); 
        // 일시정지 버튼을 누르면 isPlaying 상대를 반전(!)
        //useEffect가 다시 실행되어 interval 생성, 삭제 
    }


  return (
    //현재인덱스(index === current)일 때만 active클래스가 붙음
    //css .slide.active만 보이게 코딩하고 나머지 숨김
    <div className='slide-area'>
        {slideData.map((slide, index)=>(
            <div key={index} className={`slide ${index === current ? 'active':''}`}>  {/* 현재index번호가 활성화면 active, 아니면 ''(공란) */}
                <img src={slide.img}/>
                <div className='slide-text'>

                    <h2>
                        {slide.text.split('\n').map((line,i)=><span key={i}>{line}<br/></span>)}
                    </h2>

                </div>
            </div>
        ))};
            {/* 백틱에 감싸진 템플릿 리터럴 $(Jquery아님, Javascript의 변수나 표현식을 문자열 안에 삽입) */}
            {/*
                slide.text.split('\n') 3개의 배열로 쪼개서 map돌리고 br줌
                 slide.text[0] = '민생회복' 
                 slide.text[1] = '소비쿠폰' 
                 slide.text[2] = '사용 가능합니다' 
            */}

        <div className='pager'>
             {slideData.map((_,idx)=>( //slideData에서 가져올 컴포넌트가 없으면 _(언더바)
                <button
                    key={idx} //키값 디폴트=인덱스번호
                    className={`pager-dot ${idx === current ? 'active':''}`}
                    onClick={()=>goToSlide(idx)}
                ></button>
             ))}
            <button className='stop-btn' onClick={togglePlay}>
                {isPlaying ? '⏸':'▶'}
            </button>

        </div>        

    </div>
  )
}
