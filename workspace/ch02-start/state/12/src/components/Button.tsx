import { useState } from "react";

function Button(){

  const [count, setCount] = useState(0);

  return(
    <>
      <p>{count}</p>
      <button onClick={()=>{
        console.log('클릭 핸들러 시작', count);

        // setter 함수가 호출되는 즉시 리렌더링이 되지 않고 성능 최적화를 위해 모아 두었다가 한번에 반영(배치)
        // setCount(count+1); // 0 + 1
        // setCount(count+1); // 0 + 1
        // setCount(count+1); // 0 + 1

        // 콜백 함수의 리턴값을 저장해두었다가 다음에 호출되는 콜백 함수의 인자로 전달됨
        setCount(num=>num+1); // 0 + 1
        console.log(count);

        setCount(num=>num+1); // 1 + 1
        console.log(count);
        
        setCount(num=>num+1); // 2 + 1
        console.log(count);

        console.log('클릭 핸들러 종료', count);
        }}>+3
      </button>
    </>
  )
}

export default Button;