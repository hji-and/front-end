import React, { useEffect } from "react";

export default function FixAnimation({ visible, onFinished }) {
  useEffect(() => {
    //조건확인
    if (!visible) {
      return;
    }
    //타이머 설정useEfect에 의해 정상동작 - App.jsx에서 visible=true로 넘어오고, 프롭스로 받아서 3.2초 동안 실행
    const timer = window.setTimeout(() => {
      onFinished?.(); //-> 옵셔닝 체이닝으로 안전하게 호출(null값이 있더라도 호출하는 법)
    }, 3200); //3.2초 후에는 onFinished콜백함수(어떤 일이 일어난 후 실행되는 함수./App.jsx) 실행, false를 갖게 되어 종료

    //클린업 함수 - 컴포넌트가 언마운트되거나 의존성이 변경될 때 실행(타이머 취소해 메모리 누수방지)
    return () => window.clearTimeout(timer); //effect재실행(타이머 설정안 함)
  }, [visible, onFinished]); //의존성 배열

  //1번 실행된 이후 더이상 호출 X
  if (!visible) {
    return null;
  }

  return (
    <div id="fix-animation" aria-hidden={!visible}>
      {/* !visible == visible이 false */}
      <h1 className="fix-text">more than expected!</h1>
      <div className="text-blind">
        <div className="blind1" />
        <div className="blind2" />
      </div>

      <div className="circle-ani">
        <div className="circle1" />
        <div className="circle2" />
        <div className="circle3" />
        <div className="circle4" />
      </div>
    </div>
  );
}
