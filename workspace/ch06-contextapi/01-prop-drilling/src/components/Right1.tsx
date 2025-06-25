import Right2 from '@/components/Right2';
import type { CountProps } from '@/types/HandleProps';
import { useEffect } from 'react';

function Right1({ handleCountUp }: CountProps) {
  useEffect(() => {
    console.log('## Right1 렌더링.');
  });
  return (
    <div>
      <h1>Right1</h1>
      <Right2 handleCountUp={handleCountUp} />
    </div>
  );
}

export default Right1;
