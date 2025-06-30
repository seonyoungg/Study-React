import React, { createContext, useState } from 'react';

interface CounterContextType {
  count: number;
  countUp: (step: number) => void;
  reset: () => void;
  countDown: (step: number) => void;
}

// 1. Context 객체 생성
const CounterContext = createContext<CounterContextType>({
  count: 10,
  countUp: () => {},
  reset: () => {},
  countDown: () => {},
});

// 3. Provider 컴포넌트를 만들어서 export
export function CounterProvider({ children }: { children: React.ReactNode }) {
  // 4. 상태 관련 작업을 정의
  const [count, setCount] = useState(0);
  const countUp = (step: number) => {
    setCount(count + step);
  };
  const reset = () => {
    setCount(0);
  };
  const countDown = (step: number) => {
    setCount(count - step);
  };

  const value = { count, countUp, reset, countDown };

  // return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
  // React19 이전에서는 .Provider형태로 사용
  return <CounterContext value={value}>{children}</CounterContext>;
}

export default CounterContext;
