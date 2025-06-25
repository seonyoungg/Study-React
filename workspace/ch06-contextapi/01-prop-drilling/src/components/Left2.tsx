import Left3 from '@/components/Left3';
import type { HandleProps } from '@/types/HandleProps';
import { useEffect } from 'react';

function Left2({ leftNum }: HandleProps) {
  useEffect(() => {
    console.log('### Left2 렌더링.');
  });
  return (
    <div>
      <h2>Left2</h2>
      <Left3 leftNum={leftNum} />
    </div>
  );
}

export default Left2;
