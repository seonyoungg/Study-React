import Button from '@components/Button';
import { useReducer, useState } from 'react';

interface CounterProps {
  children: string;
}

interface CounterAction {
  type: 'UP' | 'DOWN' | 'RESET';
  value: number;
}

const reducer = (state: number, action: CounterAction) => {
  let newState = state;
  switch (action.type) {
    case 'UP':
      newState = state + action.value;
      break;
    case 'DOWN':
      newState = state - action.value;
      break;
    case 'RESET':
      newState = action.value;
      break;
  }
  return newState;
};

function Counter2({ children = '0' }: CounterProps) {
  const initCount = Number(children);

  const [step, setStep] = useState(100);
  const [count, dispatch] = useReducer(reducer, initCount);

  return (
    <div id='counter'>
      <label htmlFor='step'>증감치</label>
      {/* 제어 컴포넌트 value, onChange 사용 */}
      <input
        id='step'
        type='number'
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      />
      <Button
        color='red'
        onClick={() => {
          dispatch({ type: 'DOWN', value: step });
        }}>
        -_-
      </Button>
      <Button type='reset' onClick={() => dispatch({ type: 'RESET', value: step })}>
        0_0
      </Button>
      <Button type='submit' color='blue' onClick={() => dispatch({ type: 'UP', value: step })}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter2;
