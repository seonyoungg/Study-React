import Left2 from '@/components/Left2';
import type { HandleProps } from '@/types/HandleProps';
import { useEffect } from 'react';

function Left1({ leftNum }: HandleProps) {
  useEffect(() => {
    console.log('## Left1 렌더링.');
  });
  return (
    <div>
      <h1>Left1</h1>
      <Left2 leftNum={leftNum} />
    </div>
  );
}

export default Left1;
