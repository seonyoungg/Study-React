import type { HandleProps } from '@/types/HandleProps';
import { useEffect } from 'react';

function Left3({ leftNum }: HandleProps) {
  useEffect(() => {
    console.log('#### Left3 렌더링.');
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{leftNum}</span>
    </div>
  );
}

export default Left3;
