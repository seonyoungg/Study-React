import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Left3() {
  useEffect(() => {
    console.log('#### Left3 렌더링.');
  });

  // Redux store에서 count값 가져오기
  const count = useSelector((state: { count: number }) => state.count);
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
