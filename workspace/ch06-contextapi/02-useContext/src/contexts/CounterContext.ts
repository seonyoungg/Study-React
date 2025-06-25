import { createContext } from 'react';

interface CounterContextType {
  count: number;
  countUp: (step: number) => void;
}

// 1. Context 생성
// 초기값 설정 => 값 자체는 의미가 없음 => 변경하는 역할이 CounterContext  => value로 설정
export const CounterContext = createContext<CounterContextType>({
  count: 0,
  countUp: () => {
    console.log('헬롱헬롱');
  },
});
