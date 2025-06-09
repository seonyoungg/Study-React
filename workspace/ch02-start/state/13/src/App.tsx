import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 50, y: 150 });
  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div
        className='container'
        onPointerMove={(event) => {
          console.log(event.pageX, event.pageY);

          // 리렌더링이 되지 않음(객체의 속성만 수정)
          // 객체의 속성만 바꾸면 React는 변화라고 인식 못 함
          // position.x = event.pageX;
          // position.y = event.pageY;

          // 리렌더링이 됨(새로운 객체로 생성)
          // 객체 상태를 업데이트할 때는 항상 '새로운 객체를 만들어서' 전달해야 한다

          // const newPosition = {
          //   x: event.pageX,
          //   y: event.pageY,
          // };
          // setPosition(newPosition);

          // 스프레드
          setPosition({ ...position, x: event.pageX, y: event.pageY });
        }}>
        <div className='circle' style={{ pointerEvents: 'none', transform: `translate(${position.x}px, ${position.y}px)` }}></div>
      </div>
    </>
  );
}

export default App;
