import Button from '@components/Button';
import counterReducer from '../CounterReducer';
import { useReducer, useState } from 'react';

interface CounterProps {
  children: string;
}

console.log(counterReducer(6, { type: 'DOWN', value: 1 })); // 5
console.log(counterReducer(8, { type: 'UP', value: 2 })); // 10
console.log(counterReducer(3, { type: 'RESET', value: 5 })); // 5

// Counter 컴포넌트
function Counter({ children = '0' }: CounterProps) {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  // const [count, setCount] = useState(initCount);
  const [count, countDispatch] = useReducer(counterReducer, initCount);
  const [step, setStep] = useState(1);

  // 카운터 감소
  // function handleDown() {
  //   // setCount(count - step);
  //   // const newCount = counterReducer(count, { type: 'DOWN', value: step });
  //   // setCount(newCount);
  //   countDispatch({ type: 'DOWN', value: step });
  // }

  // // 카운터 증가
  // function handleUp() {
  //   // setCount(count + step);
  //   // const newCount = counterReducer(count, { type: 'UP', value: step });
  //   // setCount(newCount);
  //   countDispatch({ type: 'UP', value: step });
  // }

  // // 카운터 초기화
  // function handleReset() {
  //   // setCount(initCount);
  //   // const newCount = counterReducer(count, { type: 'RESET', value: step });
  //   // setCount(newCount);

  //   countDispatch({ type: 'RESET', value: step });
  // }

  // 증감값 변경 처리
  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newStep = Number(e.target.value);
    setStep(newStep);
  }

  return (
    <div id='counter'>
      <label htmlFor='step'>증감치</label>
      {/* 제어 컴포넌트 value, onChange 사용 */}
      <input id='step' type='number' value={step} onChange={handleStepChange} />
      <Button
        color='red'
        onClick={() => {
          countDispatch({ type: 'DOWN', value: step });
        }}>
        -_-
      </Button>
      <Button type='reset' onClick={() => countDispatch({ type: 'RESET', value: step })}>
        0_0
      </Button>
      <Button type='submit' color='blue' onClick={() => countDispatch({ type: 'UP', value: step })}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
