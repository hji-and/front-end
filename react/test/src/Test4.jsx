import React from "react";
import { useCallback } from "react";
// import { useMemo } from "react";
import { useState } from "react";
// import { useContext } from "react";
// import { createContext } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";

export default function Test4() {
  function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
      console.log("클릭됨");
    }, []);
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <Child onClick={handleClick} />
      </div>
    );
  }
  function Child({ onClick }) {
    return <button onClick={onClick}>click</button>;
  }
  return <Parent />;
}

/* 문제7 */
//   function Expensive() {
//     const [number, setNumber] = useState(0);
//     const [toggle, setToggle] = useState(false);

//     const ExpensiveValue = useMemo(() => {
//       console.log("비용이 많이 드는 계산 실행");
//       return number * number;
//     }, [number]);
//     return (
//       <div>
//         <p>{ExpensiveValue}</p>
//         <button onClick={() => setNumber(number + 1)}>증가{number}</button>
//         <button onClick={() => setToggle(!toggle)}>토글</button>
//       </div>
//     );
//   }

//   return <Expensive />;
// }

/* 문제6 */
// export default function Test4() {
//   function DoubleCounter() {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//       setCount((prev) => prev + 1);
//       setCount((prev) => prev + 1);
//     };
//     return (
//       <div>
//         <p>{count}</p>
//         <button onClick={handleClick}>2번증가</button>
//       </div>
//     );
//   }
//   return <DoubleCounter />;
// }

/* 문제5 */
// export default function Test4() {
//     const ThemeContext = createContext('light')
//     function App(){
//         return(
//             <ThemeContext.provider value='dark'>
//                 <Child/>
//             </ThemeContext.provider>
//         )
//     }
//     function Child(){
//         const theme = useContext(ThemeContext)
//         return <div>현재테마:{theme}</div>
//     }
// }

/* 문제4 */
// export default function Test4() {
//   function AutoFocus() {
//     const inputRef = useRef();

//     useEffect(() => {
//       inputRef.current.focus();
//     }, []);
//     return <input ref={inputRef} type="text" placeholder="자동 포커스" />;
//   }
//   return <AutoFocus />;
// }
