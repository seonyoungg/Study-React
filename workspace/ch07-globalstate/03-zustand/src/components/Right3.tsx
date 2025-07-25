import { useCounterStore } from '@/zustand/counter';
import { useEffect } from 'react';

function Right3() {
  useEffect(() => {
    console.log('#### Right3 렌더링.');
  });

  // count를 사용하지 않더라도 counterStore의 모든 상태가 자동으로 구독되므로 count변경 시 리렌더링
  // const { countUp, countDown, countReset } = useCounterStore();

  // 렌더링  최적화를 위ㅏ해서 필요한 상태만 구독
  const countDown = useCounterStore((state) => state.countDown);
  const countUp = useCounterStore((state) => state.countUp);
  const countReset = useCounterStore((state) => state.countReset);
  const getCount = useCounterStore((state) => state.getCount);
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => countReset()}>Reset</button>
      <button onClick={() => countUp(1)}>+1</button>
      <button onClick={() => console.log(getCount())}>count값 확인</button>
    </div>
  );
}

export default Right3;
