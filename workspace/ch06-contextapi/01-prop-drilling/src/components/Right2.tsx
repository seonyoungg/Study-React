import Right3 from '@/components/Right3';
import type { CountProps } from '@/types/HandleProps';
import { useEffect } from 'react';

function Right2({ handleCountUp }: CountProps) {
  useEffect(() => {
    console.log('### Right2 렌더링.');
  });
  return (
    <div>
      <h2>Righ t2</h2>
      <Right3 handleCountUp={handleCountUp} />
    </div>
  );
}

export default Right2;
