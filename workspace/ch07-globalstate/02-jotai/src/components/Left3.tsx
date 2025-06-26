import { countAtom, countDownAtom } from '@/jotai/atoms';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

function Left3() {
  useEffect(() => {
    console.log('#### Left3 렌더링.');
  });

  const count = useAtomValue(countAtom);

  const countDown = useAtomValue(countDownAtom);
  console.log(countDown);
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
