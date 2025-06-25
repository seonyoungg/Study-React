import { useState } from 'react';

function PageState() {
  const [state, setState] = useState('초기값');

  function handleButtonClick(initialValue: string) {
    setState(initialValue);
  }

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => handleButtonClick('바뀌는값')}>버튼 클릭</button>
    </>
  );
}

export default PageState;
