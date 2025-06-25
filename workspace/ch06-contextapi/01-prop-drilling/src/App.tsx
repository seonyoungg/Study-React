import { useEffect, useState } from 'react';
import Left1 from '@/components/Left1';
import Right1 from '@/components/Right1';
import './App.css';

function App() {
  const [leftNum, setLeftNum] = useState(0);

  const handleCountUp = (step: number) => {
    setLeftNum(leftNum + step);
  };

  useEffect(() => {
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>01 Prop Drilling</h1>
      <div id='container'>
        <h1>App</h1>
        <div id='grid'>
          <Left1 leftNum={leftNum} />
          <Right1 handleCountUp={handleCountUp} />
        </div>
      </div>
    </>
  );
}

export default App;
