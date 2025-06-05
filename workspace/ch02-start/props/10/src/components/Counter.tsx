import { useState } from 'react';
import Button from './Button';

// Counter 컴포넌트
function Counter() {
  console.log('\tCounter 호출됨');
  // let count = 0;

  // const state = React.useState(0);
  // const count = state[0];
  // const setCount = state[1];

  const [count, setCount] = useState(0);

  // 카운터 감소
  const handleDown = () => {
    // 데이터 갱신, count 값 감소
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    // 데이터 갱신, count 값 증가
    setCount(count + 1);
  };

  // 카운터 초기화
  const handleReset = (event: React.MouseEvent) => {
    // 데이터 갱신, count 값 초기화
    setCount(0);
  };

  return (
    <div id='counter'>
      <Button type={'submit'} onClick={ handleDown } textColor="#222" color="pink">-_-</Button>
      <Button type={'reset'} onClick={ (event) => handleReset(event) } textColor="#fff" >0_0</Button>
      <Button type={'button'} onClick={ handleUp } textColor="#222" color="skyblue">+_+</Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
