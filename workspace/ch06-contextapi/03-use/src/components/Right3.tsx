import CounterContext from '@/contexts/CounterContext';
import { use, useEffect } from 'react';

function Right3() {
  useEffect(() => {
    console.log('#### Right3 렌더링.');
  });

  // 2. Context 사용하기
  const { count, countUp, reset, countDown } = use(CounterContext);
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <h3 style={{ width: '100%' }}>Right3</h3>
      <button
        onClick={() => {
          countUp(3);
        }}>
        UP
      </button>
      <button
        onClick={() => {
          reset();
        }}>
        Reset
      </button>
      <button
        onClick={() => {
          countDown(1);
        }}
        disabled={count <= 0}>
        Down
      </button>
    </div>
  );
}

export default Right3;
