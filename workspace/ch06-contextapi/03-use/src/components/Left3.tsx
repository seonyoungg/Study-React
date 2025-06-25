import CounterContext from '@/contexts/CounterContext';
import { use, useContext, useEffect } from 'react';

function Left3({ showCounter = true }) {
  useEffect(() => {
    console.log('#### Left3 렌더링.');
  });

  let counterContext = null;

  // 2. Context 사용하기

  if (showCounter) {
    // use를 이용하면 조건부로 컨텍스트 구독 가능
    // 불필요한 리렌더링 방지
    counterContext = use(CounterContext); // 조건문 안에서 사용 가능
    // counterContext = useContext(CounterContext); // 조건문 안에서 사용 불가
  }
  return (
    <div>
      <h3>Left3</h3>
      <span>{counterContext?.count}</span>
    </div>
  );
}

export default Left3;
