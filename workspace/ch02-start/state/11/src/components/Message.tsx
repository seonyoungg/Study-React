import { useState } from "react"

// 모듈 스코프 변수로 지정하면 컴포넌트가 리렌더링 되더라도 값은 유지되지만 모든 Message컴포넌트가 공유하게 됨
// let count = 0;

function Message() {

  // 컴포넌트가 리렌더링 되더라도 이전 상태값이 유지됨
  // 상태값이 바뀌면 화면이 리렌더링 된다.
  const [msg,setMsg] = useState('');
  const [count,setCount] = useState(0);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const inputMsg = event.target.value;
    setMsg(inputMsg);

    setCount(count+1);
    // setCount(prev => prev+1);
  };

  /**
   * 제어컴포넌트
   * - input 요소에 value, onChange 추가
   * - 리액트의 state와 input요소의 value 동기화
   * 
   * 비제어컴포넌트
   * - input 요소에 value, onChange 추가하지 않음
   * - 리액트의 state와 input요소의 value 동기화되지 않을 수 있음음
   */
  return (
    
    <div>
      <input type="text" value={msg} onChange={ handleChange}/>
      <br/>
      <span>입력 메세지: {msg} </span>
      <br/>
      <span>입력 횟수:{count} </span>
    </div>
  )
}

export default Message